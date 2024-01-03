// ThemeToggle.jsx
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  const { currentTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className={`${currentTheme.text}`}>
      Theme
    </button>
  );
};

export default ThemeToggle;