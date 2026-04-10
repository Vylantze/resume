import styles from './index.module.css';

import { Toggle } from '@/components/ui/toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { useTheme, useThemeDispatch } from '@/providers/ThemeProvider/hooks';

export function NavbarLayout () {
  const theme = useTheme();
  const themeDispatch = useThemeDispatch();

  const onDarkModeToggle = function () {
    themeDispatch({ theme: theme === 'dark' ? 'light' : 'dark' });
  };

  return (
    <div className={`${styles['navbar']} sticky `}>
      <div className={styles['nav-header']}>
        <div className={styles['theme-button-container']}>
          <Toggle
            onClick={onDarkModeToggle}
            pressed={theme === 'dark'}
          >
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </Toggle>
        </div>
        <h1 className={styles['title']}>Darryl Lai</h1>
      </div>
    </div>
  );
}

export default NavbarLayout;