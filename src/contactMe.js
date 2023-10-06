import React from 'react';
import sphere2 from './static/sphere2.gif';
// import profile from './static/PROFILE_PIC.jpg'
import { Link } from 'react-router-dom';
import './contactMe.css';
// import './GitHubRepoCarousel.css'
import { motion } from 'framer-motion';


function ContactMe() {

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0 } };
    // const animation = {opacity: 1};
    const enterAnimation = { opacity: 1, transition: { duration: 1.5, delay: 2 } };

  return (
    <div className="contact-me-container">
    <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
        {/* <div className="contact-me-container"> */}
        <div className="contact-me-content">
            <h1>Contact Me</h1>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit" >Submit</button>
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
    {/* </div> */}
    </motion.div>
    </div>
  );
}

export default ContactMe;

// contactMe.js

// className="contact-me-container"