import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.scss'

const ProductCard = ({ src }) => {
  return (
    <Link to='/products/id'>
      <div className='product-card'>
        <figure className='product-card__image'>
          <img src={src} alt='product' />

          <div className='product-card__mobile-add-to-cart'>
            <button><i className='bi bi-plus-circle-fill'></i></button>
          </div>

          <div className='product-card__hover-add-to-cart'>
            Add to Cart
          </div>

          <div className='product-card__details'>
            <span className='name'>Flourish & Blotts</span>
            <span className='price'>Php 7, 597</span>
          </div>
        </figure>
      </div>
    </Link>
  );
}

export default ProductCard;