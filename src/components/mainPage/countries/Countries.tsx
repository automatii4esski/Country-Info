import { FC, useEffect, useState } from 'react';
import styles from './countries.module.scss';
import CountryCard from '../countryCard/CountryCard';
import {
  fetchCountries,
  selectFullCountriesState,
} from '../../../store/features/countries/countrySlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useFilterCountries } from '../../../hooks/countries';
import { selectAllCountryFilters } from '../../../store/features/countries/countryFilterSlice';
import Loader from '../../UI/loader/loader/Loader';
import Error from '../../UI/error/error/Error';
import { useInView } from 'react-intersection-observer';

const countriesCountrToRender = 12;

const Countries: FC = () => {
  const dispatch = useAppDispatch();
  const countryFilters = useAppSelector(selectAllCountryFilters);
  const [ref, inView] = useInView({
    threshold: 1,
  });
  const [renderCount, setRenderCount] = useState<number>(
    countriesCountrToRender
  );

  const [countries, error, isLoading] = useAppSelector(
    selectFullCountriesState
  );
  const filteredCountries = useFilterCountries(countries, countryFilters);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  useEffect(() => {
    if (
      inView &&
      filteredCountries.length > countriesCountrToRender &&
      !isLoading
    ) {
      setRenderCount(renderCount + countriesCountrToRender);
    }
  }, [inView]);

  const render = function () {
    if (isLoading) {
      return <Loader />;
    } else if (error) {
      return <Error text={error} />;
    } else {
      return filteredCountries
        .slice(0, renderCount)
        .map((country, i) => <CountryCard key={i} countryProps={country} />);
    }
  };

  return (
    <div className={styles.countries}>
      {render()}
      <div ref={ref} className={styles['observer-trigger']}></div>
    </div>
  );
};

export default Countries;
