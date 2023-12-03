import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Wishlist.css';
// export const navItems = [
//     { label: 'Trash', href: '/', icon: <FontAwesomeIcon icon={faTrash} /> },
//   ];

// interface WishlistCardProps {
//   title: string;
//   price: number;
//   image: string;
//   quantity: number;
//   onIncreaseQuantity: () => void;
//   onDecreaseQuantity: () => void;
// //   onRemoveFromCart: () => void;
// }

export const WishlistCard: React.FC = (
  // {
  // title,
  // price,
  // image,
  // quantity,
  // onIncreaseQuantity,
  // onDecreaseQuantity,
  // onRemoveFromCart,
// }
) => {
  
//   const handleRemoveFromCart = () => {
//     if (products.length - 1 === 0) {
//       onRemoveFromCart();
//     } else {
//       onRemoveFromCart();
//     }
//   };

  return (
    <div className='wishlist__products-item'>
      <div className='wishlist__product-container'>
        <div className='wishlist__product-container2'>
          <img src='images/FaceWash1.png' alt='wp-img' className='wishlist__product-img'/>
          <div className='wishlist__detail-product'>
            <p className='wishlist__product-name'>Face Wash Bright Stuff By Emina</p>
            <p className='wishlist__idr'>IDR 85.000</p>
          </div>
        </div>
        <div className='wishlist__action'>
          <button className='wishlist__addtocart'>
            <FontAwesomeIcon icon={faPlus} className='wishlist__plus-icon'/>
              Add to Cart
          </button>
          <button className='wishlist__buy'>Buy</button>
          <FontAwesomeIcon icon={faTrashAlt} className='wishlist__trash-icon'/>
        </div>
      </div>
      <hr/>
      <div className='wishlist__product-container'>
        <div className='wishlist__product-container2'>
          <img src='images/FaceWash1.png' alt='wp-img' className='wishlist__product-img'/>
            <div className='wishlist__detail-product'>
              <p className='wishlist__product-name'>Face Wash Bright Stuff By Emina</p>
              <p className='wishlist__idr'>IDR 85.000</p>
            </div>
        </div>
        <div className='wishlist__action'>
          <button className='wishlist__addtocart'>
            <FontAwesomeIcon icon={faPlus} className='wishlist__plus-icon'/>
              Add to Cart
          </button>
          <button className='wishlist__buy'>Buy</button>
          <FontAwesomeIcon icon={faTrashAlt} className='wishlist__trash-icon'/>
        </div>
      </div>
    </div>
  );
};
