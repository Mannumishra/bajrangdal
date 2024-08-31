import React, { useEffect } from 'react';
import './Footer.css';
import { Link, useFetcher } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
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
              <div><h4><Link to='/' style={{ textDecoration: "none", color: "white" }}>Home</Link></h4></div>
              <div><h4><Link to='/about' style={{ textDecoration: "none", color: "white" }}>About</Link></h4></div>
              <div><h4><Link to='/gallery' style={{ textDecoration: "none", color: "white" }}>Gallery</Link></h4></div>
              <div><h4><Link to='/contact' style={{ textDecoration: "none", color: "white" }}>Contact</Link></h4></div>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h3>Use Full Links</h3>
              <div><h4><Link to='/privacyPolicy' style={{ textDecoration: "none", color: "white" }}>Privacy Policy</Link></h4></div>
              <div><h4><Link to='/termservice' style={{ textDecoration: "none", color: "white" }}>Term Of Service</Link></h4></div>
              <div><h4><Link to='/shipping' style={{ textDecoration: "none", color: "white" }}>Shipping & Delivery</Link></h4></div>
              <div><h4><Link to='/return' style={{ textDecoration: "none", color: "white" }}>Return & RefundPolicy</Link></h4></div>
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
              <a href="https://www.facebook.com/bajrangvahinidal?mibextid=ZbWKwL" target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                <i className="ri-facebook-circle-line"></i>
              </a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fbajranjvahini" target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                <i className="ri-twitter-line"></i>
              </a>
              <a href="https://www.instagram.com/bajrangvahinidal_/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://www.youtube.com/@bajrangvahinidal_" target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                <i className="ri-youtube-line"></i>
              </a>
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
