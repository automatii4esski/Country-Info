import { createSlice } from '@reduxjs/toolkit';
import { CountryFilter } from '../../../types/country';
import { RootReducer } from '../../../types/global';

const initialState: CountryFilter = {
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
      return state;
    },
    setRegions(state, action) {
      state.regions = action.payload;
      return state;
    },
    setPopulation(state, { payload }) {
      state.population = {
        min: payload.min,
        max: payload.max,
      };
      return state;
    },
  },
});

export const { reducer: countryFilterReducer } = countryFilterSlice;
export const { setQuery, setRegions, setPopulation } =
  countryFilterSlice.actions;

export const selectAllCountryFilters = (state: RootReducer) =>
  state.countryFilter;
