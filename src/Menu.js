import React, { useState } from 'react';
import './Menu.css'; // Import your CSS file for styling
import tesseractImage from './static/Tesseract-1Kb.gif';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openNewWindow = (url) => {
    // Open a new window or tab with the specified URL
    window.open(url, '_blank');
  };
  return (
    <nav className={`menu ${menuOpen ? 'open' : ''}`}>
      <input
        type="checkbox" id="menu-toggler" className="menu-toggler" checked={menuOpen} onChange={toggleMenu}/>
     <div className={`tesseract-image ${menuOpen ? 'open' : ''}`}>
        <img src={tesseractImage} alt="Tesseract" />
      </div>
      {/* <label htmlFor="menu-toggler"></label> */}
      <ul>
        <li className="menu-item ">
          <a className="menu-item-index unique" href="#">Ivan Angulo <br/> Who Am I?</a>
        </li>
        <li className="menu-item ">
          <a className="menu-item-index waviy" href="#">GitHub</a>
        </li>
        <li className="menu-item raise">
          <a className="menu-item-index raise" href="#" onClick = {() => openNewWindow('https://www.linkedin.com/in/ivan-angelo/')}>LinkedIn</a>
        </li>
        <li className="menu-item">
          <a className="menu-item-index" href="#">Projects</a>
        </li>
        <li className="menu-item">
          <a className="menu-item-index" href="#">Contact Me</a>
        </li>
        {/* <li className="menu-item">
          <a className="fas fa-glass-cheers" href="#">6</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Menu;

/* 
// Menu.js

import React, { useState } from 'react';
import './Menu.css'; // Import your CSS file for styling
import tesseractImage from './static/Tesseract-1Kb.gif';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`menu ${menuOpen ? 'open' : ''}`}>
      <input
        type="checkbox"
        id="menu-toggler"
        className="menu-toggler"
        checked={menuOpen}
        onChange={toggleMenu}
      />
      <div className={`tesseract-image ${menuOpen ? 'open' : ''}`}>
        <img src={tesseractImage} alt="Tesseract" />
      </div>
      <ul>
      {Array.from({ length: 5 }, (_, index) => (
    <li className={`menu-item ${menuOpen ? 'open' : ''}`} key={index}>
        <a className={`fas fa-cat`} href="#">
            <span>{index + 1}</span>
        </a>
    </li>
))}

      </ul>
    </nav>
  );
};

export default Menu;

*/