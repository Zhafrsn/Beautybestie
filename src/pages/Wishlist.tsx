import React from 'react';
import { MainLayout } from 'layout';
import { WishlistCard } from 'components/Wishlist/WishlistCard';
// import { EmptyStateWishlist } from '../components/Wishlist/EmptyStateWishlist';


const Wishlist: React.FC = () => {
  return (
    <MainLayout>
      <section className="wishlist__kontainer">
        <h1 className="wishlist__title">Wishlist</h1>
        <hr/>
      </section>
       {/* <EmptyStateWishlist/> */}
       <WishlistCard title={''} price={0} image={''} quantity={0} onIncreaseQuantity={function (): void {
        throw new Error('Function not implemented.');
      } } onDecreaseQuantity={function (): void {
        throw new Error('Function not implemented.');
      } }/>
    </MainLayout>
  );
};

export default Wishlist;
