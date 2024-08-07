import React from 'react'
import brudcrumb from '../../Images/brudcrum.png'
import image from '../../Images/jal.jpg'
const Water = () => {
  return (
    <>
     <div>
                <div className="breadcrumb-image">
                    <img src={brudcrumb} alt="Breadcrumb" />
                </div>
                <div className="breadcrumb-text">
                    <p>Home / <span style={{ color: "#FBD45A" }}>About Us</span></p>
                </div>
            </div >

            <div className="about-container">
                <div className="text-container">
                    <p className='welcome-about'><i>Work We Do</i></p>
                    <p className='heading-about'>स्वच्छ जल</p>
                    <p className='paragraph-about'>बजरंग वाहिनी दल के संगठनात्मक कार्य की बात करें तो इसमें प्रत्येक गांव/मुहल्ले के हिंदू युवाओं से संपर्क बनाकर इस संगठन का सदस्य बनाना, और संगठन के कार्यों के बारे में उनको बताना साथ ही साथ प्रत्येक गांव मोहल्ले में संगठन विस्तार करके सप्ताहिक मिलन केंद्र चलाना जहां पर बजरंग वाहिनी दल का सक्रिय सदस्य है वहां पर अखाड़ा यानी शारीरिक विकास केंद्र चलाना, सप्ताहिक मिलन केंद्र चलाना इत्यादि है।</p>
                    <button>JOIN NOW</button>
                </div>
                <div className="image-container">
                    <img src={image} alt="About Us" />
                </div>

            </div>
    </>
  )
}

export default Water