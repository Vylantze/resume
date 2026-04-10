import { type PropsWithChildren } from 'react';
import styles from './index.module.css';

export function BaseLayout ({ children }: PropsWithChildren) {
  return (
    <div className={styles['base-layout']}>
      {children}
      <div className={styles['print-only-footer']}>
        This is an offline copy of the resume located at <span className="underline ml-1">https://vylantze.github.io/resume</span>.
      </div>
    </div>
  );
};

export default BaseLayout;