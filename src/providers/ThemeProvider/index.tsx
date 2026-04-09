import { useReducer, type PropsWithChildren, useEffect } from 'react';
import storage from '@/scripts/lib/storage';
import { DEFAULT_THEME, setDocumentTheme, ThemeContext, ThemeDispatchContext, type IThemeState } from './ThemeContext';

// Reference: https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting

export function ThemeProvider ({ children }: PropsWithChildren) {
  const reducer = function (state: IThemeState, action: IThemeState): IThemeState {
    const newState = {
      ...state,
      ...action,
    };
    return newState;
  };
  const [state, dispatch] = useReducer(reducer, { theme: DEFAULT_THEME });

  useEffect(() => {
    setDocumentTheme(state.theme);
    storage.setItem('theme', state);
  }, [state]);

  return (
    <ThemeContext.Provider value={state.theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;