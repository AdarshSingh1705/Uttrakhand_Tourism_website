import React, { useState, useEffect, useRef } from 'react';

const JimCorbett = () => {
  const heroImages = [
    '/Uttarakhand/Jim Corbett/About+Images/Images/jim corbett national park2.jpg',
    '/Uttarakhand/Jim Corbett/About+Images/Images/jim corbett national park3.jpg',
    '/Uttarakhand/Jim Corbett/About+Images/Images/jim corbett national park4.jpeg',
    '/Uttarakhand/Jim Corbett/About+Images/Images/jim corbett national park5.webp',
    '/Uttarakhand/Jim Corbett/About+Images/Images/jim corbett national park3.webp'
  ];

  const attractions = [
    { id: 1, title: 'Corbett Falls', img: '/Uttarakhand/Jim Corbett/Nearby Attraction/corbett falls.jpg', distance: '25 km', description: 'Scenic waterfall surrounded by dense teak forests, ideal for picnics and nature walks.' },
    { id: 2, title: 'Corbett Museum', img: '/Uttarakhand/Jim Corbett/Nearby Attraction/corbett museum.jpg', distance: '5 km', description: 'Museum in Jim Corbett\'s ancestral home showcasing his life, hunting stories, and photographs.' },
    { id: 3, title: 'Garjiya Devi Temple', img: '/Uttarakhand/Jim Corbett/Nearby Attraction/garjiya-devi-temple.jpg', distance: '15 km', description: 'Ancient temple on large rock in Kosi River, popular pilgrimage site with panoramic views.' }
  ];

  const activities = [
    { id: 'jeep', title: 'Jeep Safari', img: '/Uttarakhand/Jim Corbett/About+Images/Images/jeep safari.jpg', short: 'Jeep Safari', long: 'Explore park zones in open jeeps for tiger sightings and wildlife photography.' },
    { id: 'elephant', title: 'Elephant Safari', img: '/Uttarakhand/Jim Corbett/About+Images/Images/elephant safari.avif', short: 'Elephant Safari', long: 'Experience wildlife on elephant back, get closer to animals in natural habitat.' },
    { id: 'bird', title: 'Bird Watching', img: '/Uttarakhand/Jim Corbett/About+Images/Images/birdwatching.jpg', short: 'Bird Watching', long: 'Spot 600+ bird species including Great Hornbill, Pallas\'s Fish Eagle.' },
    { id: 'nature', title: 'Nature Walks', img: '/Uttarakhand/Jim Corbett/About+Images/Images/nature walk.jpg', short: 'Nature Walks', long: 'Guided nature walks in buffer zones to explore flora, fauna, and landscapes.' }
  ];

  const accommodation = {
    forest: 'Forest Rest Houses inside park zones (Dhikala, Bijrani) - advance booking required.',
    resorts: 'Luxury resorts and wildlife lodges near Ramnagar and park gates.',
    budget: 'Budget hotels and guesthouses in Ramnagar town.',
    note: 'Book forest lodges 45 days in advance through official website.'
  };

  const food = {
    local: { name: 'Kumaoni Cuisine', img: '/Uttarakhand/Jim Corbett/About+Images/Images/Bhatt-ki-Churkani.jpg', items: 'Bhatt ki Churkani, Aloo ke Gutke, Kumaoni raita.' },
    street: { name: 'North Indian', img: '/Uttarakhand/Jim Corbett/About+Images/Images/Dev-Bhoomi-Thali.jpg', items: 'Dev Bhoomi thali, dal, rice, roti at local dhabas.' },
    cafes: { name: 'Snacks', img: '/Uttarakhand/Jim Corbett/About+Images/Images/pakoras.jpg', items: 'Pakoras, samosas, tea at roadside stalls.' },
    restaurants: { name: 'Resort Dining', img: '/Uttarakhand/Jim Corbett/About+Images/Images/Dev-Bhoomi-Thali.jpg', items: 'Multi-cuisine restaurants at resorts and hotels.' }
  };

  const travelTips = [
    { title: 'Season', text: 'Park open mid-October to mid-June. Best time November-February for tiger sightings.' },
    { title: 'Safari Booking', text: 'Book safaris online in advance. Morning safaris better for wildlife sightings.' },
    { title: 'Clothing', text: 'Wear neutral colors (khaki, green, brown). Carry binoculars and camera.' },
    { title: 'Rules', text: 'Follow park rules. No loud noise, littering, or getting down from vehicle.' }
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
              <img src={src} alt={`Jim Corbett ${idx + 1}`} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={next}>→</button>
      </section>

      <h1 className="heading">{fancyHeading('jim corbett national park')}</h1>

      <section className="about-destination">
        <div>
          <h2>Jim Corbett: India's Oldest National Park</h2>
          <p><strong>Jim Corbett National Park</strong>, established in 1936 as Hailey National Park, is India's oldest national park and a premier <u>Project Tiger</u> reserve. Located in Nainital district, it spans 520 sq km of diverse landscapes including hills, riverine belts, grasslands, and dense forests.</p>
          <p>Named after legendary hunter-turned-conservationist <strong>Jim Corbett</strong>, the park is home to over <u>200 Bengal Tigers</u>, making it one of the best places in India for tiger sightings. The park also hosts 600+ elephant population, leopards, deer species, and 600+ bird species.</p>
          <p>The park is divided into multiple zones including <strong>Dhikala</strong>, <strong>Bijrani</strong>, <strong>Jhirna</strong>, <strong>Dhela</strong>, and <strong>Durga Devi</strong>. The Ramganga River flowing through the park adds to its scenic beauty and supports rich biodiversity.</p>
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading('visit-time&itineraries')}</h1>
        <div className="box-container">
          <div className="best-time-to-visit">
            <h2>Best Time to Visit</h2>
            <ul>
              <li><strong>November–February:</strong> Winter season, best for tiger sightings, pleasant weather.</li>
              <li><strong>March–June:</strong> Summer, animals near water sources, easier spotting.</li>
              <li><strong>Closed:</strong> Mid-June to mid-October (monsoon season).</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2>
            <h3>2-Day Itinerary</h3>
            <ul>
              <li>Day 1: Arrive Ramnagar, evening safari in Jhirna zone</li>
              <li>Day 2: Morning safari in Bijrani zone, visit Corbett Museum</li>
            </ul>
            <h3>3-Day Itinerary</h3>
            <p>Includes 2-day itinerary plus:</p>
            <ul><li>Day 3: Dhikala zone safari, Corbett Falls, nature walk</li></ul>
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
          <h3>Resorts & Lodges</h3><p>{accommodation.resorts}</p>
          <h3>Budget Hotels</h3><p>{accommodation.budget}</p>
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
            <p>Nearest airport: Pantnagar Airport (50 km). Taxis available to Ramnagar and park gates.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" />
            <h3>By Train</h3>
            <p>Ramnagar Railway Station (12 km) well connected to Delhi, Lucknow, Moradabad. Taxis and buses available.</p>
          </div>
          <div className="reach-option">
            <img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" />
            <h3>By Road</h3>
            <p>Well connected by road. 230 km from Delhi via NH9. Regular buses from Delhi, Nainital, Haldwani.</p>
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

export default JimCorbett;
