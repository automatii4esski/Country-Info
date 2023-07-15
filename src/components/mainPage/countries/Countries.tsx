import { FC } from 'react';
import styles from './countries.module.scss';
import CountryCard from '../countryCard/CountryCard';

const Countries: FC = () => {
  return (
    <div>
      <CountryCard />
    </div>
  );
};

export default Countries;
