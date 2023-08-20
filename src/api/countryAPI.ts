export class CountryAPI {
  static getSingleCountryURL(alphaCode: string) {
    return `https://restcountries.com/v3.1/alpha/${alphaCode}?fields=name,population,flags,capital,region,borders,languages,currencies`;
  }

  static getAllCountryiesURL() {
    return 'https://restcountries.com/v3.1/all?fields=name,population,flags,capital,region,cca2';
  }
}
