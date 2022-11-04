import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../src/components';
import '../src/styles/Layout.scss';

const Layout = () => {
  return (
    <div className='layout'>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;