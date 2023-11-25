import React from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faHeart, faHome, faInfoCircle, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Navbar.css";

export const navItems = [
  { label: "Home", href: "/", icon: <FontAwesomeIcon icon={faHome} />},
  { label: "Product", href: "/product", icon: <FontAwesomeIcon icon={faCube}/> },
  { label: "About Us", href: "/about-us", icon: <FontAwesomeIcon icon={faInfoCircle}/> },
];

export const Navitems: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__web-title">
        <img src={'images/logo.png'} className='navbar__logo-image' alt='logo'/>
        <span className="navbar__title">eautyBestie</span>
      </div>
      <div className="nav-item">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="navbar__navitem"
            aria-label={item.label}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className='navbar__item'>
        <div className="navbar__search-container">
          <FontAwesomeIcon icon={faSearch} className='navbar__search-icon'/>
          <input
            type="text"
            className="navbar__search-input"
            placeholder="Search here"
          />
        </div>
        <NavLink to="/wishlist" className="nav-link">
          <FontAwesomeIcon icon={faHeart} />
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          <FontAwesomeIcon icon={faShoppingCart} />
        </NavLink>
        <div className="navbar__login-buttons">
          <a href="/login" className="navbar__login-button">
            <span className="navbar__login-text">Login</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
