import React from 'react';
import './Twocard.css';

const Twocard = () => {
  return (
    <section className="twocard-section">
      <div className="twocard-container">
        <div className="twocard">
          <div className="twocard-content">
            <div className="icon-container">
              <i className="ri-command-line"></i>
            </div>
            <div className="text-container-two">
              <p>Join us & become a volunteer</p>
            </div>
          </div>
          <button className="twocard-button">Join Now</button>
        </div>
        <div className="twocard">
          <div className="twocard-content">
            <div className="icon-container">
              <i className="ri-ping-pong-line"></i>
            </div>
            <div className="text-container-two">
              <p>Gift a Sapling</p>
            </div>
          </div>
          <button className="twocard-button">Join Now</button>
        </div>
      </div>
    </section>
  );
};

export default Twocard;
