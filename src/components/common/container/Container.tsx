import { FC } from 'react';
import styles from './container.module.scss';
import React from 'react';
import { GetAttributes } from '../../../types/global';
const Container: FC<GetAttributes<'div'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
