import React from 'react';
import './Projects.css'; // Make sure to import your CSS file correctly
import { Link, useParams } from 'react-router-dom';
import pyramid from './static/pyramid-double.gif';


const subsectionsData = [
  { title: 'Main Section 1', link: 'https://twisty-congruous-trouble.glitch.me' },
  { title: 'Main Section 2', link: 'https://final-testing-recipe.web.app/' },
  { title: 'Main Section 3', link: 'https://nettle-remarkable-jumpsuit.glitch.me' },
  { title: 'Main Section 4', link: 'https://jazzy-foregoing-planet.glitch.me' },
];

function Projects() {
    return (
      <div>
        <div>
            <h1>Projects completed and in development</h1>
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
    </div>
  );
}

export default Projects;



/*.  link="https://final-testing-recipe.web.app/" />
        <Subsection title="Title 2" link="https://twisty-congruous-trouble.glitch.me" />
        <Subsection title="Title 3" link="https://nettle-remarkable-jumpsuit.glitch.me" />
        <Subsection title="Title 4" link="https://jazzy-foregoing-planet.glitch.me" />
      </div>*/