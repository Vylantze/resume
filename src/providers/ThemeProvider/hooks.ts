import { useContext, type Dispatch } from 'react';
import { type IThemeState, ThemeContext, ThemeDispatchContext } from '@/providers/ThemeProvider/ThemeContext';

export const useTheme = function () {
  return useContext(ThemeContext);
};

export const useThemeDispatch = function (): Dispatch<IThemeState> {
  const dispatch = useContext(ThemeDispatchContext);
  if (dispatch === undefined) {
    throw new Error('[ThemeProvider] useThemeDispatch must be used within a ThemeProvider');
  }
  return useContext(ThemeDispatchContext);
};