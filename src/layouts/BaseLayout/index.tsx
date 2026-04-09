import { type PropsWithChildren } from 'react';
import styles from './index.module.css';

export function BaseLayout ({ children }: PropsWithChildren) {
  return (
    <div className={styles['base-layout']}>
      {children}
    </div>
  );
};

export default BaseLayout;