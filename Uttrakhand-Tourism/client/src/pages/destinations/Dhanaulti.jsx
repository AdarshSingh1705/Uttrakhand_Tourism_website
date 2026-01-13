import React, { useState, useEffect, useRef } from 'react';

const Dhanaulti = () => {
  const heroImages = [
    '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/dhanaulti.jpeg',
    '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/dhanaulti1.jpg',
    '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/dhanaulti2.jpg',
    '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/dhanaulti3.jpg',
    '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/dhanaulti4.webp'
  ];

  const attractions = [
    { id: 1, title: 'Eco Park', img: '/images/g-5.jpg', distance: '2 km', description: 'Beautiful park with deodar forests, walking trails, and panoramic Himalayan views.' },
    { id: 2, title: 'Surkanda Devi Temple', img: '/images/g-6.jpg', distance: '8 km', description: 'Ancient temple at 2,757 m, 2 km trek from road, stunning 360-degree views.' },
    { id: 3, title: 'Apple Orchards', img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/apple orchad.webp', distance: '1 km', description: 'Lush apple orchards offering fresh fruits and scenic countryside walks.' }
  ];

  const activities = [
    { id: 'trek', title: 'Trekking', img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/trekking.jpg', short: 'Trekking', long: 'Trek through deodar forests to Surkanda Devi temple and nearby peaks.' },
    { id: 'camp', title: 'Camping', img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/camping.avif', short: 'Camping', long: 'Camp under starry skies surrounded by pine and deodar forests.' },
    { id: 'nature', title: 'Nature Walks', img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/nature walk.webp', short: 'Nature Walks', long: 'Peaceful walks through Eco Park and forest trails with bird watching.' },
    { id: 'photo', title: 'Photography', img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/photography.jpg', short: 'Photography', long: 'Capture stunning Himalayan views, apple orchards, and misty landscapes.' }
  ];

  const accommodation = {
    resorts: 'Eco-resorts and cottages amidst deodar forests with mountain views.',
    hotels: 'Budget to mid-range hotels along main road.',
    camps: 'Adventure camps offering tented accommodation and activities.',
    note: 'Limited options. Book in advance during peak season.'
  };

  const food = {
    local: { name: 'Garhwali Cuisine', img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/phaanu.jpg', items: 'Phaanu, Chainsoo, Kafuli, local Garhwali dishes.' },
    street: { name: 'Street Food', img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/momos.jpg', items: 'Momos, Maggi, pakoras at roadside stalls.' },
    cafes: { name: 'Cafes', img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/cafes.webp', items: 'Tea, coffee, snacks at small cafes with valley views.' },
    restaurants: { name: 'Fresh Apples', img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/7. Dhanaulti/About+Images/Images/apples.webp', items: 'Fresh apples from local orchards, apple products, North Indian meals.' }
  };

  const travelTips = [
    { title: 'Season', text: 'Best time March-June and September-November. Winter (Dec-Feb) for snow.' },
    { title: 'Clothing', text: 'Carry warm clothes year-round. Temperatures drop significantly at night.' },
    { title: 'Activities', text: 'Book adventure activities in advance. Limited options available.' },
    { title: 'Peaceful', text: 'Less crowded than Mussoorie. Perfect for quiet getaway and relaxation.' }
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
              <img src={src} alt={`Dhanaulti ${idx + 1}`} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={next}>→</button>
      </section>

      <h1 className="heading">{fancyHeading('dhanaulti')}</h1>

      <section className="about-destination">
        <div>
          <h2>Dhanaulti: Serene Hill Station</h2>
          <p><strong>Dhanaulti</strong>, located at 2,286 meters in Tehri Garhwal district, is a quiet hill station surrounded by dense <u>deodar, oak, and rhododendron forests</u>. Less commercialized than nearby Mussoorie, it offers a peaceful retreat with stunning Himalayan views.</p>
          <p>The town is famous for its <strong>Eco Parks</strong> - Amber and Dhara - maintained by the Forest Department, offering nature walks and adventure activities. The area is dotted with apple orchards, making it a picturesque destination for nature lovers and photographers.</p>
          <p>Dhanaulti serves as a base for trekking to <strong>Surkanda Devi Temple</strong> and exploring nearby attractions. The crisp mountain air, serene environment, and panoramic views of snow-capped peaks make it an ideal destination for a peaceful getaway.</p>
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading('visit-time&itineraries')}</h1>
        <div className="box-container">
          <div className="best-time-to-visit">
            <h2>Best Time to Visit</h2>
            <ul>
              <li><strong>March–June:</strong> Pleasant weather, ideal for sightseeing and outdoor activities.</li>
              <li><strong>September–November:</strong> Post-monsoon, clear views, comfortable temperatures.</li>
              <li><strong>December–February:</strong> Snowfall, winter wonderland, cold weather.</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2>
            <h3>2-Day Itinerary</h3>
            <ul>
              <li>Day 1: Arrive, visit Eco Parks, nature walks, camping</li>
              <li>Day 2: Trek to Surkanda Devi, explore apple orchards</li>
            </ul>
            <h3>3-Day Itinerary</h3>
            <p>Includes 2-day itinerary plus:</p>
            <ul><li>Day 3: Day trip to Mussoorie or Kanatal, photography</li></ul>
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
          <h3>Eco-Resorts</h3><p>{accommodation.resorts}</p>
          <h3>Hotels</h3><p>{accommodation.hotels}</p>
          <h3>Adventure Camps</h3><p>{accommodation.camps}</p>
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
            <p>Nearest airport: Jolly Grant Airport, Dehradun (82 km). Taxis available to Dhanaulti.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" />
            <h3>By Train</h3>
            <p>Nearest railway station: Dehradun (62 km). Taxis and buses available.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" />
            <h3>By Road</h3>
            <p>Well connected by road. Route: Dehradun → Mussoorie → Dhanaulti (62 km). Regular buses and taxis available.</p>
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

export default Dhanaulti;
