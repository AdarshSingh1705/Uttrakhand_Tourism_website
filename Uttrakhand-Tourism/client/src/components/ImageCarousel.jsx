import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="image-container">
      <button className="scroll-left" onClick={scrollLeft}>←</button>
      <div className="image-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="image-item">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="scroll-right" onClick={scrollRight}>→</button>
    </div>
  );
};

export default ImageCarousel;
