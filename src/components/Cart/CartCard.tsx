import React from 'react';
import '../../styles/Cart.css';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface CartCardProps{
  title: string;
  price: number;
  quantity: number;
}

export const CartCard: React.FC<CartCardProps> = ({ title, price, quantity }) => {
  const Subtotal = (85.000 * quantity);
  const [amount, setAmount] = useState('');

  return (
    <div className="cartCard__container">
      <div className='cartCard__items'>
        <div className="cartCard__product-container">
          <div className='cartCard__product'>
            <img src='' alt='img'/>
            <div className='cartCard__product-detail'>
              <h5>Face Wash Bright stuff By Emna</h5>
              <div className='cartCard__Product-price'>
                <p>Price : IDR85.000</p>
                <div className='cartCard__Product-subtotal'>
                  <p>Subtotal: IDR85.000</p>
                  </div>
                </div>
            </div>
          </div>
          <hr/>
          <div className='cartCard__cart-action'>
            <h4>Move To Whishlist</h4>
            <FontAwesomeIcon icon={faTrash} className="Trash-icon"/>
            <section className="cartCard__btn-amount">
              <button>+</button>
              <input type="number" id="amount" name="amount" value={amount} onChange={e => setAmount(e.target.value)} />
              <button>-</button>
            </section>
          </div>
        </div>
        {/* <div className="cartCard__product">
          <h2>Serum Bright stuff By Emna</h2>
          <p>Price : IDR.45.00</p>
          <p>Subtotal: IDR 45.000</p>
          <p>Move To Whishlist</p>
          <section className="cartCard__btn-amount">
            <button>+</button>
            <input type="number" id="amount" name="amount" value={amount} onChange={e => setAmount(e.target.value)} />
            <button>-</button>
          </section>
        </div> */}
      </div>
      <div className="cartCard__summary">
        <h2>Summary</h2>
        <hr />
        <div className='cartCard__Totalorders'>
          <p>Total Orders</p>
          <p>IDR 130.000</p>
        </div>
        <div className="cartCard__Buybtn">
          <button className='cartCard_btn'>Buy</button>
        </div>
      </div>
    </div>
  );
};
