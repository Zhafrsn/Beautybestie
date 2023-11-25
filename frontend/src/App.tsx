import React from 'react';
import './styles/Global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from 'pages';
import WishlistPage from './pages/Wishlist';


export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products/>} />
          <Route path="/wishlist" element={<WishlistPage/>} />
        </Routes>
      </Router>
    </>
  );
};
