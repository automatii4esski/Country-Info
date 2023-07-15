import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { Country } from '../../../types/country';

const countriesAdapter = createEntityAdapter<Country>({
  selectId: (model) => model.name.common,
});

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (_, { dispatch }) => {
    const res = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,population,flags,capital,region'
    );
    const data = await res.json();

    dispatch(setCountries(data));
  }
);

const countrySlice = createSlice({
  name: 'countries',
  reducers: {
    setCountries(state, action) {
      countriesAdapter.setAll(state, action.payload);
    },
  },
  initialState: countriesAdapter.getInitialState({
    isLoading: false,
    error: '',
  }),
});

export const { reducer: countryReducer } = countrySlice;
export const { setCountries } = countrySlice.actions;
export const { selectAll } = countriesAdapter.getSelectors();