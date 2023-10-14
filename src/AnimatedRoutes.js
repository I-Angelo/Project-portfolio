import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Menu from './Menu';
import GitHubRepoCarousel from './GitHubRepoCarousel';
import AboutMe from './aboutMe';
import ContactMe from './contactMe';
import Projects from './Projects';
import Certifications from './certifications';

import { AnimatePresence } from 'framer-motion'; //. if a bug is present try this instead "framer-motion/dist/framer-motion"



function AnimatedRoutes() {

  const location = useLocation();

  return (
    <AnimatePresence wait>
      <Routes location={location} key={location.pathname}>
          {/* Define the default route (home) */}
          <Route path="/" element={<Menu />} />

          {/* Route for the GitHubRepoCarousel component with a dynamic parameter */}
          <Route path="/github-carousel/:repoOwner" element={<GitHubRepoCarousel />} />
          
          {/* Route for About Me */}
          <Route path="/about" element={<AboutMe />} />

          {/* Route for About Me */}
          <Route path="/contact" element={<ContactMe />} />

          {/* Route for About Me */}
          <Route path="/projects" element={<Projects />} />

          {/* Route for About Me */}
          <Route path="/certifications" element={<Certifications />} />

          {/* Add more routes as needed */}
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;


//type rfc to complete the boiler plate

// https://www.youtube.com/watch?v=FdrEjwymzdY. explanation of the animation