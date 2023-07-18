import { GetAttributes } from './global';

export interface RangeInputProps extends GetAttributes<'div'> {
  max: number;
  min: number;
  minLimit: number;
  maxLimit: number;
  title: string;
  onSetValues: (min: number, max: number) => any;
}
