import React from 'react'
import "./AboutUs.css"
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
      </div>
      <div className="about-us-content">
        <h2>Welcome to Quick Food</h2>
        <p>
          We are passionate about delivering delicious meals from your favorite
          local restaurants right to your doorstep. Whether you're craving a quick
          snack or a gourmet meal, we've got you covered!
        </p>

        <h3>Our Mission</h3>
        <p>
          At Quick Food, our mission is to provide convenient and fast access to a wide variety
          of food options. We aim to bridge the gap between customers and restaurants, ensuring
          an exceptional experience with every delivery.
        </p>

        <h3>Why Choose Us?</h3>
        <ul>
          <li>Fast and reliable delivery</li>
          <li>Wide range of restaurants and cuisines</li>
          <li>Easy and user-friendly app experience</li>
          <li>Secure and convenient payment options</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutUs