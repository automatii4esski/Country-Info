import { FC, useRef, useState, ChangeEvent, FocusEvent } from 'react';
import styles from './rangeInput.module.scss';
import { useAppSelector } from '../../../../hooks/redux';
import { selectTheme } from '../../../../store/features/theme/themeSlice';
import { RangeInputProps } from '../../../../types/UI';
import Input from '../input/Input';

const RangeInput: FC<RangeInputProps> = ({
  className,
  max,
  min,
  maxDefault = max,
  minDefault = min,
  onSetValues: onSetValuesCallback,
  ...props
}) => {
  const [maxValue, setMaxValue] = useState<number>(maxDefault);
  const [minValue, setMinValue] = useState<number>(minDefault);
  const currentTheme = useAppSelector(selectTheme);

  const getBetweenLineLeftPosition = (value: number) => (value / max) * 100;

  const getBetweenLineRightPosition = (value: number) =>
    ((max - value) / max) * 100;

  const [leftPos, setLeftPos] = useState<number>(
    getBetweenLineLeftPosition(minValue)
  );
  const [rightPos, setRightPos] = useState<number>(
    getBetweenLineRightPosition(maxValue)
  );

  const onMinRangeChange = function (e: ChangeEvent<HTMLInputElement>) {
    const value = +e.target.value;
    if (value >= maxValue) {
      setMinValue(maxValue);
      setLeftPos(getBetweenLineLeftPosition(maxValue));
    } else {
      setMinValue(value);
      setLeftPos(getBetweenLineLeftPosition(value));
    }
  };

  const onMaxRangeChange = function (e: ChangeEvent<HTMLInputElement>) {
    const value = +e.target.value;
    if (value <= minValue) {
      setMaxValue(minValue);
      setRightPos(getBetweenLineRightPosition(minValue));
    } else {
      setMaxValue(value);
      setRightPos(getBetweenLineRightPosition(value));
    }
  };

  const setValues = () => onSetValuesCallback(minValue, maxValue);

  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <h3 className={styles.title}>Population</h3>
      <div className={`${styles.range} ${styles[currentTheme]}`}>
        <div
          className={styles.between}
          style={{
            left: `${leftPos}%`,
            right: `${rightPos}%`,
          }}
        ></div>

        <input
          onChange={onMaxRangeChange}
          onClick={setValues}
          value={maxValue}
          className={styles['range-input']}
          type="range"
          min={min}
          max={max}
        />
        <input
          onChange={onMinRangeChange}
          onClick={setValues}
          value={minValue}
          className={styles['range-input']}
          type="range"
          min={min}
          max={max}
        />
      </div>
      <div className={styles.inputs}>
        <div className={styles['input-wrapper']}>
          <h4 className={styles['input-title']}>Min</h4>
          <Input
            onChange={onMinRangeChange}
            onBlur={setValues}
            value={minValue}
            max={max}
            min={min}
            className={styles.input}
            type="number"
          />
        </div>
        <div className={styles['input-wrapper']}>
          <h4 className={styles['input-title']}>Max</h4>
          <Input
            onChange={onMaxRangeChange}
            onBlur={setValues}
            value={maxValue}
            max={max}
            min={min}
            className={styles.input}
            type="number"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeInput;
