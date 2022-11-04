import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Account.scss';

const Account = () => {
  return (
    <div className='account'>
      <aside>
        <span><strong>My Account</strong></span>
        <nav>
          <span><Link to='/account'>Order History</Link></span>
          <span><Link to='/account/addresses'>Addresses</Link></span>
          <span>Log Out</span>
        </nav>
      </aside>

      <div>
        <h2>Order History</h2>
        <p>You haven't placed any products yet.</p>
      </div>
    </div>
  );
}

export default Account;