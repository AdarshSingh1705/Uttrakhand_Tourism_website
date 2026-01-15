import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <>
      <Header />
      
      {/* Toggle Button - Always visible */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="btn"
        style={{
          position: 'fixed',
          right: '0',
          top: '10rem',
          zIndex: 1001,
          writingMode: 'vertical-rl',
          padding: '2rem 1rem',
          fontSize: '2rem',
          borderRadius: '0.5rem 0 0 0.5rem',
          margin: 0
        }}
      >
        <i className={`fas fa-${sidebarOpen ? 'chevron-right' : 'chevron-left'}`}></i>
      </button>
      
      {/* Fixed Side Panel */}
      <div style={{
        position: 'fixed',
        right: sidebarOpen ? '-15rem' : '0',
        top: '16rem',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        transition: 'right 0.3s ease'
      }}>
        {/* Vertical Buttons */}
        <Link to="/booking" className="btn" style={{ writingMode: 'vertical-rl', padding: '2rem 1rem', fontSize: '1.6rem', borderRadius: 0, margin: 0 }}>
          <i className="fas fa-calendar-check"></i> Book
        </Link>
        <Link to="/packages" className="btn" style={{ writingMode: 'vertical-rl', padding: '2rem 1rem', fontSize: '1.6rem', borderRadius: 0, margin: 0 }}>
          <i className="fas fa-box"></i> Pack
        </Link>
        <Link to="/faq" className="btn" style={{ writingMode: 'vertical-rl', padding: '2rem 1rem', fontSize: '1.6rem', borderRadius: 0, margin: 0 }}>
          <i className="fas fa-question-circle"></i> FAQ
        </Link>
        <Link to="/favorites" className="btn" style={{ writingMode: 'vertical-rl', padding: '2rem 1rem', fontSize: '1.6rem', borderRadius: 0, margin: 0 }}>
          <i className="fas fa-heart"></i> Fav
        </Link>
        <Link to="/blog" className="btn" style={{ writingMode: 'vertical-rl', padding: '2rem 1rem', fontSize: '1.6rem', borderRadius: 0, margin: 0 }}>
          <i className="fas fa-blog"></i> Blog
        </Link>
        
        {/* Theme Toggle at bottom */}
        <button 
          onClick={toggleTheme}
          className="btn"
          style={{
            writingMode: 'vertical-rl',
            padding: '2rem 1rem',
            fontSize: '1.6rem',
            borderRadius: '0 0 0 0.5rem',
            margin: 0
          }}
          title={isDarkMode ? "Light Mode" : "Dark Mode"}
        >
          <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
        </button>
      </div>
      
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
