import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
  const [filter, setFilter] = useState('all');

  const packages = [
    { id: 1, name: 'Char Dham Yatra', category: 'pilgrimage', duration: '10 Days', price: '₹35,000', image: '/images/pack-1.JPG', destinations: 'Yamunotri, Gangotri, Kedarnath, Badrinath' },
    { id: 2, name: 'Adventure Uttarakhand', category: 'adventure', duration: '7 Days', price: '₹28,000', image: '/images/pack-2.jpg', destinations: 'Rishikesh, Auli, Valley of Flowers' },
    { id: 3, name: 'Wildlife Safari', category: 'wildlife', duration: '5 Days', price: '₹22,000', image: '/images/pack-3.jpg', destinations: 'Jim Corbett, Rajaji National Park' },
    { id: 4, name: 'Hill Station Retreat', category: 'leisure', duration: '6 Days', price: '₹25,000', image: '/images/pack-4.jpg', destinations: 'Nainital, Mussoorie, Dehradun' },
    { id: 5, name: 'Spiritual Journey', category: 'pilgrimage', duration: '8 Days', price: '₹30,000', image: '/images/pack-5.jpg', destinations: 'Haridwar, Rishikesh, Kedarnath' },
    { id: 6, name: 'Trekking Expedition', category: 'adventure', duration: '9 Days', price: '₹32,000', image: '/images/pack-6.jpg', destinations: 'Valley of Flowers, Hemkund Sahib, Auli' }
  ];

  const filtered = filter === 'all' ? packages : packages.filter(p => p.category === filter);

  return (
    <main style={{ padding: '2rem 5%' }}>
      <h1 className="heading">Travel Packages</h1>
      <div style={{ textAlign: 'center', margin: '2rem 0', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {['all', 'pilgrimage', 'adventure', 'wildlife', 'leisure'].map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} className="btn" style={{ background: filter === cat ? '#27ae60' : '#666' }}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {filtered.map(pkg => (
          <div key={pkg.id} className="box">
            <img src={pkg.image} alt={pkg.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{pkg.name}</h3>
            <p><strong>Duration:</strong> {pkg.duration}</p>
            <p><strong>Price:</strong> {pkg.price}</p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{pkg.destinations}</p>
            <Link to="/booking" state={{ package: pkg.name }} className="btn">Book Now</Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Packages;
