import React from 'react';
import '../../styles/Brand.css';

interface CardProps {
 logo: string;
 title?: string;
 description?: string;
}

const Card: React.FC<CardProps> = ({ logo, title, description }) => {
 return (
    <div className="card">
      <img className="logo" src={logo} alt="logo" />
    </div>
 );
};

export default Card;