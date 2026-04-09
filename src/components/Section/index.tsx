import { type PropsWithChildren } from 'react';
import styles from './index.module.css';

export interface IProps {
  title: string;
}

export function Section (props: PropsWithChildren<IProps>) {
  return (
    <div className={styles['section']}>
      <span className={styles['section-title']}>{props.title}</span>
      <hr className={styles['section-divider']} />
      <div className={styles['section-content']}>
        {props.children}
      </div>
    </div>
  );
}