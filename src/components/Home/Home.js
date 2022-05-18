/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// @ts-nocheck
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadContinentData } from '../../redux/countries/countries';
import CountryCard from '../Country/CountryCard';
import classes from './Home.module.css';

const Home = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContinentData());
  }, []);

  const totalVacinated = () => {
    let total = 0;
    if (countries) {
      countries.forEach((country) => {
        total += country.All.administered;
      });
    }
    return total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  };

  const fullyVacinated = () => {
    let total = 0;
    if (countries) {
      countries.forEach((country) => {
        total += country.All.people_vaccinated;
      });
    }
    return total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  };

  const partiallyVacinated = () => {
    let total = 0;
    if (countries) {
      countries.forEach((country) => {
        total += country.All.people_partially_vaccinated;
      });
    }
    return total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <>
      <section className={classes.imgSection}>
        <div className={classes.africaImage}>
          <p>
            Total Vaccines Administed across Africa:
            {' '}
            {totalVacinated()}
          </p>
          <p>
            Total People Fully Vaccinated across Africa:
            {' '}
            {fullyVacinated()}
          </p>
          <p>
            Total People Partially Vaccinated across Africa:
            {' '}
            {partiallyVacinated()}
          </p>
        </div>
      </section>
      <section className={classes.dataSection}>
        <h2>African Country&apos;s COVID Vaccine Data</h2>
        <div>
          {countries
            && countries.map((country) => (
              <CountryCard key={country.All.country} countryName={country} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;
