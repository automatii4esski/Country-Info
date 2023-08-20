import { createSlice } from '@reduxjs/toolkit';
import { CountryFilter } from '../../../types/country';
import { RootReducer } from '../../../types/global';

const localFilters = localStorage.getItem('filters');
const initialState: CountryFilter = localFilters
  ? JSON.parse(localFilters)
  : {
      query: '',
      regions: [],
      population: {
        min: 0,
        max: 1500000000,
      },
    };

const countryFilterSlice = createSlice({
  name: 'countryFilter',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
      localStorage.setItem('filters', JSON.stringify(state));
      return state;
    },
    setRegions(state, action) {
      state.regions = action.payload;
      localStorage.setItem('filters', JSON.stringify(state));

      return state;
    },
    setPopulation(state, { payload }) {
      state.population = {
        min: payload.min,
        max: payload.max,
      };
      localStorage.setItem('filters', JSON.stringify(state));

      return state;
    },
  },
});

export const { reducer: countryFilterReducer } = countryFilterSlice;
export const { setQuery, setRegions, setPopulation } =
  countryFilterSlice.actions;

export const selectAllCountryFilters = (state: RootReducer) =>
  state.countryFilter;
