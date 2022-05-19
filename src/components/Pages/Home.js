/* eslint-disable max-len */
// @ts-nocheck
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { loadContinentData } from '../../redux/countries/countries';
import CountriesList from '../Country/CountriesList';
// import CountryCard from '../Country/CountryCard';
import africaImage from '../../assets/africa.png';
import classes from './Home.module.css';

const Home = () => {
  const countries = useSelector((state) => state.CountriesReducer.countries);
  const [searchValue, setSearchValue] = useState('');
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadContinentData());
  // }, []);

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
          {/* {countries
            && countries.map((country) => (
              // eslint-disable-next-line max-len
              <CountryCard countryFilter={searchValue} key={country.All.country} country={country} />
            ))} */}
        </div>
      </section>
    </>
  );
};

export default Home;
