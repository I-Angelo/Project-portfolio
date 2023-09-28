import React from 'react';
import './App.css';
import Menu from './Menu'; // Import your Menu component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Menu /> {/* Render the Menu component */}
      {/* More content */}
    </div>
  );
}

export default App;
