import React from 'react';

import '../../styles/Wishlist.css';

export const EmptyStateWishlist: React.FC = () => {
  return (
    <div className='wishlist'>
      <section className="wishlist__kontainer">
        <h1 className="wishlist__title">Wishlist</h1>
        <hr className='wishlist__line'/>
      </section>
      <section className="wishlist__kontainer-text">
      <div><b>Your Wishlist is Still Empty</b></div>
      <p className="wishlist__text">Let's start adding your dream products here!</p>
      </section>
    </div>
  );
};
