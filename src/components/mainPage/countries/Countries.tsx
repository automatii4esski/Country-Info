import { FC, useEffect } from 'react';
import styles from './countries.module.scss';
import CountryCard from '../countryCard/CountryCard';
import {
  fetchCountries,
  selectAllCountries,
  selectCountryStates,
} from '../../../store/features/countries/countrySlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useFilterCountries } from '../../../hooks/countries';
import { selectAllCountryFilters } from '../../../store/features/countries/countryFilterSlice';
import Loader from '../../UI/loader/loader/Loader';

const Countries: FC = () => {
  const dispatch = useAppDispatch();
  const { regions, query, population } = useAppSelector(
    selectAllCountryFilters
  );

  const countries = useAppSelector(selectAllCountries);
  const [error, isLoading] = useAppSelector(selectCountryStates);
  const filteredCountries = useFilterCountries(
    countries,
    query,
    regions,
    population
  );
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div className={styles.countries}>
      {true && <Loader />}
      {/* {filteredCountries.map((country, i) => (
        <CountryCard key={i} countryProps={country} />
      ))} */}
    </div>
  );
};

export default Countries;
