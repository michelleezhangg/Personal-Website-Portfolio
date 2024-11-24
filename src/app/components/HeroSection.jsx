"use client";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  PERSONAL,
  SOCIAL_ICONS,
  MD_QUERY,
} from "../utils/constants";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  const isMd = useMediaQuery(MD_QUERY);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return isMd ? (
    <HeroSectionDesktop isMd={isMd} />
  ) : (
    <ProfileCard isMd={isMd} />
  );
};

const HeroSectionDesktop = ({ isMd }) => {
  return (
    <section id="home" className="section bg-lightblue lg:max-w-[65rem]">
      <div className="flex p-6">
        {/* Left Side: Profile Card */}
        <ProfileCard isMd={isMd} />
        {/* Right Side: Introduction Card */}
        <div className="p-10 pt-14">
          <h1 className="title mb-4 text-5xl hero-sm:text-6xl whitespace-nowrap">
            {PERSONAL.name}
          </h1>
          <h3 className="text-3xl font-semibold">{PERSONAL.role}</h3>
          <HeroSectionBio isMd={isMd} />
        </div>
      </div>
    </section>
  );
};

HeroSectionDesktop.propTypes = {
  isMd: PropTypes.bool.isRequired,
};

const ProfileCard = ({ isMd }) => {
  return (
    <div
      id="home"
      className="bg-blue p-10 pb-0 lg:mx-10 mx-2 lg:m-3 lg:mt-0 flex flex-col items-center lg:max-h-[500px] lg:max-w-[400px] min-w-[320px] max-w-[500px] shadow-xl"
    >
      <Image
        src="/images/profile.png"
        alt="Profile Image"
        width={isMd ? 200 : 175}
        height={isMd ? 200 : 175}
        priority={true}
        loading="eager"
        className="rounded-full"
      />
      <p className="title my-3 lg:mt-8 text-4xl whitespace-nowrap">
        {PERSONAL.name}
      </p>
      <p className="lg:mb-6 mx-2 text-me font-light uppercase tracking-[.25em] whitespace-nowrap">
        {PERSONAL.role}
      </p>
      {isMd && <PhoneAndEmail />}
      {!isMd && <HeroSectionBio isMd={isMd} />}
      {/* Social Media Icons */}
      <div className="flex flex-row gap-6 bg-white self-stretch -mx-10 mt-8 py-2 items-center justify-center">
        <Link href={SOCIAL_ICONS.linkedin.link}>
          <Image
            src={SOCIAL_ICONS.linkedin.icon.dark}
            alt="LinkedIn Icon"
            width={30}
            height={30}
            priority={true}
            loading="eager"
          />
        </Link>
        <Link href={SOCIAL_ICONS.github.link}>
          <Image
            src={SOCIAL_ICONS.github.icon.dark}
            alt="GitHub Icon"
            width={30}
            height={30}
            priority={true}
            loading="eager"
          />
        </Link>
        <Link href={SOCIAL_ICONS.instagram.link}>
          <Image
            src={SOCIAL_ICONS.instagram.icon.light}
            alt="Instagram Icon"
            width={30}
            height={30}
            priority={true}
            loading="eager"
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

const HeroSectionBio = ({ isMd }) => {
  return (
    <>
      <div className="lg:my-8 my-4">
        <Link
          href="/assets/Michelle_Zhang_Resume.pdf"
          className="button blue-button lg:text-md text-sm px-8 mr-4"
          target="_blank"
          rel="noopener noreferrer"
          download
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
      <p className="hero-sm:text-xl text-md lg:my-6 mt-3">{PERSONAL.intro}</p>
      {isMd && (
        <p className="hero-sm:text-xl text-md lg:mb-6">{PERSONAL.background}</p>
      )}
    </>
  );
};

HeroSectionBio.propTypes = {
  isMd: PropTypes.bool.isRequired,
};

export default HeroSection;
