import React from 'react';
import '../../styles/Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface CartCardProps {
  name: string;
  image: string;
  price: number;
  quantity: number;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
}

export const CartCard: React.FC<CartCardProps> = ({
  name,
  image,
  price,
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  // onRemoveFromCart,
  // onMoveToWishlist,
}) => {
  const Subtotal = price * quantity;

  return (
      <div className='cartCard__items-container'>
        <div className='cartCard__product'>
        <img className='cartCard__product-img' src={image} alt={name} />
          <div className='cartCard__product-detail'>
          <p className='cartCard__Product-header'>{name}</p>
          <p className='cartCard__Product-price'>Price : {`IDR ${price}`}</p>
          <p className='cartCard__Product-subtotal'>Subtotal: {`IDR ${Subtotal}`}</p>
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
