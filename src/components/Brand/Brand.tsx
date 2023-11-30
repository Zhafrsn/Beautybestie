import React from 'react';
import '../../styles/Brand.css';

interface CardProps {
 logo: string;
 title?: string;
 description?: string;
}

const Brand: React.FC<CardProps> = ({ logo, title, description }) => {
 return (
    <div className="cardBrand">
      <img className="logoBrand" src={logo} alt="logo" />
    </div>
 );
};

export default Brand;