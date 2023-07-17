import { rootReducer, store } from '../store/index';

export type GetAttributes<TElement extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[TElement];

export type ThemeType = 'dark' | 'light';

export interface SelectOptionType<
  TValue extends string = string,
  TLabel extends string = string
> {
  label: TLabel;
  value: TValue;
}

export type RootReducer = ReturnType<typeof rootReducer>;
export type State = typeof store;
export type AppDispatch = State['dispatch'];

export type Regions =
  | 'asia'
  | 'oceania'
  | 'europe'
  | 'americas'
  | 'antarctic'
  | 'africa';
