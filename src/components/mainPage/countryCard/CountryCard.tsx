import { FC } from 'react';
import styles from './countryCard.module.scss';
import { Link } from 'react-router-dom';

const CountryCard: FC = () => {
  return (
    <Link to="/" className={`${styles.card}`}>
      <img src="" alt="flag" className={styles.img} />
      <div className={styles.info}>
        <h3 className={styles.title}>Name</h3>
        <div>
          <div className={styles['about-item']}>
            <div className={styles['about-title']}>Region: </div>
            <div className={styles['about-value']}>Asia</div>
          </div>
          <div className={styles['about-item']}>
            <div className={styles['about-title']}>Population: </div>
            <div className={styles['about-value']}>99999</div>
          </div>
          <div className={styles['about-item']}>
            <div className={styles['about-title']}>Capital: </div>
            <div className={styles['about-value']}>Tasdasd</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
