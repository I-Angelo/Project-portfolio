import React from 'react';
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import './App.css';
//import Menu from './Menu'; // Import your Menu component
import { BrowserRouter as Router } from 'react-router-dom';
//import GitHubRepoCarousel from './GitHubRepoCarousel'; // Import your GitHubRepoCarousel component
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary component
// import AboutMe from './aboutMe';
// import ContactMe from './contactMe'
// import Projects from './Projects';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Wrap your routes in the ErrorBoundary component */}
        <ErrorBoundary>



          <AnimatedRoutes />






          {/*  */}
          {/* Define your routes inside the Routes component */}
          {/* <Routes> */}
            {/* Define the default route (home) */}
            {/* <Route path="/" element={<Menu />} /> */}

            {/* Route for the GitHubRepoCarousel component with a dynamic parameter */}
            {/* <Route path="/github-carousel/:repoOwner" element={<GitHubRepoCarousel />} /> */}
            
            {/* Route for About Me */}
            {/* <Route path="/about" element={<AboutMe />} /> */}

            {/* Route for About Me */}
            {/* <Route path="/contact" element={<ContactMe />} /> */}

            {/* Route for About Me */}
            {/* <Route path="/projects" element={<Projects />} /> */}
         
            {/* Add more routes as needed */}
          {/* </Routes> */}
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;

// App.js







/* import React from 'react';
import './App.css';
import Menu from './Menu'; // Import your Menu component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GitHubRepoSlide from './GitHubRepoSlide'; // Import your GitHubRepoSlide component

function App() {
  // Define the repoOwner and repoName variables
  const repoOwner = 'I-Angelo';
  const repoName = 'Project-portfolio';

  return (
    <Router>
      <div className="App">
        {/* Define your routes inside the Routes component *//*}
        <Routes>
          {/* Define the default route (home) as / *//*}
          <Route path="/" element={<Menu />} />

          {/* Route for the GitHubRepoSlide component *//*}
          <Route path="/github-carousel" element={<GitHubRepoSlide repoOwner={repoOwner} repoName={repoName} />} />

          {/* Add more routes as needed *//*}
        </Routes>
      </div>
    </Router>
  );
}

export default App;*/
