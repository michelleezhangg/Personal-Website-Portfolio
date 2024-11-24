"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ExperienceItem from "./ExperienceItem";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  PROFESSIONAL_EXPERIENCE,
  VOLUNTEER_AND_MENTORSHIP_EXPERIENCE,
  MD_QUERY,
  SOCIAL_ICONS,
} from "../utils/constants";

const ExperienceSection = () => {
  const [mounted, setMounted] = useState(false);

  const isMd = useMediaQuery(MD_QUERY);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="experience" className="section bg-lightblue">
      {/* Section Title and Button */}
      <div className="flex flex-col items-center">
        <h1 className="title section-major-heading lg:p-10 p-4 pt-20">
          Experience
        </h1>
        <Link href={SOCIAL_ICONS.linkedin.link}>
          <button className="button transparent-button lg:text-md text-sm px-6">
            LinkedIn
          </button>
        </Link>
      </div>
      {/* Professional Experience */}
      <div id="professional-experience" className="section">
        <h2 className="title section-heading">Professional Experience</h2>
        {PROFESSIONAL_EXPERIENCE.map((experience, index) => (
          <ExperienceItem
            key={index}
            experienceType="professional"
            company={experience.company}
            position={experience.position}
            location={experience.location}
            type={experience.type}
            date={experience.date}
            team={experience.team}
            logo={experience.logo}
            isMd={isMd}
            {...experience.bullet_points}
          />
        ))}
      </div>
      {/* Volunteering and Mentorship */}
      <div id="volunteering-and-mentorship" className="section">
        <h2 className="title section-heading">Volunteering and Mentorship</h2>
        {VOLUNTEER_AND_MENTORSHIP_EXPERIENCE.map((experience, index) => (
          <ExperienceItem
            key={index}
            experienceType="mentorship"
            company={experience.company}
            position={experience.position}
            location={experience.location}
            type={experience.type}
            date={experience.date}
            team={experience.team}
            logo={experience.logo}
            bio={experience.bio}
            isMd={isMd}
            {...experience.bullet_points}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
