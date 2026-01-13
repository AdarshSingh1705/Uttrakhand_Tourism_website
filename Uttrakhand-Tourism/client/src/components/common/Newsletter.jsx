import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // API call would go here
      setTimeout(() => {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus(''), 3000);
      }, 1000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section style={{ background: 'linear-gradient(135deg, var(--orange) 0%, #ff8c42 100%)', padding: '5rem 2rem', margin: '5rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
        <i className="fas fa-envelope" style={{ fontSize: '5rem', color: '#fff', marginBottom: '2rem' }}></i>
        <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1rem' }}>Subscribe to Our Newsletter</h2>
        <p style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '3rem', opacity: 0.9 }}>
          Get the latest travel tips, destination guides, and exclusive offers delivered to your inbox!
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', maxWidth: '60rem', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ 
              flex: '1 1 30rem',
              padding: '1.5rem 2rem', 
              fontSize: '1.6rem', 
              border: 'none', 
              borderRadius: '5rem',
              outline: 'none'
            }}
          />
          <button 
            type="submit" 
            disabled={status === 'sending'}
            style={{ 
              padding: '1.5rem 3rem', 
              fontSize: '1.6rem', 
              background: '#fff', 
              color: 'var(--orange)', 
              border: 'none', 
              borderRadius: '5rem',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {status === 'success' && (
          <p style={{ color: '#fff', marginTop: '2rem', fontSize: '1.6rem', background: 'rgba(255,255,255,0.2)', padding: '1rem 2rem', borderRadius: '5rem', display: 'inline-block' }}>
            ✓ Successfully subscribed!
          </p>
        )}
        {status === 'error' && (
          <p style={{ color: '#fff', marginTop: '2rem', fontSize: '1.6rem', background: 'rgba(255,0,0,0.3)', padding: '1rem 2rem', borderRadius: '5rem', display: 'inline-block' }}>
            ✗ Subscription failed. Try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
