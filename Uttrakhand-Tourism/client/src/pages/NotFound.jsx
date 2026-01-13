import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '15rem', color: 'var(--orange)', fontWeight: 'bold', margin: '0' }}>404</h1>
      <h2 style={{ fontSize: '4rem', color: '#333', margin: '2rem 0' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.7rem', color: '#666', margin: '1rem 0' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn" style={{ marginTop: '2rem' }}>
        <i className="fas fa-home"></i> Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
