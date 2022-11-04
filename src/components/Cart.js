import React, { useEffect, useRef } from 'react';
import '../styles/Cart.scss';

const Cart = ({ setToggleCart }) => {
  const cartRef = useRef();

  useEffect(() => {
      const close = (e) => {
      if (!cartRef.current.contains(e.target)) {
          setToggleCart(false);
        } 
      };

      document.addEventListener('mousedown', close);

      return() => {
      document.removeEventListener('mousedown', close);
      }
  });

  return (
    <div className='cart' ref={cartRef}>
      <div className='cart-header'>
        <span>Cart</span>
        <button
          type='button'
          onClick={() => setToggleCart(false)}
        >
          <i className='bi bi-x-lg'></i>
        </button>
      </div>

      <p>Your cart is currently empty.</p>
    </div>
  );
}

export default Cart;