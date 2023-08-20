import { LinkProps } from 'react-router-dom';
import { GetAttributes, Regions } from './global';

export interface Country {
  flag: string;
  population: number;
  capital: string;
  name: string;
  region: string;
  alpha: string;
}

export interface CountryCardProps extends Omit<LinkProps, 'to'> {
  countryProps: Country;
}

export interface CountryFilter {
  query: string;
  regions: Regions[];
  population: {
    min: number;
    max: number;
  };
}

export interface SingleCountry {
  flag: string;
  borders: string[];
  info: {
    currencies: string;
    languages: string;
    population: number;
    capital: string;
    name: string;
    region: string;
  };
}
