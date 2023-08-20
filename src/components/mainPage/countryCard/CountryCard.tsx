import { FC, SyntheticEvent, useEffect, useState } from 'react';
import styles from './countryCard.module.scss';
import { Link } from 'react-router-dom';
import { CountryCardProps } from '../../../types/country';
import { useAppSelector } from '../../../hooks/redux';
import { selectTheme } from '../../../store/features/theme/themeSlice';
import Loader from '../../UI/loader/loader/Loader';

const CountryCard: FC<CountryCardProps> = ({
  className,
  countryProps,
  ...props
}) => {
  const currentTheme = useAppSelector(selectTheme);
  const { capital, flag, name, alpha, population, region } = countryProps;
  const onImgError = function (e: SyntheticEvent<HTMLImageElement>) {
    e.currentTarget.src = '';
  };
  const [isLoadingImg, setIsLoadingImg] = useState<boolean>(true);

  const onLoadImg = () => {
    setIsLoadingImg(false);
  };

  useEffect(() => {
    setIsLoadingImg(true);
  }, [flag]);

  return (
    <Link
      to={`/country/${alpha}`}
      className={`${styles.card} ${styles[currentTheme]} ${className}`}
      {...props}
    >
      <img
        src={flag}
        alt={`${name} flag`}
        onError={onImgError}
        className={styles.img}
        onLoad={onLoadImg}
      />
      {isLoadingImg && (
        <div className={styles['loader-plug']}>
          <Loader />
        </div>
      )}
      <div className={styles.info}>
        <h3 className={styles.title}>{name}</h3>
        <div>
          <div className={styles['about-item']}>
            <div className={styles['about-title']}>Region: </div>
            <div className={styles['about-value']}>{region}</div>
          </div>
          <div className={styles['about-item']}>
            <div className={styles['about-title']}>Population: </div>
            <div className={styles['about-value']}>{population}</div>
          </div>
          <div className={styles['about-item']}>
            <div className={styles['about-title']}>Capital: </div>
            <div className={styles['about-value']}>{capital}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
