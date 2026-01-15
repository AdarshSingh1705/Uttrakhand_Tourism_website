import React from 'react';

const About = () => {
  return (
    <section className="About-us" style={{ minHeight: '80vh', paddingTop: '10rem' }}>
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-container-block leftSide">
            <p className="text-blk heading">About Global Footprint</p>
            <p className="text-blk subHeading">
              Welcome to Global Footprint! We're passionate about crafting bespoke travel experiences 
              that blend luxury, adventure, and cultural richness. Founded with a vision to make 
              Uttarakhand tourism accessible and memorable, we've grown from a small team into a 
              globally recognized brand known for excellence.
            </p>
            <br />
            <p className="text-blk subHeading">
              Our mission is to showcase the natural beauty, spiritual heritage, and adventure 
              opportunities that Uttarakhand offers. From the serene valleys of Nainital to the 
              spiritual ghats of Haridwar, from the adventure sports in Rishikesh to the wildlife 
              in Jim Corbett - we cover it all.
            </p>
            <br />
            <p className="text-blk subHeading">
              Join us to explore the world's wonders with unparalleled service and unforgettable 
              journeys. Let's create lasting memories together! 🌍✈️✨
            </p>
          </div>
          <div className="responsive-container-block rightSide">
            <img className="number1img" src="/images/pic-11.jpg" alt="Team" />
            <img className="number2img" src="/images/pic-13.jpg" alt="Team" />
            <iframe allowFullScreen className="number4vid" src="/images/vid-1.mp4" loop autoPlay muted></iframe>
            <img className="number7img" src="/images/pic-2.jpg" alt="Team" />
            <img className="number6img" src="/images/pic-2.jpg" alt="Team" />
          </div>
        </div>
      </div>

      <br /><br />

      <div className="responsive-container-block bigContainer">
        <h1 className="heading" style={{ textAlign: 'center', width: '100%' }}>
          <span>O</span><span>u</span><span>r</span> <span>V</span><span>a</span><span>l</span><span>u</span><span>e</span><span>s</span>
        </h1>
        <br />
        <div className="services">
          <div className="box-container">
            <div className="box">
              <i className="fas fa-heart"></i>
              <h3>Passion for Travel</h3>
              <p>We love what we do and it shows in every journey we plan.</p>
            </div>
            <div className="box">
              <i className="fas fa-users"></i>
              <h3>Customer First</h3>
              <p>Your satisfaction and safety are our top priorities.</p>
            </div>
            <div className="box">
              <i className="fas fa-leaf"></i>
              <h3>Sustainable Tourism</h3>
              <p>We promote eco-friendly travel and respect local cultures.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
