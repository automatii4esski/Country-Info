import { FC, useRef, useState, ChangeEvent } from 'react';
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
  ...props
}) => {
  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const currentTheme = useAppSelector(selectTheme);

  const getLeft = (value = secondRef.current!.value) =>
    (parseFloat(value) / max) * 100;

  const getRight = (value = firstRef.current!.value) =>
    ((max - parseFloat(value)) / max) * 100;

  const [left, setLeft] = useState<number>(getLeft(minDefault + ''));
  const [right, setRight] = useState<number>(getRight(maxDefault + ''));

  const onLeftRangeChange = function (e: ChangeEvent<HTMLInputElement>) {
    if (+e.target.value >= +firstRef.current!.value) {
      e.target.value = firstRef.current!.value;
    }
    setLeft(getLeft());
  };

  const onRightRangeChange = function (e: ChangeEvent<HTMLInputElement>) {
    if (+e.target.value <= +secondRef.current!.value) {
      e.target.value = secondRef.current!.value;
    }
    setRight(getRight());
  };

  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <h3 className={styles.title}>Population</h3>
      <div className={`${styles.range} ${styles[currentTheme]}`}>
        <div
          className={styles.between}
          style={{
            left: `${left}%`,
            right: `${right}%`,
          }}
        ></div>

        <input
          ref={firstRef}
          className={styles['range-input']}
          onChange={onRightRangeChange}
          type="range"
          min={min}
          defaultValue={maxDefault}
          max={max}
        />
        <input
          ref={secondRef}
          onChange={onLeftRangeChange}
          className={styles['range-input']}
          type="range"
          defaultValue={minDefault}
          min={min}
          max={max}
        />
      </div>
      <div className={styles.inputs}>
        <div className={styles['input-wrapper']}>
          <h4 className={styles['input-title']}>Min</h4>
          <Input
            defaultValue={minDefault}
            value={secondRef.current?.value}
            max={max}
            min={min}
            className={styles.input}
            type="number"
          />
        </div>
        <div className={styles['input-wrapper']}>
          <h4 className={styles['input-title']}>Max</h4>
          <Input
            defaultValue={maxDefault}
            max={max}
            min={min}
            value={firstRef.current?.value}
            className={styles.input}
            type="number"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeInput;
