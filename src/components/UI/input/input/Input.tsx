import { FC } from 'react';
import styles from './input.module.scss';
import { GetAttributes } from '../../../../types/global';
import { useAppSelector } from '../../../../hooks/redux';
import { selectTheme } from '../../../../store/features/theme/themeSlice';

const Input: FC<GetAttributes<'input'>> = ({ className = '', ...props }) => {
  const currentTheme = useAppSelector(selectTheme);

  return (
    <input
      className={`${styles.input} ${
        styles[`input-${currentTheme}`]
      } ${className} `}
      {...props}
    />
  );
};

export default Input;
