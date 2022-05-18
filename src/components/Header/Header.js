import React from 'react';

import Navbar from './Navbar';
// @ts-ignore
import classes from './Header.module.css';

const Header = () => (
  <header className={classes['main-header']}>
    <h1>Africa&apos;s Covid Vaccine Watch</h1>
    <Navbar />
  </header>
);

export default Header;
