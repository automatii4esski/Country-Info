import { FC, useEffect, useState } from 'react';
import styles from './countryPage.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/fetch';
import { SingleCountry } from '../../types/country';
import Container from '../../components/common/container/Container';
import { useAppSelector } from '../../hooks/redux';
import { selectTheme } from '../../store/features/theme/themeSlice';
import Loader from '../../components/UI/loader/loader/Loader';
import Error from '../../components/UI/error/error/Error';
import { CountryAPI } from '../../api/countryAPI';

const initValue: SingleCountry = {
  borders: [],
  info: {
    region: '',
    population: 0,
    name: '',
    languages: '',
    currencies: '',
    capital: '',
  },
  flag: '',
};

const CountryPage: FC = () => {
  const params = useParams();
  const currentTheme = useAppSelector(selectTheme);
  const [countryData, setCountryData] = useState<SingleCountry>(initValue);
  const [isCountryFlagImgLoading, setIsCountryFlagImgLoading] =
    useState<boolean>(true);
  const onClountryFlagImgLoad = function () {
    setIsCountryFlagImgLoading(false);
  };

  const [fetchCountry, isLoading, error] = useFetch(async () => {
    const res = await fetch(CountryAPI.getSingleCountryURL(params.name!));

    const { borders, flags, ...otherData } = await res.json();
    const unpackedData: SingleCountry = {
      borders,
      flag: flags.svg,
      info: {
        ...otherData,
        languages: Object.values(otherData.languages).join(', '),
        capital: Object.values(otherData.capital).join(', '),
        name: otherData.name.common,
        currencies: Object.values(otherData.currencies)
          .map((c) => (c as any).name)
          .join(', '),
      },
    };
    setCountryData(unpackedData);
  });

  useEffect(() => {
    fetchCountry();
    setIsCountryFlagImgLoading(true);
  }, [params.name]);

  const renderBorders = function () {
    if (countryData.borders.length !== 0) {
      return (
        <>
          {countryData.borders.map((border, i) => (
            <Link key={i} to={`/country/${border}`} className={styles.border}>
              {border}
            </Link>
          ))}
        </>
      );
    } else {
      return (
        <>
          <p className={styles['no-border-message']}>No borders</p>
        </>
      );
    }
  };

  const render = function () {
    if (isLoading) {
      return <Loader />;
    } else if (error) {
      return <Error text={error} />;
    } else {
      return (
        <>
          <div className={styles['img-wrapper']}>
            <img
              className={styles.img}
              onLoad={onClountryFlagImgLoad}
              src={countryData.flag}
              alt=""
            />
            {isCountryFlagImgLoading && (
              <Loader className={styles['flag-loader']} />
            )}
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>Info</h2>
            <ul className={styles.list}>
              {Object.keys(countryData.info).map((data, i) => (
                <li key={i} className={styles.item}>
                  <h6 className={styles['item-title']}>{data}:</h6>
                  <p className={styles['item-text']}>
                    {countryData.info[data as keyof SingleCountry['info']]}
                  </p>
                </li>
              ))}
            </ul>
            <h2 className={styles.title}>Borders</h2>
            <div className={styles.borders}>{renderBorders()}</div>
          </div>
        </>
      );
    }
  };

  return (
    <Container>
      <div className={`${styles.wrapper} ${styles[currentTheme]}`}>
        {render()}
      </div>
    </Container>
  );
};

export default CountryPage;
