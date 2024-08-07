import React from 'react'
import brudcrumb from '../../Images/brudcrum.png'

const Contact = () => {
  return (
    <>
      <div className="breadcrumb-container">
        <div className="breadcrumb-image">
          <img src={brudcrumb} alt="Breadcrumb" />
        </div>
        <div className="breadcrumb-text">
          <p>Home / <span style={{ color: "#FBD45A" }}>About Us</span></p>
        </div>
      </div>
    </>
  )
}

export default Contact