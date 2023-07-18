import { FC, ChangeEvent } from 'react';
import styles from './filter.module.scss';
import Select from '../../UI/selects/select/Select';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  selectAllCountryFilters,
  setPopulation,
  setQuery,
  setRegions,
} from '../../../store/features/countries/countryFilterSlice';
import { regions as regionsOptions } from '../../../data/regions';
import { MultiValue } from 'react-select';
import { Regions, SelectOptionType } from '../../../types/global';
import RangeInput from '../../UI/input/rangeInput/RangeInput';
import InputSearch from '../../UI/input/inputSearch/InputSearch';

const Filter: FC = () => {
  const { regions, query, population } = useAppSelector(
    selectAllCountryFilters
  );
  const dispatch = useAppDispatch();
  let prevTimeout: NodeJS.Timeout;

  const onSearchChange = function (e: ChangeEvent<HTMLInputElement>) {
    clearTimeout(prevTimeout);
    prevTimeout = setTimeout(() => {
      dispatch(setQuery(e.target.value));
    }, 700);
  };

  const onPopulationSet = function (min: number, max: number) {
    console.log('dis');

    dispatch(
      setPopulation({
        min,
        max,
      })
    );
  };

  const onRegionChange = function (
    value: MultiValue<SelectOptionType<Regions>>
  ) {
    dispatch(setRegions(value.map((val) => val.value)));
  };

  return (
    <div className={styles.filter}>
      <InputSearch
        onChange={onSearchChange}
        defaultValue={query}
        placeholder="Search for a country"
      />
      <RangeInput
        onSetValues={onPopulationSet}
        title="Population"
        minLimit={0}
        maxLimit={1500000000}
        max={population.max}
        min={population.min}
      />
      <Select
        placeholder="Select the region"
        isMulti
        onChange={onRegionChange}
        defaultValue={regions.map<SelectOptionType<Regions>>((reg) => ({
          label: reg,
          value: reg,
        }))}
        options={regionsOptions}
      />
    </div>
  );
};

export default Filter;
