import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { Country } from '../../../types/country';
import { RootReducer } from '../../../types/global';

const countriesAdapter = createEntityAdapter<Country>({
  selectId: (model) => model.name,
});

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (_, { dispatch }) => {
    const res = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,population,flags,capital,region'
    );
    const data = await res.json();

    dispatch(
      setCountries(
        data.map((country: any) => ({
          ...country,
          name: country.name.common,
          flag: country.flags.svg,
        }))
      )
    );
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
const { selectAll } = countriesAdapter.getSelectors();

export const selectAllCountries = (state: RootReducer) =>
  selectAll(state.country);
