// AboutUs.js
import React from 'react';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1><b>About Our Bus Booking Service</b></h1>
        <p>
          Welcome to EasyBus, your go-to platform for convenient and reliable bus bookings. We
          understand the importance of smooth and stress-free travel, and that's why we've created
          an easy-to-use platform for all your bus reservation needs.
        </p>
        <p>
          At EasyBus, we are committed to providing you with a seamless experience from booking to
          boarding. Our user-friendly interface, extensive bus network, and dedicated customer
          support make us the preferred choice for travelers across the country.
        </p>
        <h2>Why Choose EasyBus?</h2>
        <ul>
          <li>Wide Range of Bus Options: Explore a diverse range of buses to suit your preferences and budget.</li>
          <li>Simple and Secure Booking: Our online booking process is straightforward, ensuring a secure and hassle-free transaction.</li>
          <li>Real-time Updates: Stay informed with real-time updates on your bus's location, departure, and arrival times.</li>
          <li>Customer-Centric Support: Our 24/7 customer support team is here to assist you with any queries or concerns.</li>
        </ul>
        <p>
          Whether you are a frequent traveler or planning a one-time journey, EasyBus is here to
          make your bus booking experience enjoyable and efficient. Join us in redefining the way
          you travel by bus.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
