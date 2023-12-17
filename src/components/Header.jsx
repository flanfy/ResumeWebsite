import React from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-40">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="text-white mx-2 cursor-pointer">
              About
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="text-white mx-2 cursor-pointer">
              Experience
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="text-white mx-2 cursor-pointer">
              Projects
            </Link>
            {/* Add more sections as needed */}
        </div>
      </div>
    </nav>
  );
}