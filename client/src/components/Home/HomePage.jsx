import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import './Home.css';
import videoBg from '../../background.mp4';

const HomePage = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    // 1. SECURITY & DATA FETCH
    useEffect(() => {
        // Security Check: Kick out if no user
        if(!localStorage.getItem("userId")) {
            navigate('/');
            return;
        }

        // Fetch Real Books
        axios.get('http://localhost:5000/library')
            .then(res => {
                if(res.data.status === 'ok') {
                    setBooks(res.data.books);
                }
            })
            .catch(err => console.log(err));
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("userId");
        navigate('/');
    };

    // Helper to get the right CSS class for status
    const getStatusClass = (status) => {
        if (!status) return 'status-wishlist';
        const s = status.toLowerCase();
        if (s.includes('reading')) return 'status-reading';
        if (s.includes('read') && !s.includes('want')) return 'status-finished';
        return 'status-wishlist';
    };

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

            {/* HEADER */}
            <div style={{textAlign: 'center', marginTop: '60px', marginBottom: '20px'}}>
                <h1 style={{fontFamily: 'Crimson Text', fontSize: '3.5rem', color: '#fff', textShadow: '0 5px 15px black'}}>
                    The Grand Library
                </h1>
                <p style={{color: '#FFB74D', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold'}}>
                    Select a volume to begin reading
                </p>
            </div>

            {/* BOOKSHELF GRID */}
            <div className="bookshelf">
                {books.length === 0 ? (
                    <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '100px'}}>
                        <h2 style={{color: '#ccc'}}>Loading the Archives...</h2>
                    </div>
                ) : (
                    books.map((book) => (
                        /* CLICK GOES TO DETAILS/TRACKER PAGE */
                        <div className="book-card" key={book._id} onClick={() => navigate(`/book/${book._id}`)}>
                            <img src={book.coverUrl} alt="cover" className="book-cover" />
                            
                            <div className="book-info">
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                                
                                {/* DYNAMIC STATUS BADGE */}
                                <span className={`status-badge ${getStatusClass(book.status)}`}>
                                    {book.status}
                                </span>
                                
                                <div style={{color: '#FFB74D', marginTop: '10px', fontSize:'1.1rem'}}>
                                    {"★".repeat(book.rating)}<span style={{opacity:0.3}}>{"★".repeat(5-book.rating)}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default HomePage;