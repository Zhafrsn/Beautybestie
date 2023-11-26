import React from 'react';
import '../../styles/Cart.css';
export const Cart: React.FC = () => {

 return (
    <div className="app">
      <h1>Cart</h1>
      <div className="product">
        <h2>Face Wash Bright stuff By Emna</h2>
        <p>Price : IDR.85.00</p>
        <p>Subtotal: IDR 85.000</p>
        <button>Move To Whishlist</button>
      </div>
      <div className="product">
        <h2>Serum Bright stuff By Emna</h2>
        <p>Price : IDR.45.00</p>
        <p>Subtotal: IDR 45.000</p>
        <button>Move To Whishlist</button>
      </div>
      <div className="summary">
        <h2>Summary</h2>
        <h3>Total Orders</h3>
        <p>Buy IDR 130.000</p>
      </div>
    </div>
 );
};

