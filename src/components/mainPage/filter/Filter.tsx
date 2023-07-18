import { FC, ChangeEvent } from 'react';
import styles from './filter.module.scss';
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
import RangeInput from '../../UI/input/rangeInput/RangeInput';
import InputSearch from '../../UI/input/inputSearch/InputSearch';

const Filter: FC = () => {
  const { regions } = useAppSelector(selectAllCountryFilters);
  const dispatch = useAppDispatch();
  let prevTimeout: NodeJS.Timeout;

  const onSearchChange = function (e: ChangeEvent<HTMLInputElement>) {
    clearTimeout(prevTimeout);
    prevTimeout = setTimeout(() => {
      dispatch(setQuery(e.target.value));
    }, 700);
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
        placeholder="Search for a country"
      />
      <RangeInput max={8000000000} min={0} />
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
