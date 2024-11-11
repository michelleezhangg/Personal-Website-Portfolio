"use client";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import { PERSONAL, SOCIAL_LINKS, SOCIAL_ICONS } from "../constants";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  const isMd = useMediaQuery("(min-width: 1076px)");

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
        <ProfileCard isMd={false} />
        {/* Right Side: Introduction Card */}
        <div className="p-10 pt-16">
          <h1 className="title mb-4 text-5xl hero-md:text-6xl">
            {PERSONAL.name}
          </h1>
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
      className="bg-blue p-10 pb-0 mx-10 lg:m-3 lg:mt-0 flex flex-col items-center lg:max-h-[500px] max-w-[400px] shadow-xl md:section"
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
      {!isMd && <PhoneAndEmail />}
      {isMd && <HeroSectionBio />}
      {/* Social Media Icons */}
      <div className="flex flex-row gap-6 bg-white self-stretch -mx-10 mt-8 py-2 items-center justify-center">
        <Link href={SOCIAL_LINKS.linkedin}>
          <Image
            src={SOCIAL_ICONS.linkedin}
            alt="LinkedIn Icon"
            width={isMd ? 30 : 25}
            height={isMd ? 30 : 25}
          />
        </Link>
        <Link href={SOCIAL_LINKS.github}>
          <Image
            src={SOCIAL_ICONS.github}
            alt="GitHub Icon"
            width={isMd ? 30 : 25}
            height={isMd ? 30 : 25}
          />
        </Link>
        <Link href={SOCIAL_LINKS.instagram}>
          <Image
            src={SOCIAL_ICONS.instagramLight}
            alt="Instagram Icon"
            width={isMd ? 30 : 25}
            height={isMd ? 30 : 25}
          />
        </Link>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  isMd: PropTypes.bool.isRequired,
};

const PhoneAndEmail = () => {
  return (
    <div className="grid grid-cols-[75px_1fr]">
      <p className="title text-sm mb-5 font-black">Phone</p>
      <p className="flex justify-center text-sm mb-5 whitespace-nowrap">
        {PERSONAL.phone_number}
      </p>
      <p className="title text-sm font-black">Email</p>
      <p className="flex justify-center text-sm whitespace-nowrap">
        {PERSONAL.email}
      </p>
    </div>
  );
};

const HeroSectionBio = () => {
  return (
    <>
      <div className="lg:my-8 my-4">
        <Link
          href="/assets/resume.pdf"
          className="button blue-button lg:text-md text-sm px-8 mr-4"
        >
          Resume
        </Link>
        <ScrollLink
          to="projects"
          spy="true"
          smooth="true"
          offset={-200}
          duration={500}
          className="button transparent-button lg:text-md text-sm px-6"
          role="button"
          tabIndex={0}
        >
          Projects
        </ScrollLink>
      </div>
      <p className="lg:text-xl text-sm mb-6">{PERSONAL.intro}</p>
      <p className="lg:text-xl text-sm mb-6">{PERSONAL.background}</p>
    </>
  );
};

export default HeroSection;
