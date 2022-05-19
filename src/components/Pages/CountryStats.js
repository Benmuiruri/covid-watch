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
          <div className={`${classes.centered} ${classes.mainStats}`}>
            <img
              src={vaccineImg}
              className={classes.coronaImage}
              alt="Corona Virus Vaccine"
            />
            <div>
              <h3>{country.country}</h3>
              <p>
                Total Vaccines Administed to date:
                {' '}
                {country.administered}
              </p>
            </div>
          </div>
          <div className={`${classes.centered} ${classes.additionalStats}`}>
            <h4>
              {' '}
              {country.country}
              {' '}
              COVID-19 Vaccine Statistics
            </h4>
            <ListGroup className={classes.statisticsTable} as="ul">
              <ListGroup.Item className={classes.statisticsLight} as="li">
                <h4>People Fully Vaccinated </h4>
                <p>{country.people_vaccinated.toLocaleString()}</p>
              </ListGroup.Item>
              <ListGroup.Item className={classes.statisticsDark} as="li">
                <h4>People Partially Vaccinated </h4>
                <p>{country.people_partially_vaccinated.toLocaleString()}</p>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryStats;
