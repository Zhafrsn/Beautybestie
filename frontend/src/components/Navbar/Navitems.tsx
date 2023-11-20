import React from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Navbar.css";
import logo from '../../assets/Logo.PNG';

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: <span>Home Icon</span> },
  { label: "Product", href: "/product", icon: <span>Product Icon</span> },
  { label: "About Us", href: "/about-us", icon: <span>Blog Icon</span> },
];

const Navitems: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__web-title">
        <img src={logo} className='navbar__logo-image' alt='logo'/>
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

export default Navitems;
