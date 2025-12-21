import React, { useEffect, useRef } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './Home.css';
import './About.css'; 
import videoBg from '../../background.mp4';

const AboutPage = () => {
    const navigate = useNavigate();
    
    // Animation Refs
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const handleLogout = () => {
        localStorage.removeItem("userId");
        navigate('/');
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.15 });

        if (section1Ref.current) observer.observe(section1Ref.current);
        if (section2Ref.current) observer.observe(section2Ref.current);
        if (section3Ref.current) observer.observe(section3Ref.current);
        
        return () => observer.disconnect();
    }, []);

    return (
        <div className="home-container scroll-container">
            {/* 1. NAVBAR */}
            <nav className="navbar">
                <div className="nav-logo">StoryVerse</div>
                <div className="nav-links">
                    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-shared-style active" : "nav-shared-style"}>About</NavLink>
                    <NavLink to="/home" className={({ isActive }) => isActive ? "nav-shared-style active" : "nav-shared-style"}>My Library</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-shared-style active" : "nav-shared-style"}>Contact</NavLink>
                    <button className="nav-shared-style logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </nav>

            {/* 2. HERO: PROFESSIONAL INTRODUCTION */}
            <section ref={section1Ref} className="parallax-section video-section">
                <video className="bg-video-fixed" autoPlay muted loop playsInline>
                    <source src={videoBg} type="video/mp4" />
                </video>
                
                <div className="viz-panel">
                    <h1 className="hero-title">The Archive of Lost Stories</h1>
                    <p className="hero-subtitle">Curate. Chronicle. Cherish.</p>
                    
                    <div style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.4rem', fontFamily: 'Crimson Text', lineHeight: '1.8', color: '#e0d0c0'}}>
                        <p>
                            StoryVerse is the premier digital sanctuary for your intellectual life. 
                            We provide a distraction-free environment to track your reading habits, 
                            organize your collections, and preserve your literary legacy.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. CORE FEATURES (The Material) */}
            <section ref={section2Ref} className="parallax-section image-section">
                <div className="viz-panel">
                    <h2 className="hero-title" style={{fontSize: '3rem'}}>Why StoryVerse?</h2>
                    <p className="hero-subtitle">Designed for Readers</p>

                    <div className="vision-grid">
                        <div className="vision-card">
                            <div className="vision-icon">✦</div>
                            <h3>Smart Tracking</h3>
                            <p>Maintain a comprehensive log of every title you interact with. From "Wishlist" to "Finished", never lose track of a book again.</p>
                        </div>
                        <div className="vision-card">
                            <div className="vision-icon">⚓</div>
                            <h3>Custom Collections</h3>
                            <p>Build a library that reflects you. Organize books by status, genre, or personal rating to keep your digital shelves pristine.</p>
                        </div>
                        <div className="vision-card">
                            <div className="vision-icon">✒️</div>
                            <h3>Deep Insights</h3>
                            <p>Go beyond the cover. Write personal reviews and rate your journeys to transform passive reading into active retention.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION */}
            <section ref={section3Ref} className="parallax-section" style={{minHeight: '60vh'}}>
                <div className="viz-panel" style={{padding: '70px'}}>
                    <h2 className="hero-title" style={{fontSize: '2.5rem'}}>Your Library Awaits</h2>
                    <p className="hero-subtitle" style={{color: '#fff', fontSize: '1rem', marginTop: '10px'}}>
                        Start building your archive today.
                    </p>
                    <button className="pulse-btn" onClick={() => navigate('/home')}>
                        Start Your Journey
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;