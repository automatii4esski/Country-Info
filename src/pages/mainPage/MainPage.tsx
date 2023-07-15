import { FC } from 'react';
import styles from './mainPage.module.scss';
import Filter from '../../components/mainPage/filter/Filter';
import Container from '../../components/common/container/Container';
import Countries from '../../components/mainPage/countries/Countries';

const MainPage: FC = () => {
  return (
    <Container>
      <div>
        <Filter />
        <Countries />
      </div>
    </Container>
  );
};

export default MainPage;
