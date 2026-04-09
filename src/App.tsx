import styles from '@/styles/App.module.css';

import ErrorBoundary from '@/components/ErrorBoundary';
import ThemeProvider from '@/providers/ThemeProvider';

import NavbarLayout from '@/layouts/NavbarLayout';
import BaseLayout from '@/layouts/BaseLayout';
import Content from '@/layouts/Content';

export function App () {
  return (
    <div className={styles['app']}>
      <ErrorBoundary>
        <ThemeProvider>
          <NavbarLayout />
          <BaseLayout>
            <Content />
          </BaseLayout>
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
