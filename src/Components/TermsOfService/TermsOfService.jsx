import React, { useEffect } from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
    useEffect(()=>{
        window.scrollTo({
          top:0,
          behavior:"smooth"
        })
      },[])
  return (
    <div className="terms-of-service">
      <div className="container">
        <h1 className="title">Terms of Service</h1>
        <p className="update-date">Last Updated: [Date]</p>

        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to Bajrang Vahini Dal. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to comply with these Terms.
          </p>
        </section>

        <section>
          <h2>Use of Our Website</h2>
          <p>
            You agree to use our website only for lawful purposes and in accordance with these Terms. You must not use our website in any way that could damage, disable, or impair our website or interfere with any other party's use and enjoyment of the website.
          </p>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of Bajrang Vahini Dal and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our prior written permission.
          </p>
        </section>

        <section>
          <h2>User Accounts</h2>
          <p>
            If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>
        </section>

        <section>
          <h2>Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to our website at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users of the website.
          </p>
        </section>

        <section>
          <h2>Disclaimers</h2>
          <p>
            Our website is provided "as is" without any warranties of any kind, whether express or implied. We do not warrant that the website will be available, error-free, or free of viruses or other harmful components.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall Bajrang Vahini Dal be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or services.
          </p>
        </section>

        <section>
          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Any changes will be posted on this page with an updated date. Your continued use of our website after any changes signifies your acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2>Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of [Your Country/State].
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <address>
            Bajrang Vahini Dal<br />
            [226, Shutter Wali Gali, Gali No 3, Khanpur Village, Delhi 110062]<br />
            [bajrangvahinidal@gmail.com]<br />
            [+91-7290928187]
          </address>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
