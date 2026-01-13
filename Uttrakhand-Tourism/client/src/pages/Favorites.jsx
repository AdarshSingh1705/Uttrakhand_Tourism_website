import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(saved);
    setLoading(false);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter(f => f.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  if (loading) return <LoadingSpinner fullScreen />;

  return (
    <main style={{ padding: '2rem 5%', minHeight: '60vh' }}>
      <h1 className="heading" style={{ marginBottom: '2rem' }}>My Favorites</h1>
      {favorites.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>No favorites yet</p>
          <Link to="/destinations" className="btn">Explore Destinations</Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {favorites.map(fav => (
            <div key={fav.id} className="box" style={{ position: 'relative' }}>
              <img src={fav.image} alt={fav.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <h3>{fav.name}</h3>
              <p>{fav.description}</p>
              <button onClick={() => removeFavorite(fav.id)} className="btn" style={{ background: '#dc3545' }}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Favorites;
