"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ExperienceItem from "./ExperienceItem";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  PROFESSIONAL_EXPERIENCE,
  MD_QUERY,
  SOCIAL_LINKS,
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
        <Link href={SOCIAL_LINKS.linkedin}>
          <button className="button transparent-button lg:text-md text-sm px-6">
            LinkedIn
          </button>
        </Link>
      </div>
      {/* Professional Experience */}
      <div className="section">
        <h2 className="title section-heading mt-10">Professional Experience</h2>
        {PROFESSIONAL_EXPERIENCE.map((experience, index) => (
          <ExperienceItem
            key={index}
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
    </section>
  );
};

export default ExperienceSection;
