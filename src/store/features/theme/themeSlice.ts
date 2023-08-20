import { createSlice } from '@reduxjs/toolkit';
import { RootReducer, ThemeType } from '../../../types/global';

const initialState: { theme: ThemeType } = {
  theme: (localStorage.getItem('theme') as ThemeType) || 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';

      localStorage.setItem('theme', state.theme);
      return state;
    },
  },
});

export const selectTheme = function (state: RootReducer) {
  return state.theme.theme;
};

export const { switchTheme } = themeSlice.actions;
export const { reducer: themeReducer } = themeSlice;
