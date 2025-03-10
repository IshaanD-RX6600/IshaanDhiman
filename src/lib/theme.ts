import { createContext, useContext } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const themeColors = {
  light: {
    background: 'bg-white',
    text: 'text-gray-900',
  },
  dark: {
    background: 'bg-gray-900',
    text: 'text-white',
  },
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext); 