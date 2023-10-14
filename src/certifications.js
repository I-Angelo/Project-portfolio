import React from 'react';
import cert from './static/aws-certified-cloud-practitioner.png';
// import profile from './static/PROFILE_PIC.jpg'
import { Link } from 'react-router-dom';
import './aboutMe.css';
// import './GitHubRepoCarousel.css'
import { motion } from 'framer-motion';
import threads from './static/Lissajous-5-2-Knot-Animated-unscreen.gif';


function Certifications() {

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0.5 } };
    const enterAnimation = { opacity: 1, transition: { duration: 1, delay: 0.5 } };

    return (
        <div className="main-container">
    <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
    <div class="scroll-container">
    <div className="about-me-container">
        <div className='about-me-content'>
            <h1>Certifications</h1>
        </div>
      {/* Content */}
      <div className="about-me-content2">
        {/* <h1>About Me</h1> */}
        <p>
        <br></br>
            
        <img src={cert} alt="Certification" className="cert-image" />

          {/* Add your "About Me" text here */}
        </p>
      </div>
      <div className="button-container">
      <Link to="/" className="home-link-button">
        <div className="button-content">
          <img src={threads} alt="Sphere" className="button-image" />
          <span>Go Back to Home</span>
        </div>
      </Link>
    </div>
    </div>
    </div>
    </motion.div>
    </div>
  );
}

export default Certifications;

