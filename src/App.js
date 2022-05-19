/* eslint-disable import/extensions */
// @ts-nocheck
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Pages/Home';
import CountryStats from './components/Pages/CountryStats';
import Header from './components/Header/Header';
import AuthContext from './redux/auth-context';
import classes from './App.module.css';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <main>
        {!ctx.isLoggedIn && (
          <div className={classes.mainContent}>
            <Login />
          </div>
        )}
        {ctx.isLoggedIn && (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/countries/:name" element={<CountryStats />} />
              <Route path="*" element={<p>Page not found!</p>} />
            </Routes>
          </>
        )}
      </main>
    </>
  );
}

export default App;
