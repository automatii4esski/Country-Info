import { FC, ChangeEvent } from 'react';
import styles from './filter.module.scss';
import Input from '../../UI/input/Input';
import Select from '../../UI/selects/select/Select';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  selectAllCountryFilters,
  setQuery,
  setRegions,
} from '../../../store/features/countries/countryFilterSlice';
import { regions as regionsOptions } from '../../../data/regions';
import { MultiValue } from 'react-select';
import { Regions, SelectOptionType } from '../../../types/global';

const Filter: FC = () => {
  const { regions, query } = useAppSelector(selectAllCountryFilters);
  const dispatch = useAppDispatch();

  const onInputChange = function (e: ChangeEvent<HTMLInputElement>) {
    dispatch(setQuery(e.target.value));
  };

  const onRegionChange = function (
    value: MultiValue<SelectOptionType<Regions>>
  ) {
    dispatch(setRegions(value.map((val) => val.value)));
  };

  return (
    <div className={styles.filter}>
      <Input
        onChange={onInputChange}
        value={query}
        placeholder="Search for a country"
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
