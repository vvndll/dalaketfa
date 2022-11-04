import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUp.scss';

const SignUp = () => {
  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      <form>
        <label htmlFor='first_name' hidden>First Name</label>
        <input type='text' id='first_name' placeholder='First Name' required />

        <label htmlFor='last_name' hidden>Last Name</label>
        <input type='text' id='last_name' placeholder='Last Name' required />
        
        <label htmlFor='email' hidden>Email</label>
        <input type='email' name='email' id='email' placeholder='Email' required />

        <label htmlFor='password' hidden>Password</label>
        <input type='password' name='password id='password placeholder='Password' required />

        <input type='submit' value='Sign Up' />
      </form>

      <p>
        Already have an account? 
      </p>
      <p>
        <Link to='/account/log-in'>Log in to your account.</Link>
      </p>

    </div>
  );
}

export default SignUp;