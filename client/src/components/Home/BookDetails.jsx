import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import './Home.css'; 
import videoBg from '../../background.mp4';

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [book, setBook] = useState(null);
    
    // Tracker States
    const [status, setStatus] = useState('Want to Read');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    
    // UI State
    const [isSaving, setIsSaving] = useState(false);

    // 1. Fetch Book Data
    useEffect(() => {
        if(!localStorage.getItem("userId")) navigate('/'); // Security

        axios.get(`http://localhost:5000/get-book/${id}`)
            .then(res => {
                if(res.data.status === 'ok') {
                    const b = res.data.book;
                    setBook(b);
                    // Pre-fill form with existing data
                    setStatus(b.status || 'Want to Read');
                    setRating(b.rating || 0);
                    setReview(b.review || '');
                }
            })
            .catch(err => console.log(err));
    }, [id, navigate]);

    // 2. Handle Save (The "Tracking" Feature)
    const handleUpdate = async () => {
        setIsSaving(true);
        try {
            await axios.put(`http://localhost:5000/update-book/${id}`, {
                status, rating, review
            });
            // Update local UI
            setBook({ ...book, status, rating, review });
            alert("Entry Updated Successfully!");
        } catch (err) {
            alert("Failed to update log.");
        }
        setIsSaving(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("userId");
        navigate('/');
    };

    if (!book) return <div style={{color:'white', textAlign:'center', paddingTop:'100px'}}>Loading Dossier...</div>;

    return (
        <div className="home-container">
            <video className="bg-video-fixed" autoPlay muted loop playsInline>
                <source src={videoBg} type="video/mp4" />
            </video>

            {/* NAVBAR */}
            <nav className="navbar">
                <div className="nav-logo">StoryVerse</div>
                <div className="nav-links">
                    <NavLink to="/about" className="nav-shared-style">About</NavLink>
                    <NavLink to="/home" className="nav-shared-style active">My Library</NavLink>
                    <NavLink to="/contact" className="nav-shared-style">Contact</NavLink>
                    <button className="nav-shared-style logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </nav>

            {/* DETAILS DOSSIER */}
            <div className="details-container">
                <div className="dossier-panel">
                    
                    {/* LEFT: Cover & Read Button */}
                    <div className="dossier-left">
                        <img src={book.coverUrl} alt={book.title} className="dossier-cover" />
                        
                        <button className="btn-action btn-read" style={{marginTop:'30px', width:'100%'}} onClick={() => navigate(`/read/${book._id}`)}>
                            📖 Open Book
                        </button>
                    </div>

                    {/* RIGHT: Tracker Controls */}
                    <div className="dossier-right">
                        <h1 className="dossier-title">{book.title}</h1>
                        <h3 className="dossier-author">By {book.author}</h3>

                        {/* TRACKER FORM */}
                        <div className="edit-form-grid" style={{marginTop:'30px'}}>
                            
                            {/* Row 1: Status & Rating */}
                            <div style={{display:'flex', gap:'20px'}}>
                                <div style={{flex:1}}>
                                    <label className="edit-label">Current Status</label>
                                    <select className="edit-select" value={status} onChange={e => setStatus(e.target.value)}>
                                        <option>Want to Read</option>
                                        <option>Currently Reading</option>
                                        <option>Read</option>
                                    </select>
                                </div>
                                <div style={{flex:1}}>
                                    <label className="edit-label">Rating (0-5 Stars)</label>
                                    <input 
                                        type="number" min="0" max="5" 
                                        className="edit-input" 
                                        value={rating} 
                                        onChange={e => setRating(e.target.value)} 
                                    />
                                </div>
                            </div>

                            {/* Row 2: Review */}
                            <div>
                                <label className="edit-label">Personal Review / Notes</label>
                                <textarea 
                                    className="edit-textarea" 
                                    rows="6" 
                                    placeholder="Write your thoughts here..."
                                    value={review} 
                                    onChange={e => setReview(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Save Button */}
                            <div style={{display:'flex', justifyContent:'flex-end'}}>
                                <button className="btn-edit" onClick={handleUpdate}>
                                    {isSaving ? "Saving..." : "Update Log"}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;