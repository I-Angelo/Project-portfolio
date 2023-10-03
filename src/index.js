import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
 // Import createRoot
import './index.css'; // Import your global CSS file if needed
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//index.js