import { FC, useEffect } from 'react';
import styles from './countries.module.scss';
import CountryCard from '../countryCard/CountryCard';
import {
  fetchCountries,
  selectAll,
} from '../../../store/features/countries/countrySlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

const Countries: FC = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => selectAll(state.country));
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div className={styles.countries}>
      {countries.map((country, i) => (
        <CountryCard key={i} countryProps={country} />
      ))}
    </div>
  );
};

export default Countries;
