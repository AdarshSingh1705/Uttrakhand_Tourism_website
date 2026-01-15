import React, { useState } from 'react';
import { authService } from '../services/authService';

const AuthModal = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (type === 'signup' && formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      if (type === 'login') {
        await authService.login({ email: formData.email, password: formData.password });
      } else {
        await authService.signup({ name: formData.name, email: formData.email, password: formData.password });
      }
      setMessage(`${type} successful!`);
      setTimeout(() => {
        onClose();
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        setMessage('');
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Server error, please try again later.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-form-container active">
      <i className="fas fa-times" id="form-close" onClick={onClose}></i>
      <form onSubmit={handleSubmit}>
        <h3>{type === 'login' ? 'Login' : 'Sign Up'}</h3>
        {message && <p className="message" style={{ color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
        
        {type === 'signup' && (
          <input
            type="text"
            name="name"
            className="box"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        
        <input
          type="email"
          name="email"
          className="box"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <input
          type="password"
          name="password"
          className="box"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        {type === 'signup' && (
          <input
            type="password"
            name="confirmPassword"
            className="box"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        )}
        
        <input type="submit" value={type === 'login' ? 'Login Now' : 'Sign Up Now'} className="btn" />
        
        <p>
          {type === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button type="button" style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); onClose(); }}>
            {type === 'login' ? 'Register now' : 'Login here'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthModal;
