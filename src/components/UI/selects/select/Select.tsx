import { FC } from 'react';
import ReactSelect, { GroupBase, Props } from 'react-select';
import styles from './select.module.scss';
import Option from 'react-select/dist/declarations/src/components/Option';
import { useAppSelector } from '../../../../hooks/redux';
import { selectTheme } from '../../../../store/features/theme/themeSlice';

const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  className,
  ...props
}: Props<Option, IsMulti, Group>) => {
  const currentTheme = useAppSelector(selectTheme);

  return (
    <ReactSelect
      {...props}
      classNames={{
        control: (state) => {
          return `${styles.select} ${
            styles[state.isFocused ? 'focused' : '']
          } ${styles[`select-${currentTheme}`]}`;
        },
        option: () => `${styles[`option-${currentTheme}`]} ${styles.option}`,
        menu: () => styles.menu,
        multiValue: () => `${styles[`value-${currentTheme}`]} ${styles.value}`,
      }}
      unstyled
      isClearable
    />
  );
};

export default Select;
