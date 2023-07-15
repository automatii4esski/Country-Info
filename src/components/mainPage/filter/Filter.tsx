import { FC } from 'react';
import styles from './filter.module.scss';
import Input from '../../UI/input/Input';
import Select from '../../UI/selects/select/Select';
import { SelectOptionType } from '../../../types/global';

const regions: SelectOptionType[] = [
  {
    value: 'asia',
    label: 'Asia',
  },
  {
    value: 'oceania',
    label: 'Oceania',
  },
  {
    value: 'europe',
    label: 'Europe',
  },
  {
    value: 'americas',
    label: 'Americas',
  },
  {
    value: 'antarctic',
    label: 'Antarctic',
  },
  {
    value: 'africa',
    label: 'Africa',
  },
];

const Filter: FC = () => {
  return (
    <div className={styles.filter}>
      <Input placeholder="Search for a country" />
      <Select placeholder="Select the region" options={regions} />
    </div>
  );
};

export default Filter;
