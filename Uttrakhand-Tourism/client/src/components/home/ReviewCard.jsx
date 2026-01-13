import React from 'react';

const ReviewCard = ({ name, image, text }) => {
  return (
    <div className="box">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{text}</p>
      <div className="stars">
        {[...Array(4)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
        <i className="far fa-star"></i>
      </div>
    </div>
  );
};

export default ReviewCard;
