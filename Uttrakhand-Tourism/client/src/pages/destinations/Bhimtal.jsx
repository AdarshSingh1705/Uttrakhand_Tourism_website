import React, { useState, useEffect, useRef } from 'react';

const Bhimtal = () => {
  const heroImages = ['/images/g-1.jpg', '/images/g-11.jpg', '/images/pack-7.jpg', '/images/pic-11.jpg'];

  const attractions = [
    { id: 1, title: 'Bhimtal Lake', img: '/images/g-1.jpg', distance: '0 km', description: 'Larger than Naini Lake, C-shaped lake with island aquarium, boating, and serene views.' },
    { id: 2, title: 'Naukuchiatal', img: '/images/g-2.jpg', distance: '5 km', description: 'Nine-cornered lake, pristine and less crowded, ideal for bird watching and kayaking.' },
    { id: 3, title: 'Sattal', img: '/images/g-3.jpg', distance: '8 km', description: 'Cluster of seven interconnected lakes, rich biodiversity, perfect for nature lovers.' }
  ];

  const activities = [
    { id: 'boat', title: 'Boating', img: '/images/pack-7.jpg', short: 'Boating', long: 'Enjoy paddle boats, row boats, and sailing on Bhimtal Lake.' },
    { id: 'trek', title: 'Trekking', img: '/images/pic-8.jpg', short: 'Trekking', long: 'Trek to nearby viewpoints and through oak and pine forests.' },
    { id: 'bird', title: 'Bird Watching', img: '/images/pic-9.jpg', short: 'Bird Watching', long: 'Spot diverse bird species around lakes and forests.' },
    { id: 'aqua', title: 'Aquarium Visit', img: '/images/g-1.jpg', short: 'Aquarium', long: 'Visit island aquarium in Bhimtal Lake, Uttarakhand\'s only island aquarium.' }
  ];

  const accommodation = { hotels: 'Lakeside hotels and resorts with scenic views.', budget: 'Budget guesthouses and homestays.', note: 'Book in advance during peak season.' };
  const food = {
    local: { name: 'Kumaoni Cuisine', img: '/images/aloo-k-gutke.jpg', items: 'Bhatt ki Churkani, Aloo ke Gutke, Bal Mithai.' },
    street: { name: 'Street Food', img: '/images/Bun Tikki.jpeg.jpg', items: 'Momos, pakoras, Maggi at lakeside stalls.' },
    cafes: { name: 'Cafes', img: '/images/black pepper.jpeg.jpg', items: 'Tea, coffee, snacks at lakeside cafes.' },
    restaurants: { name: 'Restaurants', img: '/images/aloo-k-gutke.jpg', items: 'North Indian, Chinese, and local Kumaoni dishes.' }
  };

  const travelTips = [
    { title: 'Season', text: 'Best time March-June and September-November. Pleasant weather for lake activities.' },
    { title: 'Boating', text: 'Boating available throughout the day. Life jackets provided.' },
    { title: 'Peaceful', text: 'Less crowded than Nainital. Perfect for quiet lakeside retreat.' },
    { title: 'Nearby', text: 'Explore nearby Naukuchiatal and Sattal lakes for complete experience.' }
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
              <img src={src} alt={`Bhimtal ${idx + 1}`} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={() => setIndex((i) => (i + 1) % heroImages.length)}>→</button>
      </section>

      <h1 className="heading">{fancyHeading('bhimtal')}</h1>

      <section className="about-destination">
        <div>
          <h2>Bhimtal: Serene Lake Paradise</h2>
          <p><strong>Bhimtal</strong>, located at 1,370 meters in Nainital district, is a picturesque lake town named after <u>Bhima</u> from Mahabharata. The C-shaped Bhimtal Lake is larger than Nainital's Naini Lake and features a unique island with Uttarakhand's only aquarium.</p>
          <p>Less commercialized than Nainital, Bhimtal offers a peaceful retreat with stunning natural beauty. The lake is surrounded by lush green hills and offers various water activities including boating, kayaking, and fishing.</p>
          <p>The town serves as a gateway to nearby lakes like <strong>Naukuchiatal</strong> and <strong>Sattal</strong>, making it perfect for a lake circuit tour. The serene environment, pleasant climate, and scenic beauty make Bhimtal an ideal destination for nature lovers and peace seekers.</p>
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading('visit-time&itineraries')}</h1>
        <div className="box-container">
          <div className="best-time-to-visit">
            <h2>Best Time to Visit</h2>
            <ul>
              <li><strong>March–June:</strong> Pleasant weather, ideal for lake activities and sightseeing.</li>
              <li><strong>September–November:</strong> Post-monsoon, clear views, comfortable temperatures.</li>
              <li><strong>December–February:</strong> Cold weather, occasional snowfall, winter charm.</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2>
            <h3>2-Day Itinerary</h3>
            <ul>
              <li>Day 1: Bhimtal Lake boating, island aquarium, lakeside walks</li>
              <li>Day 2: Visit Naukuchiatal and Sattal lakes</li>
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
          <h3>Lakeside Hotels</h3><p>{accommodation.hotels}</p>
          <h3>Budget Options</h3><p>{accommodation.budget}</p>
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
            <p>Nearest airport: Pantnagar Airport (55 km). Taxis available to Bhimtal.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" />
            <h3>By Train</h3>
            <p>Nearest railway station: Kathgodam (22 km). Taxis and buses available.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" />
            <h3>By Road</h3>
            <p>Well connected by road. Regular buses from Delhi, Kathgodam, Nainital. 300 km from Delhi.</p>
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

export default Bhimtal;
