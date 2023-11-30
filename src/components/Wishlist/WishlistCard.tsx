import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { parserCurrency } from "@/utils/parsercurrency";
// import { useMediaQuery } from "@/hooks/useMediaQuery";

import '../../styles/Wishlist.css';
import { useMediaQuery } from '@mui/material';

export const navItems = [
    { label: 'Trash', href: '/', icon: <FontAwesomeIcon icon={faTrash} /> },
  ];

interface WishlistCardProps {
  title: string;
  price: number;
  image: string;
  quantity: number;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
//   onRemoveFromCart: () => void;
}

export const WishlistCard: React.FC<WishlistCardProps> = ({
  title,
  price,
  image,
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
//   onRemoveFromCart,
}) => {

//   const Subtotal = parserCurrency(price * quantity);
  
//   const handleRemoveFromCart = () => {
//     if (products.length - 1 === 0) {
//       onRemoveFromCart();
//     } else {
//       onRemoveFromCart();
//     }
//   };

  return (
    <div className='wishlist__all'>
        <div className='wishlist__kontainer2'>
            <p className='wishlist__total'>Total : .. Wishlist</p>
            <p className='wishlist__sortby'>Sort By : </p>
        </div>
        <div className='wishlist__product-container'>
            <div className='wishlist__product-container2'>
              <img src='' alt='wp-img'/>
              <div className='wishlist__detail-product'>
                <p>Face Wash Bright Stuff By Emina</p>
                <p className='wishlist__idr'>IDR 85.000</p>
              </div>
            </div>
            <div className='wishlist__action'>
                <button className='wishlist__addtocart'>
                    <FontAwesomeIcon icon={faPlus}/>
                    Add to Cart
                </button>
                <button className='wishlist__buy'>Buy</button>
                <FontAwesomeIcon icon={faTrash}/>
            </div>
        </div>
        <div className='wishlist__product-container'>
            <div className='wishlist__product-container2'>
              <img src='' alt='wp-img'/>
              <div className='wishlist__detail-product'>
                <p>Face Wash Bright Stuff By Emina</p>
                <p className='wishlist__idr'>IDR 85.000</p>
              </div>
            </div>
            <div className='wishlist__action'>
                <button className='wishlist__addtocart'>
                    <FontAwesomeIcon icon={faPlus}/>
                    Add to Cart
                </button>
                <button className='wishlist__buy'>Buy</button>
                <FontAwesomeIcon icon={faTrash}/>
            </div>
        </div>
    </div>
  );
};
