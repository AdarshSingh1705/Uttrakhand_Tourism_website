import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import { validateEmail, validateName, sanitizeInput } from '../utils/validation';
import { rateLimit, getRemainingTime } from '../utils/rateLimiter';

const Reviews = () => {
  const [reviews] = useState([]);
  const [loading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', rating: 5, comment: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateName(formData.name)) {
      alert('Please enter a valid name (letters only, min 2 characters)');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!rateLimit('review-form', 3, 300000)) {
      const remaining = getRemainingTime('review-form');
      alert(`Too many review submissions. Please wait ${Math.ceil(remaining / 60)} minutes.`);
      return;
    }

    setStatus('sending');

    const sanitized = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      rating: parseInt(formData.rating),
      comment: sanitizeInput(formData.comment)
    };

    try {
      const response = await fetch('http://localhost:3003/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitized)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', rating: 5, comment: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section style={{ paddingTop: '12rem', minHeight: '100vh' }}>
      <h1 className="heading">
        <span>r</span><span>e</span><span>v</span><span>i</span><span>e</span><span>w</span><span>s</span>
      </h1>
      <br /><br />

      {/* Loading State */}
      {loading && <LoadingSpinner size="large" />}

      {/* Error State */}
      {error && <ErrorMessage message="Unable to load reviews" onRetry={() => setError(null)} />}

      {/* Reviews Slider */}
      {!loading && !error && reviews.length > 0 && (
        <Swiper
          className="review-slider"
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          style={{ padding: '2rem', margin: '3rem 0' }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="box" style={{ textAlign: 'center', padding: '2rem', background: '#f9f9f9', borderRadius: '1rem' }}>
                <div style={{ fontSize: '5rem', color: '#ccc', marginBottom: '1rem' }}>
                  <i className="fas fa-user-circle"></i>
                </div>
                <h3 style={{ fontSize: '2rem', color: '#333', margin: '1rem 0' }}>{review.name}</h3>
                <p style={{ fontSize: '1.5rem', color: '#666', padding: '1rem 0' }}>{review.comment}</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fa${i < review.rating ? 's' : 'r'} fa-star`} style={{ fontSize: '1.7rem', color: 'var(--orange)' }}></i>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* No Reviews */}
      {!loading && !error && reviews.length === 0 && (
        <div style={{ textAlign: 'center', padding: '5rem', color: '#666' }}>
          <i className="fas fa-star-half-alt" style={{ fontSize: '5rem', marginBottom: '2rem', display: 'block', color: '#ddd' }}></i>
          <p style={{ fontSize: '1.8rem' }}>No reviews yet. Be the first to share your experience!</p>
        </div>
      )}

      {/* Submit Review Form */}
      <div style={{ maxWidth: '80rem', margin: '5rem auto', padding: '3rem', background: '#f9f9f9', borderRadius: '1rem' }}>
        <h2 style={{ fontSize: '3rem', color: '#333', textAlign: 'center', marginBottom: '2rem' }}>Share Your Experience</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '2rem' }}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem' }}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem' }}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ fontSize: '1.6rem', color: '#666', display: 'block', marginBottom: '1rem' }}>Rating:</label>
            <select 
              name="rating" 
              value={formData.rating} 
              onChange={handleChange}
              style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem' }}
            >
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="2">⭐⭐ Fair</option>
              <option value="1">⭐ Poor</option>
            </select>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <textarea 
              name="comment" 
              placeholder="Share your experience..." 
              value={formData.comment} 
              onChange={handleChange}
              required
              rows="6"
              style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem', resize: 'vertical' }}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn" 
            disabled={status === 'sending'}
            style={{ width: '100%', fontSize: '1.8rem' }}
          >
            {status === 'sending' ? 'Submitting...' : 'Submit Review'}
          </button>

          {status === 'success' && <p style={{ color: 'green', marginTop: '1rem', fontSize: '1.5rem', textAlign: 'center' }}>✓ Review submitted successfully!</p>}
          {status === 'error' && <p style={{ color: 'red', marginTop: '1rem', fontSize: '1.5rem', textAlign: 'center' }}>✗ Failed to submit review. Try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Reviews;
