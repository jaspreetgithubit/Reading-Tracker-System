const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    // Removed "required: true" so we can have Global System Books
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    title: { type: String, required: true },
    author: { type: String, required: true },
    coverUrl: { type: String, default: "https://via.placeholder.com/150" }, 
    
    // NEW FIELD: This holds the actual book text!
    content: { type: String, required: true }, 

    status: { 
        type: String, 
        enum: ['Read', 'Currently Reading', 'Want to Read'], 
        default: 'Want to Read' 
    },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    review: { type: String, default: "" } // User's review (optional now)
});

module.exports = mongoose.model('Book', BookSchema);