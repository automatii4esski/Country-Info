import { GetAttributes } from './global';

export interface RangeInputProps extends GetAttributes<'div'> {
  max: number;
  min: number;
  minDefault?: number | string;
  maxDefault?: number | string;
}
