import React from 'react';
import './styles/Global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart Pages/Cart';
import WishlistPage from './pages/Wishlist';


export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishlistPage/>} />
        </Routes>
      </Router>
    </>
  );
};
