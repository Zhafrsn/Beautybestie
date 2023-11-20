import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './styles/Global.css';

export const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
};
