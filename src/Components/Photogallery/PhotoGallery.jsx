import React from 'react';
import './PhotoGallery.css';
import brudcrumb from '../../Images/brudcrum.png'
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg';
import image4 from '../../Images/image4.jpg';
import image5 from '../../Images/image5.jpeg';
import image6 from '../../Images/image6.jpeg';
import image7 from '../../Images/image7.jpeg';
import image8 from '../../Images/image8.jpeg';
import image9 from '../../Images/image9.jpeg';
import image10 from '../../Images/image10.jpeg';

const PhotoGallery = () => {
  const location = window.location.pathname
  return (
    <>
      {
        location === '/' ? null : <div className="breadcrumb-container">
          <div className="breadcrumb-image">
            <img src={brudcrumb} alt="Breadcrumb" />
          </div>
          <div className="breadcrumb-text">
            <p>Home / <span style={{ color: "#FBD45A" }}>About Us</span></p>
          </div>
        </div>
      }
      <section className="photo-gallery-section">
        <div className="photo-gallery-header">
          <h2>Our photo gallery</h2>
        </div>
        <div className="photo-gallery-flex">
          <div className="photo-gallery-item">
            <img src={image1} alt="Gallery 1" />
          </div>
          <div className="photo-gallery-item">
            <img src={image2} alt="Gallery 2" />
          </div>
          <div className="photo-gallery-item">
            <img src={image3} alt="Gallery 3" />
          </div>
          <div className="photo-gallery-item">
            <img src={image4} alt="Gallery 4" />
          </div>
          <div className="photo-gallery-item">
            <img src={image5} alt="Gallery 5" />
          </div>
          <div className="photo-gallery-item">
            <img src={image6} alt="Gallery 6" />
          </div>
          <div className="photo-gallery-item">
            <img src={image7} alt="Gallery 7" />
          </div>
          <div className="photo-gallery-item">
            <img src={image8} alt="Gallery 8" />
          </div>
          <div className="photo-gallery-item">
            <img src={image9} alt="Gallery 9" />
          </div>
          <div className="photo-gallery-item">
            <img src={image10} alt="Gallery 10" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotoGallery;
