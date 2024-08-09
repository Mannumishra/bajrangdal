import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    useEffect(()=>{
        window.scrollTo({
          top:0,
          behavior:"smooth"
        })
      },[])
  return (
    <div className="privacy-policy">
      <div className="container">
        <h1 className="title">Privacy Policy</h1>
        <p className="update-date">Last Updated: [Date]</p>

        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to Bajrang Vahini Dal. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <ul>
            <li><strong>Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and other contact details when you interact with us.</li>
            <li><strong>Usage Data:</strong> We collect data on how you use our website, including your IP address, browser type, and the pages you visit.</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <ul>
            <li><strong>To Provide Services:</strong> We use your personal information to communicate with you, respond to your inquiries, and provide you with our services.</li>
            <li><strong>To Improve Our Website:</strong> We analyze usage data to enhance the functionality and user experience of our website.</li>
            <li><strong>To Send Communications:</strong> With your consent, we may send you updates, newsletters, and promotional offers.</li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and improve website functionality.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            Our website may contain links to third-party services. We are not responsible for the privacy practices of these services, and we encourage you to read their privacy policies.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at [email address].
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
