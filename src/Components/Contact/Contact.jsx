import React, { useEffect } from 'react';
import brudcrumb from '../../Images/brudcrum.png'
import './Contact.css'; // Assuming this is the correct path

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb-image">
          <img src={brudcrumb} alt="Breadcrumb" />
        </div>
        {/* <div className="breadcrumb-text">
          <p>Home / <span>About Us</span></p>
        </div> */}
      </div>
      <div className="contactBajrang-wrapper">
        <div className="contactBajrang-details">
          <h2>Contact Us</h2>
          <div className="contactBajrang-item">
            <i className="ri-phone-line icon"></i>
            <p>+91-7290928187</p>
          </div>
          <div className="contactBajrang-item">
            <i className="ri-mail-send-line icon"></i>
            <p>bajrangvahinidal@gmail.com</p>
          </div>
          <div className="contactBajrang-item">
            <i className="ri-map-pin-line icon"></i>
            <p>226, Shutter Wali Gali, Gali No 3, Khanpur Village, Delhi 110062</p>
          </div>
        </div>
        <div className="contactBajrang-form">
          <h2>Feel free to write us anytime</h2>
          <form>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className='conbutton'>Send Message</button>
          </form>
        </div>
      </div>
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14029.861033268293!2d77.246628!3d28.4975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c0c6e53e25f%3A0x123456789abcde!2sKhanpur%20Village%2C%20Delhi%20110062!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bajrang Vahini Dal Location"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
