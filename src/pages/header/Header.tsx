import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/icons/logo.svg';
import { ReactComponent as DarkIcon } from '../../assets/img/icons/dark-theme.svg';
import { ReactComponent as LightIcon } from '../../assets/img/icons/light-theme.svg';
import styles from './header.module.scss';
import Container from '../../components/common/container/Container';
import { GetAttributes } from '../../types/global';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  selectTheme,
  switchTheme,
} from '../../store/features/theme/themeSlice';

const Header: FC<GetAttributes<'header'>> = ({ className, ...props }) => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(selectTheme);

  const themeIcon = {
    light: <LightIcon className={`${styles.icon} ${styles['light-icon']}`} />,
    dark: <DarkIcon className={`${styles.icon} ${styles['dark-icon']}`} />,
  };

  const onButtonClick = function () {
    dispatch(switchTheme());
  };

  return (
    <header
      className={`${styles.header} ${styles[currentTheme]} ${className}`}
      {...props}
    >
      <Container>
        <div className={styles.inner}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
          <button className={styles.button} onClick={onButtonClick}>
            {themeIcon[currentTheme]}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
