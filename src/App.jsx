import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';

import './App.css'

function App() {
  return (
    <>
      <div className="bg-gray-800">
        <Header />
        <main>
          <About />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App