import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Event from './Components/Event/Event';
import OurTeam from './Components/OurTeam/OurTeam';
import Membership from './Components/MemberShip/Membership';
import News from './Components/News/News';
import PhotoGallery from './Components/Photogallery/PhotoGallery';
import Contact from './Components/Contact/Contact';
import Donate from './Components/Donate/Donate';
import toast, { Toaster } from 'react-hot-toast';
import Medical from './Components/Medical/Medical';
import Food from './Components/Food/Food';
import Education from './Components/Education/Education';
import Water from './Components/Water/Water';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './Components/TermsOfService/TermsOfService';
import PaymentSuccess from './Components/Payment/Payment';
import ShippingAndDelivery from './Components/ShippingAndDelivery/ShippingAndDelivery';
import ReturnAndRefundPolicy from './Components/ReturnAndRefundPolicy/ReturnAndRefundPolicy';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/event' element={<Event />} />
        <Route path='/team' element={<OurTeam />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/news' element={<News />} />
        <Route path='/gallery' element={<PhotoGallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/medical-help' element={<Medical />} />
        <Route path='/food' element={<Food />} />
        <Route path='/education' element={<Education />} />
        <Route path='/water' element={<Water />} />
        <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/termservice' element={<TermsOfService />} />
        <Route path='/success' element={<PaymentSuccess />} />
        <Route path='/shipping' element={<ShippingAndDelivery />} />
        <Route path='/return' element={<ReturnAndRefundPolicy />} />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
