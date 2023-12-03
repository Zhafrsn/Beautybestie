import React from "react";
import '../../styles/Profile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faLocationDot, faBasketShopping, faClockRotateLeft, faCommentDots, faBell } from '@fortawesome/free-solid-svg-icons'

export const navItems = [
    { label: 'Profile', href: '/profile', icon: <FontAwesomeIcon icon={faUserCircle} /> },
    { label: 'Address', href: '/address', icon: <FontAwesomeIcon icon={faLocationDot} /> },
    { label: 'Order', href: '/order', icon: <FontAwesomeIcon icon={faBasketShopping} /> },
    { label: 'History', href: '/history', icon: <FontAwesomeIcon icon={faClockRotateLeft} /> },
    { label: 'Chat', href: '/chat', icon: <FontAwesomeIcon icon={faCommentDots} /> },
    { label: 'Notification', href: '/notification', icon: <FontAwesomeIcon icon={faBell} /> },
  ];

const ProfileComp: React.FC = () => {
    return (
        <div className="profileComp__container">
         <div className="profileComp__container2">
          <div className="profileComp__container3">
            <FontAwesomeIcon icon={faUserCircle} className="profileComp__icon"/>
            <a href="/profile" className="profileComp__font">Profile</a>
          </div>
          <div className="profileComp__container3">
            <FontAwesomeIcon icon={faLocationDot} className="profileComp__icon2"/>
            <a href="/address" className="profileComp__font">Address</a>
          </div>
          <div className="profileComp__container3">
            <FontAwesomeIcon icon={faBasketShopping} className="profileComp__icon"/>
            <a href="/order" className="profileComp__font">Order</a>
          </div>
          <div className="profileComp__container3">
            <FontAwesomeIcon icon={faClockRotateLeft} className="profileComp__icon"/>
            <a href="/history" className="profileComp__font">History</a>
          </div>
          <div className="profileComp__container3">
            <FontAwesomeIcon icon={faCommentDots} className="profileComp__icon"/>
            <a href="/chat" className="profileComp__font">Chat</a>
          </div>
          <div className="profileComp__container3">
            <FontAwesomeIcon icon={faBell} className="profileComp__icon"/>
            <a href="/notification" className="profileComp__font">Notification</a>
          </div>
         </div>
        </div>
    );

};

export default ProfileComp;
