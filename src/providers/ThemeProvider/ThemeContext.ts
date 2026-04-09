import { createContext, type Dispatch } from 'react';
import storage from '@/scripts/lib/storage';

export interface IThemeState {
  theme: 'light' | 'dark';
};

export const setDocumentTheme = function (theme: 'light' | 'dark') {
  if (theme === 'light') {
    document.body.classList.remove('dark');
  } else { 
    document.body.classList.add('dark');
  }
};

const getDefaultTheme = function (): 'light' | 'dark' {
  const storedTheme = storage.getItem<IThemeState>('theme');
  let theme = storedTheme?.theme ?? 'light';
  if (storedTheme === null && (window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false)) {
    console.log('[ThemeProvider][getDefaultTheme] Prefers dark mode');
    theme = 'dark';
  }
  console.log('[ThemeProvider][getDefaultTheme]', theme);
  return theme;
};

export const DEFAULT_THEME: 'light' | 'dark' = getDefaultTheme();

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with 'light' as the default).
export const ThemeContext = createContext<'light' | 'dark'>(DEFAULT_THEME);
export const ThemeDispatchContext = createContext<Dispatch<IThemeState>>(() => {});
