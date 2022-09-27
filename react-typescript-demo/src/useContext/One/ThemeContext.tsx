import { createContext } from 'react';
import { theme } from './theme';

type ThemeProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);


export const ThemeContextProvider({children}:ThemeProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

