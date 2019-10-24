const API_KEY = "b72e436e-3bbe-43dc-8a7d-95c81d76d1ea";
const baseURL = "https://api.airvisual.com/v2/";

export default class AVapi {
  static async getCountries() {
    const response = await fetch(`${baseURL}countries?key=${API_KEY}`);
    const json = await response.json();
    console.log(response);
    return json.data;
  }

  static async getStates(country) {
    const response = await fetch(`${baseURL}country=${country}&key=${API_KEY}`);
    const json = await response.json();
    console.log(response);
    return json.data;
  }

  static async getCities(state, country) {
    const response = await fetch(`${baseURL}cities?state=${state}&country=${country}&key=${API_KEY}`);
    const json = await response.json();
    console.log(response);
    return json.data;
  }

};