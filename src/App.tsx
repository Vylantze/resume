import styles from '@/styles/App.module.css';

import ErrorBoundary from '@/components/ErrorBoundary';
import NavbarLayout from '@/layouts/NavbarLayout';
import BaseLayout from '@/layouts/BaseLayout';
import ThemeProvider from '@/providers/ThemeProvider';

export function App () {
  return (
    <div className={styles['app']}>
      <ErrorBoundary>
        <ThemeProvider>
          <NavbarLayout />
          <BaseLayout>
            <div className={styles['content']}>
              Text
            </div>
          </BaseLayout>
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
