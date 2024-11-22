"use client";
import React, { Suspense, useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BackgroundSection from "./components/BackgroundSection";
import ExperienceSection from "./components/ExperienceSection";
import Projects from "./components/Projects";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import SkeletonLoader from "./components/SkeletonLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <main className="flex flex-col bg-white p-0">
          <Suspense fallback={<LoadingSpinner />}>
            <Navbar />
          </Suspense>
          <div className="centered grid gap-20 mobile-lg:p-12 mobile-md:p-6 py-3 w-full max-w-screen overflow-hidden place-items-center">
            <Suspense fallback={<LoadingSpinner />}>
              <HeroSection />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <BackgroundSection />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <ExperienceSection />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <ContactMeSection />
            </Suspense>
          </div>
          <Footer />
        </main>
      )}
    </>
  );
}

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);
