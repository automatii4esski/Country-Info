import { rootReducer, store } from '../store/index';

export type GetAttributes<TElement extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[TElement];

export type ThemeType = 'dark' | 'light';

export interface SelectOptionType {
  label: string;
  value: string;
}

export type RootReducer = ReturnType<typeof rootReducer>;
export type State = typeof store;
export type AppDispatch = State['dispatch'];
