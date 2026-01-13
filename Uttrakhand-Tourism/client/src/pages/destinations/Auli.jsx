import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auli = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    '/Uttarakhand/Auli/About+Images/Images/Auli.jpeg',
    '/Uttarakhand/Auli/About+Images/Images/Auli2.webp',
    '/Uttarakhand/Auli/About+Images/Images/Auli3.jpg',
    '/Uttarakhand/Auli/About+Images/Images/Auli4.jpg',
    '/Uttarakhand/Auli/About+Images/Images/Auli5.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const fancyHeading = (text) => text.split('').map((char, i) => <span key={i}>{char}</span>);

  const food = {
    local: { name: 'Garhwali Cuisine', image: '/Uttarakhand/Auli/About+Images/Images/garhwali.jpg', desc: 'Traditional dishes like Aloo ke Gutke, Kafuli, and Jhangora Kheer.' },
    street: { name: 'Momos & Snacks', image: '/Uttarakhand/Auli/About+Images/Images/momos.jpg', desc: 'Hot momos, Maggi, and pakoras from local stalls.' },
    cafes: { name: 'Bakeries', image: '/Uttarakhand/Auli/About+Images/Images/bakeries.jpg', desc: 'Fresh bread, cakes, and hot beverages at mountain cafes.' },
    restaurants: { name: 'Continental Cuisine', image: '/Uttarakhand/Auli/About+Images/Images/Continental Cuisine.jpeg', desc: 'Multi-cuisine restaurants offering Indian, Chinese, and Continental food.' }
  };

  const accommodation = {
    luxury: 'Clifftop Club Resort and The Tattva Resort offer premium amenities with stunning mountain views.',
    midRange: 'Hotel Mount View and GMVN Tourist Rest House provide comfortable stays at reasonable prices.',
    budget: 'Budget guesthouses and lodges available in Joshimath (16 km away) for economical travelers.',
    camping: 'Camping sites near Auli Lake and Gorson Bugyal offer adventurous stays under the stars.'
  };

  const attractions = [
    { name: 'Auli Artificial Lake', image: '/Uttarakhand/Auli/Nearby Attraction/auli artificial lake.jpg', distance: '2 km', desc: 'One of the highest man-made lakes, used for snow-making for skiing.' },
    { name: 'Gorson Bugyal', image: '/Uttarakhand/Auli/Nearby Attraction/Gorson_Bugyal.jpg', distance: '3 km', desc: 'Alpine meadow offering panoramic views of Nanda Devi and Trishul peaks.' },
    { name: 'Joshimath', image: '/Uttarakhand/Auli/Nearby Attraction/Joshimath.jpg', distance: '16 km', desc: 'Gateway to Auli, known for Narsingh Temple and winter seat of Badrinath deity.' }
  ];

  const activities = [
    { name: 'Skiing', image: '/Uttarakhand/Auli/About+Images/Images/skiing.avif', desc: 'Premier skiing destination with slopes for beginners and professionals.' },
    { name: 'Ropeway Rides', image: '/Uttarakhand/Auli/About+Images/Images/ropeway rides.webp', desc: 'Asia\'s longest ropeway (4 km) offering breathtaking Himalayan views.' },
    { name: 'Trekking', image: '/Uttarakhand/Auli/About+Images/Images/trekking.jpg', desc: 'Treks to Kuari Pass, Gorson Bugyal, and Chenab Lake.' },
    { name: 'Camping', image: '/Uttarakhand/Auli/About+Images/Images/camping.jpg', desc: 'Camping under starlit skies with bonfires and mountain views.' }
  ];

  const travelTips = [
    'Best time: December-March for skiing, April-June for trekking',
    'Carry warm clothing even in summer as temperatures drop at night',
    'Book skiing equipment and instructors in advance during peak season',
    'Acclimatize properly due to high altitude (2,500-3,050 m)',
    'Stay in Joshimath if Auli accommodations are full'
  ];

  return (
    <>
      <div className="image-container" style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
        {heroImages.map((img, index) => (
          <img key={index} src={img} alt={`Auli ${index + 1}`} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: currentImageIndex === index ? 1 : 0, transition: 'opacity 1s' }} />
        ))}
        <button onClick={() => setCurrentImageIndex((currentImageIndex - 1 + heroImages.length) % heroImages.length)} style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', fontSize: '3rem', cursor: 'pointer', padding: '1rem 2rem', borderRadius: '50%' }}>←</button>
        <button onClick={() => setCurrentImageIndex((currentImageIndex + 1) % heroImages.length)} style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', fontSize: '3rem', cursor: 'pointer', padding: '1rem 2rem', borderRadius: '50%' }}>→</button>
      </div>

      <h1 className="heading">{fancyHeading('auli')}</h1>

      <section className="about-destination">
        <div><br />
          <h2>Auli: The Skiing Paradise of India</h2><br />
          <p><strong>Auli</strong> is a picturesque hill station in Chamoli district of Uttarakhand, renowned as India's premier skiing destination. Perched at an altitude of 2,500 to 3,050 meters, Auli offers pristine snow-covered slopes and breathtaking views of the Himalayan peaks including Nanda Devi, Kamet, Mana Parvat, and Dunagiri.</p><br />
          <p>The name "Auli" means "meadow" in the local language, and true to its name, the region transforms into lush green meadows during summer and a white wonderland in winter. Auli is home to Asia's longest cable car (ropeway) stretching 4 kilometers from Joshimath to Auli, offering spectacular aerial views of the mountains.</p><br />
          <p>Beyond skiing, Auli serves as a base for numerous treks including the famous Kuari Pass trek. The artificial lake, one of the highest in the world, is used for making snow for skiing and adds to the scenic beauty. Whether you're an adventure enthusiast or nature lover, Auli promises an unforgettable Himalayan experience.</p><br />
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading('visit-time&itineraries')}</h1><br />
        <div className="box-container">
          <div className="best-time-to-visit"><br />
            <h2>Best Time to Visit:</h2>
            <ul><br />
              <li><strong>* December to March:</strong> Perfect for skiing with heavy snowfall and ideal slopes.</li><br />
              <li><strong>* April to June:</strong> Pleasant weather for trekking, ropeway rides, and meadow walks.</li><br />
              <li><strong>* July to September:</strong> Monsoon season, avoid due to landslides and slippery trails.</li><br />
              <li><strong>* October to November:</strong> Clear skies, fewer tourists, great for photography.</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2><br />
            <h3>2-Day Itinerary</h3>
            <ul><br />
              <li><strong>Day 1:</strong> Arrive Joshimath, ropeway to Auli, skiing/snow activities, sunset views</li>
              <li><strong>Day 2:</strong> Visit Auli Lake, Gorson Bugyal trek, return to Joshimath</li>
            </ul><br />
            <h3>3-Day Itinerary</h3>
            <p>Includes 2-day itinerary</p>
            <ul>
              <li><strong>Day 3:</strong> Joshimath sightseeing (Narsingh Temple), departure</li>
            </ul><br />
            <h3>4-Day Itinerary</h3>
            <p>Includes 3-day itinerary</p>
            <ul>
              <li><strong>Day 4:</strong> Kuari Pass trek or visit Chenab Lake, camping experience</li>
            </ul>
          </div>
        </div>
      </section>

      <br /><br /><br />
      <h1 className="heading">{fancyHeading('Food&cusine')}</h1>
      <section className="food-cuisine">
        {Object.values(food).map((item, i) => (
          <div key={i} className={i === 0 ? 'local-cuisine' : i === 1 ? 'street-food' : i === 2 ? 'cafes-bakeries' : 'restaurants'}>
            <h3>{item.name}</h3><br />
            <img src={item.image} alt={item.name} /><br />
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="accommodation-options">
        <h1 className="heading">{fancyHeading('accommodations')}</h1>
        <div className="accommodation-container">
          <h3>Luxury Resorts</h3>
          <p>{accommodation.luxury}</p><br />
          <h3>Mid-Range Hotels</h3>
          <p>{accommodation.midRange}</p><br />
          <h3>Budget Options</h3>
          <p>{accommodation.budget}</p><br />
          <h3>Camping</h3>
          <p>{accommodation.camping}</p><br />
        </div>
      </section>

      <br /><br /><br />
      <section className="Attractions">
        <h1 className="heading">{fancyHeading('nearby-attractions')}</h1><br /><br />
        <div className="nearby-attractions">
          {attractions.map((attr, i) => (
            <div key={i} className="attraction-card">
              <img src={attr.image} alt={attr.name} />
              <div className="overlay">
                <h2>{attr.name}</h2>
                <p><strong>Distance:</strong> {attr.distance}</p>
                <p>{attr.desc}</p>
                <button className="btn" onClick={() => navigate(`/destinations/${attr.name.toLowerCase().replace(/ /g, '-')}`)}>Explore</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <br /><br /><br />
      <h1 className="heading">{fancyHeading('how-to-reach')}</h1><br />
      <section className="how-to-reach">
        <div className="card">
          <div className="card-image"><img src="/images/gallery/by-air.png" alt="By Air" /></div>
          <div className="card-content">
            <h3>By Air</h3><br />
            <p>Nearest airport is Jolly Grant Airport, Dehradun (280 km). Taxis and buses available to Joshimath, then ropeway/taxi to Auli.</p><br />
          </div>
        </div>
        <div className="card">
          <div className="card-image"><img src="/images/gallery/by-train.jpg" alt="By Train" /></div>
          <div className="card-content">
            <h3>By Train</h3><br />
            <p>Nearest railway station is Rishikesh (250 km) or Haridwar (273 km). Regular buses and taxis to Joshimath.</p><br />
          </div>
        </div>
        <div className="card">
          <div className="card-image"><img src="/images/gallery/by-road.jpg" alt="By Road" /></div>
          <div className="card-content">
            <h3>By Road</h3><br />
            <p>Well-connected by road from Delhi (500 km), Dehradun (280 km), and Rishikesh (250 km). State buses and private taxis available.</p><br />
          </div>
        </div>
      </section>

      <br /><br />
      <h1 className="heading">{fancyHeading('activities')}</h1><br />
      <section className="activity" id="activity-section">
        {activities.map((act, i) => (
          <div key={i} className="activity-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={act.image} alt={act.name} /><br />
                <h3>{act.name}</h3>
              </div>
              <div className="card-back">
                <h3>{act.name}</h3>
                <p>{act.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <br /><br />
      <section className="travel-tips">
        <h1 className="heading">{fancyHeading('travel-tips')}</h1><br />
        <div className="tips-container">
          {travelTips.map((tip, i) => (
            <div key={i} className="tip-card">
              <i className="fas fa-check-circle" style={{ color: 'var(--orange)', fontSize: '2rem', marginRight: '1rem' }}></i>
              <p>{tip}</p>
            </div>
          ))}
        </div>
      </section>
      <br /><br /><br />
    </>
  );
};

export default Auli;
