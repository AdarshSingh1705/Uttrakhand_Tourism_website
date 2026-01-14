import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../AuthModal';
import SearchBar from '../common/SearchBar';
import { useTheme } from '../../hooks/useTheme';
import './Header.css';
// import './Header.dark.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header>
      <div id="menu-btn" className={`fas fa-bars ${menuOpen ? 'fa-times' : ''}`} onClick={() => setMenuOpen(!menuOpen)}></div>
      <Link to="/" className="logo"><span>G</span>lobal <span>F</span>oot<span>P</span>rint</Link>
      
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        
        {/* <div className="dropdown">
          <button className="dropbtn"><Link to="/destinations">Destinations</Link></button>
          <div className="dropdown-content">
            <div className="dropdown-row">
              <Link to="/destinations/dehradun"><p>Dehradun</p></Link>
              <Link to="/destinations/kedarnath"><p>Kedarnath</p></Link>
              <Link to="/destinations/badrinath"><p>Badrinath</p></Link>
            </div>
            <div className="dropdown-row">
              <Link to="/destinations/mussoorie"><p>Mussoorie</p></Link>
              <Link to="/destinations/rishikesh"><p>Rishikesh</p></Link>
              <Link to="/destinations/haridwar"><p>Haridwar</p></Link>
            </div>
            <div className="dropdown-row">
              <Link to="/destinations/nainital"><p>Nainital</p></Link>
              <Link to="/destinations/jim-corbett"><p>Jim Corbett</p></Link>
              <Link to="/destinations/rajaji-national-park"><p>Rajaji N. P.</p></Link>
            </div>
          </div>
        </div> */}
        <Link to="/destinations">Destinations</Link>
        <Link to="/#services">Services</Link>
        {/* <Link to="/packages">Packages</Link> */}
        <Link to="/gallery">Gallery</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/reviews">Review</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favorites" title="My Favorites"><i className="fas fa-heart"></i></Link>
        <li id="user-info" style={{display: 'none'}}>
        <Link to="#" id="user-link" title="User Profile"><span id="user-name">User</span></Link>
        </li>
      </nav>

      <div className="icons">
        <i className="fas fa-search" id="search-btn" onClick={() => setSearchOpen(!searchOpen)}></i>
        <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"} id="theme-btn" onClick={toggleTheme} title={isDarkMode ? "Light Mode" : "Dark Mode"}></i>
        <i className="fas fa-user" id="login-btn" onClick={() => setLoginOpen(true)}></i>
      </div>

      <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <AuthModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} type="login" />
      <AuthModal isOpen={signupOpen} onClose={() => setSignupOpen(false)} type="signup" />
    </header>
  );
};

export default Header;
