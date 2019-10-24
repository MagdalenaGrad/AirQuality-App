import API from "./airVisualApi";
import getCountries from "./countryList";
import getStates from "./stateList";

const selects = {
  country: document.querySelector("#country-select"),
  state: document.querySelector("#state-select"),
  city: document.querySelector("#city-select"),
};

const isDisabled = {
  city: true,
  state: true
};

API.getCountries().then(countryArray => {
  selects.country.innerHTML += getCountries(countryArray);
  selects.country.options[0].isDisabled = true;
});

selects.city.disabled = isDisabled.city;
selects.state.disabled = isDisabled.state;

const displayCountryList = function () {
  API.getStates(this.value).then(array => {
    selects.state.innerHTML = getStates(array);
    selects.country.options[0].disabled = true;
  })
};

selects.country.addEventListener("change", displayCountryList);