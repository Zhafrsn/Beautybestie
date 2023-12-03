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
      <div className='productsCard-detail'>
        <img src={imageUrl} alt={title} className='ProductsCard-img'/>
        <h2 className='productCard-title'>{title}</h2>
        <p className='productCard-category'>{category}</p>
        <p className='productCard-price'>{Price}</p>
      </div>
      <button className='ProductsCard-btn'>
        <FontAwesomeIcon icon={faCartShopping} />
        Add to Cart
      </button>
    </div>
  );
};
