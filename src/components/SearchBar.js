import React from 'react';
import '../styles/SearchBar.scss';

const SearchBar = ({ setToggleSearch }) => {
  return (
    <div className='search-bar'>
      <button 
        type='submit' 
      >
        <i className='bi bi-search'></i>
      </button>

      <input type='text' name='search' placeholder='Search' />

      <button
        type='button'
        onClick={() => setToggleSearch(false)}
      >
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
  );
}

export default SearchBar;