import { FC, useState } from 'react';
import styles from './inputSearch.module.scss';
import { GetAttributes } from '../../../../types/global';
import { useAppSelector } from '../../../../hooks/redux';
import { selectTheme } from '../../../../store/features/theme/themeSlice';
import { ReactComponent as SearchIcon } from '../../../../assets/img/icons/search.svg';
import Input from '../input/Input';

const InputSearch: FC<GetAttributes<'input'>> = ({
  className = '',
  ...props
}) => {
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
      <Input
        className={styles.input}
        {...props}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
};

export default InputSearch;
