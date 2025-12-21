const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const Book = require('./models/Book');
const Message = require('./models/Message');

const app = express();
app.use(express.json());
app.use(cors());

// CONNECT TO MONGODB
mongoose.connect('mongodb://127.0.0.1:27017/reading-tracker-db')
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log(err));

// --- AUTH ---
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.json({ status: "error", message: "User exists" });
        const newUser = await User.create({ name, email, password });
        res.json({ status: "ok", user: newUser });
    } catch (err) { res.json({ status: "error", message: err.message }); }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && user.password === password) {
            return res.json({ status: "ok", user: { id: user._id, name: user.name, email: user.email } });
        }
        return res.json({ status: "error", message: "Invalid Credentials" });
    } catch (err) { res.json({ status: "error", message: err.message }); }
});

// --- LIBRARY & TRACKING ---

// 1. Get All Books
app.get('/library', async (req, res) => {
    try {
        const books = await Book.find({});
        res.json({ status: "ok", books: books });
    } catch (err) { res.json({ status: "error", message: err.message }); }
});

// 2. Get Single Book (For Details Page)
app.get('/get-book/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json({ status: "ok", book: book });
    } catch (err) { res.json({ status: "error", message: err.message }); }
});

// 3. UPDATE BOOK (Rating, Status, Review) - The Critical Feature
app.put('/update-book/:id', async (req, res) => {
    try {
        const { status, rating, review } = req.body;
        // We update the specific book document
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id, 
            { status, rating, review }, 
            { new: true } // Return the updated document
        );
        res.json({ status: "ok", book: updatedBook });
    } catch (err) { res.json({ status: "error", message: err.message }); }
});

// --- CONTACT ---
app.post('/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        await Message.create({ name, email, subject, message });
        res.json({ status: "ok", message: "Message Sent" });
    } catch (err) { res.json({ status: "error", message: err.message }); }
});

app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
});