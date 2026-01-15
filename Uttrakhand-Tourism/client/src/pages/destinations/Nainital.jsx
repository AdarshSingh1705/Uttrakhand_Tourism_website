import React, { useState, useEffect } from 'react';

const Nainital = () => {
  const [index, setIndex] = useState(0);

  const heroImages = [
    '/Uttarakhand/Nainital/about+images/Images/nainital.webp',
    '/Uttarakhand/Nainital/about+images/Images/nainital5.webp',
    '/images/gallery/g-11.jpg',
    '/Uttarakhand/Nainital/about+images/Images/nainital3.jpeg'
  ];

  const food = {
    local: {
      name: 'Local Cuisine',
      img: '/Uttarakhand/Nainital/about+images/Images/churdkani.jpeg',
      items: 'Savor the flavors of Bal Mithai, a traditional sweet coated in sugar balls, Bhatt ki Churdkani, a delicious black bean curry, and Ras.'
    },
    street: {
      name: 'Street Food',
      img: '/Uttarakhand/Nainital/about+images/Images/bhutta.avif',
      items: 'Relish momos, spicy aloo ke gutke (stir-fried potatoes), and roasted bhutta (corn on the cob).'
    },
    cafes: {
      name: 'Cafes and Bakeries',
      img: '/Uttarakhand/Nainital/about+images/Images/sakleys.jpg',
      items: 'Visit popular bakeries like Sakley\'s and Pattie\'s for their delectable cakes, pastries, and coffee.'
    },
    restaurants: {
      name: 'Dining Options',
      img: '/Uttarakhand/Nainital/about+images/Images/sherepunjab.jpg',
      items: 'Restaurants like Sher-e-Punjab and Machan offer a mix of North Indian, Kumaoni, and international cuisines.'
    }
  };

  const accommodation = {
    luxury: 'Naini Retreat and The Manu Maharani offer premium amenities, scenic views, and fine dining. Both hotels are known for their excellent hospitality and proximity to key attractions.',
    mid: 'Hotel Madhuban and Hotel Pacific offer comfortable stays at reasonable prices with modern amenities.',
    homestay: 'Hill View Homestay and Shaheen Bagh provide cozy, personalized experiences for families and couples.',
    budget: 'Ashok Hotel and Zostel Nainital cater to budget-conscious travelers with clean rooms, dorms, and a vibrant community vibe.',
    camping: 'For nature lovers, camping sites around Sahastradhara and George Everest provide an adventurous experience under the stars.'
  };

  const attractions = [
    {
      id: 1,
      title: 'Naini Lake',
      img: '/Uttarakhand/Nainital/Nearby Attraction/naini lake/naini-lake-nainital-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg',
      description: 'The centerpiece of Nainital, this crescent-shaped lake offers a picturesque setting for boating, kayaking, and paddle boating. Surrounded by seven hills, the lake is particularly mesmerizing during sunrise and sunset.',
      link: '#'
    },
    {
      id: 2,
      title: 'Naina Devi Temple',
      img: '/Uttarakhand/Nainital/Nearby Attraction/naina devi mandir/naina-devi-temple-nainital-tourism-entry-fee-timings-holidays-reviews-header.jpg',
      description: 'Located on the northern shore of Naini Lake, this revered Hindu temple is dedicated to Goddess Naina Devi. The peaceful surroundings and stunning views make it a popular spiritual spot.',
      link: '#'
    },
    {
      id: 3,
      title: 'Snow View Point',
      img: '/Uttarakhand/Nainital/Nearby Attraction/snow view point/Snow View Point.jpg',
      description: 'Accessible by cable car or a short trek, this viewpoint offers breathtaking views of the snow-capped Himalayan peaks. Telescopes provide a closer look at the distant mountains.',
      link: '#'
    }
  ];

  const activities = [
    {
      id: 1,
      title: 'Boating on Naini Lake',
      short: 'Boating',
      img: '/Uttarakhand/Nainital/about+images/Images/Boating on Naini Lake.jpg',
      long: 'Choose between paddle boats, rowboats, or yachting to enjoy the tranquil waters of the lake. The experience is especially enchanting during sunrise or sunset.'
    },
    {
      id: 2,
      title: 'Trekking',
      short: 'Trekking',
      img: '/Uttarakhand/Nainital/about+images/Images/trekking.jpeg',
      long: 'Trails like Snow View Point, Tiffin Top, and Land\'s End offer varying levels of difficulty and stunning vistas. These treks are a great way to connect with nature.'
    },
    {
      id: 3,
      title: 'Birdwatching at Kilbury and Pangot',
      short: 'Birdwatching',
      img: '/Uttarakhand/Nainital/about+images/Images/Birdwatching at Kilbury and Pangot.jpg',
      long: 'Known for their rich biodiversity, these spots are home to over 580 species of birds. Pack your binoculars and a guidebook to make the most of this experience.'
    },
    {
      id: 4,
      title: 'Adventure Activities',
      short: 'Adventure',
      img: '/Uttarakhand/Nainital/about+images/Images/Adventure Activities.jpg',
      long: 'Engage in paragliding, zip-lining, and kayaking around Nainital for a thrilling outdoor experience. These activities are perfect for adrenaline junkies.'
    }
  ];

  const travelTips = [
    {
      title: 'Mall Road',
      text: 'A bustling hub for tourists, Mall Road is lined with shops selling woolen clothes, handcrafted candles, and souvenirs. Street food stalls and cafes make it a lively spot to explore.'
    },
    {
      title: 'Bara Bazaar',
      text: 'Famous for its fresh produce, jams, and pickles, Bara Bazaar is a must-visit for food enthusiasts. The local organic honey and spices are highly recommended.'
    },
    {
      title: 'Tibetan Market',
      text: 'This vibrant market offers a range of items, from clothing and accessories to traditional Tibetan artifacts. Bargaining is common here, so hone your skills!'
    },
    {
      title: 'Specialty Items',
      text: 'Look for intricately carved wooden items, hand-knit woolens, and aromatic herbal teas that reflect the region\'s craftsmanship.'
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
      {/* Hero carousel */}
      <section className="image-container" aria-label="Nainital hero images">
        <button
          className="scroll-left"
          onClick={prev}
          aria-label="Previous image"
        >
          ←
        </button>

        <div className="image-wrapper">
          {heroImages.map((src, idx) => (
            <div
              key={src}
              className={`image-item ${idx === index ? "active" : "inactive"}`}
              aria-hidden={idx !== index}
              style={{
                display: idx === index ? "block" : "none",
              }}
            >
              <img
                src={src}
                alt={`Nainital hero ${idx + 1}`}
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>

        <button
          className="scroll-right"
          onClick={next}
          aria-label="Next image"
        >
          →
        </button>
      </section>

      {/* Destination name */}
      <h1 className="heading" aria-label="Nainital heading">
        {fancyHeading("nainital")}
      </h1>

      {/* About section */}
      <section className="about-destination" aria-labelledby="about-title">
        <div>
          <h2 id="about-title">Nainital: The Lake District of India</h2>

          <p>
            Nestled around the pristine <strong>Naini Lake</strong>, Nainital is a charming hill station in Uttarakhand, known as the "<strong>Lake District of India</strong>." Surrounded by lush green hills and offering panoramic views of the Himalayas, Nainital attracts travelers with its serene beauty and pleasant weather.
          </p>

          <p>
            The town is famous for its colonial heritage, scenic lakes, and vibrant bazaars. Landmarks like the <strong>Naini Devi Temple</strong>, <strong>Snow View Point</strong>, and <strong>Tiffin Top</strong> reflect the town's cultural and natural richness.
          </p>

          <p>
            Visitors can enjoy boating on <strong>Naini Lake</strong>, exploring the <strong>Mall Road</strong>, and soaking in the tranquil atmosphere. Whether you're seeking a romantic getaway, a family vacation, or a solo adventure, Nainital has something for everyone.
          </p>
        </div>
      </section>

      {/* Visit time & itinerary */}
      <section className="services" aria-labelledby="visit-title">
        <h1 className="heading">{fancyHeading("visit-time&itineraries")}</h1>

        <div className="box-container">
          <div className="best-time-to-visit" aria-labelledby="best-time-title">
            <h2 id="best-time-title">Best Time to Visit</h2>
            <ul>
              <li>
                <strong>Summers (March–June):</strong> Temperatures range between 11°C and 28°C, making it ideal for sightseeing, boating, and trekking. The weather is pleasant, and the blooming flowers add to the charm.
              </li>
              <li>
                <strong>Monsoons (July–September):</strong> The town experiences moderate to heavy rainfall, turning the surroundings lush green. Perfect for nature lovers, though landslides can affect travel.
              </li>
              <li>
                <strong>Winters (October–February):</strong> The temperature can drop to 0°C, with snowfall adding a magical touch. Ideal for honeymooners and those who enjoy winter sports.
              </li>
            </ul>
          </div>

          <div className="box" id="itinerary" aria-labelledby="itinerary-title">
            <h2 id="itinerary-title">Itinerary</h2>

            <h3>3-Day Itinerary</h3>
            <ul>
              <li>Day 1: Boating on Naini Lake, Naina Devi Temple — Mall Road shopping</li>
              <li>Day 2: Snow View Point, Eco Cave Gardens — Tiffin Top sunset</li>
              <li>Day 3: Bhimtal and Sattal lakes — Kilbury Bird Sanctuary</li>
            </ul>

            <h3>4-Day Itinerary</h3>
            <p>Includes 3-day itinerary plus:</p>
            <ul>
              <li>Day 4: Governor's House (Raj Bhavan), St. John's Church — Bara Bazaar shopping</li>
            </ul>

            <h3>5-Day Itinerary</h3>
            <p>Includes 4-day itinerary plus:</p>
            <ul>
              <li>
                Day 5: Bhimtal, Sattal, and Naukuchiatal — kayaking and birdwatching — Pangot landscapes — Land's End or Dorothy's Seat trek
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Food & Cuisine */}
      <h1 className="heading">{fancyHeading("food&cusine")}</h1>

      <section className="food-cuisine" aria-label="Food and cuisine">
        <div className="local-cuisine">
          <h3>{food.local.name}</h3>
          <img src={food.local.img} alt="Bhatt ki Churdkani" loading="lazy" />
          <p>{food.local.items}</p>
        </div>

        <div className="street-food">
          <h3>{food.street.name}</h3>
          <img src={food.street.img} alt="Bhutta" loading="lazy" />
          <p>{food.street.items}</p>
        </div>

        <div className="cafes-bakeries">
          <h3>{food.cafes.name}</h3>
          <img src={food.cafes.img} alt="Sakley's" loading="lazy" />
          <p>{food.cafes.items}</p>
        </div>

        <div className="restaurants">
          <h3>{food.restaurants.name}</h3>
          <img src={food.restaurants.img} alt="Sher-e-Punjab" loading="lazy" />
          <p>{food.restaurants.items}</p>
        </div>
      </section>

      {/* Accommodation */}
      <section className="accommodation-options" aria-label="Accommodation options">
        <h1 className="heading">{fancyHeading("accomodations")}</h1>

        <div className="accommodation-container">
          <h3>Luxury Hotels</h3>
          <p>{accommodation.luxury}</p>

          <h3>Mid-Range Hotels</h3>
          <p>{accommodation.mid}</p>

          <h3>Homestays</h3>
          <p>{accommodation.homestay}</p>

          <h3>Budget Options</h3>
          <p>{accommodation.budget}</p>

          <p>
            <strong>Note:</strong> Many accommodations offer easy access to major attractions and online booking platforms allow you to choose the best options for your stay.
          </p>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="Attractions" aria-labelledby="nearby-title">
        <h1 className="heading" id="nearby-title">
          {fancyHeading("nearby-attractions")}
        </h1>

        <div className="nearby-attractions" role="list">
          {attractions.map((a) => (
            <article key={a.id} className="attraction-card" role="listitem">
              <img src={a.img} alt={a.title} loading="lazy" />
              <div className="overlay">
                <h2>{a.title} Overview</h2>
                <p>{a.description}</p>
                <a href={a.link}>
                  <button className="btn">Explore</button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How to reach */}
      <h1 className="heading">{fancyHeading("how-to-reach")}</h1>
      <section className="how-to-reach" aria-label="How to reach Nainital">
        <div className="card">
          <div className="card-image">
            <img src="/images/gallery/by-air.png" alt="By Air" loading="lazy" />
          </div>
          <div className="card-content">
            <h3>By Air</h3>
            <p>Pantnagar Airport — approximately 65 km from Nainital.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" />
          </div>
          <div className="card-content">
            <h3>By Train</h3>
            <p>Kathgodam Railway Station — nearest railhead, about 34 km from Nainital.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" />
          </div>
          <div className="card-content">
            <h3>By Road</h3>
            <p>Regular buses and taxis from Delhi and nearby cities make road travel easy.</p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <h1 className="heading">{fancyHeading("activities")}</h1>
      <section className="activity" id="activity-section" aria-label="Activities">
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

      {/* Local Markets */}
      <h1 className="heading">{fancyHeading("local-markets")}</h1>
      <div className="local-markets" id="local-markets" aria-label="Local markets">
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

export default Nainital;
