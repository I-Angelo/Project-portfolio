import React from 'react';
import sphere from './static/sphere.gif';
import profile from './static/PROFILE_PIC.jpg'
import { Link } from 'react-router-dom';
import './aboutMe.css';
// import './GitHubRepoCarousel.css'
import { motion } from 'framer-motion';


function AboutMe() {

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0.5 } };
    const enterAnimation = { opacity: 1, transition: { duration: 1, delay: 0.5 } };

    return (
        <div className="about-container">
    <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
    <div class="scroll-container">
    <div className="about-me-container">
        <div className='about-me-content'>
            <h1>About Me</h1>
        </div>
      {/* Content */}
      <div className="about-me-content2">
        {/* <h1>About Me</h1> */}
        <p>
        <br></br>
            I have successfully transitioned into the dynamic field of software engineering, bringing a wealth of experience as a pre-sales engineer and business consultant. My journey has been characterized by a commitment to continuous learning and a relentless pursuit of knowledge.
            In my role as a pre-sales engineer and business consultant, I honed my skills in understanding complex business challenges and crafting tailored solutions. <br></br><br></br>Today, I've ventured into the exciting realm of software development, where I'm leveraging my past experiences to bridge the gap between technology and real-world business needs.
            My technical expertise spans <b>JavaScript, Python, C++, TypeScript, and React</b>, complemented by <b>AWS Certified Cloud Practitioner</b> certification. This certification underscores my proficiency in cloud computing and AWS services, demonstrating my commitment to staying updated with industry trends and embracing new technologies.
            <br></br><br></br>Beyond my professional pursuits, I am passionate about cooking and playing golf. These interests complement my dedication to a balanced and fulfilling life. I believe in the importance of work-life harmony and strive to create innovative and efficient software solutions that drive business growth.
            With my transition into software engineering, I am excited to embark on this new journey and contribute my skills to the ever-evolving tech industry. I am eager to explore opportunities in software engineering roles where my diverse background can make a meaningful impact.<br></br><br></br>Please contact me if you would like to discuss my skills and experience in more detail under the 'Contact Me' section in the Main Menu !

          {/* Add your "About Me" text here */}
        </p>
      </div>
      <div className="Profile-pic">
          <img src={profile} alt="Profile" className="selfie" />
          {/* <span>Go Back to Home</span> */}
        </div>
      <div className="button-container">
      <Link to="/" className="home-link-button">
        <div className="button-content">
          <img src={sphere} alt="Sphere" className="button-image" />
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

export default AboutMe;

