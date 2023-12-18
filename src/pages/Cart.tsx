import { MainLayout } from "layout"
import { CartCard } from "../components/Cart/CartCard"
import "../styles/Cart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductById } from "../firebase/getProductById";
import { TCart } from "../types/cart.type";
// import { addToCart, fetchCartData } from "../firebase/cart";
import { EmptyCart } from "../components/Cart/EmptyCart";

export const Cart: React.FC = () => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState<TCart[]>([]);
    // const [productsInCart, setProductsInCart] = useState<any[]>([]);
    
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    
    // const totalPrice = (Subtotal * quantity);
    
    const handleBuy = () => {
        navigate('/checkout');
    };
    
    useEffect(() => {
        const fetchCartProducts = async () => {
            try {
                const productDetailsPromises = cartItems.map(async (cartItem) => {
                    const productData = await getProductById(cartItem.product.id);
                    console.log('Product Data:', productData);

                    return {
                        id: cartItem.id,
                        product: {
                            id: productData.id,
                            bestSeller: productData.bestSeller,
                            brand: productData.brand,
                            category: productData.category,
                            description: productData.description,
                            image: productData.image,
                            name: productData.name,
                            price: productData.price,
                            stock: productData.stock,
                        },
                        quantity: cartItem.quantity,
                        createdAt: cartItem.createdAt,
                        updatedAt: cartItem.updatedAt,
                    };
                });
      
                const updatedCart = await Promise.all(productDetailsPromises);
                if (JSON.stringify(cartItems) !== JSON.stringify(updatedCart)) {
                    setCartItems(updatedCart);
                  }
                } catch (error) {
                  console.error('Error fetching cart product data:', error);
                }
              };
      
        fetchCartProducts();
    }, [cartItems]);
      
      
    return (
        <MainLayout>
            <div className='Cart'>
                <section className="Cart__container">
                    <h1 className="Cart__title">Cart</h1>
                    <hr className='Cart__line' />
                </section>
                {cartItems.length === 0 ? (
                    <EmptyCart />
                ) : (
                    <div className="cartCard__container">
                        <div className="cartCard__products-item">
                            {cartItems.map((cart) => (
                                <CartCard
                                    key={cart.id}
                                    name={cart.product.name}
                                    image={cart.product.image}
                                    price={cart.product.price}
                                    quantity={quantity}
                                    onIncreaseQuantity={increaseQuantity}
                                    onDecreaseQuantity={decreaseQuantity}
                                />
                            ))}
                        </div>
                        <div className="cartCard__summary">
                            <h2 className='cartCard__summary-title'>Summary</h2>
                            <hr />
                            <div className='cartCard__Totalorders'>
                                <p>Total Orders</p>
                                {/* <p>IDR {totalPrice}</p> */}
                            </div>
                            <button className='cartCard_buy-btn' onClick={handleBuy}>Buy</button>
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};