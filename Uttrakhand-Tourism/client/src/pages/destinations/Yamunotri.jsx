import React, { useState, useEffect, useRef } from 'react';

const Yamunotri = () => {
  const heroImages = [
    '/Uttarakhand/yamunotri/About+Images/Images/yamunotri.webp',
    '/Uttarakhand/yamunotri/About+Images/Images/yamunotri2.jpg',
    '/Uttarakhand/yamunotri/About+Images/Images/yamunotri3.jpg',
    '/Uttarakhand/yamunotri/About+Images/Images/yamunotri4.webp',
    '/Uttarakhand/yamunotri/About+Images/Images/YAMUNOTRI-2.jpg'
  ];

  const attractions = [
    { id: 1, title: 'Hanuman Chatti', img: '/Uttarakhand/yamunotri/Nearby Attraction/hanuman-chatti.jpg', distance: '13 km', description: 'Confluence of Hanuman Ganga and Yamuna rivers, starting point for Yamunotri trek.' },
    { id: 2, title: 'Janki Chatti', img: '/Uttarakhand/yamunotri/Nearby Attraction/jankichatti-uttarakhand-.png', distance: '7 km', description: 'Last motorable point before Yamunotri, hot water springs for bathing.' },
    { id: 3, title: 'Kharsali Village', img: '/Uttarakhand/yamunotri/Nearby Attraction/kharsali village.jpg', distance: '1 km', description: 'Winter seat of Yamunotri deity, ancient Shani temple.' }
  ];

  const activities = [
    { id: 'pilgrimage', title: 'Temple Pilgrimage', img: '/Uttarakhand/yamunotri/About+Images/Images/pilgrimage.webp', short: 'Temple Pilgrimage', long: 'Visit sacred Yamunotri Temple, source of Yamuna River, attend morning and evening aarti.' },
    { id: 'trek', title: 'Trekking', img: '/Uttarakhand/yamunotri/About+Images/Images/trekking.jpg', short: 'Trekking', long: '6 km trek from Janki Chatti to Yamunotri through scenic mountain trails.' },
    { id: 'springs', title: 'Hot Springs', img: '/Uttarakhand/yamunotri/About+Images/Images/hot springs.jpg', short: 'Hot Springs', long: 'Bathe in Surya Kund and Gauri Kund hot springs near the temple.' },
    { id: 'photo', title: 'Photography', img: '/Uttarakhand/yamunotri/About+Images/Images/photography.jpg', short: 'Photography', long: 'Capture stunning Himalayan peaks, glaciers, and pristine natural beauty.' }
  ];

  const accommodation = {
    dharamshalas: 'GMVN Tourist Rest House and dharamshalas offer basic accommodation for pilgrims.',
    guesthouses: 'Simple guesthouses near temple with basic amenities.',
    camping: 'Camping sites along trek route for adventure enthusiasts.',
    note: 'Accommodations basic due to remote location. Book in advance during peak season (May-June, Sept-Oct).'
  };

  const food = {
    local: { name: 'Temple Prasad', img: '/Uttarakhand/yamunotri/About+Images/Images/temple prasad.jpg', items: 'Sacred offerings including kheer, halwa, and vegetarian prasad.' },
    street: { name: 'Simple Meals', img: '/Uttarakhand/yamunotri/About+Images/Images/chainsoo.png', items: 'Dal, rice, roti, Chainsoo, and simple Garhwali dishes.' },
    cafes: { name: 'Dhabas', img: '/Uttarakhand/yamunotri/About+Images/Images/dhabas.jpg', items: 'Hot meals, tea, and snacks at local dhabas.' },
    restaurants: { name: 'Basic Eateries', img: '/Uttarakhand/yamunotri/About+Images/Images/dhabas.jpg', items: 'Simple vegetarian food suitable for high-altitude climate.' }
  };

  const travelTips = [
    { title: 'Season', text: 'Temple opens May-November, closes in winter due to heavy snowfall.' },
    { title: 'Clothing', text: 'Carry warm clothing even in summer as temperatures drop at night.' },
    { title: 'Altitude', text: 'Acclimatize properly due to high altitude (3,293 m).' },
    { title: 'Respect', text: 'Dress modestly at religious sites and respect local customs.' }
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
              <img src={src} alt={`Yamunotri ${idx + 1}`} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={next}>→</button>
      </section>

      <h1 className="heading">{fancyHeading('yamunotri')}</h1>

      <section className="about-destination">
        <div>
          <h2>Yamunotri: Source of River Yamuna</h2>
          <p><strong>Yamunotri</strong>, situated at 3,293 meters in Uttarkashi district, is the westernmost shrine in the Char Dham pilgrimage. It marks the source of the Yamuna River, second most sacred river in Hinduism after the Ganges.</p>
          <p>The <u>Yamunotri Temple</u>, dedicated to Goddess Yamuna, was built by Maharaja Pratap Shah of Tehri Garhwal. The actual source is a frozen lake, Saptarishi Kund, located 1 km ahead at 4,421 meters altitude.</p>
          <p>Near the temple are hot water springs, Surya Kund and Gauri Kund, where pilgrims cook rice and potatoes as offerings. The trek from Janki Chatti offers breathtaking Himalayan views and spiritual tranquility.</p>
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading('visit-time&itineraries')}</h1>
        <div className="box-container">
          <div className="best-time-to-visit">
            <h2>Best Time to Visit</h2>
            <ul>
              <li><strong>May–June:</strong> Temple opens late April/early May. Pleasant weather for pilgrimage.</li>
              <li><strong>September–October:</strong> Post-monsoon with clear skies.</li>
              <li><strong>Avoid July-August:</strong> Heavy monsoon rains cause landslides.</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2>
            <h3>2-Day Itinerary</h3>
            <ul>
              <li>Day 1: Arrive Janki Chatti, trek to Yamunotri, temple visit, return</li>
              <li>Day 2: Visit Kharsali village, departure</li>
            </ul>
            <h3>3-Day Itinerary</h3>
            <p>Includes 2-day itinerary plus:</p>
            <ul><li>Day 3: Explore Hanuman Chatti, hot springs</li></ul>
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
          <h3>Dharamshalas</h3><p>{accommodation.dharamshalas}</p>
          <h3>Guesthouses</h3><p>{accommodation.guesthouses}</p>
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
        <div className="card"><div className="card-image"><img src="/images/gallery/by-air.png" alt="By Air" loading="lazy" /></div><div className="card-content"><h3>By Air</h3><p>Jolly Grant Airport, Dehradun (210 km). Taxis to Janki Chatti.</p></div></div>
        <div className="card"><div className="card-image"><img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" /></div><div className="card-content"><h3>By Train</h3><p>Rishikesh (185 km) or Haridwar (210 km). Buses/taxis to Janki Chatti.</p></div></div>
        <div className="card"><div className="card-image"><img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" /></div><div className="card-content"><h3>By Road</h3><p>Well-connected from Dehradun, Rishikesh. Trek 6 km from Janki Chatti.</p></div></div>
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

export default Yamunotri;
