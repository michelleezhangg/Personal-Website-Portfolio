import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMeSection from "./components/AboutMeSection";
import Projects from "./components/Projects";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-white p-0">
      <Navbar />
      <div className="centered grid gap-20 mobile-lg:p-12 mobile-md:p-6 py-3 w-full max-w-screen overflow-hidden place-items-center">
        <HeroSection />
        <AboutMeSection />
        <Projects />
        <ContactMeSection />
      </div>
      <Footer />
    </main>
  );
}
