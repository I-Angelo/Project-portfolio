import React from 'react';
import './Projects.css'; // Make sure to import your CSS file correctly
import { Link, useParams } from 'react-router-dom';
import pyramid from './static/pyramid-double.gif';
import { motion } from 'framer-motion'


const subsectionsData = [
  { title: 'Whiskey!', link: 'https://twisty-congruous-trouble.glitch.me' },
  { title: 'React - Cooking and Recipes App', link: 'https://final-testing-recipe.web.app/' },
  { title: 'Phonebook', link: 'https://nettle-remarkable-jumpsuit.glitch.me' },
  { title: 'Flask - Recipes', link: 'https://jazzy-foregoing-planet.glitch.me' },
];

function Projects() {

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0 } };
    // const animation = {opacity: 1};
    const enterAnimation = { opacity: 1, transition: { duration: 1.5, delay: 2 } };

    return (
        <div className="main-container">
        <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}
        >
            <div className='title'>
                <h1>Projects completed</h1>
                <h1>and</h1>
                <h1>in development</h1>
            </div>
            <div className="Projects background-fade">
                <div className="grid-container">
                    {subsectionsData.map((subsection, index) => (
                    <div key={index} className="project-subsection">
                        <h2>{subsection.title}</h2>
                        <a href={subsection.link} target="_blank" rel="noopener noreferrer">
                        Visit Website
                        </a>
                    </div>
                    ))}
                </div>
            </div>
            <div className="button-container">
            <Link to="/" className="home-link-button">
                <div className="button-content">
                    <img src={pyramid} alt="Pyramid" className="button-image" />
                    <span>Go Back to Home</span>
                </div>
            </Link>
            </div>
        </motion.div>
        </div>
  );
}

export default Projects;



/*.  link="https://final-testing-recipe.web.app/" />
        <Subsection title="Title 2" link="https://twisty-congruous-trouble.glitch.me" />
        <Subsection title="Title 3" link="https://nettle-remarkable-jumpsuit.glitch.me" />
        <Subsection title="Title 4" link="https://jazzy-foregoing-planet.glitch.me" />
      </div>*/