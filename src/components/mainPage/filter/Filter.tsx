import { FC } from 'react';
import styles from './filter.module.scss';
import Input from '../../UI/input/Input';

const Filter: FC = () => {
  return (
    <div>
      <Input placeholder="Search Query" />
    </div>
  );
};

export default Filter;
