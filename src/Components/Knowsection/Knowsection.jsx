import React from 'react';
import './Knowsection.css';

const Knowsection = () => {
  return (
    <section className="know-section">
      <div className="know-container">
        <div className="know-card">
          <div className="icon-container">
            <i className="ri-hand-heart-line"></i>
          </div>
          <div className="text-containers">
            <p>Volunteer</p>
          </div>
        </div>
        <div className="know-card">
          <div className="icon-container">
            <i className="ri-mail-volume-line"></i>
          </div>
          <div className="text-containers">
            <p>Campaign</p>
          </div>
        </div>
        <div className="know-card">
          <div className="icon-container">
            <i className="ri-hand-heart-line"></i>
          </div>
          <div className="text-containers">
            <p>Donations</p>
          </div>
        </div>
        <div className="know-card">
          <div className="icon-container">
            <i className="ri-command-line"></i>
          </div>
          <div className="text-containers">
            <p>Years Operation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowsection;
