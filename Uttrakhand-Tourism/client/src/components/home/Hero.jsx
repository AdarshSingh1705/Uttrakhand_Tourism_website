import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState('/images/vid-1.mp4');
  const videos = ['/images/vid-1.mp4', '/images/vid-2.mp4', '/images/vid-3.mp4', '/images/vid-4.mp4', '/images/vid-5.mp4'];

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Adventure is worthwhile</h3>
        <p>Discover new place with us, adventure awaits</p>
        <Link to="/destinations/rishikesh" className="btn">Discover more</Link>
      </div>
      <div className="controls">
        {videos.map((video, index) => (
          <span key={index} className={`vid-btn ${currentVideo === video ? 'active' : ''}`} onClick={() => setCurrentVideo(video)}></span>
        ))}
      </div>
      <div className="video-container">
        <video src={currentVideo} id="video-slider" loop autoPlay muted></video>
      </div>
    </section>
  );
};

export default Hero;
