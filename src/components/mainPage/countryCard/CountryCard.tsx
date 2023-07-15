import { FC } from 'react';
import styles from './countryCard.module.scss';
import { Link } from 'react-router-dom';
import { CountryCardProps } from '../../../types/country';
import { useAppSelector } from '../../../hooks/redux';
import { selectTheme } from '../../../store/features/theme/themeSlice';

const CountryCard: FC<CountryCardProps> = ({
  className,
  countryProps,
  ...props
}) => {
  const currentTheme = useAppSelector(selectTheme);
  return (
    <Link
      to="/"
      className={`${styles.card} ${styles[currentTheme]} ${className}`}
      {...props}
    >
      <img src={countryProps.flags.svg} alt="flag" className={styles.img} />
      <div className={styles.info}>
        <h3 className={styles.title}>{countryProps.name.common}</h3>
        <div>
          <div className={styles['about-item']}>
            <div className={styles['about-title']}>Region: </div>
            <div className={styles['about-value']}>{countryProps.region}</div>
          </div>
          <div className={styles['about-item']}>
            <div className={styles['about-title']}>Population: </div>
            <div className={styles['about-value']}>
              {countryProps.population}
            </div>
          </div>
          <div className={styles['about-item']}>
            <div className={styles['about-title']}>Capital: </div>
            <div className={styles['about-value']}>{countryProps.capital}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
