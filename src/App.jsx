import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Architecture from './components/Architecture';
import Projects from './components/Projects';
import Metrics from './components/Metrics';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Architecture />
        <Projects />
        <Metrics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
