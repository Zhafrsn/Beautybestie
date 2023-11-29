import React from 'react';
import '../../styles/Productcard.css'

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}
export const Productcard: React.FC<CardProps> = ({ title, description, imageUrl}) => {
  return (
      <div className='Products-Card'>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
      <p>{description}</p>
      </div>
  );
};
