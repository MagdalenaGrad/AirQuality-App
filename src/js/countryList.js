const getCountries = (countries) => {
  const options = countries.map(country => {
    console.log(country);
    return `
      <option value="${country.country}">${country,country}</option>
    `
  });
  return options;
}

export default getCountries;