import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Productcard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { TProduct } from 'types/product.type';

interface ProductCardProps extends TProduct {
  addToCart: (productId: string, quantity: number) => void;
}

const Productcard: React.FC<ProductCardProps> = ({
  id,
  name,
  category,
  price,
  image,
  addToCart
}) => {
  const onAddToCart = () => {
    addToCart(id, 1);
  };

  return (
    <div className='Products-Card'>
      <FontAwesomeIcon icon={faHeart} className='productCard-heart' />
      <img src={image ?? ""} alt={name} className='ProductsCard-img' />
      <Link to={`/product-detail/${id}`} className='productsCard-detail'>
        <h2 className='productCard-title'>{name}</h2>
        <p className='productCard-category'>{category}</p>
        <p className='productCard-price'>{`IDR ${price}`}</p>
      </Link>
      <button className='ProductsCard-btn' onClick={onAddToCart}>
        <FontAwesomeIcon icon={faCartShopping} />
        Add to Cart
      </button>
    </div>
  );
};

export default Productcard;
