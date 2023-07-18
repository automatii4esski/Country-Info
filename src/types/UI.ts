import { GetAttributes } from './global';

export interface RangeInputProps extends GetAttributes<'div'> {
  max: number;
  min: number;
  minDefault?: number;
  maxDefault?: number;
  onSetValues: (min: number, max: number) => any;
}
