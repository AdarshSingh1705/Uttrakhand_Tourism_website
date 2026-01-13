import React, { useState, useEffect, useRef } from 'react';

const TehriDam = () => {
  const heroImages = [
    '/Uttarakhand/Tehri dam/Images+About/images/Tehri_Dam_India.jpg',
    '/Uttarakhand/Tehri dam/Images+About/images/tehri dam2.jpg',
    '/Uttarakhand/Tehri dam/Images+About/images/tehri dam3.jpeg',
    '/Uttarakhand/Tehri dam/Images+About/images/tehri dam4.webp',
    '/Uttarakhand/Tehri dam/Images+About/images/tehri dam5.jpeg'
  ];

  const attractions = [
    { id: 1, title: 'Tehri Lake', img: '/Uttarakhand/Tehri dam/Nearby Attraction/Tehri lake/tehri-lake-993324.webp', distance: '0 km', description: 'Massive reservoir created by dam, offers boating, water sports, and stunning views.' },
    { id: 2, title: 'Koteshwar Mahadev', img: '/Uttarakhand/Tehri dam/Nearby Attraction/koteshwar mahadev/koteshwar mahadev.jpg', distance: '22 km', description: 'Ancient Shiva temple on Bhagirathi River, sacred pilgrimage site with natural beauty.' },
    { id: 3, title: 'New Tehri Town', img: '/Uttarakhand/Tehri dam/Nearby Attraction/New tehri town/new tehri town.avif', distance: '5 km', description: 'Modern planned town built after old Tehri submerged, offers scenic views and amenities.' }
  ];

  const activities = [
    { id: 'water', title: 'Water Sports', img: '/Uttarakhand/Tehri dam/Images+About/images/water sport.webp', short: 'Water Sports', long: 'Enjoy jet skiing, banana boat rides, kayaking, and speed boating on Tehri Lake.' },
    { id: 'camping', title: 'Camping', img: '/Uttarakhand/Tehri dam/Images+About/images/camping.webp', short: 'Camping', long: 'Camp by the lakeside with stunning mountain views and starry nights.' },
    { id: 'trek', title: 'Trekking', img: '/Uttarakhand/Tehri dam/Images+About/images/trekking.jpg', short: 'Trekking', long: 'Trek through surrounding hills and forests with panoramic dam views.' },
    { id: 'para', title: 'Paragliding', img: '/Uttarakhand/Tehri dam/Images+About/images/paragliding.webp', short: 'Paragliding', long: 'Experience aerial views of Tehri Dam and lake through paragliding adventures.' }
  ];

  const accommodation = {
    resorts: 'Lakeside resorts and hotels with water views and modern amenities.',
    gmvn: 'GMVN Tourist Rest House near dam with basic facilities.',
    newTehri: 'Hotels and guesthouses in New Tehri town.',
    note: 'Book in advance during peak season (April-June, Sep-Oct).'
  };

  const food = {
    local: { name: 'Garhwali Cuisine', img: '/Uttarakhand/Tehri dam/Images+About/images/chainsoo.webp', items: 'Chainsoo, Kafuli, Jhangora kheer, local Garhwali dishes.' },
    street: { name: 'Dhabas', img: '/Uttarakhand/Tehri dam/Images+About/images/dhabas.jpg', items: 'North Indian meals, dal, rice, roti at roadside dhabas.' },
    cafes: { name: 'Bakeries & Cafes', img: '/Uttarakhand/Tehri dam/Images+About/images/bakeries.jpg', items: 'Bakery items, snacks, tea, coffee at local cafes.' },
    restaurants: { name: 'Sweet Delicacy', img: '/Uttarakhand/Tehri dam/Images+About/images/Singori.jpg', items: 'Singori, Bal Mithai, local sweets and multi-cuisine restaurants.' }
  };

  const travelTips = [
    { title: 'Season', text: 'Best time March-June and September-November. Pleasant weather for water sports.' },
    { title: 'Water Sports', text: 'Book water sports in advance. Life jackets mandatory. Follow safety instructions.' },
    { title: 'Photography', text: 'Dam offers stunning photo opportunities. Best views from viewpoints and lakeside.' },
    { title: 'Clothing', text: 'Carry light clothes for summer, warm layers for evening. Swimwear for water activities.' }
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
              <img src={src} alt={`Tehri Dam ${idx + 1}`} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={next}>→</button>
      </section>

      <h1 className="heading">{fancyHeading('tehri dam')}</h1>

      <section className="about-destination">
        <div>
          <h2>Tehri Dam: India's Tallest Dam</h2>
          <p><strong>Tehri Dam</strong>, located in Tehri Garhwal district, is India's tallest dam and one of the tallest in the world at <u>260.5 meters</u>. Built on the Bhagirathi River, it's a multi-purpose rock and earth-fill embankment dam that serves hydroelectric power generation, irrigation, and municipal water supply.</p>
          <p>The dam created <strong>Tehri Lake</strong>, a massive reservoir spanning 42 sq km, which has become a popular destination for water sports and adventure activities. The project submerged the old town of Tehri, leading to the construction of New Tehri town on higher ground.</p>
          <p>Tehri Dam offers breathtaking views of the <strong>Himalayan ranges</strong> and the turquoise waters of the reservoir. It's a perfect blend of engineering marvel and natural beauty, attracting tourists for water sports, camping, and scenic photography.</p>
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading('visit-time&itineraries')}</h1>
        <div className="box-container">
          <div className="best-time-to-visit">
            <h2>Best Time to Visit</h2>
            <ul>
              <li><strong>March–June:</strong> Summer season, ideal for water sports and outdoor activities.</li>
              <li><strong>September–November:</strong> Post-monsoon, pleasant weather, clear views of dam and mountains.</li>
              <li><strong>Avoid:</strong> July-August (heavy monsoon, water sports closed).</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2>
            <h3>1-Day Itinerary</h3>
            <ul>
              <li>Morning: Visit dam viewpoint, photography</li>
              <li>Afternoon: Water sports on Tehri Lake</li>
              <li>Evening: Explore New Tehri town</li>
            </ul>
            <h3>2-Day Itinerary</h3>
            <p>Includes 1-day itinerary plus:</p>
            <ul><li>Day 2: Visit Koteshwar Mahadev temple, lakeside camping</li></ul>
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
          <h3>Lakeside Resorts</h3><p>{accommodation.resorts}</p>
          <h3>GMVN Rest House</h3><p>{accommodation.gmvn}</p>
          <h3>New Tehri Hotels</h3><p>{accommodation.newTehri}</p>
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
            <p>Nearest airport: Jolly Grant Airport, Dehradun (91 km). Taxis available to Tehri Dam.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" />
            <h3>By Train</h3>
            <p>Nearest railway station: Rishikesh (76 km). Taxis and buses available to Tehri.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" />
            <h3>By Road</h3>
            <p>Well connected by road. Regular buses from Rishikesh, Dehradun. Route: Rishikesh → Chamba → Tehri Dam.</p>
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

export default TehriDam;
