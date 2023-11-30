import React from 'react';
import '../../styles/Productcard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  title: string;
  category: string;
  Price: string;
  imageUrl: string;
}
export const Productcard: React.FC<CardProps> = ({ title, category, Price, imageUrl}) => {
  return (
    <div className='Products-Card'>
        <FontAwesomeIcon icon={faHeart} className='productCard-heart'/>
        <img src={imageUrl} alt={title} className='ProductsCard-img'/>
        <h2 className='productCard-title'>{title}</h2>
        <p className='productCard-category'>{category}</p>
        <p>{Price}</p>
      <button>
        <FontAwesomeIcon icon={faCartShopping} />
        Add to Cart
      </button>
      </div>
  );
};
