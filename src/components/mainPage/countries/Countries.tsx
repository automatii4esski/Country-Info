import { FC, useEffect } from 'react';
import styles from './countries.module.scss';
import CountryCard from '../countryCard/CountryCard';
import {
  fetchCountries,
  selectAllCountries,
} from '../../../store/features/countries/countrySlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useFilterCountries } from '../../../hooks/countries';
import { selectAllCountryFilters } from '../../../store/features/countries/countryFilterSlice';

const Countries: FC = () => {
  const dispatch = useAppDispatch();
  const { regions, query } = useAppSelector(selectAllCountryFilters);

  const countries = useAppSelector(selectAllCountries);
  const filteredCountries = useFilterCountries(countries, query, regions);
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div className={styles.countries}>
      {filteredCountries.map((country, i) => (
        <CountryCard key={i} countryProps={country} />
      ))}
    </div>
  );
};

export default Countries;
