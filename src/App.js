import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Shop, About, Account, LogIn, SignUp } from '../src/pages';
import Layout from './Layout';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
              path="/"
              element={<Layout />}
          >
            <Route index element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/account/log-in' element={<LogIn />} />
            <Route path='/account/sign-up' element={<SignUp />} />
            <Route path='/account' element={<Account />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
