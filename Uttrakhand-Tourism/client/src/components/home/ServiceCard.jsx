import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="box">
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
