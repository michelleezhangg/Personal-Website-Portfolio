import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMeSection from "./components/AboutMeSection";
import Projects from "./components/Projects";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-white">
      <Navbar />
      <div className="grid gap-20 mx-auto p-12 w-full max-w-screen overflow-hidden place-items-center">
        <HeroSection />
        <AboutMeSection />
        <Projects />
        <ContactMeSection />
      </div>
      <Footer />
    </main>
  );
}
