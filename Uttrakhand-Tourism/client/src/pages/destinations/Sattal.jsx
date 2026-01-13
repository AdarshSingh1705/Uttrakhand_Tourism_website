import React, { useState, useEffect, useRef } from 'react';

const Sattal = () => {
  const heroImages = ['/images/g-3.jpg', '/images/g-4.jpg', '/images/pack-10.png', '/images/pic-14.jpg'];

  const attractions = [
    { id: 1, title: 'Seven Lakes', img: '/images/g-3.jpg', distance: '0 km', description: 'Cluster of seven interconnected freshwater lakes surrounded by oak and pine forests.' },
    { id: 2, title: 'Bhimtal', img: '/images/g-1.jpg', distance: '4 km', description: 'Larger lake with island aquarium, boating, and scenic beauty.' },
    { id: 3, title: 'Naukuchiatal', img: '/images/g-2.jpg', distance: '6 km', description: 'Nine-cornered lake, pristine and ideal for kayaking and bird watching.' }
  ];

  const activities = [
    { id: 'bird', title: 'Bird Watching', img: '/images/pic-9.jpg', short: 'Bird Watching', long: 'Spot 500+ bird species including rare Himalayan birds.' },
    { id: 'kayak', title: 'Kayaking', img: '/images/pack-10.png', short: 'Kayaking', long: 'Kayak through interconnected lakes in serene natural setting.' },
    { id: 'trek', title: 'Nature Walks', img: '/images/pic-8.jpg', short: 'Nature Walks', long: 'Walk through oak forests and around lakes for wildlife spotting.' },
    { id: 'photo', title: 'Photography', img: '/images/pic-11.jpg', short: 'Photography', long: 'Capture pristine lakes, forests, and diverse birdlife.' }
  ];

  const accommodation = { resorts: 'Eco-resorts and nature camps near lakes.', homestays: 'Local homestays for authentic experience.', note: 'Limited options. Book in advance.' };
  const food = {
    local: { name: 'Kumaoni Cuisine', img: '/images/aloo-k-gutke.jpg', items: 'Bhatt ki Churkani, Aloo ke Gutke, local dishes.' },
    street: { name: 'Simple Meals', img: '/images/Bun Tikki.jpeg.jpg', items: 'Basic North Indian food at small eateries.' },
    cafes: { name: 'Tea Stalls', img: '/images/black pepper.jpeg.jpg', items: 'Tea, snacks at lakeside stalls.' },
    restaurants: { name: 'Resort Dining', img: '/images/aloo-k-gutke.jpg', items: 'Multi-cuisine at eco-resorts and camps.' }
  };

  const travelTips = [
    { title: 'Season', text: 'Best time March-June and September-November. Pleasant weather for activities.' },
    { title: 'Birdwatching', text: 'Carry binoculars. Early morning best for bird spotting.' },
    { title: 'Peaceful', text: 'Very quiet and less crowded. Perfect for nature lovers.' },
    { title: 'Eco-Tourism', text: 'Focus on eco-tourism. Respect nature and wildlife.' }
  ];

  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const touchStartX = useRef(null);

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
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? setIndex((i) => (i + 1) % heroImages.length) : setIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
    touchStartX.current = null;
  };

  const fancyHeading = (text) => text.split('').map((ch, i) => <span key={i}>{ch}</span>);

  return (
    <main>
      <section className="image-container">
        <button className="scroll-left" onClick={() => setIndex((i) => (i - 1 + heroImages.length) % heroImages.length)}>←</button>
        <div className="image-wrapper" ref={carouselRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {heroImages.map((src, idx) => (
            <div key={src} className={`image-item ${idx === index ? 'active' : 'inactive'}`} style={{ display: idx === index ? 'block' : 'none' }}>
              <img src={src} alt={`Sattal ${idx + 1}`} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={() => setIndex((i) => (i + 1) % heroImages.length)}>→</button>
      </section>

      <h1 className="heading">{fancyHeading('sattal')}</h1>

      <section className="about-destination">
        <div>
          <h2>Sattal: Seven Lakes Paradise</h2>
          <p><strong>Sattal</strong>, meaning "seven lakes" in Hindi, is a pristine cluster of seven interconnected freshwater lakes located at 1,370 meters in Nainital district. Surrounded by dense oak and pine forests, it's a paradise for nature lovers and bird watchers.</p>
          <p>The lakes - Panna, Ram, Sita, Laxman, Nal Damyanti, Sukha, and Garud Tal - are fed by underground springs and support rich biodiversity. The area is home to over <strong>500 bird species</strong>, making it one of India's best bird watching destinations.</p>
          <p>Less commercialized than nearby Nainital and Bhimtal, Sattal offers a peaceful retreat with opportunities for kayaking, nature walks, and wildlife photography. The serene environment and pristine natural beauty make it perfect for eco-tourism and nature enthusiasts.</p>
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading('visit-time&itineraries')}</h1>
        <div className="box-container">
          <div className="best-time-to-visit">
            <h2>Best Time to Visit</h2>
            <ul>
              <li><strong>March–June:</strong> Pleasant weather, ideal for bird watching and kayaking.</li>
              <li><strong>September–November:</strong> Post-monsoon, migratory birds arrive, clear views.</li>
              <li><strong>December–February:</strong> Cold weather, winter birds, fewer tourists.</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2>
            <h3>2-Day Itinerary</h3>
            <ul>
              <li>Day 1: Explore lakes, bird watching, kayaking</li>
              <li>Day 2: Nature walks, visit Bhimtal and Naukuchiatal</li>
            </ul>
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
          <h3>Homestays</h3><p>{accommodation.homestays}</p>
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
            <p>Nearest airport: Pantnagar Airport (60 km). Taxis available to Sattal.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" />
            <h3>By Train</h3>
            <p>Nearest railway station: Kathgodam (27 km). Taxis and buses available.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" />
            <h3>By Road</h3>
            <p>Well connected by road. Route: Kathgodam → Bhimtal → Sattal (27 km). 310 km from Delhi.</p>
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

export default Sattal;
