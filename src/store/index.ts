import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './features/theme/themeSlice';
import { countryReducer } from './features/countries/countrySlice';

export const rootReducer = combineReducers({
  theme: themeReducer,
  country: countryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
