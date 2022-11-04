import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LogIn.scss';

const LogIn = () => {
  return (
    <div className='login'>
      <h2>Log In</h2>
      <form>
        <label htmlFor='email' hidden>Email</label>
        <input type='email' name='email' id='email' placeholder='Email' required />

        <label htmlFor='password' hidden>Password</label>
        <input type='password' name='password id='password placeholder='Password' required />
        <small>Forgot your password?</small>

        <input type='submit' value='Log In' />
      </form>

      <p>
        Haven't been here before? 
      </p>
      <p>
        <Link to='/account/sign-up'>Create your account.</Link>
      </p>
    </div>
  );
}

export default LogIn;