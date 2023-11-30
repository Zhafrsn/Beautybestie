import { MainLayout } from "layout"
import { CartCard } from "../components/Cart"
import "../styles/Cart.css";
// import { EmptyCart } from "components/Cart";

export const Cart: React.FC = () => {
    return (
        <MainLayout>
            <div className='Cart'>
                <section className="Cart__container">
                <h1 className="Cart__title">Cart</h1>
                    <hr className='Cart__line' />
                </section>
                {/* <EmptyCart/> */}
                <CartCard/>
            </div>
        </MainLayout>
    )
}