// import { getAPIData, getCountryAPIData } from '../../utils/dataAPI';

const LOAD_CONTINENT_DATA = 'covidWatch/countries/LOAD_CONTINENT_DATA';
const LOAD_COUNTRY_DATA = 'covidWatch/countries/LOAD_COUNTRY_DATA';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONTINENT_DATA:
      return { countries: action.payload };
    case LOAD_COUNTRY_DATA:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
}

const CONTINENT_URL = 'https://covid-api.mmediagroup.fr/v1/vaccines?continent=africa';
const COUNTRY_URL = 'https://covid-api.mmediagroup.fr/v1/vaccines?country';

const getAPIData = async () => {
  const res = await fetch(CONTINENT_URL);
  const countries = await res.json();
  console.log(countries);
  return countries;
};

const getCountryAPIData = async (country) => {
  // @ts-ignore
  const res = await fetch(`${COUNTRY_URL}=${country}`);
  const countryData = await res.json();
  console.log(countryData);
  return countryData;
};

export const continentData = (countries) => ({
  type: LOAD_CONTINENT_DATA,
  payload: countries,
});

export const loadContinentData = () => async (dispatch) => {
  // @ts-ignore
  const apiData = await getAPIData();
  const countries = Object.values(apiData);

  dispatch(continentData(countries));
};

export const countryVaccineData = (country) => ({
  type: LOAD_COUNTRY_DATA,
  payload: country,
});

export const loadCountryData = (country) => async (dispatch) => {
  const countryAPIData = await getCountryAPIData(country);
  const countryData = Object.values(countryAPIData)[1].All;
  dispatch(countryVaccineData(countryData));
};
