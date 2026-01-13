import React, { useState, useEffect, useRef } from 'react';

const Kedarnath = () => {
  const heroImages = [
    '/images/pack-1.JPG',
    '/images/pic-5.jpg',
    '/images/g-11.jpg',
    '/images/pack-12.jpg'
  ];

  const attractions = [
    { id: 1, title: 'Bhairav Temple', img: '/images/g-12.jpg', distance: '0.5 km', description: 'Temple dedicated to Bhairav, believed to protect Kedarnath during winter months.' },
    { id: 2, title: 'Gandhi Sarovar', img: '/images/pic-6.jpg', distance: '3 km', description: 'Crystal clear lake at 3,900 m, ashes of Mahatma Gandhi immersed here.' },
    { id: 3, title: 'Vasuki Tal', img: '/images/pic-7.jpg', distance: '8 km', description: 'High altitude lake at 4,135 m, stunning views of Chaukhamba peaks.' }
  ];

  const activities = [
    { id: 'pilgrimage', title: 'Temple Darshan', img: '/images/pack-1.JPG', short: 'Temple Darshan', long: 'Visit ancient Kedarnath Temple, one of 12 Jyotirlingas and Char Dham shrine.' },
    { id: 'trek', title: 'Trekking', img: '/images/pic-8.jpg', short: 'Trekking', long: '16 km trek from Gaurikund through scenic Himalayan landscapes.' },
    { id: 'meditation', title: 'Meditation', img: '/images/pic-9.jpg', short: 'Meditation', long: 'Practice meditation in serene mountain environment near temple.' },
    { id: 'explore', title: 'Exploration', img: '/images/pic-10.jpg', short: 'Exploration', long: 'Explore nearby lakes, peaks, and ancient pilgrimage routes.' }
  ];

  const accommodation = {
    tents: 'GMVN and private tented accommodations near temple.',
    dharamshala: 'Temple-run dharamshalas and guesthouses for pilgrims.',
    gaurikund: 'Hotels and lodges available at Gaurikund (trek starting point).',
    note: 'Limited accommodation. Book in advance during peak season (May-June).'
  };

  const food = {
    local: { name: 'Simple Vegetarian', img: '/images/aloo-k-gutke.jpg', items: 'Temple prasad, khichdi, puri, simple meals.' },
    street: { name: 'North Indian', img: '/images/Bun Tikki.jpeg.jpg', items: 'Dal, rice, roti, sabzi at local dhabas.' },
    cafes: { name: 'Tea & Snacks', img: '/images/black pepper.jpeg.jpg', items: 'Hot tea, Maggi, biscuits at small stalls.' },
    restaurants: { name: 'Basic Meals', img: '/images/aloo-k-gutke.jpg', items: 'Pure vegetarian thalis at guesthouses.' }
  };

  const travelTips = [
    { title: 'Season', text: 'Temple open May-November. Best time May-June and September-October.' },
    { title: 'Trek', text: '16 km trek from Gaurikund. Ponies and palanquins available. Start early morning.' },
    { title: 'Altitude', text: 'At 3,583 m altitude. Acclimatize properly, carry oxygen if needed.' },
    { title: 'Weather', text: 'Carry warm clothes, raincoat. Weather changes rapidly in mountains.' }
  ];

  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const touchStartX = useRef(null);

  const prev = () => setIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
  const next = () => setIndex((i) => (i + 1) % heroImages.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % heroImages.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [heroImages.length]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { if (diff > 0) next(); else prev(); }
    touchStartX.current = null;
  };

  const fancyHeading = (text) => text.split('').map((ch, i) => <span key={i}>{ch}</span>);

  return (
    <main>
      <section className="image-container">
        <button className="scroll-left" onClick={prev}>←</button>
        <div className="image-wrapper" ref={carouselRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {heroImages.map((src, idx) => (
            <div key={src} className={`image-item ${idx === index ? 'active' : 'inactive'}`} style={{ display: idx === index ? 'block' : 'none' }}>
              <img src={src} alt={`Kedarnath ${idx + 1}`} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={next}>→</button>
      </section>

      <h1 className="heading">{fancyHeading('kedarnath')}</h1>

      <section className="about-destination">
        <div>
          <h2>Kedarnath: Sacred Jyotirlinga Shrine</h2>
          <p><strong>Kedarnath</strong>, located in Rudraprayag district at 3,583 meters, is one of the holiest Hindu pilgrimage sites housing one of the 12 <u>Jyotirlingas</u> of Lord Shiva. Part of the revered <strong>Char Dham Yatra</strong>, it sits near the Mandakini River surrounded by majestic Himalayan peaks.</p>
          <p>The ancient stone temple, believed to be built by <strong>Pandavas</strong> and revived by Adi Shankaracharya in the 8th century, miraculously survived the devastating 2013 Uttarakhand floods. A massive rock behind the temple protected it from destruction, now revered as <u>Bhim Shila</u>.</p>
          <p>The temple opens only 6 months a year (May-November) due to extreme winter conditions. The 16 km trek from Gaurikund through scenic valleys, waterfalls, and mountain vistas makes the pilgrimage a spiritually enriching experience. The backdrop of <strong>Kedarnath Peak</strong> (6,940 m) adds to its divine aura.</p>
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading('visit-time&itineraries')}</h1>
        <div className="box-container">
          <div className="best-time-to-visit">
            <h2>Best Time to Visit</h2>
            <ul>
              <li><strong>May–June:</strong> Temple opening season, pleasant weather, peak pilgrimage time.</li>
              <li><strong>September–October:</strong> Post-monsoon, clear skies, ideal for darshan and trekking.</li>
              <li><strong>Avoid:</strong> July-August (heavy monsoon), November-April (temple closed).</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2>
            <h3>2-Day Itinerary</h3>
            <ul>
              <li>Day 1: Trek from Gaurikund to Kedarnath (16 km), evening darshan</li>
              <li>Day 2: Morning aarti, visit Bhairav Temple, return trek</li>
            </ul>
            <h3>3-Day Itinerary</h3>
            <p>Includes 2-day itinerary plus:</p>
            <ul><li>Day 3: Trek to Gandhi Sarovar or Vasuki Tal, return</li></ul>
          </div>
        </div>
      </section>

      <h1 className="heading">{fancyHeading('food&cusine')}</h1>
      <section className="food-cuisine">
        <div className="local-cuisine"><h3>{food.local.name}</h3><img src={food.local.img} alt={food.local.name} loading="lazy" /><p>{food.local.items}</p></div>
        <div className="street-food"><h3>{food.street.name}</h3><img src={food.street.img} alt={food.street.name} loading="lazy" /><p>{food.street.items}</p></div>
        <div className="cafes-bakeries"><h3>{food.cafes.name}</h3><img src={food.cafes.img} alt={food.cafes.name} loading="lazy" /><p>{food.cafes.items}</p></div>
        <div className="restaurants"><h3>{food.restaurants.name}</h3><img src={food.restaurants.img} alt={food.restaurants.name} loading="lazy" /><p>{food.restaurants.items}</p></div>
      </section>

      <section className="accommodation-options">
        <h1 className="heading">{fancyHeading('accomodations')}</h1>
        <div className="accommodation-container">
          <h3>Tented Camps</h3><p>{accommodation.tents}</p>
          <h3>Dharamshalas</h3><p>{accommodation.dharamshala}</p>
          <h3>Gaurikund Hotels</h3><p>{accommodation.gaurikund}</p>
          <p><strong>Note:</strong> {accommodation.note}</p>
        </div>
      </section>

      <section className="Attractions">
        <h1 className="heading">{fancyHeading('nearby-attractions')}</h1>
        <div className="nearby-attractions">
          {attractions.map((a) => (
            <article key={a.id} className="attraction-card">
              <img src={a.img} alt={a.title} loading="lazy" />
              <div className="overlay">
                <h2>{a.title}</h2>
                <p className="distance">{a.distance}</p>
                <p className="description">{a.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="how-to-reach">
        <h1 className="heading">{fancyHeading('how-to-reach')}</h1>
        <div className="reach-container">
          <div className="reach-option">
            <img src="/images/gallery/by-air.png" alt="By Air" loading="lazy" />
            <h3>By Air</h3>
            <p>Nearest airport: Jolly Grant Airport, Dehradun (239 km). Helicopter services available from Phata, Sersi, and Guptkashi.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" />
            <h3>By Train</h3>
            <p>Nearest railway station: Rishikesh (216 km). Taxis and buses available to Gaurikund via Rudraprayag and Guptkashi.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" />
            <h3>By Road</h3>
            <p>Well connected by road to Gaurikund. Route: Rishikesh → Devprayag → Rudraprayag → Guptkashi → Gaurikund. Then 16 km trek to Kedarnath.</p>
          </div>
        </div>
      </section>

      <section className="activities">
        <h1 className="heading">{fancyHeading('activities')}</h1>
        <div className="activities-grid">
          {activities.map((act) => (
            <div key={act.id} className="activity-card">
              <div className="activity-inner">
                <div className="activity-front">
                  <img src={act.img} alt={act.title} loading="lazy" />
                  <h3>{act.short}</h3>
                </div>
                <div className="activity-back">
                  <h3>{act.title}</h3>
                  <p>{act.long}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="travel-tips">
        <h1 className="heading">{fancyHeading('travel-tips')}</h1>
        <div className="tips-container">
          {travelTips.map((tip, i) => (
            <div key={i} className="tip-card">
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Kedarnath;
