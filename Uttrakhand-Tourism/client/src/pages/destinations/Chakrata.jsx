import React, { useState, useEffect, useRef } from 'react';

const Chakrata = () => {
  const heroImages = ['/images/pack-8.jpg', '/images/pic-13.jpg', '/images/g-7.jpg', '/images/pack-9.jpg'];

  const attractions = [
    { id: 1, title: 'Tiger Falls', img: '/images/g-7.jpg', distance: '20 km', description: 'Highest waterfall in Uttarakhand at 312 feet, 5 km trek through dense forests.' },
    { id: 2, title: 'Deoban', img: '/images/g-8.jpg', distance: '15 km', description: 'Dense deodar forest at 2,800 m, panoramic Himalayan views, bird watching paradise.' },
    { id: 3, title: 'Budher Caves', img: '/images/g-9.jpg', distance: '25 km', description: 'Ancient limestone caves with stalactites and stalagmites, adventure exploration.' }
  ];

  const activities = [
    { id: 'trek', title: 'Trekking', img: '/images/pic-8.jpg', short: 'Trekking', long: 'Trek to Tiger Falls, Deoban, and through pristine forests.' },
    { id: 'camp', title: 'Camping', img: '/images/pic-9.jpg', short: 'Camping', long: 'Camp in forests with bonfire and stargazing experiences.' },
    { id: 'bird', title: 'Bird Watching', img: '/images/pic-10.jpg', short: 'Bird Watching', long: 'Spot rare Himalayan bird species in Deoban forests.' },
    { id: 'photo', title: 'Photography', img: '/images/pic-11.jpg', short: 'Photography', long: 'Capture waterfalls, forests, and mountain landscapes.' }
  ];

  const accommodation = { gmvn: 'GMVN Rest House with basic facilities.', camps: 'Forest camps and eco-lodges.', note: 'Limited options. Book in advance.' };
  const food = {
    local: { name: 'Local Cuisine', img: '/images/aloo-k-gutke.jpg', items: 'Simple Garhwali meals, dal, rice, roti.' },
    street: { name: 'Dhabas', img: '/images/Bun Tikki.jpeg.jpg', items: 'Basic North Indian food at local dhabas.' },
    cafes: { name: 'Tea Stalls', img: '/images/black pepper.jpeg.jpg', items: 'Tea, snacks at small roadside stalls.' },
    restaurants: { name: 'Simple Meals', img: '/images/aloo-k-gutke.jpg', items: 'Limited dining options, mostly home-cooked style.' }
  };

  const travelTips = [
    { title: 'Season', text: 'Best time April-June and September-November. Avoid monsoon for treks.' },
    { title: 'Offbeat', text: 'Remote destination with limited facilities. Carry essentials.' },
    { title: 'Permits', text: 'Some areas require permits as it\'s near cantonment. Check in advance.' },
    { title: 'Fitness', text: 'Moderate fitness required for treks to Tiger Falls and other spots.' }
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
              <img src={src} alt={`Chakrata ${idx + 1}`} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={() => setIndex((i) => (i + 1) % heroImages.length)}>→</button>
      </section>

      <h1 className="heading">{fancyHeading('chakrata')}</h1>

      <section className="about-destination">
        <div>
          <h2>Chakrata: Offbeat Hill Station</h2>
          <p><strong>Chakrata</strong>, located at 2,118 meters in Dehradun district, is an offbeat hill station known for its pristine natural beauty and tranquility. A cantonment town, it remains less commercialized and offers an authentic mountain experience.</p>
          <p>The town is famous for <strong>Tiger Falls</strong>, Uttarakhand's highest waterfall at 312 feet. The area is covered with dense deodar and oak forests, making it a paradise for nature lovers, trekkers, and bird watchers.</p>
          <p>Chakrata offers stunning views of the <strong>Himalayas</strong> and the Tons River valley. Its remote location, limited tourist infrastructure, and unspoiled natural beauty make it perfect for those seeking solitude and adventure away from crowded hill stations.</p>
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading('visit-time&itineraries')}</h1>
        <div className="box-container">
          <div className="best-time-to-visit">
            <h2>Best Time to Visit</h2>
            <ul>
              <li><strong>April–June:</strong> Pleasant weather, ideal for trekking and outdoor activities.</li>
              <li><strong>September–November:</strong> Post-monsoon, clear views, comfortable temperatures.</li>
              <li><strong>Avoid:</strong> July-August (heavy monsoon, difficult treks).</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2>
            <h3>2-Day Itinerary</h3>
            <ul>
              <li>Day 1: Arrive, explore town, visit Deoban</li>
              <li>Day 2: Trek to Tiger Falls, return</li>
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
          <h3>GMVN Rest House</h3><p>{accommodation.gmvn}</p>
          <h3>Forest Camps</h3><p>{accommodation.camps}</p>
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
            <p>Nearest airport: Jolly Grant Airport, Dehradun (98 km). Taxis available.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" />
            <h3>By Train</h3>
            <p>Nearest railway station: Dehradun (88 km). Taxis available.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" />
            <h3>By Road</h3>
            <p>Route: Dehradun → Vikasnagar → Kalsi → Chakrata (88 km). Limited bus service.</p>
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

export default Chakrata;
