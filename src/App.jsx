import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';

import './App.css'

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default App