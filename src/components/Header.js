import React, { useState } from 'react';
import { SearchBar, Cart } from '../components';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  const [ toggleSearch, setToggleSearch ] = useState(false);
  const [ toggleCart, setToggleCart ] = useState(false);

  return (
    <> 
     <div className='header'>
        <div className='nav-mobile'>
          <button className='menu-btn'><i className='bi bi-list'></i></button>
          <button className='search-btn__mobile'><i className='bi bi-search'></i></button>
        </div>

        <nav>
          <span><Link to='/shop'>Shop</Link></span>
          <span><Link to='/about'>About</Link></span>
        </nav>
        

        <div className='logo'>
          <Link to='/'>dalaket<sup>&#174;</sup></Link>
        </div>

        <div>
          <span><Link to='/account/log-in'><i className='bi bi-person-fill'></i></Link></span>
         
          <button 
            className='search-btn__large-screen'
            onClick={() => setToggleSearch(true)}
          >
            <i className='bi bi-search'></i>
          </button>

          <button
             onClick={() => setToggleCart(true)}
          >
            <i className='bi bi-cart-fill'></i>
          </button>
        </div>

      </div>

      {toggleSearch ? <SearchBar setToggleSearch={setToggleSearch} /> : null}
      {toggleCart ? <Cart setToggleCart={setToggleCart} /> : null}
    </>
  );
}

export default Header;