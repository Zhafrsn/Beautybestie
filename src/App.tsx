import React from 'react';
import './styles/Global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from 'pages';
import WishlistPage from './pages/Wishlist';
import { Cart } from './pages/Cart';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import AboutUs from './pages/AboutUs';
import _404 from './pages/_404';
import Profile from './pages/Profile';
import History from './pages/History';
import { ProductCategory } from './pages/productCategory';


export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<_404/> } />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path='/categoryProduct/:category' element={<ProductCategory/>} />
        </Routes>
      </Router>
    </>
  );
};
