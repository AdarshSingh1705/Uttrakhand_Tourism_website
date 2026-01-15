import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const AllDestinations = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredDestinations = useMemo(() => {
    let filtered = allDestinations;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(dest => 
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(dest => dest.category === categoryFilter);
    }

    return filtered;
  }, [searchQuery, categoryFilter]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  const loadMore = () => setVisibleCount(prev => prev + 9);
  const seeLess = () => setVisibleCount(9);

  return (
    <section className="all-destinations" style={{ paddingTop: '12rem', minHeight: '100vh' }}>
      <h1 className="heading">
        <span>A</span><span>l</span><span>l</span> <span>D</span><span>e</span><span>s</span><span>t</span><span>i</span><span>n</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span><span>s</span>
      </h1>
      <br />

      {/* Search & Filter */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem', flexWrap: 'wrap' }}>
        <input 
          type="search" 
          placeholder="Search destinations..." 
          value={searchQuery}
          onChange={handleSearch}
          style={{ 
            padding: '1.2rem 2rem', 
            fontSize: '1.6rem', 
            border: '1px solid #ddd', 
            borderRadius: '5rem',
            width: '40rem',
            maxWidth: '90%'
          }}
        />
        
        <select 
          value={categoryFilter} 
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{ 
            padding: '1.2rem 2rem', 
            fontSize: '1.6rem', 
            border: '1px solid #ddd', 
            borderRadius: '5rem',
            cursor: 'pointer'
          }}
        >
          <option value="all">All Categories</option>
          <option value="hill-station">Hill Stations</option>
          <option value="pilgrimage">Pilgrimage</option>
          <option value="wildlife">Wildlife</option>
          <option value="adventure">Adventure</option>
        </select>
      </div>

      {/* Results count */}
      <p style={{ textAlign: 'center', fontSize: '1.6rem', color: '#666', margin: '1rem 0' }}>
        Showing {Math.min(visibleCount, filteredDestinations.length)} of {filteredDestinations.length} destinations
      </p>

      <div className="box-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', margin: '2rem' }}>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.slice(0, visibleCount).map((dest, index) => (
            <div key={index} className="box" style={{ 
              flex: '1 1 30rem',
              borderRadius: '.5rem',
              overflow: 'hidden',
              boxShadow: '0 1rem 2rem rgba(0, 0, 0, .1)'
            }}>
              <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '25rem', objectFit: 'cover' }} />
              <div className="content" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'rgb(165, 108, 2)' }}>
                  <i className="fas fa-map-marker-alt"></i> {dest.name}
                </h3>
                <p style={{ fontSize: '1.7rem', color: '#666', padding: '1rem 0' }}>{dest.description}</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star" style={{ fontSize: '1.7rem', color: 'var(--orange)' }}></i>
                  ))}
                </div>
                <Link to={dest.link} className="btn">Explore</Link>
              </div>
            </div>
          ))
        ) : (
          <div style={{ width: '100%', textAlign: 'center', padding: '5rem', fontSize: '2rem', color: '#666' }}>
            <i className="fas fa-search" style={{ fontSize: '5rem', marginBottom: '2rem', display: 'block' }}></i>
            No destinations found matching your search.
          </div>
        )}
      </div>

      {filteredDestinations.length > visibleCount && (
        <div className="load-more" style={{ textAlign: 'center', margin: '3rem 0' }}>
          <button onClick={loadMore} className="btn">Load More</button>
        </div>
      )}
      
      {visibleCount > 9 && filteredDestinations.length > 9 && (
        <div className="load-more" style={{ textAlign: 'center', margin: '1rem 0' }}>
          <button onClick={seeLess} className="btn">See Less</button>
        </div>
      )}
    </section>
  );
};

const allDestinations = [
  { name: 'Dehradun', image: '/Uttarakhand/Dehradun/About+Images/dehradun.jpg', description: 'The capital city nestled in the Doon Valley, known for its pleasant climate and educational institutions.', link: '/destinations/dehradun', category: 'hill-station' },
  { name: 'Mussoorie', image: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/1Mussoorie.jpg', description: 'Queen of Hills - A charming hill station with colonial architecture and stunning mountain views.', link: '/destinations/mussoorie', category: 'hill-station' },
  { name: 'Rishikesh', image: '/images/pack-3.jpg', description: 'Yoga Capital of the World - Famous for spiritual retreats, adventure sports, and the Ganges.', link: '/destinations/rishikesh', category: 'adventure' },
  { name: 'Haridwar', image: '/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/haridwar 2.jpg', description: 'Gateway to the Gods - Sacred city known for Ganga Aarti and spiritual significance.', link: '/destinations/haridwar', category: 'pilgrimage' },
  { name: 'Nainital', image: '/images/gallery/g-11.jpg', description: 'Lake District of India - Beautiful hill station centered around the emerald Naini Lake.', link: '/destinations/nainital', category: 'hill-station' },
  { name: 'Jim Corbett', image: '/Uttarakhand/Jim Corbett/About+Images/Images/jim corbett national park2.jpg', description: "India's oldest national park, home to Bengal tigers and diverse wildlife.", link: '/destinations/jim-corbett', category: 'wildlife' },
  { name: 'Kedarnath', image: '/images/pack-1.jpg', description: 'Sacred pilgrimage site with ancient Shiva temple in the Himalayas.', link: '/destinations/kedarnath', category: 'pilgrimage' },
  { name: 'Badrinath', image: '/images/gallery/g-5.jpg', description: 'Holy town dedicated to Lord Vishnu, part of the Char Dham pilgrimage.', link: '/destinations/badrinath', category: 'pilgrimage' },
  { name: 'Auli', image: '/images/gallery/g-12.jpg', description: 'Premier skiing destination with panoramic Himalayan views and adventure activities.', link: '/destinations/auli', category: 'adventure' },
  { name: 'Valley of Flowers', image: '/images/gallery/g-2.jpg', description: 'UNESCO World Heritage Site with stunning alpine flowers and meadows.', link: '/destinations/valley-of-flowers', category: 'adventure' },
  { name: 'Gangotri', image: '/images/gallery/g-8.jpg', description: 'Source of the holy Ganges River, important pilgrimage destination.', link: '/destinations/gangotri', category: 'pilgrimage' },
  { name: 'Rajaji National Park', image: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/elephant.jpg', description: 'Wildlife sanctuary known for elephants, tigers, and diverse flora and fauna.', link: '/destinations/rajaji-national-park', category: 'wildlife' },
  { name: 'Tehri Dam', image: '/Uttarakhand/Tehri dam/Images+About/images/Tehri_Dam_India.jpg', description: 'One of the tallest dams in the world with water sports and scenic beauty.', link: '/destinations/tehri-dam', category: 'adventure' },
  { name: 'Yamunotri', image: '/Uttarakhand/yamunotri/About+Images/Images/yamunotri.webp', description: 'Source of Yamuna River, starting point of Char Dham Yatra.', link: '/destinations/yamunotri', category: 'pilgrimage' },
  { name: 'Chakrata', image: '/images/pack-7.jpg', description: 'Offbeat hill station with pristine forests and Tiger Falls.', link: '/destinations/chakrata', category: 'hill-station' },
  { name: 'Dhanaulti', image: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/dhanaulti.jpeg', description: 'Quiet hill station perfect for nature lovers and peace seekers.', link: '/destinations/dhanaulti', category: 'hill-station' }
];

export default AllDestinations;
