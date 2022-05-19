/* eslint-disable react/prop-types */
// import { PropTypes } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadContinentData } from '../../redux/countries/countries';
import CountryCard from './CountryCard';

function CountriesList({ searchValue = '' }) {
  // @ts-ignore
  const countries = useSelector((state) => state.CountriesReducer.countries);
  const [filteredCountries, setfilteredCountries] = useState(countries);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(loadContinentData());
  }, []);
  useEffect(() => {
    setfilteredCountries(countries);
  }, [countries]);

  useEffect(() => {
    const filterValue = searchValue.toLowerCase().trim();
    setfilteredCountries(
      countries.filter((country) => {
        const countryName = country.All.country.toLowerCase();
        return countryName.includes(filterValue);
      }),
    );
  }, [searchValue]);

  return (
    <div>
      {filteredCountries
        && filteredCountries.map((country) => (
          <CountryCard key={country.All.country} country={country} />
        ))}
    </div>
  );
}

// CountriesList.propTypes = {
//   countryFilter: PropTypes.string.isRequired,
// };

export default CountriesList;
