// ThemeContext.js
import { createContext, useContext, useState } from 'react';
import { theme1, theme2 } from './Themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme1);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === theme1 ? theme2 : theme1));
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);