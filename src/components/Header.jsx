import React from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './Theme/ThemeButton';
import { useTheme } from './Theme/ThemeContext';

export default function Header() {
  const { currentTheme } = useTheme();

  return (
    <nav className={`p-4 fixed top-0 w-full z-10 ${currentTheme.primary}`}>
      <div className="container mx-auto flex justify-center">
        <div className="flex  space-x-20">
          <Link to="About" spy={true} smooth={true} offset={-70} duration={500} className={`mx-2 cursor-pointer ${currentTheme.text}`}>
              About
            </Link>
            <Link to="Experience" spy={true} smooth={true} offset={-70} duration={500} className={`mx-2 cursor-pointer ${currentTheme.text}`}>
              Experience
            </Link>
            <Link to="Projects" spy={true} smooth={true} offset={-70} duration={500} className={`mx-2 cursor-pointer ${currentTheme.text}`}>
              Projects
            </Link>
            <Link to="Education" spy={true} smooth={true} offset={-70} duration={500} className={`mx-2 cursor-pointer ${currentTheme.text}`}>
              Education
            </Link>
            <Link to="Contact" spy={true} smooth={true} offset={-70} duration={500} className={`mx-2 cursor-pointer ${currentTheme.text}`}>
              Contact
            </Link>
            <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}