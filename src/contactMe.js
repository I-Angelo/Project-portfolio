import React, { useState } from 'react';
import sphere2 from './static/sphere2.gif';
import { Link } from 'react-router-dom';
import './contactMe.css';
import { motion } from 'framer-motion';

function ContactMe() {
  const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0 } };
  const enterAnimation = { opacity: 1, transition: { duration: 1.5, delay: 2 } };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
        const response = await fetch('https://your-firebase-project.web.app/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      
        if (response.status === 201) {
          // Data submitted successfully
          // You can add code here to display a success message or redirect the user
        } else {
          // Handle other response statuses (e.g., server error)
          console.error('Error while submitting data. Status:', response.status);
        }
      } catch (error) {
        console.error('Error while submitting data:', error);
      }
      
  };
  

  return (
    <div className="contact-me-container">
      <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
        <div className="contact-me-content">
          <h1>Contact Me</h1>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleFormChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleFormChange}
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleFormChange}
            ></textarea>

            <button type="submit" className="square-button">
              Submit
            </button>
          </form>
        </div>
        <div className="button-container">
          <Link to="/" className="home-link-button">
            <div className="button-content">
              <img src={sphere2} alt="Sphere" className="button-image" />
              <span>Go Back to Home</span>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactMe;

// contactMe.js

// className="contact-me-container"