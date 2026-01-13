import React from 'react';
import { Link } from 'react-router-dom';

const GalleryCard = ({ name, image, description, link }) => {
  return (
    <div className="box">
      <img src={image} alt={name} />
      <div className="content">
        <Link to={link}><h3>{name}</h3></Link>
        <p>{description}</p>
        <a href="#" className="btn">see more</a>
      </div>
    </div>
  );
};

export default GalleryCard;
