import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootReducer } from '../types/global';

export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector;
export const useAppDispatch = useDispatch<AppDispatch>;
