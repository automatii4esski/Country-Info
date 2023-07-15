import { createSlice } from '@reduxjs/toolkit';
import { RootReducer, ThemeType } from '../../../types/global';

const initialState: { theme: ThemeType } = { theme: 'light' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state) {
      if (state.theme === 'light') state.theme = 'dark';
      else state.theme = 'light';
      return state;
    },
  },
});

export const selectTheme = function (state: RootReducer) {
  return state.theme.theme;
};

export const { switchTheme } = themeSlice.actions;
export const { reducer: themeReducer } = themeSlice;
