import React, { useState } from 'react';
import './Menu.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import tesseractImage from './static/Tesseract-1Kb.gif';
import { motion } from 'framer-motion';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0 } };
    // const animation = {opacity: 1};
  const enterAnimation = { opacity: 1,  transition: { duration: 1.5, delay: 2 } };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openNewWindow = (url) => {
    // Open a new window or tab with the specified URL
    window.open(url, '_blank');
  };

  return (
    
    <motion.div className="menu-mobile" initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
    <nav className={`menu ${menuOpen ? 'open' : ''} menu2`}
    

    >
      <input
        type="checkbox"
        id="menu-toggler"
        className="menu-toggler"
        checked={menuOpen}
        onChange={toggleMenu}
      />
      <div className="menu">
      <div className={`tesseract-image ${menuOpen ? 'open' : ''}`}>
        <img src={tesseractImage} alt="Tesseract" />
      </div>
      </div>
      <ul>
        <li className="menu-item ">
          <Link className="menu-item-index unique" to="/about">
          About Me
          </Link>
        </li>
        <li className="menu-item">
          {/* Use Link component to navigate to /github-carousel route */}
          <Link className="menu-item-index waviy" to="/github-carousel/I-Angelo">
            GitHub Carousel
          </Link>
        </li>
        <li className="menu-item raise">
          <a
            className="menu-item-index raise"
            onClick={() => openNewWindow('https://www.linkedin.com/in/ivan-angelo/')}>
            LinkedIn
          </a>
        </li>
        <li className="menu-item">
          {/* Use Link component to navigate to /github-carousel route */}
          <Link className="menu-item-index waviy" to="/projects">
            Projects
          </Link>
        </li>
        <li className="menu-item ">
          <Link className="menu-item-index unique" to="/contact">
          Contact Me
          </Link>
          </li>
      </ul>
    </nav>
    </motion.div>
  
  );
};

export default Menu;














