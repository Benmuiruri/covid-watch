// @ts-nocheck
import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <Header />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
