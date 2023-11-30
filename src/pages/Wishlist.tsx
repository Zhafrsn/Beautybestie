import React from 'react';
import { MainLayout } from 'layout';
import { EmptyStateWishlist } from '../components/Wishlist/EmptyStateWishlist';


const Wishlist: React.FC = () => {
  return (
    <MainLayout>
        <EmptyStateWishlist/>
    </MainLayout>
  );
};

export default Wishlist;
