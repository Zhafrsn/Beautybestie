import React from 'react';
import '../../styles/Productcard.css'

interface CardProps {
  title: string;
  Price: string;
  imageUrl: string;
}
export const Productcard: React.FC<CardProps> = ({ title, Price, imageUrl}) => {
  return (
      <div className='Products-Card'>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
      <p>{Price}</p>
      </div>
  );
};
