import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <div className='footer-links__nav'>
          <h3 className='logo'>dalaket<sup>&#174;</sup></h3>
          <ul>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </div>

        <div className='footer-links__socials'>
          <h3>Socials</h3>
          <p>Follow us on our socials!</p>

          <ul>
            <li><a href='https://www.facebook.com'  rel='noopener noreferrer' target='blank'><i className='bi bi-facebook'></i></a></li>
            <li><a href='https://www.instagram.com'  rel='noopener noreferrer' target='blank'><i className='bi bi-instagram'></i></a></li>
            <li><a href='https://www.pinterest.com'  rel='noopener noreferrer' target='blank'><i className='bi bi-pinterest'></i></a></li>
          </ul>
        </div>

        <div className='footer-links__terms'>
          <h3>Terms</h3>

          <ul>
            <li><Link to='/terms-of-service'>Terms of Service</Link></li>
            <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
            <li><Link to='/shipping'>Shipping</Link></li>
            <li><Link to='/refunds'>Refunds</Link></li>
            <li><Link to='/subscription'>Subscription</Link></li>
          </ul>
        </div>
      </div>
      <small>&copy; dalaket<sup>&#174;</sup> 2022</small>
    </div>
  );
}

export default Footer;