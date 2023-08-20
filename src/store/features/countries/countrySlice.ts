import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
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
      'https://restcountries.com/v3.1/all?fields=name,population,flags,capital,region,cca2'
    );
    const data = await res.json();

    const unpackedData: Country[] = data.map((country: any) => ({
      ...country,
      alpha: country.cca2,
      name: country.name.common,
      flag: country.flags.svg,
    }));

    dispatch(setCountries(unpackedData));
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
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
          state.error = '';
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.isLoading = false;
          state.error = '';
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        }
      );
  },
});

export const { reducer: countryReducer } = countrySlice;
export const { setCountries } = countrySlice.actions;
const { selectAll } = countriesAdapter.getSelectors();

export const selectAllCountries = (state: RootReducer) =>
  selectAll(state.country);

export const selectErrorAndLoading = (
  state: RootReducer
): [string, boolean] => [state.country.error, state.country.isLoading];

export const selectFullCountriesState = createSelector(
  [selectAllCountries, selectErrorAndLoading],
  (countries, countryStatuses): [Country[], string, boolean] => [
    countries,
    ...countryStatuses,
  ]
);
