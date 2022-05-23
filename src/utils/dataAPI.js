/* eslint-disable no-undef */
const COUNTRY_URL = 'https://covid-api.mmediagroup.fr/v1/vaccines?country';

const getCountryAPIData = async (country) => {
  // @ts-ignore
  const res = await fetch(`${COUNTRY_URL}=${country}`);
  const countryData = await res.json();
  return countryData;
};

export default getCountryAPIData;
