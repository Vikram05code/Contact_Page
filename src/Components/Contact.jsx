// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import myImage from "../images/image1.jpg";
import "../styles.css"; // Import the CSS file

import { FaWhatsapp, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    // Fetch contact information from the Spring Boot backend
    axios.get("http://localhost:8083/api/contact").then((response) => {
      setContactInfo(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="business-description">
          <p>
            Your business description goes here. Describe your business and what
            makes it unique.
          </p>
        </div>
        <div className="image-container">
          <img
            src={myImage} // Replace with your image URL
            alt="Contact"
          />
        </div>
        <h1 className="title">Get In Touch</h1>
        <div className="contact-info-container">
          <p className="info-item">
            <FaEnvelope className="icon" /> <strong></strong>{" "}
            {contactInfo.email}
          </p>
          <p className="info-item">
            <FaPhoneAlt className="icon" /> <strong></strong>{" "}
            {contactInfo.phoneNumber}
          </p>
        </div>
        <div className="btn-container">
          <a
            className="btn btn-primary"
            href={contactInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon" /> WhatsApp
          </a>
          <a
            className="btn btn-info"
            href={contactInfo.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" /> LinkedIn
          </a>
        </div>
        <p className="mt-4">{contactInfo.businessDescription}</p>
      </div>
    </div>
  );
};

export default Contact;
