import React from 'react';
import { useTheme } from './Theme/ThemeContext';

export default function Footer() {
  const { currentTheme } = useTheme();

  return (
    
    <footer className={`p-4 mt-16 w-full ${currentTheme.footer}`}>
    {/* <footer className="p-4 mt-16"> */}
      <div className={`${currentTheme.text}`}>
        © 2023 Phillip Lu. All rights reserved.
      </div>
    </footer>
  );
}