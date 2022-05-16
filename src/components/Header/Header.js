import React from 'react';

import Navbar from './Navbar';
import classes from './Header.module.css';

const Header = () => (
  <header className={classes['main-header']}>
    <h1>Africa&apos;s Covid Watch</h1>
    <Navbar />
  </header>
);

export default Header;
