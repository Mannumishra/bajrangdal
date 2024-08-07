import React from 'react';
import "./Whatwedo.css";
import jal from '../../Images/jal.jpg';
import sikhsha from '../../Images/sikhsha.jpg';
import bhojan from '../../Images/bhojan.jpg';
import doctor from '../../Images/doctor.jpg';

const Whatwedo = () => {
  return (
    <section className="whatwedo-section">
      <div className="whatwedo-header">
        <h2>Work We Do</h2>
      </div>
      <div className="whatwedo-cards">
        <div className="card-div">
          <div className="card-image">
            <img src={doctor} alt="चिकित्सा सहायता" />
          </div>
          <div className="card-text">
            <p>चिकित्सा सहायता</p>
          </div>
        </div>
        <div className="card-div">
          <div className="card-image">
            <img src={bhojan} alt="स्वस्थ भोजन" />
          </div>
          <div className="card-text">
            <p>स्वस्थ भोजन</p>
          </div>
        </div>
        <div className="card-div">
          <div className="card-image">
            <img src={sikhsha} alt="शिक्षा" />
          </div>
          <div className="card-text">
            <p>शिक्षा</p>
          </div>
        </div>
        <div className="card-div">
          <div className="card-image">
            <img src={jal} alt="स्वच्छ जल" />
          </div>
          <div className="card-text">
            <p>स्वच्छ जल</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whatwedo;
