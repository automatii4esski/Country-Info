import { FC } from 'react';
import styles from './loader.module.scss';
import { GetAttributes } from '../../../../types/global';
import { useAppSelector } from '../../../../hooks/redux';
import { selectTheme } from '../../../../store/features/theme/themeSlice';
const Loader: FC<GetAttributes<'div'>> = ({ className, ...props }) => {
  const curTheme = useAppSelector(selectTheme);
  return (
    <div
      className={`${styles.loader} ${styles[curTheme]} ${className}`}
      {...props}
    ></div>
  );
};

export default Loader;
