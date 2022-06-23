import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CarContextProvider from './components/CarContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <CarContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CarContextProvider>
  </Router>
);
