import React from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faHeart, faSearch, faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { navItems } from "../Navbar/Navitems";

import "../../styles/Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar__header">
        <div className="sidebar__container">
          <button className="sidebar__close-button" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faTimes} className="sidebar__times-icon"/>
          </button>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="sidebar__content">
          <div className="sidebar__button-container">
            <div className="sidebar__search-container">
              <FontAwesomeIcon icon={faSearch} className='sidebar__search-icon'/>
              <input
                type="text"
                className="sidebar__search-input"
                placeholder="Search here"
              />
            </div>
            <div className="sidebar__menu-item">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => window.location.href = item.href}
                  className="sidebar__button"
                >
                  <div className="sidebar__sidebar-item">
                    <FontAwesomeIcon icon={item.icon as IconProp} />
                    <p>{item.label}</p>
                  </div>
                </button>
              ))}
              <NavLink to="/wishlist" className="sidebar-link">
                <FontAwesomeIcon icon={faHeart} />
                Wishlist
              </NavLink>
              <NavLink to="/cart" className="sidebar-link">
                <FontAwesomeIcon icon={faShoppingCart} />
                Favorit
              </NavLink>
              <div>
                <button
                  onClick={() => window.location.href = "/login"}
                  className="sidebar__button"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
