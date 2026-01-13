import React, { useState, useEffect } from 'react';

const Gangotri = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    '/Uttarakhand/Gangotari/About+Images/Images/Gangotri.jpeg',
    '/Uttarakhand/Gangotari/About+Images/Images/Gangotari.jpg',
    '/Uttarakhand/Gangotari/About+Images/Images/Gangotari3.jpg',
    '/Uttarakhand/Gangotari/About+Images/Images/gangotari4.jpg',
    '/Uttarakhand/Gangotari/About+Images/Images/Gangotari5.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const fancyHeading = (text) => text.split('').map((char, i) => <span key={i}>{char}</span>);

  const food = {
    local: { name: 'Simple Vegetarian Meals', image: '/Uttarakhand/Gangotari/About+Images/Images/rajma-chawal.jpg', desc: 'Dal, rice, roti, and simple Garhwali dishes like Rajma Chawal.' },
    street: { name: 'Aloo Puri & Snacks', image: '/Uttarakhand/Gangotari/About+Images/Images/AlooPuri.jpg', desc: 'Hot Aloo Puri, pakoras, and dry snacks from local stalls.' },
    cafes: { name: 'Herbal Tea', image: '/Uttarakhand/Gangotari/About+Images/Images/Herbal-Tea.webp', desc: 'Herbal teas and hot beverages to keep warm in cold weather.' },
    restaurants: { name: 'Dry Snacks', image: '/Uttarakhand/Gangotari/About+Images/Images/dry snacks.jpg', desc: 'Dry fruits, nuts, and energy bars for trekkers and pilgrims.' }
  };

  const accommodation = {
    dharamshalas: 'GMVN Tourist Rest House and various dharamshalas offer basic accommodation for pilgrims.',
    guesthouses: 'Simple guesthouses and lodges available near the temple with basic amenities.',
    camping: 'Camping sites along the trek route for adventure enthusiasts.',
    note: 'Accommodations are basic due to remote location. Book in advance during peak season (May-June, Sept-Oct).'
  };

  const attractions = [
    { name: 'Bhagirathi Shila', image: '/Uttarakhand/Gangotari/Nearby Attraction/Bhagirathi-shila-Gangotri.jpg', distance: '0.5 km', desc: 'Sacred rock where King Bhagirath meditated to bring Ganga to earth.' },
    { name: 'Pandava Gufa', image: '/Uttarakhand/Gangotari/Nearby Attraction/pandav-gufa.jpg', distance: '1.5 km', desc: 'Cave where Pandavas meditated during their journey to heaven.' },
    { name: 'Surya Kund', image: '/Uttarakhand/Gangotari/Nearby Attraction/surya-kund-waterfall-gangotri.jpg', distance: '1 km', desc: 'Hot water spring near Gangotri temple, considered sacred for bathing.' }
  ];

  const activities = [
    { name: 'Temple Pilgrimage', image: '/Uttarakhand/Gangotari/About+Images/Images/Gangotri.jpeg', desc: 'Visit the sacred Gangotri Temple, source of River Ganga, and attend evening aarti.' },
    { name: 'Trekking', image: '/Uttarakhand/Gangotari/About+Images/Images/Trekking.jpg', desc: 'Trek to Gaumukh (18 km), the actual source of Ganga, and Tapovan meadows.' },
    { name: 'Photography', image: '/Uttarakhand/Gangotari/About+Images/Images/Photography.jpg', desc: 'Capture stunning Himalayan peaks, glaciers, and pristine natural beauty.' },
    { name: 'Spiritual Practices', image: '/Uttarakhand/Gangotari/About+Images/Images/spiritual practices.jpg', desc: 'Meditation, yoga, and spiritual practices in the serene Himalayan environment.' }
  ];

  const travelTips = [
    'Temple opens only from May to November, closes in winter due to heavy snowfall',
    'Carry warm clothing even in summer as temperatures drop significantly at night',
    'Acclimatize properly due to high altitude (3,100 m)',
    'Respect local customs and dress modestly at religious sites',
    'Carry sufficient cash as ATMs are limited',
    'Book accommodation in advance during peak pilgrimage season'
  ];

  return (
    <>
      <div className="image-container" style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
        {heroImages.map((img, index) => (
          <img key={index} src={img} alt={`Gangotri ${index + 1}`} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: currentImageIndex === index ? 1 : 0, transition: 'opacity 1s' }} />
        ))}
        <button onClick={() => setCurrentImageIndex((currentImageIndex - 1 + heroImages.length) % heroImages.length)} style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', fontSize: '3rem', cursor: 'pointer', padding: '1rem 2rem', borderRadius: '50%' }}>←</button>
        <button onClick={() => setCurrentImageIndex((currentImageIndex + 1) % heroImages.length)} style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', fontSize: '3rem', cursor: 'pointer', padding: '1rem 2rem', borderRadius: '50%' }}>→</button>
      </div>

      <h1 className="heading">{fancyHeading('gangotri')}</h1>

      <section className="about-destination">
        <div><br />
          <h2>Gangotri: Source of the Holy Ganges</h2><br />
          <p><strong>Gangotri</strong>, situated at an altitude of 3,100 meters in the Uttarkashi district of Uttarakhand, is one of the four sacred shrines of the Char Dham pilgrimage. It is revered as the place where Goddess Ganga descended to earth from heaven, brought down by King Bhagirath's penance.</p><br />
          <p>The <u>Gangotri Temple</u>, dedicated to Goddess Ganga, was built by Gorkha General Amar Singh Thapa in the 18th century. The temple is constructed in traditional North Indian style with white granite and stands majestically against the backdrop of snow-capped Himalayan peaks. The sacred Bhagirathi River, which later becomes the Ganges, flows near the temple.</p><br />
          <p>Gangotri serves as the base for the trek to <strong>Gaumukh</strong> (18 km), the actual source of the Ganges at the snout of the Gangotri Glacier. The region offers breathtaking views of peaks like Shivling, Meru, and Bhagirathi. The spiritual atmosphere, combined with pristine natural beauty, makes Gangotri a must-visit destination for pilgrims and trekkers alike.</p><br />
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading('visit-time&itineraries')}</h1><br />
        <div className="box-container">
          <div className="best-time-to-visit"><br />
            <h2>Best Time to Visit:</h2>
            <ul><br />
              <li><strong>* May to June:</strong> Temple opens in late April/early May. Pleasant weather for pilgrimage and trekking.</li><br />
              <li><strong>* September to October:</strong> Post-monsoon season with clear skies and comfortable temperatures.</li><br />
              <li><strong>* Avoid July-August:</strong> Heavy monsoon rains cause landslides and dangerous conditions.</li><br />
              <li><strong>* November to April:</strong> Temple closes due to extreme cold and heavy snowfall.</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2><br />
            <h3>2-Day Itinerary</h3>
            <ul><br />
              <li><strong>Day 1:</strong> Arrive Gangotri, visit temple, attend evening aarti, explore Bhagirathi Shila</li>
              <li><strong>Day 2:</strong> Visit Surya Kund, Pandava Gufa, departure</li>
            </ul><br />
            <h3>3-Day Itinerary</h3>
            <p>Includes 2-day itinerary</p>
            <ul>
              <li><strong>Day 3:</strong> Day trek to Gaumukh (18 km one way) or Bhojbasa, return same day</li>
            </ul><br />
            <h3>4-Day Itinerary</h3>
            <p>Includes 2-day itinerary</p>
            <ul>
              <li><strong>Day 3:</strong> Trek to Gaumukh, overnight at Bhojbasa</li>
              <li><strong>Day 4:</strong> Trek to Tapovan, return to Gangotri</li>
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
          <h3>Dharamshalas & Rest Houses</h3>
          <p>{accommodation.dharamshalas}</p><br />
          <h3>Guesthouses</h3>
          <p>{accommodation.guesthouses}</p><br />
          <h3>Camping</h3>
          <p>{accommodation.camping}</p><br />
          <p><strong>Note:</strong> {accommodation.note}</p>
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
            <p>Nearest airport is Jolly Grant Airport, Dehradun (250 km). Taxis and buses available to Gangotri via Uttarkashi.</p><br />
          </div>
        </div>
        <div className="card">
          <div className="card-image"><img src="/images/gallery/by-train.jpg" alt="By Train" /></div>
          <div className="card-content">
            <h3>By Train</h3><br />
            <p>Nearest railway stations are Rishikesh (225 km) and Haridwar (250 km). Regular buses and taxis to Gangotri.</p><br />
          </div>
        </div>
        <div className="card">
          <div className="card-image"><img src="/images/gallery/by-road.jpg" alt="By Road" /></div>
          <div className="card-content">
            <h3>By Road</h3><br />
            <p>Well-connected by road from Dehradun (250 km), Rishikesh (225 km), and Uttarkashi (100 km). State buses and taxis available.</p><br />
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

export default Gangotri;
