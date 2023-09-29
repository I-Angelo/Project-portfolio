import React from 'react';
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
        {/* Define your routes inside the Routes component */}
        <Routes>
          {/* Define the default route (home) */}
          <Route path="/" element={<Menu />} />

          {/* Route for the GitHubRepoSlide component */}
          <Route path="/github-carousel" element={<GitHubRepoSlide repoOwner={repoOwner} repoName={repoName} />} />

          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
