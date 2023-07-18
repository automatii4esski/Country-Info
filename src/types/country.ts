import { LinkProps } from 'react-router-dom';
import { GetAttributes, Regions } from './global';

export interface Country {
  flag: string;
  population: number;
  capital: string;
  name: string;
  region: string;
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
