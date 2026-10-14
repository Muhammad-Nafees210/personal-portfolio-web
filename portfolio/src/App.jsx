import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-cyan-500 selection:text-white font-sans">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills Section */}
        <Skills />

        {/* 5. Projects Section */}
        <Projects />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* 7. Footer Section */}
      <Footer />
    </div>
  );
}
