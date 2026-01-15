import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [bookings] = useState([]);
  const [reviews] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/');
      return;
    }
    setUser(JSON.parse(userData));
    // Fetch user bookings and reviews
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
  };

  if (!user) return null;

  return (
    <section style={{ paddingTop: '12rem', minHeight: '100vh', background: '#f5f5f5' }}>
      <div style={{ maxWidth: '120rem', margin: '0 auto', padding: '2rem' }}>
        <h1 className="heading">
          <span>D</span><span>a</span><span>s</span><span>h</span><span>b</span><span>o</span><span>a</span><span>r</span><span>d</span>
        </h1>
        <br />

        <div style={{ display: 'grid', gridTemplateColumns: '25rem 1fr', gap: '2rem', marginTop: '3rem' }}>
          {/* Sidebar */}
          <div style={{ background: '#fff', borderRadius: '1rem', padding: '2rem', height: 'fit-content', boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ width: '10rem', height: '10rem', borderRadius: '50%', background: 'var(--orange)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', margin: '0 auto 1rem' }}>
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <h3 style={{ fontSize: '2rem', color: '#333' }}>{user.name}</h3>
              <p style={{ fontSize: '1.4rem', color: '#666' }}>{user.email}</p>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button onClick={() => setActiveTab('profile')} className="btn" style={{ width: '100%', background: activeTab === 'profile' ? 'var(--orange)' : '#f9f9f9', color: activeTab === 'profile' ? '#fff' : '#333' }}>
                <i className="fas fa-user"></i> Profile
              </button>
              <button onClick={() => setActiveTab('bookings')} className="btn" style={{ width: '100%', background: activeTab === 'bookings' ? 'var(--orange)' : '#f9f9f9', color: activeTab === 'bookings' ? '#fff' : '#333' }}>
                <i className="fas fa-calendar-check"></i> My Bookings
              </button>
              <button onClick={() => setActiveTab('reviews')} className="btn" style={{ width: '100%', background: activeTab === 'reviews' ? 'var(--orange)' : '#f9f9f9', color: activeTab === 'reviews' ? '#fff' : '#333' }}>
                <i className="fas fa-star"></i> My Reviews
              </button>
              <button onClick={handleLogout} className="btn" style={{ width: '100%', background: '#dc3545', color: '#fff' }}>
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div style={{ background: '#fff', borderRadius: '1rem', padding: '3rem', boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.1)' }}>
            {activeTab === 'profile' && (
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Profile Information</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <label style={{ fontSize: '1.6rem', color: '#666', display: 'block', marginBottom: '0.5rem' }}>Name</label>
                    <input type="text" value={user.name} readOnly style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem', background: '#f9f9f9' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '1.6rem', color: '#666', display: 'block', marginBottom: '0.5rem' }}>Email</label>
                    <input type="email" value={user.email} readOnly style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem', background: '#f9f9f9' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '1.6rem', color: '#666', display: 'block', marginBottom: '0.5rem' }}>Member Since</label>
                    <input type="text" value={new Date(user.createdAt || Date.now()).toLocaleDateString()} readOnly style={{ width: '100%', padding: '1.2rem', fontSize: '1.6rem', border: '1px solid #ddd', borderRadius: '.5rem', background: '#f9f9f9' }} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>My Bookings</h2>
                {bookings.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '5rem', color: '#666' }}>
                    <i className="fas fa-calendar-times" style={{ fontSize: '5rem', marginBottom: '2rem', display: 'block', color: '#ddd' }}></i>
                    <p style={{ fontSize: '1.8rem' }}>No bookings yet</p>
                  </div>
                ) : (
                  <div>Bookings will appear here</div>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>My Reviews</h2>
                {reviews.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '5rem', color: '#666' }}>
                    <i className="fas fa-star-half-alt" style={{ fontSize: '5rem', marginBottom: '2rem', display: 'block', color: '#ddd' }}></i>
                    <p style={{ fontSize: '1.8rem' }}>No reviews yet</p>
                  </div>
                ) : (
                  <div>Reviews will appear here</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
