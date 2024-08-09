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

    const [isWorkMobActive, setIsWorkMobActive] = useState(false)

    const handleWorkMobActive = () => {
        setIsWorkMobActive(!isWorkMobActive)
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
                                <a href="tel:+917290928187" className="phn" style={{ textDecoration: "none", color: "black" }}>
                                    +91-7290928187 / 011-29961226
                                </a>
                            </div>
                        </div>
                        <div className="call-box">
                            <div className="icon">
                                <FaEnvelope className="icon" />
                            </div>
                            <div className="call-detail">
                                <p>Send Email</p>
                                <a href="mailto:bajrangvahinidal@gmail.com" className="email" style={{ textDecoration: "none", color: "black" }}>
                                    bajrangvahinidal@gmail.com
                                </a>
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
                                    <li><Link to='/medical-help'>चिकित्सा सहायता</Link></li>
                                    <li><Link to='/food'>स्वस्थ भोजन</Link></li>
                                    <li><Link to='/education'>शिक्षा</Link></li>
                                    <li><Link to='/water'>स्वच्छ जल</Link></li>
                                </ul>
                            </li>
                            <li><Link to='/event'>Events & Activities</Link></li>
                            <li><Link to='/team'>Our Team</Link></li>
                            <li><Link to='/membership'>Membership</Link></li>
                            <li><Link to='/news'>news</Link></li>
                            <li><Link to='/gallery'>Gallery</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                        {/* <div className="donate-btn">
                            <Link to='/membership'>Donate now</Link>
                        </div> */}
                    </div>
                </div>


                <div className={`mob-header ${isMobActive ? 'active-mob' : ''} `}>
                    <div className="mob-logo">
                        <img src={logo} alt="" />
                        <FaTimes className='close' onClick={handleMobDeActive} />
                    </div>
                    <ul className="nav-link">
                        <li><Link to={'/'} onClick={handleMobDeActive} >Home</Link></li>
                        <li><Link to={'/about'} onClick={handleMobDeActive} >About Us</Link></li>
                        <li className={`${isWorkMobActive ? 'autoheight' : ''}`}>
                            <Link
                                onClick={handleWorkMobActive}
                                // className='formarrow'
                                className={`formarrow fixheight forspacebetween `}
                            >
                                {
                                    isWorkMobActive ? (
                                        <> Work We Do <i className="ri-subtract-line rotate"></i></>
                                    ) : (
                                        <> Work We Do <i className="ri-add-line"></i></>
                                    )
                                }
                            </Link>
                            <ul className={`work-mob-hover ${isWorkMobActive ? 'work-mob-active' : ''}`}>
                                <li><Link onClick={()=>{handleWorkMobActive() ;handleMobDeActive()}} className='fontblack' to={'/medical-help'}>चिकित्सा सहायता</Link></li>
                                <li><Link onClick={()=>{handleWorkMobActive() ;handleMobDeActive()}} className='fontblack' to={'/food'}>स्वस्थ भोजन</Link></li>
                                <li><Link onClick={()=>{handleWorkMobActive() ;handleMobDeActive()}} className='fontblack' to={'/education'}>शिक्षा</Link></li>
                                <li><Link onClick={()=>{handleWorkMobActive() ;handleMobDeActive()}} className='fontblack' to={'/water'}>स्वच्छ जल</Link></li>
                            </ul>
                        </li>
                        {/* <li>
                                <Link
                                    className='health-mob-pointer formarrow'
                                    onClick={handleHealthMobActive}
                                >
                                    {
                                        isHealthMobActive ? (
                                            <> Health Insurance <i className="ri-subtract-line rotate"></i></>
                                            ) : (
                                               <> Health Insurance <i className="ri-add-line"></i></>
                                                )
                                    }
                                </Link>
                                <ul className={`health-mob-hover ${isHealthMobActive ? 'health-mob-active' : ''}`}>
                                    <li><Link to={'/health-gain-policy'} onClick={() => {handleMenuDeActive() , handleHealthMobActive()}}><i className="ri-arrow-right-line"></i> Heath gain policy</Link></li>
                                    <li><Link to={'/wellness'} onClick={() => {handleMenuDeActive() , handleHealthMobActive()}}><i className="ri-arrow-right-line"></i> Wellness</Link></li>
                                    <li><Link to={'/personal-accident'} onClick={() => {handleMenuDeActive() , handleHealthMobActive()}}><i className="ri-arrow-right-line"></i> Personal accident</Link></li>
                                </ul>
                            </li> */}
                        <li><Link to={'/event'} onClick={handleMobDeActive} >Events & Activities</Link></li>
                        <li><Link to={'/team'} onClick={handleMobDeActive} >Our Team</Link></li>
                        <li><Link to={'/membership'} onClick={handleMobDeActive} >Membership</Link></li>
                        <li><Link to={'/news'} onClick={handleMobDeActive} >Gallery</Link></li>
                        <li><Link to={'/gallery'} onClick={handleMobDeActive} >Contact Us</Link></li>
                        {/* <li><Link to={'/membership'} onClick={handleMobDeActive} >Donate now</Link></li> */}
                    </ul>
                    <div className="social-details">
                        <a href="mailto:bajrangvahinidal@gmail.com" className="email" style={{ textDecoration: "none", color: "white" }}>
                            <i class="ri-mail-fill" style={{ color: "rgb(245, 129, 42)" }}></i>
                            bajrangvahinidal@gmail.com
                        </a>
                        <a href="tel:+917290928187" className="phn" style={{ textDecoration: "none", color: "white" }}>
                            <i class="ri-phone-fill" style={{ color: "rgb(245, 129, 42)" }}></i>
                            +91-7290928187 / 011-29961226
                        </a>
                        <div className="social-link">
                            <i className="ri-facebook-circle-line text-light"></i>
                            <i className="ri-twitter-line text-light"></i>
                            <i className="ri-instagram-line text-light"></i>
                            <i className="ri-linkedin-box-line text-light"></i>
                            <i className="ri-youtube-line text-light"></i>
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
