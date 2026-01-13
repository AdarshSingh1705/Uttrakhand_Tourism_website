import React, { useState, useEffect, useRef } from 'react';

const ValleyOfFlowers = () => {
  const heroImages = [
    '/Uttarakhand/valley of flower/About+Images/images/valley of flowers.webp',
    '/Uttarakhand/valley of flower/About+Images/images/valley of flower2.png',
    '/Uttarakhand/valley of flower/About+Images/images/valley of flower3.webp',
    '/Uttarakhand/valley of flower/About+Images/images/valley of flower4.jpg',
    '/Uttarakhand/valley of flower/About+Images/images/valley of flower5.jpeg'
  ];

  const attractions = [
    { id: 1, title: 'Hemkund Sahib', img: '/Uttarakhand/valley of flower/Nearby Attraction/Hemkund sahib.jpg', distance: '6 km', description: 'Sacred Sikh shrine at 4,632 m altitude, glacial lake surrounded by seven peaks.' },
    { id: 2, title: 'Bhyundar Valley', img: '/Uttarakhand/valley of flower/Nearby Attraction/bhuyandar valley.jpeg', distance: '5 km', description: 'Scenic valley with waterfalls, meadows, and diverse flora and fauna.' }
  ];

  const activities = [
    { id: 'trek', title: 'Trekking', img: '/Uttarakhand/valley of flower/About+Images/images/trekking.webp', short: 'Trekking', long: '17 km trek from Govindghat through Ghangaria to Valley of Flowers.' },
    { id: 'flora', title: 'Flora & Fauna', img: '/Uttarakhand/valley of flower/About+Images/images/flora and fauna.webp', short: 'Flora & Fauna', long: 'Explore 600+ species of alpine flowers, rare Himalayan animals.' },
    { id: 'photo', title: 'Photography', img: '/Uttarakhand/valley of flower/About+Images/images/photography.jpg', short: 'Photography', long: 'Capture stunning flower meadows, waterfalls, and snow-capped peaks.' },
    { id: 'yoga', title: 'Yoga & Meditation', img: '/Uttarakhand/valley of flower/About+Images/images/yoga.webp', short: 'Yoga & Meditation', long: 'Practice yoga and meditation in pristine natural surroundings.' }
  ];

  const accommodation = {
    ghangaria: 'GMVN Tourist Rest House and guesthouses in Ghangaria (base camp).',
    camping: 'Camping not allowed inside Valley of Flowers National Park.',
    govindghat: 'Hotels and lodges available in Govindghat (starting point).',
    note: 'Book accommodation in advance during peak season (July-August).'
  };

  const food = {
    local: { name: 'Local Cuisine', img: '/Uttarakhand/valley of flower/About+Images/images/mmandua roti.JPG', items: 'Mandua roti, Jhangora kheer, local Garhwali dishes.' },
    street: { name: 'North Indian Food', img: '/Uttarakhand/valley of flower/About+Images/images/north indian food.jpg', items: 'Dal, rice, roti, sabzi at Ghangaria dhabas.' },
    cafes: { name: 'Tea Stalls', img: '/Uttarakhand/valley of flower/About+Images/images/chai.webp', items: 'Hot tea, Maggi, biscuits along trek route.' },
    restaurants: { name: 'Simple Meals', img: '/Uttarakhand/valley of flower/About+Images/images/north indian food.jpg', items: 'Basic vegetarian meals at guesthouses.' }
  };

  const travelTips = [
    { title: 'Season', text: 'Valley opens June-October. Best time July-August for full bloom.' },
    { title: 'Permits', text: 'Entry permits required. Obtain from forest office at Ghangaria.' },
    { title: 'Fitness', text: 'Moderate fitness required for 17 km trek. Acclimatize properly.' },
    { title: 'Essentials', text: 'Carry raincoat, warm clothes, trekking shoes, water bottle.' }
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
              <img src={src} alt={`Valley of Flowers ${idx + 1}`} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={next}>→</button>
      </section>

      <h1 className="heading">{fancyHeading('valley of flowers')}</h1>

      <section className="about-destination">
        <div>
          <h2>Valley of Flowers: UNESCO World Heritage Site</h2>
          <p><strong>Valley of Flowers</strong>, located in Chamoli district at 3,658 meters, is a UNESCO World Heritage Site renowned for its meadows of endemic alpine flowers and outstanding natural beauty. Discovered by British mountaineer Frank S. Smythe in 1931, it spans 87.50 sq km.</p>
          <p>The valley is home to over <u>600 species of flowers</u> including rare species like Brahma Kamal, Blue Poppy, and Cobra Lily. It blooms from June to October, with peak flowering in July-August when the entire valley transforms into a colorful carpet of flowers.</p>
          <p>The valley also harbors diverse fauna including <strong>Snow Leopard</strong>, <strong>Asiatic Black Bear</strong>, <strong>Brown Bear</strong>, and <strong>Himalayan Musk Deer</strong>. The trek offers breathtaking views of peaks like Rataban, Gauri Parbat, and Nilgiri Parbat.</p>
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading('visit-time&itineraries')}</h1>
        <div className="box-container">
          <div className="best-time-to-visit">
            <h2>Best Time to Visit</h2>
            <ul>
              <li><strong>July–August:</strong> Peak flowering season, valley in full bloom.</li>
              <li><strong>June & September:</strong> Early/late season, fewer crowds, partial bloom.</li>
              <li><strong>Closed:</strong> October-May due to heavy snowfall.</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2>
            <h3>3-Day Itinerary</h3>
            <ul>
              <li>Day 1: Govindghat to Ghangaria (13 km trek)</li>
              <li>Day 2: Ghangaria to Valley of Flowers and back (10 km)</li>
              <li>Day 3: Return to Govindghat</li>
            </ul>
            <h3>4-Day Itinerary</h3>
            <p>Includes 3-day itinerary plus:</p>
            <ul><li>Day 4: Visit Hemkund Sahib (6 km from Ghangaria)</li></ul>
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
          <h3>Ghangaria Base Camp</h3><p>{accommodation.ghangaria}</p>
          <h3>Govindghat</h3><p>{accommodation.govindghat}</p>
          <h3>Camping</h3><p>{accommodation.camping}</p>
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
                <p><strong>Distance:</strong> {a.distance}</p>
                <p>{a.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <h1 className="heading">{fancyHeading('how-to-reach')}</h1>
      <section className="how-to-reach">
        <div className="card"><div className="card-image"><img src="/images/gallery/by-air.png" alt="By Air" loading="lazy" /></div><div className="card-content"><h3>By Air</h3><p>Jolly Grant Airport, Dehradun (295 km). Taxis to Govindghat.</p></div></div>
        <div className="card"><div className="card-image"><img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" /></div><div className="card-content"><h3>By Train</h3><p>Rishikesh (273 km) or Haridwar (298 km). Buses/taxis to Govindghat.</p></div></div>
        <div className="card"><div className="card-image"><img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" /></div><div className="card-content"><h3>By Road</h3><p>Govindghat well-connected. Trek 13 km to Ghangaria, then 5 km to valley.</p></div></div>
      </section>

      <h1 className="heading">{fancyHeading('activities')}</h1>
      <section className="activity" id="activity-section">
        {activities.map((act) => (
          <div className="activity-card" key={act.id}>
            <div className="card-inner">
              <div className="card-front"><img src={act.img} alt={act.short} loading="lazy" /><h3>{act.short}</h3></div>
              <div className="card-back"><h3>{act.title}</h3><p>{act.long}</p></div>
            </div>
          </div>
        ))}
      </section>

      <h1 className="heading">{fancyHeading('travel-tips')}</h1>
      <div className="local-markets" id="local-markets">
        {travelTips.map((t, idx) => (
          <div className="local-market" key={idx}><h3>{t.title}</h3><p>{t.text}</p></div>
        ))}
      </div>
    </main>
  );
};

export default ValleyOfFlowers;
