import React, { useState, useEffect, useRef } from "react";

const Dehradun = () => {
  // HERO images for carousel (update paths if your folder structure differs)
  const heroImages = [
    "/Uttarakhand/Dehradun/About+Images/Dehradun1.jpg",
    "/Uttarakhand/Dehradun/About+Images/Dehradun.jpg",
    "/Uttarakhand/Dehradun/About+Images/Dehradun4.jpg",
    "/Uttarakhand/Dehradun/About+Images/Dehradun2.jpg",
  ];

  // Nearby attractions data (keeps original content)
  const attractions = [
    {
      id: 1,
      title: "Mussoorie",
      img: "/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/2mussoorie.jpg",
      distance: "35 km from Dehradun",
      nickname: "Queen of Hills",
      description:
        "Kempty Falls, Gun Hill, Mall Road, Mussoorie Lake and Camel's Back Road — colonial charm and scenic views.",
      link: "/Mussoorie.html",
    },
    {
      id: 2,
      title: "Rajaji National Park",
      img: "/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/rajaji-national-park-1.jpg",
      distance: "60 km from Dehradun",
      description:
        "Rich biodiversity with elephants, tigers and 300+ bird species. Guided safaris and varied landscapes.",
      link: "/Rajaji_National_Park.html",
    },
    {
      id: 3,
      title: "Sahastradhara",
      img: "/Uttarakhand/Dehradun/Nearby Attractions/5. Sahastradhara/About+Images/Images/Sahastradhara.png",
      distance: "14 km from Dehradun",
      description:
        "Known for therapeutic sulfur springs, caves and waterfalls. Ropeway rides offer aerial views.",
      link: "/sahastradhara.html",
    },
    {
      id: 4,
      title: "Rishikesh",
      img: "/images/pack-9.jpg",
      distance: "45 km from Dehradun",
      nickname: "Yoga Capital of the World",
      description:
        "Yoga retreats, river rafting, Laxman Jhula and Triveni Ghat — spiritual & adventure hub.",
      link: "/Rishikesh.html",
    },
    {
      id: 5,
      title: "Haridwar",
      img: "/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/haridwar 2.jpg",
      distance: "55 km from Dehradun",
      description:
        "Famous for Ganga Aarti at Har Ki Pauri and temples such as Chandi Devi and Mansa Devi.",
      link: "/Haridwar.html",
    },
    {
      id: 6,
      title: "Mindrolling Monastery",
      img: "/Uttarakhand/Dehradun/Nearby Attractions/7. Mind Rolling Monastery/About+Images/images/mindrolling monastery1.jpeg",
      distance: "9 km from Dehradun",
      description:
        "One of India's largest Buddhist centers — large stupa, murals, serene gardens for meditation.",
      link: "/Mindrolling_Monastery.html",
    },
    {
      id: 7,
      title: "Robber's Cave",
      img: "/Uttarakhand/Dehradun/Nearby Attractions/8. Robber's Cave/About+Images/Images/robber cave.jpeg",
      distance: "8 km from Dehradun",
      description:
        "A natural cave formation with cool streams — great for picnics and exploring rock formations.",
      link: "/Robbers_Cave.html",
    },
    {
      id: 8,
      title: "Asan Barrage",
      img: "/Uttarakhand/Dehradun/Nearby Attractions/6. Asan Barrage/About+Images/images/asan barrage5.jpeg",
      distance: "40 km from Dehradun",
      description:
        "Birdwatchers' haven with boating and picnic spots — ideal for a peaceful day trip.",
      link: "/Asan_Barrage.html",
    },
  ];

  // Activities (from original)
  const activities = [
    {
      id: "trek",
      title: "Trekking & Camping",
      img: "/Uttarakhand/Dehradun/About+Images/trekking.jpg",
      short: "Trekking & Camping",
      long:
        "Trails to Nag Tibba, camping near Sahastradhara and paragliding in nearby hills offer adrenaline-filled experiences.",
    },
    {
      id: "jhanda",
      title: "Jhanda Mela",
      img: "/Uttarakhand/Dehradun/About+Images/Jhanda_mela.webp",
      short: "Jhanda Mela",
      long: "A major Sikh festival marking Guru Ram Rai's arrival in the city.",
    },
    {
      id: "paragliding",
      title: "Paragliding",
      img: "/Uttarakhand/Dehradun/About+Images/paragliding.webp",
      short: "Paragliding",
      long:
        "Paragliding offers breathtaking views of Dehradun's landscapes and is a popular adventure activity.",
    },
    {
      id: "wildlife",
      title: "Wildlife Exploration",
      img: "/Uttarakhand/Dehradun/About+Images/wildlife.jpg",
      short: "Wildlife Exploration",
      long:
        "Visit Rajaji National Park and Malsi Deer Park to explore rich biodiversity and enjoy safaris.",
    },
  ];

  // Accommodation summary (kept brief)
  const accommodation = {
    luxury:
      "Lemon Tree Hotel, Ramada by Wyndham, Four Points by Sheraton — modern amenities and scenic views.",
    mid: "Hotel Madhuban, Hotel Pacific — comfortable stays at reasonable prices.",
    homestay: "Hill View Homestay, Shaheen Bagh — cozy, personalized experiences.",
    budget: "Affordable lodges near Clock Tower and Paltan Bazaar.",
    camping: "Camping around Sahastradhara and George Everest for outdoor enthusiasts.",
  };

  // Food & cafes
  const food = {
    local: {
      name: "Local Cuisine",
      img: "/images/aloo-k-gutke.jpg",
      items: "Aloo ke Gutke, Kafuli, Jhangora Kheer, Bal Mithai",
    },
    street: {
      name: "Street Food",
      img: "/images/Bun Tikki.jpeg.jpg",
      items: "Momos, Bun Tikki, Chaat, Pakoras",
    },
    cafes: {
      name: "Cafes & Bakeries",
      img: "/images/sunburnt.jpeg.jpg",
      items: "Ellora’s, Sunburnt Cafe — baked goods & light meals",
    },
    restaurants: {
      name: "Restaurants",
      img: "/images/black pepper.jpeg.jpg",
      items: "Kalsang, Black Pepper — fine-dining options",
    },
  };

  // Travel tips (kept original content)
  const travelTips = [
    {
      title: "Clothing",
      text:
        "Carry warm clothes regardless of season; weather can change unpredictably. Comfortable shoes for trekking.",
    },
    {
      title: "Health",
      text:
        "Carry basic medicines and first-aid; stay hydrated and be mindful of altitude changes.",
    },
    {
      title: "Transport",
      text:
        "Local taxis and buses are available; exploring on foot gives a better experience. Cable cars for certain viewpoints.",
    },
    {
      title: "Safety",
      text:
        "Avoid dense forests or remote areas without a guide. During monsoons check weather updates due to landslide risk.",
    },
  ];

  // Carousel state & refs
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const touchStartX = useRef(null);

  const prev = () => setIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
  const next = () => setIndex((i) => (i + 1) % heroImages.length);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % heroImages.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [heroImages.length]);

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  // Render helper for fancy letter headings like original
  const fancyHeading = (text) =>
    text.split("").map((ch, i) => (
      <span key={i} aria-hidden="true">
        {ch}
      </span>
    ));

  return (
    <main>
      {/* HERO / Image carousel */}
      <section className="image-container" aria-label="Dehradun hero images">
        <button
          className="scroll-left"
          onClick={prev}
          aria-label="Previous image"
        >
          ←
        </button>

        <div
          className="image-wrapper"
          ref={carouselRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
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
                alt={`Dehradun hero ${idx + 1}`}
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
      <h1 className="heading" aria-label="Dehradun heading">
        {fancyHeading("dehradun")}
      </h1>

      {/* About section */}
      <section className="about-destination" aria-labelledby="about-title">
        <div>
          <h2 id="about-title">Dehradun: The Serene Capital of Uttarakhand</h2>

          <p>
            <strong>Dehradun</strong>, the capital of Uttarakhand, is a city of natural beauty and rich history. Nestled in the Doon Valley at the foothills of the majestic Himalayas, it is known for its <strong>pleasant climate</strong> throughout the year, making it a popular destination for tourists and locals alike. The city’s name is derived from "<strong>Dera</strong>" (camp) and "<strong>Doon</strong>" (valley), reflecting its historical connection to <u>Guru Ram Rai</u>, a Sikh guru who settled here in the 17th century. His influence is still felt today, as the city celebrates its cultural heritage through various festivals that attract visitors from across the country.
          </p>

          <p>
            <u>Dehradun is an educational hub</u>, home to prestigious institutions such as <u>The Doon School</u>, <u><strong>Indian Military Academy</strong></u>, and <u><strong>Forest Research Institute (FRI)</strong></u>. These institutions contribute to the city’s reputation as a center for learning and attract students from across the nation. The city is surrounded by lush green forests, offering a serene environment conducive to education and personal growth.
          </p>

          <p>
            The natural beauty of Dehradun is complemented by attractions like <strong>Sahastradhara</strong> and spiritual landmarks such as <u>Tapkeshwar Temple</u> and <u>Mindrolling Monastery</u>. These sites draw tourists and pilgrims, offering a blend of adventure and tranquility. Whether exploring the iconic <strong>Robber’s Cave</strong> or trekking to <strong>Nag Tibba</strong>, the city provides ample opportunities for outdoor activities and exploration.
          </p>

          <p>
            In addition to its natural and educational offerings, Dehradun is known for its vibrant local cuisine. Visitors can savor local delicacies like <u>Bal Mithai</u> and <u>Gulab Jamun</u> at various eateries. The bustling Paltan Bazaar is a great place to shop for local handicrafts and souvenirs. Furthermore, its proximity to <u>Rishikesh</u>, <u>Haridwar</u>, and <u>Mussoorie</u> makes Dehradun an ideal gateway to the treasures of Uttarakhand, ensuring visitors have a memorable experience filled with culture and adventure.
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
                <strong>March–June:</strong> Pleasant weather ideal for sightseeing.
              </li>
              <li>
                <strong>October–February:</strong> Cool winters; nearby hill stations
                may see snowfall.
              </li>
              <li>
                <strong>Avoid Monsoon:</strong> Heavy rains can cause landslides and
                slippery trails.
              </li>
            </ul>
          </div>

          <div className="box" id="itinerary" aria-labelledby="itinerary-title">
            <h2 id="itinerary-title">Itinerary</h2>

            <h3>3-Day Itinerary</h3>
            <ul>
              <li>Day 1: Robber's Cave — evening at local markets</li>
              <li>Day 2: Sahastradhara, Mindrolling Monastery, Rajpur Road</li>
              <li>Day 3: Forest Research Institute, Tapovan — departure</li>
            </ul>

            <h3>4-Day Itinerary</h3>
            <p>Includes 3-day itinerary plus:</p>
            <ul>
              <li>Day 4: Mussoorie (Kempty Falls, Gun Hill)</li>
            </ul>

            <h3>5-Day Itinerary</h3>
            <p>Includes 4-day itinerary plus:</p>
            <ul>
              <li>
                Day 5: Malsi Deer Park, Tapkeshwar Temple, local cultural
                performance
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
          <img src={food.local.img} alt="Aloo ke Gutke" loading="lazy" />
          <p>{food.local.items}</p>
        </div>

        <div className="street-food">
          <h3>{food.street.name}</h3>
          <img src={food.street.img} alt="Bun Tikki" loading="lazy" />
          <p>{food.street.items}</p>
        </div>

        <div className="cafes-bakeries">
          <h3>{food.cafes.name}</h3>
          <img src={food.cafes.img} alt="Cafe" loading="lazy" />
          <p>{food.cafes.items}</p>
        </div>

        <div className="restaurants">
          <h3>{food.restaurants.name}</h3>
          <img src={food.restaurants.img} alt="Restaurant" loading="lazy" />
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

          <h3>Camping</h3>
          <p>{accommodation.camping}</p>

          <p>
            <strong>Note:</strong> Many accommodations offer easy access to major
            attractions. Use booking platforms to compare and reserve.
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
                {a.distance && <p><strong>Distance:</strong> {a.distance}</p>}
                {a.nickname && <p><strong>Nickname:</strong> {a.nickname}</p>}
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
      <section className="how-to-reach" aria-label="How to reach Dehradun">
        <div className="card">
          <div className="card-image">
            <img src="/images/gallery/by-air.png" alt="By Air" loading="lazy" />
          </div>
          <div className="card-content">
            <h3>By Air</h3>
            <p>Jolly Grant Airport — approximately 25 km from city center.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="/images/gallery/by-train.jpg" alt="By Train" loading="lazy" />
          </div>
          <div className="card-content">
            <h3>By Train</h3>
            <p>Dehradun Railway Station — well connected to major cities.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="/images/gallery/by-road.jpg" alt="By Road" loading="lazy" />
          </div>
          <div className="card-content">
            <h3>By Road</h3>
            <p>Regular buses and taxis connect Dehradun with nearby cities and hill stations.</p>
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

      {/* Travel Tips */}
      <h1 className="heading">{fancyHeading("travel-tips")}</h1>
      <div className="local-markets" id="local-markets" aria-label="Travel tips">
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

export default Dehradun;
