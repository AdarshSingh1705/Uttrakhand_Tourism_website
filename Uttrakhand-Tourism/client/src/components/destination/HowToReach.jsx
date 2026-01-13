import React from 'react';

const HowToReach = ({ byAir, byTrain, byRoad }) => {
  return (
    <section className="how-to-reach">
      {byAir && (
        <div className="card">
          <div className="card-image">
            <img src="/images/gallery/by-air.png" alt="By Air" />
          </div>
          <div className="card-content">
            <h3>By Air</h3>
            <br />
            <p>{byAir}</p>
            <br />
          </div>
        </div>
      )}
      {byTrain && (
        <div className="card">
          <div className="card-image">
            <img src="/images/gallery/by-train.jpg" alt="By Train" />
          </div>
          <div className="card-content">
            <h3>By Train</h3>
            <br />
            <p>{byTrain}</p>
            <br />
          </div>
        </div>
      )}
      {byRoad && (
        <div className="card">
          <div className="card-image">
            <img src="/images/gallery/by-road.jpg" alt="By Road" />
          </div>
          <div className="card-content">
            <h3>By Road</h3>
            <br />
            <p>{byRoad}</p>
            <br />
          </div>
        </div>
      )}
    </section>
  );
};

export default HowToReach;
