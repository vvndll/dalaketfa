import React from 'react';
import { ProductCard } from '../components';
import '../styles/Shop.scss';

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shop__filter-bar'>
        <div className='filter-dropdown'>
          <span>Sort by </span> <i className='bi bi-chevron-down'></i>
        </div>
      </div>
      <div className='shop__grid'>
        <ProductCard src='/assets/images/vase1.jpg' />
        <ProductCard src='/assets/images/vase2.jpg' />
        <ProductCard src='/assets/images/vase3.jpg' />
        <ProductCard src='/assets/images/cup1.jpg' />
        <ProductCard src='/assets/images/plate1.jpg' />
        <ProductCard src='/assets/images/plate2.jpg' />
        <ProductCard src='/assets/images/bowl2.jpg' />
        <ProductCard src='/assets/images/bowl1.jpg' />
      </div>
    </div>
  );
}

export default Shop;