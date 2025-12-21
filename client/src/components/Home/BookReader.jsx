import React, { useEffect, useState, useRef, forwardRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HTMLFlipBook from 'react-pageflip';
import './Reader.css'; 

const Page = forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref}>
            <div className="page-content">
                {props.children}
                <div className="page-footer">Page {props.number}</div>
            </div>
        </div>
    );
});

const Cover = forwardRef((props, ref) => {
    return (
        <div className="demoPage cover-page" ref={ref}>
             <h1 className="cover-title">{props.title}</h1>
             <p style={{marginTop:'20px', fontStyle:'italic', fontSize:'1.2rem', color: '#FFB74D'}}>By {props.author}</p>
        </div>
    );
});

const BookReader = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [pages, setPages] = useState([]);
    const bookRef = useRef();

    useEffect(() => {
        axios.get(`http://localhost:5000/library`)
            .then(res => {
                const foundBook = res.data.books.find(b => b._id === id);
                if (foundBook) {
                    setBook(foundBook);
                    const words = foundBook.content.split(' ');
                    const pgs = [];
                    const wordsPerPage = 55; 
                    for (let i = 0; i < words.length; i += wordsPerPage) {
                        pgs.push(words.slice(i, i + wordsPerPage).join(' '));
                    }
                    setPages(pgs);
                }
            })
            .catch(err => console.log(err));
    }, [id]);

    if (!book) return <div className="reader-container" style={{color:'white'}}>Opening Tome...</div>;

    return (
        <div className="reader-container">
            {/* TOP NAVIGATION */}
            <nav className="reader-nav">
                <button className="back-btn" onClick={() => navigate('/home')}>Close Book</button>
                <h2 className="reader-title">{book.title}</h2>
            </nav>

            {/* MAIN READING AREA WITH SIDE BUTTONS */}
            <div className="book-area">
                
                {/* PREVIOUS BUTTON (Left Side) */}
                <button 
                    className="side-nav-btn prev-btn" 
                    onClick={() => bookRef.current.pageFlip().flipPrev()}
                >
                    ❮
                </button>

                {/* THE BOOK */}
                <HTMLFlipBook 
                    width={450} 
                    height={600} 
                    showCover={true} 
                    className="flip-book"
                    ref={bookRef}
                >
                    <Cover title={book.title} author={book.author} />
                    {pages.map((text, index) => (
                        <Page number={index + 1} key={index}>
                            <p>{text}</p>
                        </Page>
                    ))}
                    <div className="demoPage cover-page"><h2>End of Excerpt</h2></div>
                </HTMLFlipBook>

                {/* NEXT BUTTON (Right Side) */}
                <button 
                    className="side-nav-btn next-btn" 
                    onClick={() => bookRef.current.pageFlip().flipNext()}
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default BookReader;