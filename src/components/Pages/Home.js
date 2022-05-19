/* eslint-disable max-len */
// @ts-nocheck
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CountriesList from '../Country/CountriesList';
import africaImage from '../../assets/africa.png';
import classes from './Home.module.css';

const Home = () => {
  const countries = useSelector((state) => state.CountriesReducer.countries);
  const [searchValue, setSearchValue] = useState('');

  const totalVacinated = () => {
    let total = 0;
    if (countries) {
      countries.forEach((country) => {
        total += country.All.administered;
      });
    }
    return total.toLocaleString();
  };

  const fullyVacinated = () => {
    let total = 0;
    if (countries) {
      countries.forEach((country) => {
        total += country.All.people_vaccinated;
      });
    }
    return total.toLocaleString();
  };

  const partiallyVacinated = () => {
    let total = 0;
    if (countries) {
      countries.forEach((country) => {
        total += country.All.people_partially_vaccinated;
      });
    }
    return total.toLocaleString();
  };
  const filterCountriesHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <section className={classes.homeCallout}>
        <div className={classes.africaImageDiv}>
          <img
            src={africaImage}
            className={classes.africaImage}
            alt="Map of Africa"
          />
        </div>
        <div className={classes.innercontent}>
          <h1>Africa Vaccine Stats</h1>
          <p>
            Total Vaccines Administed:
            {' '}
            {totalVacinated()}
          </p>
          <p>
            Fully Vaccinated Individuals:
            {' '}
            {fullyVacinated()}
          </p>
          <p>
            Partially Vaccinated Individuals:
            {' '}
            {partiallyVacinated()}
          </p>
        </div>
      </section>
      <section className={classes.dataSection}>
        <h2 className={classes.dataSectionHeader}>
          Africa&apos;s COVID Vaccine Data
        </h2>
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={filterCountriesHandler}
          className="p-2 pb-1 placeholder:text-white/50 text-center leading-none border bg-transparent rounded-xl uppercase"
          placeholder="Filter Countries"
        />
        <div className={classes.countryWrapper}>
          <CountriesList searchValue={searchValue} />
        </div>
      </section>
    </>
  );
};

export default Home;
