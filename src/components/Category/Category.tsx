import React from 'react';
import '../../styles/Category.css';

interface CardProps {
 image: string;
 title: string;
}

export const Category: React.FC<CardProps> = ({ image, title}) => {
 return (
    <div className="cardCategory">
      <img className="imageCategory" src={image} alt="image" />
      <h3 className="titleCategory">{title}</h3>
    </div>
 );
};
