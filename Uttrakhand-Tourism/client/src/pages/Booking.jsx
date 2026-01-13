import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePhone, validateName, validateDate, sanitizeInput } from '../utils/validation';
import { rateLimit, getRemainingTime } from '../utils/rateLimiter';

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: '',
    package: '',
    travelers: 1,
    startDate: '',
    endDate: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = localStorage.getItem('user');
    if (!user) {
      alert('Please login to book a tour');
      navigate('/');
      return;
    }

    if (!validateName(formData.name)) {
      alert('Please enter a valid name');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email');
      return;
    }

    if (!validatePhone(formData.phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    if (!validateDate(formData.startDate)) {
      alert('Start date must be today or later');
      return;
    }

    if (new Date(formData.endDate) <= new Date(formData.startDate)) {
      alert('End date must be after start date');
      return;
    }

    if (!rateLimit('booking-form', 5, 300000)) {
      const remaining = getRemainingTime('booking-form');
      alert(`Too many booking attempts. Please wait ${Math.ceil(remaining / 60)} minutes.`);
      return;
    }

    setStatus('sending');

    try {
      // API call would go here
      setTimeout(() => {
        setStatus('success');
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }, 1000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section style={{ paddingTop: '12rem', minHeight: '100vh', background: '#f5f5f5' }}>
      <div style={{ maxWidth: '100rem', margin: '0 auto', padding: '2rem' }}>
        <h1 className="heading">
          <span>B</span><span>o</span><span>o</span><span>k</span> <span>Y</span><span>o</span><span>u</span><span>r</span> <span>T</span><span>r</span><span>i</span><span>p</span>
        </h1>
        <br /><br />

        <div style={{ background: '#fff', borderRadius: '1rem', padding: '3rem', boxShadow: '0 1rem 2rem rgba(0,0,0,0.1)' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap: '2rem' }}>
              <div>
                <label style={{ fontSize: '1.6rem', color: '#666', display: 'block', marginBottom: '0.5rem' }}>Destination *</label>
                <select name="destination" value={formData.destination} onChange={handleChange} required style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem' }}>
                  <option value="">Select Destination</option>
                  <option value="dehradun">Dehradun</option>
                  <option value="mussoorie">Mussoorie</option>
                  <option value="nainital">Nainital</option>
                  <option value="rishikesh">Rishikesh</option>
                  <option value="haridwar">Haridwar</option>
                  <option value="jim-corbett">Jim Corbett</option>
                  <option value="kedarnath">Kedarnath</option>
                  <option value="badrinath">Badrinath</option>
                  <option value="auli">Auli</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '1.6rem', color: '#666', display: 'block', marginBottom: '0.5rem' }}>Package Type *</label>
                <select name="package" value={formData.package} onChange={handleChange} required style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem' }}>
                  <option value="">Select Package</option>
                  <option value="budget">Budget Package</option>
                  <option value="standard">Standard Package</option>
                  <option value="premium">Premium Package</option>
                  <option value="luxury">Luxury Package</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '1.6rem', color: '#666', display: 'block', marginBottom: '0.5rem' }}>Number of Travelers *</label>
                <input type="number" name="travelers" min="1" max="20" value={formData.travelers} onChange={handleChange} required style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem' }} />
              </div>

              <div>
                <label style={{ fontSize: '1.6rem', color: '#666', display: 'block', marginBottom: '0.5rem' }}>Start Date *</label>
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem' }} />
              </div>

              <div>
                <label style={{ fontSize: '1.6rem', color: '#666', display: 'block', marginBottom: '0.5rem' }}>End Date *</label>
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem' }} />
              </div>

              <div>
                <label style={{ fontSize: '1.6rem', color: '#666', display: 'block', marginBottom: '0.5rem' }}>Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem' }} />
              </div>

              <div>
                <label style={{ fontSize: '1.6rem', color: '#666', display: 'block', marginBottom: '0.5rem' }}>Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem' }} />
              </div>

              <div>
                <label style={{ fontSize: '1.6rem', color: '#666', display: 'block', marginBottom: '0.5rem' }}>Phone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem' }} />
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <label style={{ fontSize: '1.6rem', color: '#666', display: 'block', marginBottom: '0.5rem' }}>Special Requests</label>
              <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows="5" style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem', resize: 'vertical' }}></textarea>
            </div>

            <button type="submit" className="btn" disabled={status === 'sending'} style={{ marginTop: '2rem', width: '100%', fontSize: '1.8rem' }}>
              {status === 'sending' ? 'Processing...' : 'Book Now'}
            </button>

            {status === 'success' && <p style={{ color: 'green', marginTop: '1rem', fontSize: '1.6rem', textAlign: 'center' }}>✓ Booking successful! Redirecting to dashboard...</p>}
            {status === 'error' && <p style={{ color: 'red', marginTop: '1rem', fontSize: '1.6rem', textAlign: 'center' }}>✗ Booking failed. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
