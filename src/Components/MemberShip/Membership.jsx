import React, { useState } from 'react';
import axios from 'axios';
import brudcrumb from '../../Images/brudcrum.png';
import './Membership.css';
import image from '../../Images/1698995952_5db1424e8afbf6462406.jpeg';
import toast from 'react-hot-toast';

const Membership = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: '',
    donationAmount: '',
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [verifyMail ,setVerifyMale] = useState(false)
  const [otpError, setOtpError] = useState('');
  const [verifyMessage ,setVerifyMessage] = useState("")
  const [step, setStep] = useState(1);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendOtp = async () => {
    try {
      const res = await axios.post('https://bajrangserver.onrender.com/api/send-otp', { email: formData.email });
      if (res.status === 200) {
        toast.success("OTP Sent Successfully !!!!");
        setOtpSent(true);
        setOtpError('');
      } else {
        setOtpError('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      setOtpError('Failed to send OTP. Please try again.');
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post('https://bajrangserver.onrender.com/api/verify-otp', { email: formData.email, otp });
      if (res.status === 200) {
        setVerifyMessage("Email Verify Successfully")
        setVerifyMale(true)
      } else {
        setOtpError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setOtpError('Invalid OTP. Please try again.');
    }
  };

  const handleNext = () => {
    if (step === 1) {
      const errorMessage = []
      if (!formData.title) errorMessage.push("Please fill the Titele")
      if (!formData.name) errorMessage.push("Please fill the name")
      if (!formData.email) errorMessage.push("Please fill the Email")
      if (!formData.phone || formData.phone.length<10 ) errorMessage.push("Please fill the Phone or check the phone number")
      if (!otp) errorMessage.push("Please Verify the email")
      if (errorMessage.length > 0) {
        toast.error(errorMessage.join(","));
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data
  };

  return (
    <>
      <div className="breadcrumb-container">
        <div className="breadcrumb-image">
          <img src={brudcrumb} alt="Breadcrumb" />
        </div>
        <div className="breadcrumb-text">
          <p>
            Home / <span style={{ color: '#FBD45A' }}>About Us</span>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h4 className="text-center p-4 memvershipmainheading"><u>Join us fill the membership form</u></h4>
        </div>
        <div className="row">
          <div className="col-md-6 memberimage">
            <img src={image} alt="" />
          </div>
          <div className="col-md-6">
            {step === 1 && (
              <div className="membership-form">
             <h3>Personal Information</h3>
                <div className="form-group">
                  <label htmlFor="title">
                    Title<sup className="text-danger">*</sup>
                  </label>
                  <select id="title" name="title" value={formData.title} onChange={handleChange} required>
                    <option value="" disabled>
                      Select your title
                    </option>
                    <option value="Mr">Mr.</option>
                    <option value="Mrs">Mrs.</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="name">
                    Name<sup className="text-danger">*</sup>
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email<sup className="text-danger">*</sup>
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  {!otpSent && (
                    <button className="btn btn-warning mt-1" onClick={sendOtp} type="button">
                      Send OTP
                    </button>
                  )}
                </div>
                {otpSent && (
                  <div className="form-group">
                    <label htmlFor="otp">
                      Verify OTP<sup className="text-danger">*</sup>
                    </label>
                    <input type="text" id="otp" name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                    {
                      verifyMail ? null :  <button className="btn btn-warning mt-2" onClick={verifyOtp} type="button">
                        Verify
                      </button> 
                    }
                  </div>
                )}
                <p className='text-success'>{verifyMessage}</p>
                {otpError && <p className="text-danger">{otpError}</p>}
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone<sup className="text-danger">*</sup>
                  </label>
                  <input type="tel" id="phone"  name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <button type="button" className="btn btn-warning" onClick={handleNext}>
                  Next
                </button>
              </div>
            )}
            {step === 2 && (
              <div className="membership-form">
              <h3>Contact Information</h3>
                <div className="form-group">
                  <label htmlFor="address">
                    Address<sup className="text-danger">*</sup>
                  </label>
                  <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="state">
                    State<sup className="text-danger">*</sup>
                  </label>
                  <select id="state" name="state" value={formData.state} onChange={handleChange} required>
                    <option value="" disabled>
                      Select your state
                    </option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    {/* Add all other states here */}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="city">
                    City<sup className="text-danger">*</sup>
                  </label>
                  <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">
                    Upload Profile Pic<sup className="text-danger">*</sup>
                  </label>
                  <input type="file" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
                </div>
                <button type="button" className="btn btn-warning" onClick={handlePrevious}>
                  Previous
                </button>
                &nbsp;
                <button type="button" className="btn btn-warning" onClick={handleNext}>
                  Next
                </button>
              </div>
            )}
            {step === 3 && (
              <div className="membership-form">
                  <h3>Donation Money</h3>
                <div className="form-group">
                  <label htmlFor="paymentMethod">
                    Payment Method<sup className="text-danger">*</sup>
                  </label>
                  <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                    <option value="" disabled>
                      Select payment method
                    </option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="donationAmount">
                    Donation Amount<sup className="text-danger">*</sup>
                  </label>
                  <input type="number" id="donationAmount" name="donationAmount" value={formData.donationAmount} onChange={handleChange} required />
                </div>
                <button type="button" className="btn btn-warning" onClick={handlePrevious}>
                  Previous
                </button> &nbsp;
                <button type="submit" className="btn btn-warning" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
