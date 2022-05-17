/* eslint-disable react/button-has-type */
// @ts-nocheck
import React, { useContext } from 'react';
import AuthContext from '../../redux/auth-context';

import classes from './Navbar.module.css';

const Navbar = () => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && <span>Search</span>}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
