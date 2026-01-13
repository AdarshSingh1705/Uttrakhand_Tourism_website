import React, { useState, useEffect } from 'react';

const Mussoorie = () => {
  const [index, setIndex] = useState(0);

  const heroImages = [
    '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/mussoorie.jpg',
    '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/1Mussoorie.jpg',
    '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/mussoorie2.jpg',
    '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/mussoorie1.JPG'
  ];

  const food = {
    local: {
      name: 'Local Cuisine',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/kafuli.jpeg',
      items: 'Try local specialties like Aloo ke Gutke, Kafuli, and Bal Mithai, which are staples in the region.'
    },
    street: {
      name: 'Street Food',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/pani puri.jpeg',
      items: 'Savor street food like Chaat, Pani Puri, and Aloo Tikki from local vendors on Mall Road.'
    },
    cafes: {
      name: 'Cafes and Bakeries',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/chic chocolate.jpeg',
      items: 'Visit famous bakeries like Chic Chocolate and The Cambridge Book Depot for freshly baked cakes, cookies, and pastries.'
    },
    restaurants: {
      name: 'Restaurants',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/kalsang.jpeg',
      items: 'Enjoy diverse dining options at popular restaurants like Kalsang and The Tavern, offering North Indian, Tibetan, and continental cuisine.'
    }
  };

  const accommodation = {
    luxury: 'Mussoorie offers luxurious stays at properties like "Jaypee Residency Manor" and "The Savoy," which offer top-notch amenities, incredible views, and an ideal retreat for relaxation.',
    mid: 'For more affordable stays, "Hotel Crystal Palace" and "The Riverview Hotel" offer comfortable rooms with modern amenities at reasonable prices.',
    budget: 'Budget options like "Zostel Mussoorie" and "Hotel Padmini Niwas" provide cozy and friendly atmospheres, with basic amenities suited for backpackers and solo travelers.'
  };

  const attractions = [
    {
      id: 1,
      title: 'Gun Hill',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/2. Gun Hill/About+Images/images/gun hill4.jpeg',
      description: 'Mussoorie\'s second-highest peak, offering stunning views of the Doon Valley and Himalayan peaks. Cable car rides, small shops, eateries, and telescopes for exploring the scenic landscapes.',
      link: '#'
    },
    {
      id: 2,
      title: 'Kempty Falls',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/1. Kempty Fall/About+Images/Images/kempty-falls.jpeg',
      description: 'A stunning 40-foot waterfall cascading into a refreshing natural pool. Perfect for picnics, family outings, and romantic getaways, offering natural beauty and recreational fun.',
      link: '#'
    },
    {
      id: 3,
      title: 'Mussoorie Lake',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/Nearby Attraction/4. Mussoorie Lake/About+Images/Images/mussoorie-lake4.jpg',
      description: 'Located about 6 km from Mussoorie, this picturesque spot surrounded by lush green hills offers paddle boating on calm waters with stunning views.',
      link: '#'
    }
  ];

  const activities = [
    {
      id: 1,
      title: 'Trekking & Camping',
      short: 'Trekking',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/camping.jpg',
      long: 'Mussoorie offers captivating trekking trails like the Nag Tibba Trek and Jwala Devi Temple trek. These routes showcase panoramic mountain views, dense forests, and serene landscapes.'
    },
    {
      id: 2,
      title: 'Boating',
      short: 'Boating',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/boating.jpg',
      long: 'Mussoorie Lake offers a delightful pedal boating experience amidst picturesque surroundings. Surrounded by lush greenery and rolling hills, perfect for unwinding.'
    },
    {
      id: 3,
      title: 'Adventure Sports',
      short: 'Adventure',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/adventure sport.jpg',
      long: 'Paragliding and rock climbing are among the most sought-after adventure activities in Mussoorie, attracting thrill-seekers with scenic landscapes and favorable weather.'
    },
    {
      id: 4,
      title: 'Cycling Tours',
      short: 'Cycling',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/cycling.jpg',
      long: 'Rent a cycle and explore the serene lanes of Landour or picturesque routes around Mussoorie. An eco-friendly way to experience the hill station at your own pace.'
    }
  ];

  const travelTips = [
    {
      title: 'Clothing',
      text: 'Always carry layers, as the weather in Mussoorie can be unpredictable. Comfortable walking shoes are essential for exploring the hill station.'
    },
    {
      title: 'Health',
      text: 'Keep basic medicines and a first aid kit handy. Staying hydrated and taking it easy if you experience altitude sickness is crucial.'
    },
    {
      title: 'Transport',
      text: 'Local taxis are great for sightseeing, but walking around can offer a more intimate experience. The ropeway to Gun Hill is a must-try for spectacular views.'
    },
    {
      title: 'Safety',
      text: 'Avoid trekking in dense forests or remote areas without a guide. During monsoon season, be cautious of landslides and slippery paths.'
    }
  ];

  const fancyHeading = (text) => {
    return text.split('').map((char, i) => (
      <span key={i}>{char}</span>
    ));
  };

  const next = () => setIndex((index + 1) % heroImages.length);
  const prev = () => setIndex((index - 1 + heroImages.length) % heroImages.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <main>
      <section className="image-container" aria-label="Mussoorie hero images">
        <button className="scroll-left" onClick={prev} aria-label="Previous image">←</button>
        <div className="image-wrapper">
          {heroImages.map((src, idx) => (
            <div key={src} className={`image-item ${idx === index ? "active" : "inactive"}`} style={{ display: idx === index ? "block" : "none" }}>
              <img src={src} alt={`Mussoorie hero ${idx + 1}`} loading="lazy" style={{ width: "100%", height: "auto" }} />
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={next} aria-label="Next image">→</button>
      </section>

      <h1 className="heading">{fancyHeading("mussoorie")}</h1>

      <section className="about-destination">
        <div>
          <h2>Mussoorie: The Queen of the Hills</h2>
          <p><strong>Mussoorie</strong>, also known as the "Queen of the Hills," is a charming hill station in Uttarakhand, just 35 km from Dehradun. Set amidst the Shivalik range, Mussoorie is famous for its scenic beauty, colonial architecture, and pleasant weather. Perched at an altitude of 1,880 meters, it offers breathtaking views of the Himalayas.</p>
          <p>Popularly referred to as a honeymoon destination, Mussoorie also attracts adventure enthusiasts, nature lovers, and history buffs. The rich flora and fauna, along with the vibrant culture, make Mussoorie an all-season getaway.</p>
          <p>The town's proximity to Dehradun makes it an ideal weekend retreat. Whether you're looking for adventure or relaxation, Mussoorie offers a perfect blend of both.</p>
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading("visit-time&itineraries")}</h1>
        <div className="box-container">
          <div className="best-time-to-visit">
            <h2>Best Time to Visit</h2>
            <ul>
              <li><strong>Summers (March-June):</strong> Ideal for sightseeing and outdoor activities with pleasant temperatures (15°C to 25°C).</li>
              <li><strong>Monsoons (July-September):</strong> Heavy rains make the hill station lush but bring slippery roads and landslides.</li>
              <li><strong>Winters (October-February):</strong> Chilly with temperatures dropping to 1°C, often with snowfall.</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2>
            <h3>3-Day Itinerary</h3>
            <ul>
              <li>Day 1: Arrive, visit Kempty Falls, stroll Mall Road</li>
              <li>Day 2: Gun Hill, cable car, Camel's Back Road, Mussoorie Lake</li>
              <li>Day 3: Explore Landour, visit Christ Church</li>
            </ul>
            <h3>4-Day Itinerary</h3>
            <p>Includes 3-day itinerary plus:</p>
            <ul><li>Day 4: Lake Mist, Tibetan Buddhist Temple</li></ul>
            <h3>5-Day Itinerary</h3>
            <p>Includes 4-day itinerary plus:</p>
            <ul><li>Day 5: Day trip to Dhanaulti, eco-parks, apple orchards</li></ul>
          </div>
        </div>
      </section>

      <h1 className="heading">{fancyHeading("food&cusine")}</h1>
      <section className="food-cuisine">
        <div className="local-cuisine">
          <h3>{food.local.name}</h3>
          <img src={food.local.img} alt="Kafuli" loading="lazy" />
          <p>{food.local.items}</p>
        </div>
        <div className="street-food">
          <h3>{food.street.name}</h3>
          <img src={food.street.img} alt="Pani Puri" loading="lazy" />
          <p>{food.street.items}</p>
        </div>
        <div className="cafes-bakeries">
          <h3>{food.cafes.name}</h3>
          <img src={food.cafes.img} alt="Chic Chocolate" loading="lazy" />
          <p>{food.cafes.items}</p>
        </div>
        <div className="restaurants">
          <h3>{food.restaurants.name}</h3>
          <img src={food.restaurants.img} alt="Kalsang" loading="lazy" />
          <p>{food.restaurants.items}</p>
        </div>
      </section>

      <section className="accommodation-options">
        <h1 className="heading">{fancyHeading("accomodations")}</h1>
        <div className="accommodation-container">
          <h3>Luxury Hotels</h3>
          <p>{accommodation.luxury}</p>
          <h3>Mid-Range Hotels</h3>
          <p>{accommodation.mid}</p>
          <h3>Budget Options</h3>
          <p>{accommodation.budget}</p>
        </div>
      </section>

      <section className="Attractions">
        <h1 className="heading">{fancyHeading("nearby-attractions")}</h1>
        <div className="nearby-attractions">
          {attractions.map((a) => (
            <article key={a.id} className="attraction-card">
              <img src={a.img} alt={a.title} loading="lazy" />
              <div className="overlay">
                <h2>{a.title} Overview</h2>
                <p>{a.description}</p>
                <a href={a.link}><button className="btn">Explore</button></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <h1 className="heading">{fancyHeading("how-to-reach")}</h1>
      <section className="how-to-reach">
        <div className="card">
          <div className="card-image"><img src="/images/gallery/by-air.png" alt="By Air" loading="lazy" /></div>
          <div className="card-content"><h3>By Air</h3><p>Jolly Grant Airport, Dehradun (60 km away).</p></div>
        </div>
        <div className="card">
          <div className="card-image"><img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" /></div>
          <div className="card-content"><h3>By Train</h3><p>Dehradun Railway Station (35 km) connects to major cities.</p></div>
        </div>
        <div className="card">
          <div className="card-image"><img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" /></div>
          <div className="card-content"><h3>By Road</h3><p>Regular buses from Delhi and Dehradun.</p></div>
        </div>
      </section>

      <h1 className="heading">{fancyHeading("activities")}</h1>
      <section className="activity">
        {activities.map((act) => (
          <div className="activity-card" key={act.id}>
            <div className="card-inner">
              <div className="card-front">
                <img src={act.img} alt={act.short} loading="lazy" />
                <h3>{act.short}</h3>
              </div>
              <div className="card-back">
                <h3>{act.title}</h3>
                <p>{act.long}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <h1 className="heading">{fancyHeading("travel-tips")}</h1>
      <div className="local-markets">
        {travelTips.map((t, idx) => (
          <div className="local-market" key={idx}>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Mussoorie;
