import React, { useState } from 'react';
import { authService } from '../services/authService';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [message, setMessage] = useState('');

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(loginData);
      setMessage('Login successful!');
      setTimeout(() => {
        onClose();
        setLoginData({ email: '', password: '' });
        setMessage('');
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed');
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      await authService.signup({ name: signupData.name, email: signupData.email, password: signupData.password });
      setMessage('Registration successful!');
      setTimeout(() => {
        onClose();
        setSignupData({ name: '', email: '', password: '', confirmPassword: '' });
        setMessage('');
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Registration failed');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className={`auth-container ${isActive ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
        <i className="fas fa-times auth-close" onClick={onClose}></i>
        
        {/* Login Form */}
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            {message && <p className="auth-message" style={{ color: message.includes('successful') ? '#4ec9b0' : '#f44747' }}>{message}</p>}
            <div className="input-box">
              <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
              <i className='bx bxs-envelope'></i>
            </div>
            <div className="input-box">
              <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <p>or login with social platforms</p>
            <div className="social-icons">
              <a href="#"><i className='bx bxl-google'></i></a>
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div className="form-box register">
          <form onSubmit={handleSignupSubmit}>
            <h1>Registration</h1>
            {message && <p className="auth-message" style={{ color: message.includes('successful') ? '#4ec9b0' : '#f44747' }}>{message}</p>}
            <div className="input-box">
              <input type="text" name="name" placeholder="Username" value={signupData.name} onChange={handleSignupChange} required />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} required />
              <i className='bx bxs-envelope'></i>
            </div>
            <div className="input-box">
              <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} required />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="input-box">
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={signupData.confirmPassword} onChange={handleSignupChange} required />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <button type="submit" className="btn">Register</button>
            <p>or register with social platforms</p>
            <div className="social-icons">
              <a href="#"><i className='bx bxl-google'></i></a>
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
          </form>
        </div>

        {/* Toggle Box */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="btn register-btn" onClick={() => setIsActive(true)}>Register</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn login-btn" onClick={() => setIsActive(false)}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
