import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';
import logo from '../../Images/1698868863_4b65b39f091f43c03be2.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const handleMenuToggle = () => {
    //     setIsMobile(!isMobile);
    // };

    // const handleDropdownToggle = (e) => {
    //     e.stopPropagation();
    //     setIsDropdownOpen(!isDropdownOpen);
    // };

    const [isWorkActive, setIsWorkActive] = useState(false)

    const handleWorkActive = () => {
        setIsWorkActive(!isWorkActive)
    }

    const [isMobActive, setIsMobActive] = useState(false)

    const handleMobActive = () => {
        setIsMobActive(true)
    }

    const handleMobDeActive = () => {
        setIsMobActive(false)
    }

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="right">
                    <div className="top">
                        <div className="call-box">
                            <div className="icon">
                                <FaPhone className="icon" />
                            </div>
                            <div className="call-detail">
                                <p>Helpline</p>
                                <p>+91-7290928187 / 011-29961226</p>
                            </div>
                        </div>
                        <div className="call-box">
                            <div className="icon">
                                <FaEnvelope className="icon" />
                            </div>
                            <div className="call-detail">
                                <p>Send Email</p>
                                <p>bajrangvahinidal@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'> About Us</Link></li>
                            <li onMouseEnter={handleWorkActive} onMouseLeave={handleWorkActive} className='dropdown-relative'>
                                <Link>Work We Do</Link>
                                <ul className={`work-drop ${isWorkActive ? 'workShow' : ''}`}>
                                    <li><Link>चिकित्सा सहायता</Link></li>
                                    <li><Link>स्वस्थ भोजन</Link></li>
                                    <li><Link>शिक्षा</Link></li>
                                    <li><Link>स्वच्छ जल</Link></li>
                                </ul>
                            </li>
                            <li><Link to='/event'>Events & Activities</Link></li>
                            <li><Link to='/team'>Our Team</Link></li>
                            <li><Link to='/membership'>Membership</Link></li>
                            <li><Link to='/news'>news</Link></li>
                            <li><Link to='/gallery'>Gallery</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                        <div className="donate-btn">
                            <Link to='/donate'>Donate now</Link>
                        </div>
                    </div>
                </div>


                <div className={`mob-header ${isMobActive ? 'active-mob' : ''} `}>
                    <div className="mob-logo">
                        <img src={logo} alt="" />
                        <FaTimes className='close' onClick={handleMobDeActive} />
                    </div>
                    <ul className="nav-link">
                        <li><Link to={'/'} onClick={handleMobDeActive} >Home</Link></li>
                        <li><Link to={'/'} onClick={handleMobDeActive} >About Us</Link></li>
                        <li><Link to={'/'} onClick={handleMobDeActive} >Work We Do</Link></li>
                        <li><Link to={'/'} onClick={handleMobDeActive} >Home</Link></li>
                        <li><Link to={'/'} onClick={handleMobDeActive} >Home</Link></li>
                        <li><Link to={'/'} onClick={handleMobDeActive} >Home</Link></li>
                        <li><Link to={'/'} onClick={handleMobDeActive} >Home</Link></li>
                        <li><Link to={'/'} onClick={handleMobDeActive} >Home</Link></li>
                        <li><Link to={'/'} onClick={handleMobDeActive} >Home</Link></li>
                    </ul>
                    <div className="social-details">
                        <a href='' className="email">
                            <i class="ri-mail-fill"></i>
                            hitesh@gmail.com
                        </a>
                        <a href='' className="phn">
                            <i class="ri-phone-fill"></i>
                            9999999999
                        </a>
                        <div className="social-link">
                            <i class="ri-instagram-fill"></i>
                            <i class="ri-instagram-fill"></i>
                            <i class="ri-instagram-fill"></i>
                            <i class="ri-instagram-fill"></i>
                        </div>
                    </div>
                </div>
                <button className="mobile-menu-icon" onClick={handleMobActive}>
                    {isMobile ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
