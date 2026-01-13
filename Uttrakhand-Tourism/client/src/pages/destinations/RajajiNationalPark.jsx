import React, { useState, useEffect, useRef } from 'react';

const RajajiNationalPark = () => {
  const heroImages = [
    '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/rajaji-national-park-1.jpg',
    '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/elephant.jpg',
    '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/buffalo.jpg',
    '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/rajaji 2.jpg'
  ];

  const attractions = [
    { id: 1, title: 'Chilla Range', img: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/rajaji-national-park-1.jpg', distance: '25 km', description: 'Main safari zone with highest elephant density, diverse wildlife viewing.' },
    { id: 2, title: 'Haridwar', img: '/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/haridwar 2.jpg', distance: '10 km', description: 'Sacred city on Ganges, famous for Ganga Aarti at Har Ki Pauri.' },
    { id: 3, title: 'Rishikesh', img: '/images/pack-9.jpg', distance: '18 km', description: 'Yoga capital, adventure sports, spiritual retreats on Ganges banks.' }
  ];

  const activities = [
    { id: 'safari', title: 'Jungle Safari', img: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/rajaji-national-park-1.jpg', short: 'Jungle Safari', long: 'Jeep and elephant safaris to spot elephants, tigers, leopards, and diverse wildlife.' },
    { id: 'bird', title: 'Bird Watching', img: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/buffalo.jpg', short: 'Bird Watching', long: 'Over 315 bird species including hornbills, woodpeckers, and migratory birds.' },
    { id: 'trek', title: 'Nature Walks', img: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/elephant.jpg', short: 'Nature Walks', long: 'Guided nature walks through sal forests and grasslands.' },
    { id: 'photo', title: 'Wildlife Photography', img: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/rajaji 2.jpg', short: 'Wildlife Photography', long: 'Capture elephants, deer, birds, and scenic landscapes.' }
  ];

  const accommodation = {
    forest: 'Forest Rest Houses inside park with basic amenities.',
    resorts: 'Eco-resorts and wildlife lodges near park gates.',
    haridwar: 'Hotels and guesthouses in Haridwar (10 km) for all budgets.',
    rishikesh: 'Wide range of accommodations in Rishikesh (18 km).'
  };

  const food = {
    local: { name: 'Resort Dining', img: '/images/aloo-k-gutke.jpg', items: 'Multi-cuisine buffets at forest lodges and eco-resorts.' },
    street: { name: 'Local Delicacies', img: '/images/Bun Tikki.jpeg.jpg', items: 'Garhwali dishes like Aloo ke Gutke, Kafuli at nearby towns.' },
    cafes: { name: 'Dhabas', img: '/images/sunburnt.jpeg.jpg', items: 'Highway dhabas serving North Indian meals.' },
    restaurants: { name: 'City Options', img: '/images/black pepper.jpeg.jpg', items: 'Restaurants in Haridwar and Rishikesh for varied cuisines.' }
  };

  const travelTips = [
    { title: 'Season', text: 'Best time November-June. Park closed mid-June to mid-November.' },
    { title: 'Safari', text: 'Book jeep safaris in advance. Early morning best for wildlife.' },
    { title: 'Clothing', text: 'Wear neutral colors, comfortable shoes, carry binoculars.' },
    { title: 'Safety', text: 'Follow guide instructions, maintain silence, no littering.' }
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
              <img src={src} alt={`Rajaji ${idx + 1}`} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={next}>→</button>
      </section>

      <h1 className="heading">{fancyHeading('rajaji national park')}</h1>

      <section className="about-destination">
        <div>
          <h2>Rajaji National Park: Elephant Reserve</h2>
          <p><strong>Rajaji National Park</strong>, spread across 820 sq km in Haridwar, Dehradun, and Pauri Garhwal districts, is named after C. Rajagopalachari (Rajaji), India's last Governor-General. Established in 1983, it's renowned for its elephant population and biodiversity.</p>
          <p>The park is home to over <u>500 elephants</u>, along with tigers, leopards, jungle cats, and sloth bears. It harbors <strong>315 bird species</strong>, making it a paradise for birdwatchers. The landscape includes sal forests, riverine vegetation, grasslands, and hills.</p>
          <p>The park is traversed by the <strong>Ganges</strong>, <strong>Song</strong>, and <strong>Suswa</strong> rivers, providing water sources for wildlife. Visitors can enjoy jeep safaris, elephant rides, and nature walks while experiencing the rich flora and fauna of the Shivalik ecosystem.</p>
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading('visit-time&itineraries')}</h1>
        <div className="box-container">
          <div className="best-time-to-visit">
            <h2>Best Time to Visit</h2>
            <ul>
              <li><strong>November–February:</strong> Cool weather, best for wildlife spotting.</li>
              <li><strong>March–June:</strong> Hot but good for tiger sightings near water.</li>
              <li><strong>Closed:</strong> Mid-June to mid-November (monsoon, breeding season).</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2>
            <h3>2-Day Itinerary</h3>
            <ul>
              <li>Day 1: Morning safari in Chilla range, evening at Haridwar Ganga Aarti</li>
              <li>Day 2: Early morning safari, bird watching, departure</li>
            </ul>
            <h3>3-Day Itinerary</h3>
            <p>Includes 2-day itinerary plus:</p>
            <ul><li>Day 3: Visit Rishikesh, river rafting, yoga session</li></ul>
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
          <h3>Forest Rest Houses</h3><p>{accommodation.forest}</p>
          <h3>Eco-Resorts</h3><p>{accommodation.resorts}</p>
          <h3>Haridwar Hotels</h3><p>{accommodation.haridwar}</p>
          <h3>Rishikesh Options</h3><p>{accommodation.rishikesh}</p>
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
        <div className="card"><div className="card-image"><img src="/images/gallery/by-air.png" alt="By Air" loading="lazy" /></div><div className="card-content"><h3>By Air</h3><p>Jolly Grant Airport, Dehradun (35 km). Taxis to park gates.</p></div></div>
        <div className="card"><div className="card-image"><img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" /></div><div className="card-content"><h3>By Train</h3><p>Haridwar (10 km) and Rishikesh (18 km) well-connected by rail.</p></div></div>
        <div className="card"><div className="card-image"><img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" /></div><div className="card-content"><h3>By Road</h3><p>NH-58 passes through park. Buses and taxis from major cities.</p></div></div>
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

export default RajajiNationalPark;
