import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import useLoadMore from '../hooks/useLoadMore';
import Newsletter from '../components/common/Newsletter';

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState('/images/vid-1.mp4');
  
  useLoadMore('destinations', 'box', 6);
  useLoadMore('gallery', 'box', 9);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      number: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('http://localhost:3003/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const videos = [
    '/images/vid-1.mp4',
    '/images/vid-2.mp4',
    '/images/vid-3.mp4',
    '/images/vid-4.mp4',
    '/images/vid-5.mp4'
  ];

  return (
    <>
      {/* Home Section */}
      <section className="home" id="home">
        <div className="content">
          <h3>Adventure is worthwhile</h3>
          <p>Discover new place with us, adventure awaits</p>
          <Link to="/destinations/" className="btn">Discover more</Link>
        </div>

        <div className="controls">
          {videos.map((video, index) => (
            <span
              key={index}
              className={`vid-btn ${currentVideo === video ? 'active' : ''}`}
              onClick={() => setCurrentVideo(video)}
            ></span>
          ))}
        </div>

        <div className="video-container">
          <video src={currentVideo} id="video-slider" loop autoPlay muted></video>
        </div>
      </section>

      {/* Destinations Section */}
      <br /><br />
      <section className="destinations" id="destinations">
        <h1 className="heading">
          <span>d</span><span>e</span><span>s</span><span>t</span><span>i</span><span>n</span>
          <span>a</span><span>t</span><span>i</span><span>o</span><span>n</span><span>s</span>
        </h1>
        <br /><br />
        
        <div className="box-container">
          {destinations.map((dest, index) => (
            <div key={index} className="box" style={{ display: index < 6 ? 'inline-block' : 'none' }}>
              <img src={dest.image} alt={dest.name} />
              <div className="content">
                <h3><i className="fas fa-map-marker-alt"></i>{dest.name}</h3>
                <p>{dest.description}</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <Link to={dest.link} className="btn">Explore</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="load-more">
          <button className="btn load-more">Load More</button>
          <button className="btn see-less" style={{ display: 'none' }}>See Less</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h1 className="heading">
          <span>s</span><span>e</span><span>r</span><span>v</span><span>i</span><span>c</span><span>e</span><span>s</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-hotel"></i>
            <h3>Affordable Hotels</h3>
            <p>Stay in comfort with our selection of affordable hotels, offering excellent amenities and services to make your stay memorable.</p>
          </div>
          <div className="box">
            <i className="fas fa-utensils"></i>
            <h3>Food and Drinks</h3>
            <p>Indulge in a variety of local and international cuisines at our recommended restaurants and cafes, ensuring a delightful culinary experience.</p>
          </div>
          <div className="box">
            <i className="fas fa-bullhorn"></i>
            <h3>Safety Guide</h3>
            <p>Travel with peace of mind using our comprehensive safety guide, providing essential tips and information for a secure journey.</p>
          </div>
          <div className="box">
            <i className="fas fa-globe-asia"></i>
            <h3>Around Uttarakhand</h3>
            <p>Explore the diverse landscapes and cultures of Uttarakhand with our curated travel itineraries, covering must-visit destinations.</p>
          </div>
          <div className="box">
            <i className="fas fa-plane"></i>
            <h3>Fastest Way to Travel</h3>
            <p>Experience the convenience of fast travel with our recommended flight options, ensuring you reach your destination quickly and comfortably.</p>
          </div>
          <div className="box">
            <i className="fas fa-hiking"></i>
            <h3>Adventures</h3>
            <p>Embark on thrilling adventures with our range of activities, including trekking, paragliding, and wildlife exploration, for an unforgettable experience.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <br /><br />
      <section className="gallery" id="gallery">
        <h1 className="heading">
          <span>g</span><span>a</span><span>l</span><span>l</span><span>e</span><span>r</span><span>y</span>
        </h1>
        <br /><br />

        <div className="box-container">
          {galleryItems.map((item, index) => (
            <div key={index} className="box" style={{ display: index < 9 ? 'inline-block' : 'none' }}>
              <img src={item.image} alt={item.name} />
              <div className="content">
                <Link to={item.link}><h3>{item.name}</h3></Link>
                <p>{item.description}</p>
                <Link to={item.link} className="btn">see more</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="load-more">
          <button className="btn load-more">Load More</button>
          <button className="btn see-less" style={{ display: 'none' }}>See Less</button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="About-us">
        <div className="responsive-container-block bigContainer">
          <div className="responsive-container-block Container">
            <div className="responsive-container-block leftSide">
              <p className="text-blk heading">Meet Our Creative Team</p>
              <p className="text-blk subHeading">
                Welcome to Global Footprint! We're passionate about crafting bespoke travel experiences that blend luxury, adventure, and cultural richness. Founded in [Year], we've grown from a small team into a globally recognized brand known for excellence. Join us to explore the world's wonders with unparalleled service and unforgettable journeys. Let's create lasting memories together! 🌍✈️✨
              </p>
            </div>
            <div className="responsive-container-block rightSide">
              <img className="number1img" src="/images/pic-11.jpg" alt="Team" />
              <img className="number2img" src="/images/pic-13.jpg" alt="Team" />
              <iframe allowFullScreen className="number4vid" src="/images/vid-1.mp4" title="Team Video" loop autoPlay muted></iframe>
              <img className="number7img" src="/images/pic-14.jpg" alt="Team" />
              <img className="number6img" src="/images/pic-7.jpg" alt="Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="review" id="review">
        <h1 className="heading">
          <span>r</span><span>e</span><span>v</span><span>i</span><span>e</span><span>w</span>
        </h1>
        <br /><br />

        <Swiper
          className="review-slider"
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="box">
                <img src={review.image} alt={review.name} />
                <h3>{review.name}</h3>
                <p>{review.text}</p>
                <div className="stars">
                  {[...Array(4)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  <i className="far fa-star"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <br /><br /><br />

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>c</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span>
        </h1>
        <br /><br /><br />

        <div className="row">
          <div className="image">
            <img src="/images/contact-img.svg" alt="contact" />
          </div>

          <form id="contact-form" onSubmit={handleContactSubmit}>
            <div className="inputBox">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="inputBox">
              <input type="number" name="phone" placeholder="Phone" required />
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <textarea name="message" placeholder="Message" rows="10" cols="30" required></textarea>
            <input type="submit" className="btn" value="Send Message" />
          </form>
        </div>
      </section>

      <br /><br />

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
};

const galleryItems = [
  { name: 'Nainital', image: '/images/gallery/g-1.jpg', description: '"Nainital is a picturesque hill station with beautiful lakes, scenic views, and pleasant weather year-round."', link: '/destinations/nainital' },
  { name: 'Valley of Flowers', image: '/images/gallery/g-2.jpg', description: '"A UNESCO World Heritage site, known for its stunning alpine flowers and breathtaking natural beauty."', link: '/destinations/valley-of-flowers' },
  { name: 'Rishikesh', image: '/images/gallery/g-3.jpg', description: '"The Yoga Capital of the World, offering spiritual retreats, adventure sports, and serene Ganges views."', link: '/destinations/rishikesh' },
  { name: 'Kedarnath', image: '/images/gallery/g-9.jpg', description: '"A sacred pilgrimage site, nestled in the Himalayas, known for its ancient temple and spiritual significance."', link: '/destinations/kedarnath' },
  { name: 'Badrinath', image: '/images/gallery/g-6.jpg', description: '"A revered pilgrimage destination, offering spiritual solace and stunning Himalayan vistas."', link: '/destinations/badrinath' },
  { name: 'Haridwar', image: '/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/haridwar 2.jpg', description: '"A spiritual hub on the banks of the Ganges, famous for its vibrant rituals and holy ghats."', link: '/destinations/haridwar' },
  { name: 'Gangotri', image: '/images/gallery/g-8.jpg', description: '"A sacred town in the Himalayas, known as the source of the Ganges River, attracting spiritual pilgrims."', link: '/destinations/gangotri' },
  { name: 'Jim Corbett', image: '/Uttarakhand/Jim Corbett/About+Images/Images/jim corbett national park.cms', description: '"India\'s oldest national park, renowned for its diverse wildlife, especially tigers, and beautiful landscapes."', link: '/destinations/jim-corbett' },
  { name: 'Rajaji National Park', image: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/buffalo.jpg', description: '"A wildlife sanctuary in Uttarakhand, home to elephants, tigers, and diverse flora and fauna."', link: '/destinations/rajaji-national-park' },
  { name: 'Tehri Dam', image: '/Uttarakhand/Tehri dam/Images+About/images/Tehri_Dam_India.jpg', description: '"One of the tallest dams in the world, offering stunning views and adventure activities like boating."', link: '/destinations/tehri-dam' },
  { name: 'Mussoorie', image: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/1Mussoorie.jpg', description: '"A picturesque hill station, known for its colonial charm, stunning views, and serene walks."', link: '/destinations/mussoorie' },
  { name: 'Auli', image: '/images/gallery/g-12.jpg', description: '"A popular skiing destination, offering pristine slopes, stunning views, and serene tranquility."', link: '/destinations/auli' }
];

const reviews = [
  { name: 'Rohit Maddhesiya', image: '/images/pic-1.png', text: 'Global Footprint provided an unforgettable travel experience. The itinerary was well-planned, and the accommodations were top-notch. Highly recommended!' },
  { name: 'Adarsh Singh', image: '/images/pic-2.jpg', text: 'Our family trip was amazing thanks to Global Footprint. The guides were knowledgeable, and the activities were fun for all ages. Will book again!' },
  { name: 'Abhay Barnwal', image: '/images/pic-3.jpg', text: 'Excellent service and attention to detail. The travel arrangements were seamless, and the destinations were breathtaking. Thank you, Global Footprint!' },
  { name: 'Rider Bhaiya', image: '/images/pic-4.jpg', text: 'From start to finish, our trip was perfect. The team at Global Footprint took care of everything, allowing us to relax and enjoy our vacation.' },
  { name: 'Shubham Kumar', image: '/images/pic-5.jpg', text: 'Global Footprint exceeded our expectations. The destinations were stunning, and the travel arrangements were flawless. We had a fantastic time!' },
  { name: 'Abu Obaida', image: '/images/pic-6.jpg', text: 'Global Footprint exceeded our expectations. The destinations were stunning, and the travel arrangements were flawless. We had a fantastic time!' },
  { name: 'Adnan Mohd.', image: '/images/pic-7.jpg', text: 'Our honeymoon was magical thanks to Global Footprint. The romantic destinations and special arrangements made our trip unforgettable. Highly recommend!' },
  { name: 'Ahtshaam Ansari', image: '/images/pic-8.jpg', text: 'Global Footprint\'s attention to detail and personalized service made our vacation stress-free and enjoyable. We will definitely travel with them again!' },
  { name: 'Pradeep Singh', image: '/images/pic-10.jpg', text: 'Our adventure trip was thrilling and well-organized. The guides were professional, and the activities were exciting. Thank you, Global Footprint!' },
  { name: 'Vivek Gupta', image: '/images/pic-12.jpg', text: 'Global Footprint made our family vacation memorable. The kids loved the activities, and we appreciated the seamless travel arrangements. Highly recommend!' },
  { name: 'Adarsh Rai', image: '/images/pic-14.jpg', text: 'Fabulous destination suggestion and attention to detail. The travel arrangements were seamless, and the destinations were breathtaking. Thank you, Global Footprint!' }
];

const destinations = [
  { name: 'Dehradun', image: '/Uttarakhand/Dehradun/About+Images/dehradun.jpg', description: 'Dehradun, is nestled in the Himalayas, offers scenic beauty, education, and tranquility.', link: '/destinations/dehradun' },
  { name: 'Mussoorie', image: '/Uttarakhand/Dehradun/Nearby Attractions/1. Mussoorie/About+Images/1Mussoorie.jpg', description: 'Mussoorie, a hill station in the Himalayas, offers stunning views, colonial charm, and serene walks.', link: '/destinations/mussoorie' },
  { name: 'Badrinath', image: '/images/gallery/g-5.jpg', description: 'Badrinath, nestled in the Himalayas, is renowned for its sacred temple and breathtaking natural beauty', link: '/destinations/badrinath' },
  { name: 'Rishikesh', image: '/images/pack-3.jpg', description: 'Rishikesh, nestled in the Himalayas, is known for spiritual retreats, yoga, and serene Ganges River.', link: '/destinations/rishikesh' },
  { name: 'Haridwar', image: '/Uttarakhand/Dehradun/Nearby Attractions/3. Haridwar/About+Images/Images/haridwar 2.jpg', description: 'Haridwar, on the banks of the Ganges, is renowned for its spiritual significance and vibrant rituals.', link: '/destinations/haridwar' },
  { name: 'Kedarnath', image: '/images/pack-1.jpg', description: 'Kedarnath is famed for its sacred temple, majestic Himalayas, and profound spiritual peace.', link: '/destinations/kedarnath' },
  { name: 'Nainital', image: '/images/gallery/g-11.jpg', description: 'Nainital, nestled in the Kumaon region, features a serene lake, scenic beauty, and pleasant weather', link: '/destinations/nainital' },
  { name: 'Valley of Flowers', image: '/images/gallery/g-2.jpg', description: 'Valley of Flowers, in Himalayas, dazzles with alpine blooms and breathtaking natural beauty.', link: '/destinations/valley-of-flowers' },
  { name: 'Gangotri', image: '/images/gallery/g-8.jpg', description: 'Gangotri: is a sacred Himalayan town, is the Gange\'s source, beckons spiritual pilgrims.', link: '/destinations/gangotri' },
  { name: 'Rajaji National Park', image: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/elephant.jpg', description: 'Rajaji National Park, Uttarakhand, shelters elephants, tigers, diverse wildlife, and stunning landscapes.', link: '/destinations/rajaji-national-park' },
  { name: 'Jim Corbett', image: '/Uttarakhand/Dehradun/Nearby Attractions/4. Rajaji National Park/About+Images/Images/rajaji 2.jpg', description: 'Jim Corbett National Park, in Uttarakhand, is famous for its diverse wildlife, especially tigers, and beautiful landscapes.', link: '/destinations/jim-corbett' },
  { name: 'Auli', image: '/images/gallery/g-12.jpg', description: 'Auli, Uttarakhand, offers pristine skiing slopes, stunning views, snow-capped peaks, and serene tranquility.', link: '/destinations/auli' }
];

export default Home;
