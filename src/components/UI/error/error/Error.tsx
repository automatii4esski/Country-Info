import { FC } from 'react';
import styles from './error.module.scss';
import { GetAttributes } from '../../../../types/global';
import { ErrorProps } from '../../../../types/UI';

const Error: FC<ErrorProps> = ({ className, text, ...props }) => {
  return (
    <div className={`${styles.error} ${className}`} {...props}>
      <div className={styles.icon}>!</div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Error;
