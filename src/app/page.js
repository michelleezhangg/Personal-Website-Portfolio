import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutMeSection from './components/AboutMeSection';
import Projects from './components/Projects';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="grid gap-20 mx-auto p-12">
        <HeroSection />
        <AboutMeSection />
        <Projects />
        <ContactMeSection />
      </div>
      <Footer />
    </main>
  );
}
