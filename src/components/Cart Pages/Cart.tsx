import React from 'react';
import { MainLayout } from 'layout';
import '../../styles/Cart.css';
import { useState } from 'react';
export const Cart: React.FC = () => {
  const [amount, setAmount] = useState('');
  return (
    <MainLayout>
      <div className="app">
        <h1>Cart</h1>
        <div className="product">
          <h2>Face Wash Bright stuff By Emna</h2>
          <p>Price : IDR.85.00</p>
          <p>Subtotal: IDR 85.000</p>
          <p>Move To Whishlist</p>
          <section className="AmountButton1">
            <button>+</button>
            <input type="number" id="amount" name="amount" value={amount} onChange={e => setAmount(e.target.value)} />
            <button>-</button>
          </section>
        </div>
        <div className="product">
          <h2>Serum Bright stuff By Emna</h2>
          <p>Price : IDR.45.00</p>
          <p>Subtotal: IDR 45.000</p>
          <p>Move To Whishlist</p>
          <section className="AmountButton1">
            <button>+</button>
            <input type="number" id="amount" name="amount" value={amount} onChange={e => setAmount(e.target.value)} />
            <button>-</button>
          </section>
        </div>
        <div className="summary">
          <h2>Summary</h2>
          <h3>Total Orders</h3>
          <p>IDR 130.000</p>
          <button>Buy</button>
        </div>
      </div>
    </MainLayout>
  );
};
