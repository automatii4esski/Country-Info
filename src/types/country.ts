import { LinkProps } from 'react-router-dom';
import { GetAttributes } from './global';

export interface Country {
  flags: {
    svg: string;
    png: string;
  };
  population: number;
  capital: string;
  name: {
    common: string;
  };
  region: string;
}

export interface CountryCardProps extends Omit<LinkProps, 'to'> {
  countryProps: Country;
}
