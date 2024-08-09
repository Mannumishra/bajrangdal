import React, { useState } from 'react';
import axios from 'axios';
import brudcrumb from '../../Images/brudcrum.png';
import './Membership.css';
import image from '../../Images/1698995952_5db1424e8afbf6462406.jpeg';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Membership = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    paranrsName: "",
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    image: '',
    paymentMethod: '',
    donationAmount: '',
  });
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false)
  const [otp, setOtp] = useState('');
  const [verifyMail, setVerifyMail] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [verifyMessage, setVerifyMessage] = useState("");
  const [step, setStep] = useState(1);

  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendOtp = async () => {
    try {
      setLoading(true)
      const res = await axios.post('http://localhost:9000/api/send-otp', { email: formData.email });
      if (res.status === 200) {
        toast.success("OTP Sent Successfully !!!!");
        setOtpSent(true);
        setOtpError('');
        setVerifyMessage('')
        setLoading(false)
      } else {
        setLoading(false)
        setOtpError('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      setLoading(false)
      setOtpError('Failed to send OTP. Please try again.');
    }
  };

  const verifyOtp = async () => {
    try {
      setLoading(true)
      const res = await axios.post('http://localhost:9000/api/verify-otp', { email: formData.email, otp });
      if (res.status === 200) {
        setVerifyMessage("Email Verify Successfully");
        setVerifyMail(true);
        setLoading(false)
      } else {
        setVerifyMail(false)
        setLoading(false)
        setOtpError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setLoading(false)
      setOtpError('Invalid OTP. Please try again.');
    }
  }

  const errorverify = () => {
    toast.error("Please verify the Email")
  }

  const handleNext = () => {
    if (step === 1) {
      const errorMessage = [];
      if (!formData.title) errorMessage.push("Please fill the Title");
      if (!formData.name) errorMessage.push("Please fill the name");
      if (!formData.email) errorMessage.push("Please fill the Email");
      if (!formData.phone || formData.phone.length < 10) errorMessage.push("Please fill the Phone or check the phone number");
      if (!otp) errorMessage.push("Please Verify the email");
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

  const getfiledta = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const formdata = new FormData();
  formdata.append('title', formData.title);
  formdata.append('name', formData.name);
  formdata.append('paranrsName', formData.paranrsName);
  formdata.append('email', formData.email);
  formdata.append('phone', formData.phone);
  formdata.append('address', formData.address);
  formdata.append('city', formData.city);
  formdata.append('state', formData.state);
  formdata.append('image', formData.image);
  formdata.append('paymentMethod', formData.paymentMethod);
  formdata.append('donationAmount', formData.donationAmount);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:9000/api/signup', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      if (res.status === 200) {
        // toast.success('Membership Form Sent Successfully');
        // Open Razorpay Checkout
        const { orderId, amount } = res.data; // Ensure your backend returns these
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Add your Razorpay key here
          amount: amount,
          currency: 'INR',
          name: 'Bajrang Vahini Dal',
          description: 'Test Transaction',
          order_id: orderId,
          handler: async function (response) {
            // Send payment details to backend for verification
            const verificationResponse = await axios.post('http://localhost:9000/api/payment-verification', {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              userId: res.data.userId,
            });
            if (verificationResponse.status === 200) {
              toast.success('Payment Successful');
              navigate('/success'); // Redirect to success page or wherever
            } else {
              toast.error('Payment Verification Failed');
            }
          },
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone,
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>

      {loading ? <Loading /> : ""}
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
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group" >
                      <label htmlFor="title">
                        Title<sup className="text-danger">*</sup>
                      </label>
                      <select id="title" name="title" value={formData.title} onChange={handleChange} required>
                        <option value="" disabled>
                          Title
                        </option>
                        <option value="Mr">Mr.</option>
                        <option value="Mrs">Mrs.</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="form-group">
                      <label htmlFor="name">
                        Name<sup className="text-danger">*</sup>
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">
                    Guardian Name<sup className="text-danger">*</sup>
                  </label>
                  <input type="text" id="name" name="paranrsName" value={formData.paranrsName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email<sup className="text-danger">*</sup>
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  {
                    otpSent ? null : <button className="btn btn-warning mt-1" onClick={sendOtp} type="button">
                      Send OTP
                    </button>
                  }
                </div>
                {otpSent && (
                  <div className="form-group">
                    <label htmlFor="otp">
                      Verify OTP<sup className="text-danger">*</sup>
                    </label>
                    <input type="text" id="otp" name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                    {
                      verifyMail ? null : <>
                        <button className="btn btn-warning mt-2" onClick={verifyOtp} type="button">
                          Verify
                        </button> &nbsp;
                        <button className="btn btn-warning mt-1" onClick={sendOtp} type="button">
                          ReSend Otp
                        </button>
                      </>
                    }
                  </div>
                )}
                <p className='text-success'>{verifyMessage}</p>
                {otpError && <p className="text-danger">{otpError}</p>}
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone<sup className="text-danger">*</sup>
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                {
                  verifyMail ? <button type="button" className="btn btn-warning" onClick={handleNext}>
                    Next
                  </button> : <button type="button" className="btn btn-warning" onClick={errorverify}>
                    Next
                  </button>
                }
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
                    State/UT<sup className="text-danger">*</sup>
                  </label>
                  <select id="state" name="state" value={formData.state} onChange={handleChange} required>
                    <option value="" selected disabled>
                      Select your state/UT
                    </option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
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
                    Profile Pic<sup className="text-danger">*</sup>
                  </label>
                  <input type="file" id="zip" name="image" onChange={getfiledta} required />
                </div>
                <button type="button" className="btn btn-warning" onClick={handlePrevious}>
                  Previous
                </button> &nbsp;
                <button type="button" className="btn btn-warning" onClick={handleNext}>
                  Next
                </button>
              </div>
            )}
            {step === 3 && (
              <div className="membership-form">
                <h3>Payment Information</h3>
                <div className="form-group">
                  <label htmlFor="donationAmount">
                    Donation Amount<sup className="text-danger">*</sup>
                  </label>
                  <input type="number" id="donationAmount" name="donationAmount" value={formData.donationAmount} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="paymentMethod">
                    Payment Method<sup className="text-danger">*</sup>
                  </label>
                  <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                    <option value="" disabled>
                      Select your payment method
                    </option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>
                </div>

                <button type="button" className="btn btn-warning" onClick={handlePrevious}>
                  Previous
                </button> &nbsp;
                <button type="submit" className="btn btn-success" onClick={handleSubmit}>
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
