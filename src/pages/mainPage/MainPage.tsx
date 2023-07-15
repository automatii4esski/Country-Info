import { FC } from 'react';
import styles from './mainPage.module.scss';
import Filter from '../../components/mainPage/filter/Filter';
import Container from '../../components/common/container/Container';

const MainPage: FC = () => {
  return (
    <Container>
      <div>
        <Filter />
      </div>
    </Container>
  );
};

export default MainPage;
