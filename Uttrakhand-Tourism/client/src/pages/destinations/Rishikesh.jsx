import React, { useState, useEffect } from 'react';

const Rishikesh = () => {
  const [index, setIndex] = useState(0);

  const heroImages = [
    '/images/vid-1.mp4',
    '/images/pack-3.jpg',
    '/Uttarakhand/Dehradun/Nearby Attractions/2. Rishikesh/About+Images/rishikesh1.jpg',
    '/images/gallery/g-3.jpg'
  ];

  const food = {
    local: {
      name: 'Local Cuisine',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/2. Rishikesh/About+Images/chole bhature.jpg',
      items: 'Try local specialties like Aloo ke Parathe, Chole Bhature, and Mooli Paratha, which are staples in the region.'
    },
    street: {
      name: 'Street Food',
      img: '/Uttarakhand//Dehradun/Nearby Attractions/2. Rishikesh/About+Images/samosa.jpg',
      items: 'Savor vegetarian street food like Pani Puri, Chaat, and Samosas, widely available in the local markets.'
    },
    cafes: {
      name: 'Cafes and Bakeries',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/2. Rishikesh/About+Images/cafe de goa.avif',
      items: 'Visit popular cafes like Café de Goa and Chotiwala Restaurant for a mix of local and international cuisine.'
    },
    restaurants: {
      name: 'Restaurants',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/2. Rishikesh/About+Images/restaurant.webp',
      items: 'Enjoy organic, vegetarian, and healthy meals at various cafes and restaurants, perfect for health-conscious travelers.'
    }
  };

  const accommodation = {
    luxury: 'Rishikesh offers luxurious stays at properties like "Ananda in the Himalayas" and "The Ganga Kinare," which provide top-notch amenities, stunning river views, and wellness services.',
    mid: 'For more affordable stays, "Bhandari Swiss Cottage" and "Hotel Ganga View" offer comfortable rooms with a good range of facilities, ideal for both families and couples.',
    budget: 'Budget-friendly accommodations like "Zostel Rishikesh" and "Shree Hari Hotel" provide clean, simple rooms with affordable prices, perfect for backpackers and solo travelers.'
  };

  const attractions = [
    {
      id: 1,
      title: 'Lakshman Jhula',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/2. Rishikesh/About+Images/laxman-jhula-rishikesh.jpg',
      description: 'This iron suspension bridge over the Ganges is one of Rishikesh\'s most iconic landmarks. It connects the two banks of the river and offers stunning views of the surrounding hills.',
      distance: '2 km from the nearest city',
      link: '#'
    },
    {
      id: 2,
      title: 'Triveni Ghat',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/2. Rishikesh/About+Images/yoga.jpg',
      description: 'A sacred bathing ghat, Triveni Ghat is known for its evening Ganga Aarti, where pilgrims and visitors gather to witness the ritual of lighting lamps and offering prayers.',
      distance: '1 km from the nearest city',
      link: '#'
    },
    {
      id: 3,
      title: 'Beatles Ashram',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/2. Rishikesh/About+Images/beatlas ashram.jpg',
      description: 'Also known as the Maharishi Mahesh Yogi Ashram, famous for being the place where The Beatles visited in the late 1960s. A peaceful spot for reflection and exploration.',
      distance: '4 km from the nearest city',
      link: '#'
    }
  ];

  const activities = [
    {
      id: 1,
      title: 'Yoga and Meditation',
      short: 'Yoga',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/2. Rishikesh/About+Images/yoga.jpg',
      long: 'Rishikesh is the perfect place to practice yoga and meditation, with numerous ashrams and retreats offering classes for all levels. Experience the tranquility and spiritual energy.'
    },
    {
      id: 2,
      title: 'River Rafting',
      short: 'Rafting',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/2. Rishikesh/About+Images/river rafting.jpg',
      long: 'Rishikesh is renowned for its thrilling white-water rafting on the Ganges, suitable for beginners and experienced adventurers. Experience the rush of navigating the rapids.'
    },
    {
      id: 3,
      title: 'Trekking',
      short: 'Trekking',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/2. Rishikesh/About+Images/trekking.webp',
      long: 'Explore various trekking routes around Rishikesh, including the Neelkanth Mahadev Temple trek and the Rajaji National Park trails.'
    },
    {
      id: 4,
      title: 'Ganga Aarti at Triveni Ghat',
      short: 'Ganga Aarti',
      img: '/Uttarakhand/Dehradun/Nearby Attractions/2. Rishikesh/About+Images/ganga aarti.jpg',
      long: 'The evening Ganga Aarti is a major highlight, attracting both pilgrims and tourists. Experience the spiritual fervor and cultural performances.'
    }
  ];

  const travelTips = [
    {
      title: 'Lakshman Jhula Market',
      text: 'The bustling market near Lakshman Jhula offers a variety of spiritual items, including beads, prayer flags, and incense. It\'s a great place to find unique souvenirs and gifts.'
    },
    {
      title: 'Rishikesh Main Market',
      text: 'Ideal for shopping for Ayurvedic products, books, clothing, and souvenirs. You can find a wide range of items, from traditional Indian clothing to spiritual books.'
    },
    {
      title: 'Tibetan Market',
      text: 'A great place for woolen goods, handicrafts, and unique Tibetan souvenirs. You can find beautiful handmade items, such as woolen shawls, hats, and scarves.'
    },
    {
      title: 'Local Products',
      text: 'Don\'t miss buying organic teas, yoga accessories, and handcrafted jewelry available in Rishikesh\'s local shops. These unique products make great souvenirs.'
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
  }, [index, heroImages.length]);

  return (
    <main>
      <section className="image-container" aria-label="Rishikesh hero images">
        <button className="scroll-left" onClick={prev} aria-label="Previous image">←</button>
        <div className="image-wrapper">
          {heroImages.map((src, idx) => (
            <div key={src} className={`image-item ${idx === index ? "active" : "inactive"}`} style={{ display: idx === index ? "block" : "none" }}>
              {src.endsWith('.mp4') ? (
                <video src={src} loop autoplay muted style={{ width: "100%", height: "auto" }} />
              ) : (
                <img src={src} alt={`Rishikesh hero ${idx + 1}`} loading="lazy" style={{ width: "100%", height: "auto" }} />
              )}
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={next} aria-label="Next image">→</button>
      </section>

      <h1 className="heading">{fancyHeading("rishikesh")}</h1>

      <section className="about-destination">
        <div>
          <h2>Rishikesh: The Yoga Capital of the World</h2>
          <p><strong>Rishikesh</strong>, known as the "Yoga Capital of the World," is a spiritual and adventure hub nestled along the banks of the sacred Ganges River in Uttarakhand. This small town, surrounded by lush green hills, is renowned for its ashrams, yoga retreats, and vibrant spiritual atmosphere.</p>
          <p>The city's iconic landmarks include the Lakshman Jhula, Ram Jhula, and the Triveni Ghat, where daily Ganga Aarti ceremonies draw large crowds. Rishikesh blends the serenity of nature with spiritual and adventure activities.</p>
          <p>Its tranquil environment, coupled with the spiritual energy of the Ganges, makes Rishikesh a must-visit destination for those looking to rejuvenate their mind, body, and soul.</p>
        </div>
      </section>

      <section className="services">
        <h1 className="heading">{fancyHeading("visit-time&itineraries")}</h1>
        <div className="box-container">
          <div className="best-time-to-visit">
            <h2>Best Time to Visit</h2>
            <ul>
              <li><strong>Summers (March-June):</strong> Hot weather (25°C-40°C), best for adventure sports like river rafting, trekking, and camping.</li>
              <li><strong>Monsoons (July-September):</strong> Heavy rainfall, leading to swollen rivers and landslides. Outdoor activities are best avoided during this time.</li>
              <li><strong>Winters (October-February):</strong> Cool and comfortable, ideal for yoga sessions, spiritual retreats, and peaceful riverbank walks.</li>
            </ul>
          </div>
          <div className="box" id="itinerary">
            <h2>Itinerary</h2>
            <h3>3-Day Itinerary</h3>
            <ul>
              <li>Day 1: Arrive, visit Triveni Ghat, attend evening Ganga Aarti</li>
              <li>Day 2: Morning yoga session, visit Beatles Ashram, walk across Lakshman Jhula</li>
              <li>Day 3: River rafting on the Ganges, visit Neelkanth Mahadev Temple</li>
            </ul>
            <h3>4-Day Itinerary</h3>
            <p>Includes 3-day itinerary plus:</p>
            <ul><li>Day 4: Trekking in Rajaji National Park or explore nearby villages</li></ul>
            <h3>5-Day Itinerary</h3>
            <p>Includes 4-day itinerary plus:</p>
            <ul><li>Day 5: Spiritual retreat at an ashram or attend a meditation session</li></ul>
          </div>
        </div>
      </section>

      <h1 className="heading">{fancyHeading("food&restaurant")}</h1>
      <section className="food-cuisine">
        <div className="local-cuisine">
          <h3>{food.local.name}</h3>
          <img src={food.local.img} alt="Chole Bhature" loading="lazy" />
          <p>{food.local.items}</p>
        </div>
        <div className="street-food">
          <h3>{food.street.name}</h3>
          <img src={food.street.img} alt="Samosa" loading="lazy" />
          <p>{food.street.items}</p>
        </div>
        <div className="cafes-bakeries">
          <h3>{food.cafes.name}</h3>
          <img src={food.cafes.img} alt="Cafe de Goa" loading="lazy" />
          <p>{food.cafes.items}</p>
        </div>
        <div className="restaurants">
          <h3>{food.restaurants.name}</h3>
          <img src={food.restaurants.img} alt="Restaurant" loading="lazy" />
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
          <div className="card-content"><h3>By Air</h3><p>Jolly Grant Airport in Dehradun, located about 20 km away.</p></div>
        </div>
        <div className="card">
          <div className="card-image"><img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" /></div>
          <div className="card-content"><h3>By Train</h3><p>Rishikesh Railway Station connects to major cities.</p></div>
        </div>
        <div className="card">
          <div className="card-image"><img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" /></div>
          <div className="card-content"><h3>By Road</h3><p>Well-connected by road from Delhi, Haridwar, and other cities.</p></div>
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

export default Rishikesh;
