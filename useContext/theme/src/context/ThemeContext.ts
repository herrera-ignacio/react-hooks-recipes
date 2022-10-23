import React from 'react';

interface Theme {
  id: string;
  foreground: string;
  background: string;
}

export const themes: {[k: string]: Theme} = {
  light: {
    id: 'light',
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    id: 'dark',
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
}); // default value
