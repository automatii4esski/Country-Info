import { FC, useState } from 'react';
import styles from './input.module.scss';
import { GetAttributes } from '../../../types/global';
import { useAppSelector } from '../../../hooks/redux';
import { selectTheme } from '../../../store/features/theme/themeSlice';
import { ReactComponent as SearchIcon } from '../../../assets/img/icons/search.svg';

const Input: FC<GetAttributes<'input'>> = ({ className = '', ...props }) => {
  const currentTheme = useAppSelector(selectTheme);
  const [iconStatus, setIconStatus] = useState<'show' | 'hide'>('show');
  const onBlur = function () {
    setIconStatus('show');
  };
  const onFocus = function () {
    setIconStatus('hide');
  };
  return (
    <div className={`${styles.wrapper}  ${className}`}>
      <SearchIcon
        className={`${styles.icon} ${styles[`icon-${currentTheme}`]} ${
          styles[iconStatus]
        }`}
      />
      <input
        className={`${styles.input} ${styles[`input-${currentTheme}`]}`}
        {...props}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
};

export default Input;
