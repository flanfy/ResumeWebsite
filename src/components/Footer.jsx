import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 mt-16">
      <div className="container mx-auto text-white">
        {/* Add your footer content here */}
        © 2023 Phillip Lu. All rights reserved.
        <div className="mt-2">
          {/* GitHub Link */}
          <a href="https://github.com/flanfy" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/phillip-lu/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </footer>
  );
}