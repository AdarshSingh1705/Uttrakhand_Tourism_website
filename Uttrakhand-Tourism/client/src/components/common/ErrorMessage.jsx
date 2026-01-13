import React from 'react';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '3rem', 
      background: '#fff3cd', 
      border: '1px solid #ffc107', 
      borderRadius: '1rem',
      margin: '2rem'
    }}>
      <i className="fas fa-exclamation-triangle" style={{ fontSize: '4rem', color: '#ff6b6b', marginBottom: '1rem' }}></i>
      <h3 style={{ fontSize: '2rem', color: '#333', margin: '1rem 0' }}>Oops! Something went wrong</h3>
      <p style={{ fontSize: '1.6rem', color: '#666', margin: '1rem 0' }}>{message || 'Unable to load data. Please try again.'}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn" style={{ marginTop: '1.5rem' }}>
          <i className="fas fa-redo"></i> Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
