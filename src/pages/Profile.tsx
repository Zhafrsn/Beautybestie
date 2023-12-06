import React from "react";
import { MainLayout } from "layout";
import ProfileComp from "components/Profile/ProfileComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export const navItems = [
  { label: 'Profile', href: '/profile', icon: <FontAwesomeIcon icon={faUserCircle} /> },
];

const AboutUs: React.FC = () => {
    return (
      <MainLayout>
       <div className="profile__container">
        <ProfileComp/>
        <div>
          {/* <FontAwesomeIcon icon={faUserCircle} className="profile__icon"/> */}
         <div className="profile__container2">
            <p className="profile__title">BeautyBestie</p>
         </div>
         <div className="profile__container3">
            <p className="profile__name">Annisa Raulita</p>
            <p className="profile__email">annisaraulita@gmail.com</p>
         </div>
         <div className="profile__container4">
           <div className="profile__container-container1">
            <div className="profile__container-sub1">
             <p className="profile__atribute">Name</p>
             <input type="text" className="profile__input-input" placeholder="name" />
            </div>
            <div className="profile__container-sub1">
             <p className="profile__atribute">Email</p>
             <input type="text" className="profile__input-input" placeholder="email" />
            </div>
           </div>
           <div className="profile__container-container1">
            <div className="profile__container-sub1">
             <p className="profile__atribute">Phone Number</p>
             <input type="number" className="profile__input-input" placeholder="phone" />
            </div>
            <div className="profile__container-sub1">
             <p className="profile__atribute">Date of Birth</p>
             <input type="date" className="profile__input-input" placeholder="mm/dd/yy" />
            </div>
           </div>
           <div className="profile__container-container1">
            <div className="profile__container-sub1">
             <p className="profile__atribute">Address</p>
             <input type="text" className="profile__input-input" placeholder="address" />
            </div>
            <div className="profile__container-sub1">
             <p className="profile__atribute">Password</p>
             <input type="password" className="profile__input-input" placeholder="old password" />
             <input type="password" className="profile__input-input" placeholder="new password" />
            </div>
           </div>
           <div className="profile__container-container1">
            <div className="profile__container-sub1">
             <a href="/cancel" className="profile__button1">
              <span className="profile__button-text">Cancel</span>
             </a>
            </div>
            <div className="profile__container-sub1">
             <a href="/save" className="profile__button2">
              <span className="profile__button-text">Save</span>
             </a>
          </div>
           </div>
         </div>
        </div>
       </div>
      </MainLayout>
    );
  };
  
  export default AboutUs;