import React from 'react';
import '../../styles/Cart.css';
// import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface CartCardProps{
  title: string;
  price: number;
  quantity: number;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  // onRemoveFromCart: () => void;
  // onMoveToFavorites: () => void;
}

export const CartCard: React.FC<CartCardProps> = ({
  // title,
  // price,
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  // onRemoveFromCart,
}) => {
  const Subtotal = (85000 * quantity);

  // const handleRemoveFromCart = () => {
  //   if (fakeCartData.products.length - 1 === 0) {
  //     onRemoveFromCart();
  //   } else {
  //     onRemoveFromCart();
  //   }
  // };

  return (
      <div className='cartCard__items-container'>
        <div className='cartCard__product'>
          <img className='cartCard__product-img' src='/images/FaceWash1.png' alt='img'/>
          <div className='cartCard__product-detail'>
            <p className='cartCard__Product-header'>Bright Stuff Face Wash</p>
            <p className='cartCard__Product-price'>Price : IDR 85.000</p>
          <p className='cartCard__Product-subtotal'>Subtotal: IDR {Subtotal}</p>
          </div>
        </div>
        <hr/>
        <div className='cartCard__cart-action'>
          <p className='cartCard__mv-to-wishlist'>Move To Whishlist</p>
          <p className='cartCard__mv-to-wishlist'>|</p>
          <FontAwesomeIcon icon={faTrash} className="cartCard__trash-icon"/>
          <div className="cartCard__quantity">
            <button className='cartCard__quantity-btn' onClick={onDecreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button className='cartCard__quantity-btn' onClick={onIncreaseQuantity}>+</button>
          </div>
        </div>
      </div>
  );
};
