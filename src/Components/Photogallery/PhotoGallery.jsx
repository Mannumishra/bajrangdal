import React, { useEffect, useState } from 'react';
import './PhotoGallery.css';
import brudcrumb from '../../Images/brudcrum.png';
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

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const PhotoGallery = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const location = window.location.pathname;

  return (
    <>
      {location === '/' ? null : (
        <div className="breadcrumb-container">
          <div className="breadcrumb-image">
            <img src={brudcrumb} alt="Breadcrumb" />
          </div>
          <div className="breadcrumb-text">
            <p>Home / <span style={{ color: "#FBD45A" }}>About Us</span></p>
          </div>
        </div>
      )}
      <section className="photo-gallery-section">
        <div className="photo-gallery-header">
          <h2>Our photo gallery</h2>
        </div>
        <div className="photo-gallery-flex">
          {images.map((image, index) => (
            <div key={index} className="photo-gallery-item" onClick={() => openModal(index)}>
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={images[selectedImageIndex]} alt="Selected" />
            <div className="modal-navigation">
              <button className="prev-button" onClick={prevImage}>&#10094;</button>
              <button className="next-button" onClick={nextImage}>&#10095;</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
