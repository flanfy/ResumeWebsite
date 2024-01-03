// ThemeToggle.jsx
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="bg-gray-300 p-2 rounded">
      Theme
    </button>
  );
};

export default ThemeToggle;