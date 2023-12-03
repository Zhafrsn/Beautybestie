import { MainLayout } from "layout"
import { CartCard } from "../components/Cart/CartCard"
import "../styles/Cart.css";
import { useState } from "react";
// import { EmptyCart } from "../components/Cart/EmptyCart";

export const Cart: React.FC = () => {
    const [quantity, setQuantity] = useState(1); 

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
      };
    
      const decreaseQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
    };

    const totalPrice = (85000 * quantity);
    
    return (
        <MainLayout>
            <div className='Cart'>
                <section className="Cart__container">
                <h1 className="Cart__title">Cart</h1>
                    <hr className='Cart__line' />
                </section>
                {/* <EmptyCart/> */}
                <div className="cartCard__container">
                    <div className="cartCard__products-item">
                        <CartCard
                            title={""}
                            price={0}
                            quantity={quantity}
                            onIncreaseQuantity={increaseQuantity}
                            onDecreaseQuantity={decreaseQuantity}
                        />
                    </div>
                    <div className="cartCard__summary">
                        <h2 className='cartCard__summary-title'>Summary</h2>
                        <hr />
                        <div className='cartCard__Totalorders'>
                            <p>Total Orders</p>
                            <p>IDR {totalPrice}</p>
                        </div>
                        <button className='cartCard_buy-btn'>Buy</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}