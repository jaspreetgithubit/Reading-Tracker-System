import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all pages
import AuthPage from './components/Auth/AuthPage';
import AboutPage from './components/Home/AboutPage'; 
import HomePage from './components/Home/HomePage';
import BookDetails from './components/Home/BookDetails';
import BookReader from './components/Home/BookReader';
import ContactPage from './components/Home/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Login Page */}
        <Route path="/" element={<AuthPage />} />
        
        {/* 2. Welcome Hall (Parallax) */}
        <Route path="/about" element={<AboutPage />} />
        
        {/* 3. The Library (Dashboard) */}
        <Route path="/home" element={<HomePage />} />
        
        {/* 4. Book Features */}
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/read/:id" element={<BookReader />} />
        
        {/* 5. Contact Page */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;