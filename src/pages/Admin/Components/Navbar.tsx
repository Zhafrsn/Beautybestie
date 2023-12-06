import { faBars, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import '../../../styles/Admin/NavbarAdmin.css';

interface NavbarAdminProps {
  username: string;
}

const NavbarAdmin: React.FC<NavbarAdminProps> = ({ username }) => {
  return (
    <div className="navbar-admin">
      <div className='navAdmin__left'>
        <span className='navAdmin__web-title'>BeautyBestie</span>
        <button className='navAdmin__bars-icon'>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className='navAdmin-right'>
        <div className="navAdmin-item">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="navAdmin-item">
          <FontAwesomeIcon icon={faUserCircle} />
          <span>{username}</span>
          <span>Admin</span> {/*sementara*/}
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
