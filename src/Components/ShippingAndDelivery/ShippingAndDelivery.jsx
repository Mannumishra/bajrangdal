import React, { useEffect } from 'react';
import './ShippingAndDelivery.css';

const ShippingAndDelivery = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="shipping-and-delivery">
      <div className="container">
        <h1 className="title">Shipping and Delivery</h1>
        <p className="update-date">Last Updated: [Date]</p>

        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to Bajrang Vahini Dal. We Have No Shipping And Delivery .
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our shipping and delivery policies, please contact us at:
          </p>
          <address>
            Bajrang Vahini Dal<br />
            [226, Shutter Wali Gali, Gali No 3, Khanpur Village, Delhi 110062]<br />
            [bajrangvahinidal@gmail.com]<br />
            [ +91-7290928187]
          </address>
        </section>
      </div>
    </div>
  );
};

export default ShippingAndDelivery;
