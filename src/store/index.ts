import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './features/theme/themeSlice';
import { countryReducer } from './features/countries/countrySlice';
import { countryFilterReducer } from './features/countries/countryFilterSlice';

export const rootReducer = combineReducers({
  theme: themeReducer,
  country: countryReducer,
  countryFilter: countryFilterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
