import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './features/theme/themeSlice';

export const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
