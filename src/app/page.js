import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMeSection from "./components/AboutMeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className='grid grid-rows-2 gap-20 mx-auto px-12 py-12'>
        <HeroSection />
        <AboutMeSection/>
      </div>
    </main>
  );
}
