import { counter } from '@fortawesome/fontawesome-svg-core';

const URL = 'https://covid-api.mmediagroup.fr/v1/vaccines?continent=africa';

const getAPIData = async () => {
  const res = await fetch(URL);
  const countries = await res.json();
  return countries;
};

const getCountryAPIData = async () => {
  const res = await fetch(`${URL}?country=${country}`);
  const countryData = await res.json();
  return countryData;
};

export default { getAPIData, getCountryAPIData };
