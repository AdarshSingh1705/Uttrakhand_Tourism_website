import React from 'react';

const LoadingSpinner = ({ size = 'medium', fullScreen = false }) => {
  const sizes = { small: '3rem', medium: '5rem', large: '8rem' };
  const spinnerStyle = {
    border: '0.5rem solid #f3f3f3',
    borderTop: '0.5rem solid var(--orange)',
    borderRadius: '50%',
    width: sizes[size],
    height: sizes[size],
    animation: 'spin 1s linear infinite'
  };

  const containerStyle = fullScreen ? {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.9)', zIndex: 9999
  } : { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '20rem', padding: '2rem' };

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle}></div>
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default LoadingSpinner;
