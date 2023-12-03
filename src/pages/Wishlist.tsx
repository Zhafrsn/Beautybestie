import React from 'react';
import { MainLayout } from 'layout';
import { WishlistCard } from 'components/Wishlist/WishlistCard';
import { Dropdown } from 'components/DropDown';
// import { EmptyStateWishlist } from '../components/Wishlist/EmptyStateWishlist';

import '../styles/Wishlist.css';

const sortby = ['All','Date (Latest)', 'Date (Oldest)'];

const Wishlist: React.FC = () => {
  return (
    <MainLayout>
        {/* <EmptyStateWishlist/> */}
      <div className='wishlist-wrapper'>
        <section className="wishlist__kontainer">
          <h1 className="wishlist__title">Wishlist</h1>
          <hr/>
        </section>
        <div className='wishlist__all'>
          <div className='wishlist__kontainer2'>
            <p className='wishlist__total'>Total : .. Wishlist</p>
            <p className='wishlist__sortby-text'>Sort By : </p>
          </div>
          <div className='wishlist__sortby'>
            <Dropdown options={sortby} /> 
          </div>
          <WishlistCard/>
        </div>
      </div>
    </MainLayout>
  );
};

export default Wishlist;
