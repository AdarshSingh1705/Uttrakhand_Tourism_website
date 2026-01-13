import React, { useState, useEffect } from 'react';

const Haridwar = () => {
  const [index, setIndex] = useState(0);

  const heroImages = [
    '/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/haridwar 3.webp',
    '/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/haridwar 4.jpeg',
    '/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/haridwar 5.jpg',
    '/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/haridwar 2.jpg'
  ];

  const food = {
    local: {
      name: 'Local Cuisine',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/kachori.jpg',
      items: 'Must-try dishes include "Kachori," "Aloo Poori," and "Chana Masala." Haridwar is also known for its "Puri-Sabzi" and "Lassi."'
    },
    street: {
      name: 'Street Food',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/chaat.jpg',
      items: 'The streets of Haridwar are filled with vendors selling "Chaat," "Samosas," and other local street foods.'
    },
    cafes: {
      name: 'Famous Eateries',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/bhandari sweets.avif',
      items: 'Popular spots like "Chotiwala Restaurant" and "Bhandari\'s Sweets" offer local vegetarian delights, including snacks and sweets.'
    },
    restaurants: {
      name: 'Dining Options',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/dining.avif',
      items: 'Haridwar has a variety of vegetarian restaurants, offering North Indian and regional delicacies, as well as some international options for tourists.'
    }
  };

  const accommodation = {
    luxury: 'For those seeking comfort, hotels like "Haveli Hari Ganga" and "Ganga Lahari" offer riverside views, luxurious amenities, and a peaceful stay.',
    mid: '"Hotel Ganga View" and "Hotel Devnadi" offer comfortable rooms with proximity to Har Ki Pauri and other local attractions.',
    budget: 'Budget travelers can opt for guesthouses and budget hotels like "Hotel Ganga Darshan" and "Zostel Haridwar" which provide simple accommodations at affordable rates.'
  };

  const attractions = [
    {
      id: 1,
      title: 'Mansa Devi Temple',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/Nearby Attraction/mansa devi.jpg',
      description: 'Perched atop the Bilwa Parvat, Mansa Devi Temple is dedicated to the goddess Mansa. Accessible via a cable car ride, this temple offers panoramic views of the city and the river.',
      distance: '3 km from the nearest city',
      link: '#'
    },
    {
      id: 2,
      title: 'Chandi Devi Temple',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/Nearby Attraction/chandi-devi-temple.jpg',
      description: 'Located atop Neel Parvat, Chandi Devi Temple is accessible via a cable car ride. Devotees worship the goddess Chandi and enjoy breathtaking views of Haridwar.',
      distance: '5 km from the nearest city',
      link: '#'
    },
    {
      id: 3,
      title: 'Har Ki Pauri',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/Nearby Attraction/har ki pauri.jpg',
      description: 'The most iconic landmark of Haridwar, Har Ki Pauri is a sacred ghat where thousands of pilgrims come to bathe in the Ganges. Known for its evening Ganga Aarti.',
      distance: '0 km from the nearest city',
      link: '#'
    }
  ];

  const activities = [
    {
      id: 1,
      title: 'Kumbh Mela',
      short: 'Kumbh Mela',
      img: '/images/pack-5.jpg',
      long: 'Haridwar is one of the four sites where the Kumbh Mela is held every 12 years, attracting millions of pilgrims for a holy dip in the Ganges. The festival is a grand celebration of faith.'
    },
    {
      id: 2,
      title: 'Ganga Dussehra',
      short: 'Ganga Dussehra',
      img: '/images/pack-4.jpg',
      long: 'Celebrated in June, this festival marks the descent of the Ganges to earth and is an important event in Haridwar, involving a grand Ganga Aarti and rituals.'
    },
    {
      id: 3,
      title: 'Boating',
      short: 'Boating',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/boating.jpg',
      long: 'Take a peaceful boat ride on the Ganges at Har Ki Pauri or enjoy a boat trip around nearby temples and ghats.'
    },
    {
      id: 4,
      title: 'Wildlife Safari',
      short: 'Safari',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/rajaji 4.jpeg',
      long: 'Explore Rajaji National Park and experience a thrilling safari to spot elephants, tigers, and other wildlife.'
    }
  ];

  const travelTips = [
    {
      title: 'Haridwar Market',
      text: 'Located near Har Ki Pauri, this bustling market is ideal for buying religious items like idols, beads, and prayer materials. It\'s a hub for devotees and tourists seeking spiritual artifacts.'
    },
    {
      title: 'Maya Bazaar',
      text: 'Known for traditional clothing, jewelry, and handicrafts, Maya Bazaar is a must-visit for unique souvenirs. It\'s a vibrant spot to explore and take home a piece of Haridwar\'s rich heritage.'
    },
    {
      title: 'Chandi Chowk',
      text: 'Haridwar is famous for its variety of sweets, snacks, and traditional Ayurvedic products. From delicious jalebis and pedas to herbal remedies.'
    },
    {
      title: 'Local Products',
      text: 'Haridwar is famous for its variety of sweets, snacks, and traditional Ayurvedic products. From delicious jalebis and pedas to herbal remedies, the city offers a unique culinary experience.'
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
      <section className="image-container" aria-label="Haridwar hero images">
        <button className="scroll-left" onClick={prev} aria-label="Previous image">←</button>
        <div className="image-wrapper">
          {heroImages.map((src, idx) => (
            <div key={src} className={`image-item ${idx === index ? "active" : "inactive"}`} style={{ display: idx === index ? "block" : "none" }}>
              <img src={src} alt={`Haridwar hero ${idx + 1}`} loading="lazy" style={{ width: "100%", height: "auto" }} />
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={next} aria-label="Next image">→</button>
      </section>

      <h1 className="heading">{fancyHeading("haridwar")}</h1>

      <section className="about-destination">
        <div>
          <h2>Haridwar: The Gateway to Spiritual Bliss</h2>
          <p><strong>Haridwar</strong>, one of the seven holiest places in Hinduism, is a sacred city located on the banks of the revered Ganges River in Uttarakhand. Known for its profound spiritual significance, Haridwar attracts millions of devotees and tourists annually.</p>
          <p>Haridwar is also famous for its vibrant cultural festivals and the enchanting Ganga Aarti, a daily ritual that mesmerizes visitors with its divine aura. The city's spiritual energy, combined with its natural beauty, creates a serene and uplifting atmosphere.</p>
          <p>A visit to Haridwar is not just a journey to a holy destination but an experience that rejuvenates the soul and connects you to the timeless essence of Indian spirituality.</p>
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading("visit-time&itineraries")}</h1>
        <div className="box-container">
          <div className="best-time-to-visit">
            <h2>Best Time to Visit</h2>
            <ul>
              <li><strong>Summers (March-June):</strong> Summer temperatures can soar up to 40°C, but the weather remains tolerable for sightseeing and exploring temples and ghats.</li>
              <li><strong>Monsoons (July-September):</strong> The monsoon season brings heavy rains, often leading to floods. While the lush greenery is beautiful, outdoor activities may be limited.</li>
              <li><strong>Winters (October-February):</strong> Winters in Haridwar are mild, with temperatures ranging between 8°C and 20°C, making it the ideal time for pilgrimage.</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2>
            <h3>3-Day Itinerary</h3>
            <ul>
              <li>Day 1: Visit Har Ki Pauri for the evening Ganga Aarti, explore local temples, and take a peaceful walk along the ghats</li>
              <li>Day 2: Start with a visit to the Mansa Devi Temple and Chandi Devi Temple. Explore the local markets for souvenirs</li>
              <li>Day 3: Spend the morning at Rajaji National Park for a wildlife safari and relax in the evening at Har Ki Pauri</li>
            </ul>
            <h3>4-Day Itinerary</h3>
            <p>Includes 3-day itinerary plus:</p>
            <ul><li>Day 4: Visit Patanjali Yogpeeth for a yoga session and explore local ashrams for spiritual experiences</li></ul>
            <h3>5-Day Itinerary</h3>
            <p>Includes 4-day itinerary plus:</p>
            <ul><li>Day 5: Take a trip to nearby Rishikesh for more spiritual and adventure activities</li></ul>
          </div>
        </div>
      </section>

      <h1 className="heading">{fancyHeading("food&cusine")}</h1>
      <section className="food-cuisine">
        <div className="local-cuisine">
          <h3>{food.local.name}</h3>
          <img src={food.local.img} alt="Kachori" loading="lazy" />
          <p>{food.local.items}</p>
        </div>
        <div className="street-food">
          <h3>{food.street.name}</h3>
          <img src={food.street.img} alt="Chaat" loading="lazy" />
          <p>{food.street.items}</p>
        </div>
        <div className="cafes-bakeries">
          <h3>{food.cafes.name}</h3>
          <img src={food.cafes.img} alt="Bhandari Sweets" loading="lazy" />
          <p>{food.cafes.items}</p>
        </div>
        <div className="restaurants">
          <h3>{food.restaurants.name}</h3>
          <img src={food.restaurants.img} alt="Dining" loading="lazy" />
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
                {a.distance && <p><strong>Distance:</strong> {a.distance}</p>}
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
          <div className="card-content"><h3>By Air</h3><p>Jolly Grant Airport in Dehradun, located 35 km away.</p></div>
        </div>
        <div className="card">
          <div className="card-image"><img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" /></div>
          <div className="card-content"><h3>By Train</h3><p>Haridwar Railway Station is a major railway hub, well-connected to cities like Delhi, Mumbai.</p></div>
        </div>
        <div className="card">
          <div className="card-image"><img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" /></div>
          <div className="card-content"><h3>By Road</h3><p>Well-connected by road, with buses and taxis from nearby cities.</p></div>
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

      <h1 className="heading">{fancyHeading("local-markets")}</h1>
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

export default Haridwar;
