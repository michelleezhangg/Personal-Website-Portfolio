"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { PERSONAL, SOCIAL_LINKS, SOCIAL_ICONS } from "../constants";
import useMediaQuery from "@/hooks/useMediaQuery";

const HeroSection = () => {
  const isMd = useMediaQuery("(min-width: 768px)");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return isMd ? <HeroSectionDesktop /> : <ProfileCard isMd={isMd} />;
};

const HeroSectionDesktop = () => {
  return (
    <section id="home" className="section bg-lightblue">
      <div className="flex p-6">
        {/* Left Side: Profile Card */}
        <ProfileCard />
        {/* Right Side: Introduction Card */}
        <div className="p-10 pt-16">
          <h1 className="title mb-4 text-6xl">{PERSONAL.name}</h1>
          <h3 className="text-3xl font-semibold">{PERSONAL.role}</h3>
          <HeroSectionBio />
        </div>
      </div>
    </section>
  );
};

const ProfileCard = ({ isMd }) => {
  return (
    <div
      id="home"
      className="bg-blue p-10 pb-0 mx-10 lg:m-3 lg:mt-0 flex flex-col items-center max-h-[500px] max-w-[400px] shadow-xl md:section"
    >
      <Image
        src="/images/profile.png"
        alt="Profile Image"
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="title mb-3 mt-8 text-4xl whitespace-nowrap">
        {PERSONAL.name}
      </p>
      <p className="mb-6 mx-2 text-me font-light uppercase tracking-[.25em] whitespace-nowrap">
        {PERSONAL.role}
      </p>
      <div className="grid grid-cols-[75px_1fr]">
        <p className="text-sm mb-5 font-black">Phone</p>
        <p className="flex justify-center text-sm mb-5 whitespace-nowrap">
          {PERSONAL.phone_number}
        </p>
        <p className="text-sm font-black">Email</p>
        <p className="flex justify-center text-sm whitespace-nowrap">
          {PERSONAL.email}
        </p>
      </div>
      {/* Social Media Icons */}
      <div className="flex flex-row gap-6 bg-white self-stretch -mx-10 mt-8 py-2 items-center justify-center">
        <Link href={SOCIAL_LINKS.linkedin}>
          <Image
            src={SOCIAL_ICONS.linkedin}
            alt="LinkedIn Icon"
            width={30}
            height={30}
          />
        </Link>
        <Link href={SOCIAL_LINKS.github}>
          <Image
            src={SOCIAL_ICONS.github}
            alt="GitHub Icon"
            width={30}
            height={30}
          />
        </Link>
        <Link href={SOCIAL_LINKS.instagram}>
          <Image
            src={SOCIAL_ICONS.instagramLight}
            alt="Instagram Icon"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
};

const HeroSectionBio = () => {
  return (
    <>
      <div className="my-8">
        <Link
          href="/assets/resume.pdf"
          className="button blue-button px-8 mr-4"
        >
          Resume
        </Link>
        <ScrollLink
          to="projects"
          spy="true"
          smooth="true"
          offset={-200}
          duration={500}
          className="button transparent-button px-6"
          role="button"
          tabIndex={0}
        >
          Projects
        </ScrollLink>
      </div>
      <p className="text-xl mb-6">{PERSONAL.intro}</p>
      <p className="text-xl mb-6">{PERSONAL.background}</p>
    </>
  );
};

export default HeroSection;
