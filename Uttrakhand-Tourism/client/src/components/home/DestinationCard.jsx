import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ name, image, description, link }) => {
  return (
    <div className="box">
      <img src={image} alt={name} />
      <div className="content">
        <h3><i className="fas fa-map-marker-alt"></i>{name}</h3>
        <p>{description}</p>
        <div className="stars">
          {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
        </div>
        <Link to={link} className="btn">Explore</Link>
      </div>
    </div>
  );
};

export default DestinationCard;
