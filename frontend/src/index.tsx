import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/globals.css';

// Use React 17 render API (project uses React 17 / react-scripts 4)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);