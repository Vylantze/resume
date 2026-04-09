import styles from './index.module.css';

import { Toggle } from '@/components/ui/toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMoon, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { useTheme, useThemeDispatch } from '@/providers/ThemeProvider/hooks';

export function NavbarLayout () {
  const theme = useTheme();
  const themeDispatch = useThemeDispatch();

  const onDarkModeToggle = function () {
    themeDispatch({ theme: theme === 'dark' ? 'light' : 'dark' });
  };

  return (
    <div className={`${styles['navbar']} sticky space-y-1`}>
      <h1 className={styles['title']}>Darryl Lai</h1>
      <div className={styles['nav-header']}>
        <div className={styles['theme-button-container']}>
          <Toggle
            onClick={onDarkModeToggle}
            pressed={theme === 'dark'}
          >
            <FontAwesomeIcon icon={faMoon} />
            Dark
          </Toggle>
        </div>
        <div className={styles['center-container']}>
          {/* Mobile */}
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faPhone} />
            <span className="select-all-on-click">+65 9326 1198</span>
          </div>
          {/* Email */}
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="select-all-on-click">lzh.darryl@gmail.com</span>
          </div>
          {/* Github */}
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faGithub} />
            <span>
              <a target="_blank" href="https://github.com/Vylantze">https://github.com/Vylantze</a>
            </span>
          </div>
          {/* LinkedIn */}
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faLinkedin} />
            <span>
              <a target="_blank" href="https://www.linkedin.com/in/darryl-lai">https://www.linkedin.com/in/darryl-lai</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarLayout;