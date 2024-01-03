import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Education from "./components/Education/Education.jsx";
import Background from "./components/Theme/Background.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { ThemeProvider } from "./components/Theme/ThemeContext.jsx";
import Skills from "./components/Skills/Skills.jsx";


function App() {
  return (
    <>
      <ThemeProvider>
        <Background className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
          <Header />
          <main className="flex flex-col items-center justify-center w-full px-4">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </Background>
      </ThemeProvider>
    </>
  );
}

export default App;
