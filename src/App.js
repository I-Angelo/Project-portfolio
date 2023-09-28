//App.js
import React from 'react';
import './App.css';
import Menu from './Menu'; // Import your Menu component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GitHubCarousel from './GitHubCarousel'; // Import your GitHubCarousel component

function App() {
  return (
    <Router>
      <div className="App">
        <Menu /> {/* Render the Menu component */}
        {/* Define your routes inside the Routes component */}
        <Routes>
          {/* Route for the GitHubCarousel component */}
          <Route path="/github-carousel" element={<GitHubCarousel />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
