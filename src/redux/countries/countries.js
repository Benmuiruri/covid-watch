import { getAPIData, getCountryAPIData } from '../../utils/dataAPI';

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
  const countryData = Object.values(countryAPIData)[0];
  dispatch(countryVaccineData(countryData));
};
