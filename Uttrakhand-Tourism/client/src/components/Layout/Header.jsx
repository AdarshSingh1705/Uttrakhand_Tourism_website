import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../AuthModal';
import SearchBar from '../common/SearchBar';
import './Header.css';
// import './Header.dark.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <header>
      <div id="menu-btn" className={`fas fa-bars ${menuOpen ? 'fa-times' : ''}`} onClick={() => setMenuOpen(!menuOpen)}></div>
      <Link to="/" className="logo"><span>G</span>lobal <span>F</span>oot<span>P</span>rint</Link>
      
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        
        <Link to="/destinations">Destinations</Link>
        <Link to="/#services">Services</Link>
        {/* <Link to="/packages">Packages</Link> */}
        <Link to="/gallery">Gallery</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/reviews">Review</Link>
        <Link to="/contact">Contact</Link>
        <li id="user-info" style={{display: 'none'}}>
        <Link to="#" id="user-link" title="User Profile"><span id="user-name">User</span></Link>
        </li>
      </nav>

      <div className="icons">
        <i className="fas fa-search" id="search-btn" onClick={() => setSearchOpen(!searchOpen)}></i>
        <i className="fas fa-user" id="login-btn" onClick={() => setLoginOpen(true)}></i>
      </div>

      <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <AuthModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} type="login" />
      <AuthModal isOpen={signupOpen} onClose={() => setSignupOpen(false)} type="signup" />
    </header>
  );
};

export default Header;
