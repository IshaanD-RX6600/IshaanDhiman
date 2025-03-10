import { createContext, useContext } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const themeColors = {
  light: {
    background: 'bg-white',
    text: 'text-gray-900',
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    accent: 'bg-blue-500',
    card: 'bg-white',
    border: 'border-gray-200',
    hover: 'hover:bg-gray-50',
  },
  dark: {
    background: 'bg-gray-900',
    text: 'text-gray-100',
    primary: 'text-blue-400',
    secondary: 'text-gray-400',
    accent: 'bg-blue-600',
    card: 'bg-gray-800',
    border: 'border-gray-700',
    hover: 'hover:bg-gray-800',
  },
}; 