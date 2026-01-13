import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <Link to="/"><i className="fas fa-angle-right"></i>home</Link>
          <Link to="/#services"><i className="fas fa-angle-right"></i>services</Link>
          <Link to="/gallery"><i className="fas fa-angle-right"></i>gallery</Link>
          <Link to="/destinations"><i className="fas fa-angle-right"></i>destinations</Link>
          <Link to="/blog"><i className="fas fa-angle-right"></i>blog</Link>
        </div>
        
        <div className="box">
          <h3>extra links</h3>
          <Link to="/about"><i className="fas fa-angle-right"></i>about us</Link>
          <Link to="/contact"><i className="fas fa-angle-right"></i>contact</Link>
          <Link to="/faq"><i className="fas fa-angle-right"></i>FAQ</Link>
          <Link to="/reviews"><i className="fas fa-angle-right"></i>reviews</Link>
          <Link to="/booking"><i className="fas fa-angle-right"></i>book now</Link>
        </div>
        
        <div className="box">
          <h3>follow us</h3>
          <a href="https://www.linkedin.com/in/adarsh-singh-25a616303"><i className="fab fa-linkedin"></i> linkedin</a>
          <a href="https://www.facebook.com/share/16Xs7g4UUW/"><i className="fab fa-facebook-f"></i> facebook</a>
          <a href="https://www.instagram.com/darkcoder1705"><i className="fab fa-instagram"></i> instagram</a>
          <a href="https://x.com/AdarshSingh1705"><i className="fab fa-twitter"></i> x</a>
        </div>
      </div>
      
      <h1 className="credit">created by: <span>Adarsh Singh</span> | all rights reserved</h1>
    </section>
  );
};

export default Footer;
