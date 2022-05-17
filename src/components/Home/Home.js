/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// @ts-nocheck
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadContinentData } from '../../redux/countries/countries';
import classes from './Home.module.css';

const Home = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContinentData());
  }, []);
  return (
    <section>
      <h2>African Country&apos;s COVID Vaccine Data</h2>
      <div>
        {countries && countries.map((country) => <p>{country.All.country}</p>)}
      </div>
    </section>
  );
};

export default Home;
