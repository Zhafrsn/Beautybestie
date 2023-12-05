import React from "react";
import '../../styles/Profile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faLocationDot, faBasketShopping, faClockRotateLeft, faCommentDots, faBell } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "react-router-dom";

export const profileItems = [
    { label: 'Profile', href: '/profile', icon: <FontAwesomeIcon icon={faUserCircle} className="profileComp__icon"/> },
    { label: 'Address', href: '/address', icon: <FontAwesomeIcon icon={faLocationDot} className="profileComp__icon2"/> },
    { label: 'Order', href: '/order', icon: <FontAwesomeIcon icon={faBasketShopping} className="profileComp__icon"/> },
    { label: 'History', href: '/history', icon: <FontAwesomeIcon icon={faClockRotateLeft} className="profileComp__icon"/> },
    { label: 'Chat', href: '/chat', icon: <FontAwesomeIcon icon={faCommentDots} className="profileComp__icon"/> },
    { label: 'Notification', href: '/notification', icon: <FontAwesomeIcon icon={faBell} className="profileComp__icon"/> },
  ];

const ProfileComp: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="profileComp__container">
    <div className="profileComp__container2">
     {profileItems.map((item) => (
       <div key={item.label} className={`profileComp__container3 ${location.pathname === item.href ? 'active' : ''}`}>
         {item.icon}
         <a href={item.href} className="profileComp__font">{item.label}</a>
       </div>
     ))}
    </div>
   </div>   
  );

};

export default ProfileComp;
