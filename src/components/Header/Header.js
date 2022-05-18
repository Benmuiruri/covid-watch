import React from 'react';

import Navbar from './Navbar';
// @ts-ignore
import classes from './Header.module.css';

const Header = () => (
  <header className={classes['main-header']}>
    <Navbar />
  </header>
);

export default Header;
