import React, { useState, useEffect, useRef } from 'react';

const Badrinath = () => {
  const heroImages = [
    '/images/pack-4.jpg',
    '/images/pic-4.jpg',
    '/images/g-4.jpg',
    '/images/pack-11.jpg'
  ];

  const attractions = [
    { id: 1, title: 'Mana Village', img: '/images/g-5.jpg', distance: '3 km', description: 'Last Indian village before Tibet border, ancient village with Vyas Gufa and Ganesh Gufa.' },
    { id: 2, title: 'Vasudhara Falls', img: '/images/g-6.jpg', distance: '9 km', description: '122 meters high waterfall, 6 km trek from Mana village through scenic landscapes.' },
    { id: 3, title: 'Tapt Kund', img: '/images/g-7.jpg', distance: '0.5 km', description: 'Natural hot water spring near temple, pilgrims take holy dip before darshan.' }
  ];

  const activities = [
    { id: 'pilgrimage', title: 'Temple Darshan', img: '/images/pack-4.jpg', short: 'Temple Darshan', long: 'Visit sacred Badrinath Temple, one of Char Dham shrines dedicated to Lord Vishnu.' },
    { id: 'trek', title: 'Trekking', img: '/images/g-8.jpg', short: 'Trekking', long: 'Trek to Vasudhara Falls, Satopanth Lake, and explore Mana village trails.' },
    { id: 'meditation', title: 'Meditation', img: '/images/g-9.jpg', short: 'Meditation', long: 'Practice meditation at ancient caves like Vyas Gufa and peaceful riverside spots.' },
    { id: 'explore', title: 'Exploration', img: '/images/g-10.jpg', short: 'Exploration', long: 'Explore Brahma Kapal, Neelkanth Peak views, and ancient pilgrimage routes.' }
  ];

  const accommodation = {
    gmvn: 'GMVN Tourist Rest House with basic amenities near temple.',
    dharamshala: 'Temple-run dharamshalas and guesthouses for pilgrims.',
    hotels: 'Budget to mid-range hotels along main road.',
    note: 'Book in advance during peak season (May-June, Sep-Oct).'
  };

  const food = {
    local: { name: 'Prasad & Simple Food', img: '/images/aloo-k-gutke.jpg', items: 'Temple prasad, simple vegetarian meals, khichdi, puri.' },
    street: { name: 'North Indian', img: '/images/Bun Tikki.jpeg.jpg', items: 'Dal, rice, roti, sabzi at local dhabas and eateries.' },
    cafes: { name: 'Tea & Snacks', img: '/images/black pepper.jpeg.jpg', items: 'Hot tea, pakoras, Maggi at small cafes.' },
    restaurants: { name: 'Vegetarian Meals', img: '/images/aloo-k-gutke.jpg', items: 'Pure vegetarian thalis and North Indian cuisine.' }
  };

  const travelTips = [
    { title: 'Season', text: 'Temple open May-November. Best time May-June and September-October.' },
    { title: 'Altitude', text: 'At 3,300 m altitude. Acclimatize properly, avoid overexertion.' },
    { title: 'Clothing', text: 'Carry warm clothes even in summer. Temperatures drop at night.' },
    { title: 'Respect', text: 'Maintain temple sanctity. Photography restricted inside temple.' }
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
              <img src={src} alt={`Badrinath ${idx + 1}`} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={next}>→</button>
      </section>

      <h1 className="heading">{fancyHeading('badrinath')}</h1>

      <section className="about-destination">
        <div>
          <h2>Badrinath: Sacred Char Dham Shrine</h2>
          <p><strong>Badrinath</strong>, located in Chamoli district at 3,300 meters, is one of the most sacred Hindu pilgrimage sites and part of the revered <u>Char Dham Yatra</u>. The ancient temple dedicated to Lord Vishnu sits between Nar and Narayan mountain ranges along the Alaknanda River.</p>
          <p>The temple, believed to be established by <strong>Adi Shankaracharya</strong> in the 8th century, houses a 1-meter tall black stone idol of Lord Badrinarayan. The temple opens only 6 months a year (May-November) due to extreme winter conditions.</p>
          <p>Badrinath is surrounded by stunning Himalayan peaks including <strong>Neelkanth Peak</strong> (6,596 m), considered the Garhwal Queen. The town offers spiritual solace, ancient legends, and breathtaking mountain vistas making it a complete pilgrimage experience.</p>
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
              <li>Day 1: Arrive Badrinath, temple darshan, Tapt Kund, evening aarti</li>
              <li>Day 2: Visit Mana village, Vyas Gufa, Bhim Pul, return</li>
            </ul>
            <h3>3-Day Itinerary</h3>
            <p>Includes 2-day itinerary plus:</p>
            <ul><li>Day 3: Trek to Vasudhara Falls (6 km from Mana)</li></ul>
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
          <h3>GMVN Rest House</h3><p>{accommodation.gmvn}</p>
          <h3>Dharamshalas</h3><p>{accommodation.dharamshala}</p>
          <h3>Hotels</h3><p>{accommodation.hotels}</p>
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
            <p>Nearest airport: Jolly Grant Airport, Dehradun (317 km). Helicopter services available from Dehradun and Phata.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" />
            <h3>By Train</h3>
            <p>Nearest railway station: Rishikesh (294 km). Taxis and buses available to Badrinath via Joshimath.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" />
            <h3>By Road</h3>
            <p>Well connected by road. Regular buses from Rishikesh, Haridwar. Route: Rishikesh → Devprayag → Rudraprayag → Joshimath → Badrinath.</p>
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

export default Badrinath;
