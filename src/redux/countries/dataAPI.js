const URL = 'https://covid-api.mmediagroup.fr/v1/vaccines?continent=africa';

const getAPIData = async () => {
  const res = await fetch(URL);
  const countries = await res.json();
  return countries;
};

export default getAPIData;
