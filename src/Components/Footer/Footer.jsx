import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-donate">
          <div className="footer-donate-content">
            <p>बजरंग वाहिनी दल के संगठनात्मक कार्य की बात करें तो इसमें प्रत्येक गांव/मुहल्ले के हिंदू युवाओं से संपर्क बनाकर इस संगठन का सदस्य बनाना, और संगठन के कार्यों के बारे…</p>
            <button className="footer-donate-button">Donate now</button>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>Links</h3>
            <div><h4>Home</h4></div>
            <div><h4>About</h4></div>
            <div><h4>Gallery</h4></div>
            <div><h4>Contact</h4></div>
          </div>
        </div>
        <div className="footer-contact">
          <div>
            <h3>Contact Us</h3>
            <div>
              <p><i className="ri-map-pin-line"></i> 226, Shutter Wali Gali, Gali No 3, Khanpur Village, Delhi 110062</p>
            </div>
            <div><p><i className="ri-mail-line"></i> bajrangvahinidal@gmail.com</p></div>
            <div><p><i className="ri-phone-line"></i> +91-7290928187</p></div>
            <div><p><i className="ri-phone-line"></i> 011-29961226</p></div>
          </div>
          <div className="footer-social">
            <i className="ri-facebook-circle-line"></i>
            <i className="ri-twitter-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-linkedin-box-line"></i>
            <i className="ri-youtube-line"></i>
          </div>
        </div>
      </div>
    </section>
      <div className='copyright'>
     <p> ©2024 Bajrang Vahini Dal. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
