import React from 'react';
import './styles/Global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from 'pages';
import WishlistPage from './pages/Wishlist';
import { Cart } from './components/Cart Pages/Cart';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};
