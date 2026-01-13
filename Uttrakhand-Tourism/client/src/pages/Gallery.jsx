import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [imageLoading, setImageLoading] = useState({});

  const filteredGallery = categoryFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === categoryFilter);

  return (
    <section style={{ paddingTop: '12rem', minHeight: '100vh' }}>
      <h1 className="heading">
        <span>g</span><span>a</span><span>l</span><span>l</span><span>e</span><span>r</span><span>y</span>
      </h1>
      <br />

      {/* Category Filter */}
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <button onClick={() => setCategoryFilter('all')} className={`btn ${categoryFilter === 'all' ? 'active' : ''}`} style={{ margin: '0.5rem' }}>All</button>
        <button onClick={() => setCategoryFilter('destinations')} className={`btn ${categoryFilter === 'destinations' ? 'active' : ''}`} style={{ margin: '0.5rem' }}>Destinations</button>
        <button onClick={() => setCategoryFilter('nature')} className={`btn ${categoryFilter === 'nature' ? 'active' : ''}`} style={{ margin: '0.5rem' }}>Nature</button>
        <button onClick={() => setCategoryFilter('adventure')} className={`btn ${categoryFilter === 'adventure' ? 'active' : ''}`} style={{ margin: '0.5rem' }}>Adventure</button>
      </div>

      {/* Gallery Grid */}
      <div className="box-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', margin: '2rem' }}>
        {filteredGallery.map((item, index) => (
          <div key={index} className="box" style={{ flex: '1 1 30rem', borderRadius: '.5rem', overflow: 'hidden', boxShadow: '0 1rem 2rem rgba(0, 0, 0, .1)', cursor: 'pointer', position: 'relative' }} onClick={() => setSelectedImage(item)}>
            {imageLoading[index] && <LoadingSpinner size="small" />}
            <img 
              src={item.image} 
              alt={item.name} 
              style={{ width: '100%', height: '25rem', objectFit: 'cover', display: imageLoading[index] ? 'none' : 'block' }}
              onLoad={() => setImageLoading(prev => ({ ...prev, [index]: false }))}
              onError={() => setImageLoading(prev => ({ ...prev, [index]: false }))}
            />
            <div className="content" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '2rem', color: '#333' }}>{item.name}</h3>
              <p style={{ fontSize: '1.5rem', color: '#666' }}>{item.description}</p>
              {item.link && <Link to={item.link} className="btn" style={{ marginTop: '1rem' }}>Visit</Link>}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setSelectedImage(null)}>
          <span style={{ position: 'absolute', top: '2rem', right: '4rem', fontSize: '5rem', color: '#fff', cursor: 'pointer' }}>&times;</span>
          <img src={selectedImage.image} alt={selectedImage.name} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
        </div>
      )}
    </section>
  );
};

const galleryItems = [
  { name: 'Nainital', image: '/images/gallery/g-1.jpg', description: 'Picturesque hill station with beautiful lakes', link: '/destinations/nainital', category: 'destinations' },
  { name: 'Valley of Flowers', image: '/images/gallery/g-2.jpg', description: 'UNESCO World Heritage site with alpine flowers', link: '/destinations/valley-of-flowers', category: 'nature' },
  { name: 'Rishikesh', image: '/images/gallery/g-3.jpg', description: 'Yoga Capital and adventure sports hub', link: '/destinations/rishikesh', category: 'adventure' },
  { name: 'Kedarnath', image: '/images/gallery/g-9.jpg', description: 'Sacred pilgrimage in the Himalayas', link: '/destinations/kedarnath', category: 'destinations' },
  { name: 'Badrinath', image: '/images/gallery/g-6.jpg', description: 'Revered pilgrimage with Himalayan vistas', link: '/destinations/badrinath', category: 'destinations' },
  { name: 'Haridwar', image: '/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/haridwar 2.jpg', description: 'Spiritual hub on Ganges banks', link: '/destinations/haridwar', category: 'destinations' },
  { name: 'Gangotri', image: '/images/gallery/g-8.jpg', description: 'Source of the holy Ganges River', link: '/destinations/gangotri', category: 'destinations' },
  { name: 'Jim Corbett', image: '/Uttarakhand/Jim Corbett/About+Images/Images/jim corbett national park.cms', description: 'Premier wildlife sanctuary', link: '/destinations/jim-corbett', category: 'adventure' },
  { name: 'Rajaji National Park', image: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/buffalo.jpg', description: 'Wildlife sanctuary with diverse fauna', link: '/destinations/rajaji-national-park', category: 'nature' },
  { name: 'Tehri Dam', image: '/Uttarakhand/Tehri dam/Images+About/images/Tehri_Dam_India.jpg', description: 'Tallest dam with adventure activities', link: '/destinations/tehri-dam', category: 'adventure' },
  { name: 'Mussoorie', image: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/1Mussoorie.jpg', description: 'Queen of Hills with colonial charm', link: '/destinations/mussoorie', category: 'destinations' },
  { name: 'Auli', image: '/images/gallery/g-12.jpg', description: 'Premier skiing destination', link: '/destinations/auli', category: 'adventure' }
];

export default Gallery;
