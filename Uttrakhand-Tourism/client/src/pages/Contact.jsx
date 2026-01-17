import React, { useState } from 'react';
import { validateEmail, validatePhone, validateName, sanitizeInput } from '../utils/validation';
import { rateLimit, getRemainingTime } from '../utils/rateLimiter';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateName(formData.name)) {
      setStatus('error');
      alert('Please enter a valid name (letters only, min 2 characters)');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('error');
      alert('Please enter a valid email address');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setStatus('error');
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    if (!rateLimit('contact-form', 3, 60000)) {
      const remaining = getRemainingTime('contact-form');
      alert(`Too many attempts. Please wait ${remaining} seconds.`);
      return;
    }

    setStatus('sending');

    const sanitized = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message)
    };

    try {
      const response = await fetch('http://localhost:3003/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitized)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact" style={{ paddingTop: '12rem', minHeight: '100vh' }}>
      <h1 className="heading">
        <span>c</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span> <span>u</span><span>s</span>
      </h1>
      <br /><br />

      <div className="contact-info" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', margin: '3rem 0' }}>
        <div className="info-box" style={{ flex: '1 1 30rem', textAlign: 'center', padding: '2rem', background: '#f9f9f9', borderRadius: '1rem' }}>
          <i className="fas fa-map-marker-alt" style={{ fontSize: '4rem', color: 'var(--orange)', marginBottom: '1rem' }}></i>
          <h3 style={{ fontSize: '2rem', color: '#333', margin: '1rem 0' }}>Address</h3>
          <p style={{ fontSize: '1.5rem', color: '#666' }}>Deoria, Uttra Pradesh, India, 274202</p>
        </div>

        <div className="info-box" style={{ flex: '1 1 30rem', textAlign: 'center', padding: '2rem', background: '#f9f9f9', borderRadius: '1rem' }}>
          <i className="fas fa-envelope" style={{ fontSize: '4rem', color: 'var(--orange)', marginBottom: '1rem' }}></i>
          <h3 style={{ fontSize: '2rem', color: '#333', margin: '1rem 0' }}>Email</h3>
          <p style={{ fontSize: '1.5rem', color: '#666' }}>gfp.globalfootprint2024@gmail.com</p>
        </div>

        <div className="info-box" style={{ flex: '1 1 30rem', textAlign: 'center', padding: '2rem', background: '#f9f9f9', borderRadius: '1rem' }}>
          <i className="fas fa-phone" style={{ fontSize: '4rem', color: 'var(--orange)', marginBottom: '1rem' }}></i>
          <h3 style={{ fontSize: '2rem', color: '#333', margin: '1rem 0' }}>Phone</h3>
          <p style={{ fontSize: '1.5rem', color: '#666' }}>+91 XXXXXXXXXX</p>
        </div>
      </div>

      <div className="row">
        <div className="image">
          <img src="/images/contact-img.svg" alt="contact" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="inputBox">
            <input type="number" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <textarea name="message" placeholder="Message" rows="10" cols="30" value={formData.message} onChange={handleChange} required></textarea>
          
          <input type="submit" className="btn" value={status === 'sending' ? 'Sending...' : 'Send Message'} disabled={status === 'sending'} />
          
          {status === 'success' && <p style={{ color: 'green', marginTop: '1rem', fontSize: '1.5rem' }}>✓ Message sent successfully!</p>}
          {status === 'error' && <p style={{ color: 'red', marginTop: '1rem', fontSize: '1.5rem' }}>✗ Failed to send message. Try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
