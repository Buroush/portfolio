
import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ScrollAnimations from '../components/ScrollAnimations';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ScrollAnimations />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
