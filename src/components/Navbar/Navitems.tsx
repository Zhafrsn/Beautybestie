/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faHeart, faHome, faInfoCircle, faRightFromBracket, faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase/config"
import '../../styles/Navbar.css';


export const navItems = [
  { label: 'Home', href: '/', icon: <FontAwesomeIcon icon={faHome} /> },
  { label: 'Products', href: '/products', icon: <FontAwesomeIcon icon={faCube} /> },
  { label: 'About Us', href: '/aboutUs', icon: <FontAwesomeIcon icon={faInfoCircle} /> },
];

export const Navitems: React.FC = () => {
  const [user] = useAuthState(auth);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar__web-title">
        <img src={'images/logo.png'} className="navbar__logo-image" alt="logo" />
        <span className="navbar__title">eautyBestie</span>
      </div>
      <div className="nav-item">
        {navItems.map(item => (
          <a key={item.label} href={item.href} className="navbar__navitem" aria-label={item.label}>
            {item.label}
          </a>
        ))}
      </div>
      <div className="navbar__item">
        <div className="navbar__search-container">
          <FontAwesomeIcon icon={faSearch} className="navbar__search-icon" />
          <input type="text" className="navbar__search-input" placeholder="Search here" />
        </div>
        <NavLink to="/wishlist" className="nav-link">
          <FontAwesomeIcon icon={faHeart} />
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          <FontAwesomeIcon icon={faShoppingCart} />
        </NavLink>
        {user ? (
          <div className="navbar__user-info">
            <button className="navbar__user-name" onClick={toggleProfile}>
              <FontAwesomeIcon icon={faUserCircle} className='navbar__profile-icon'/>
              Hi, {user.email}
            </button>
            <div>
              {isProfileOpen && (
                <div className='profile-dropdown'>
                  <button className="navbar__profile-button">
                    <a href='/profile' className='my-profile-text'>My Profile</a>
                    <FontAwesomeIcon icon={faUserCircle} className='profile-icon'/>
                  </button>
                  <hr/>
                  <button onClick={() => signOut(auth)} className="navbar__profile-button">
                    Logout
                    <FontAwesomeIcon icon={faRightFromBracket} className='profile-icon'/>
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="navbar__login-buttons">
            <a href="/login" className="navbar__login-button">
              <span className="navbar__login-text">Login</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navitems;