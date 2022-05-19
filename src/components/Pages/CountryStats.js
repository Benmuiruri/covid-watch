/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { loadCountryData } from '../../redux/countries/countries';
import vaccineImg from '../../assets/vaccine.png';
import classes from './CountryStats.module.css';

const CountryStats = () => {
  // @ts-ignore
  const country = useSelector((state) => state.CountriesReducer.country);
  const { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(loadCountryData(name));
  }, [dispatch, name]);

  return (
    <div className={classes.statsContentWrapper}>
      {country && (
        <div className={classes.statsContent}>
          <div className={`${classes.centered} ${classes.mainStatsDiv}`}>
            <img
              src={vaccineImg}
              className={classes.vaccineImage}
              alt="Corona Virus Vaccine"
            />
            <div className={`${classes.mainStats}`}>
              <h3>{country.country}</h3>
              <p>
                Total Vaccines Administed
                {' '}
                {country.administered.toLocaleString()}
              </p>
            </div>
          </div>
          <div className={`${classes.additionalStats}`}>
            <h4>
              {' '}
              {country.country}
              {' '}
              COVID-19 Vaccine Statistics
            </h4>
            <div className={classes.statisticsTable}>
              <div className={`${classes.statisticDiv} ${classes.statisticsLight}`}>
                <h5>People Fully Vaccinated </h5>
                <p>{country.people_vaccinated.toLocaleString()}</p>
              </div>
              <div className={`${classes.statisticDiv} ${classes.statisticsDark}`}>
                <h5>People Partially Vaccinated </h5>
                <p>{country.people_partially_vaccinated.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryStats;
