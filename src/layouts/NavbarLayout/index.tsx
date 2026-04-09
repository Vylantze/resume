import styles from './index.module.css';

import { Toggle } from '@/components/ui/toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import { useTheme, useThemeDispatch } from '@/providers/ThemeProvider/hooks';

export function NavbarLayout () {
  const theme = useTheme();
  const themeDispatch = useThemeDispatch();

  const onDarkModeToggle = function () {
    themeDispatch({ theme: theme === 'dark' ? 'light' : 'dark' });
  };

  return (
    <div className="navbar sticky">
      <h1 className={styles['title']}>Test</h1>
      <div className={styles['nav-header']}>
        <div className="separator-div" />
        <Toggle
          onClick={onDarkModeToggle}
          pressed={theme === 'dark'}
        >
          <FontAwesomeIcon icon={faMoon} />
          Dark
        </Toggle>
      </div>
    </div>
  );
}

export default NavbarLayout;