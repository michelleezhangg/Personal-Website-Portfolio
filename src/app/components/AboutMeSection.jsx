"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ToolListItem from "./ToolListItem";
import ExperienceItem from "./ExperienceItem";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  EDUCATION,
  INTERESTS,
  LANGUAGES,
  PROFESSIONAL_EXPERIENCE,
} from "../constants";

const AboutMeSection = () => {
  const [mounted, setMounted] = useState(false);

  const isMd = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="about-me" className="section bg-lightblue">
      {/* Section Title and Buttons */}
      <div className="flex flex-col items-center">
        <h1 className="title section-major-heading p-4 lg:p-10 pt-20">
          About Me
        </h1>
        <Link href="/assets/resume.pdf">
          <button className="button blue-button px-8 lg:text-md text-sm">
            Resume
          </button>
        </Link>
      </div>
      <section>
        {/* Education: Chapman University */}
        <div className="section">
          <h2 className="title section-heading">Education</h2>
          <div className="section-box grid grid-cols-2">
            <div className="flex flex-col justify-between mr-6 gap-1">
              <h3 className="title box-heading">{EDUCATION.university}</h3>
              <p className="title lg:text-xl text-sm leading-5">
                {EDUCATION.major}
              </p>
              <p className="lg:text-lg text-xs">{EDUCATION.minor}</p>
              <p className="lg:text-lg text-xs">{EDUCATION.scholarship}</p>
              <p className="title pt-3 lg:text-lg text-xs">
                Graduation: {EDUCATION.graduation}
              </p>
              <p className="title lg:text-lg text-xs">GPA: {EDUCATION.gpa}</p>
              <Image
                src={EDUCATION.logo}
                alt="Chapman Logo"
                className="text-sm font-semibold self-start mt-auto"
                width={isMd ? 250 : 150}
                height={isMd ? 250 : 150}
              />
            </div>
            <div>
              <h3 className="title lg:text-xl text-sm">Relevant Coursework</h3>
              <ul className="lg:text-sm text-xs list-disc ml-6">
                {EDUCATION.relevant_coursework.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
              <h3 className="title pt-5 lg:text-xl text-sm">Organizations</h3>
              <ul className="lg:text-sm text-xs list-disc ml-6">
                {EDUCATION.organizations.map((org, index) => (
                  <li key={index}>{org}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Education: Programming Languages */}
        <div className="section">
          <div className="section-box grid grid-cols-2 gap-4">
            <h3 className="title box-heading col-span-2">
              Programming Languages
            </h3>
            <div>
              <h4 className="title lg:text-xl text-sm">Proficient</h4>
              <ul className="pt-2">
                {EDUCATION.programming_languages.proficient.map(
                  (tool, index) => (
                    <li key={index} className="py-1">
                      <ToolListItem
                        name={tool.name}
                        path={tool.path}
                        isMd={isMd}
                      />
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="title lg:text-xl text-sm">Familiar</h4>
              <ul className="pt-2">
                {EDUCATION.programming_languages.familiar.map((tool, index) => (
                  <li key={index} className="py-1">
                    <ToolListItem
                      name={tool.name}
                      path={tool.path}
                      isMd={isMd}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Education: Technical Skills */}
        <div className="section">
          <div className="section-box">
            <h3 className="title box-heading">Technical Skills</h3>
            <ul className="pt-4 grid grid-rows-4 grid-flow-col">
              {EDUCATION.technical_skills.map((tool, index) => (
                <li key={index} className="py-1">
                  <ToolListItem name={tool.name} path={tool.path} isMd={isMd} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Professional Experience */}
        <div className="section">
          <h2 className="title section-heading mt-10">
            Professional Experience
          </h2>
          {PROFESSIONAL_EXPERIENCE.map((experience, index) => (
            <ExperienceItem
              key={index}
              company={experience.company}
              position={experience.position}
              location={experience.location}
              date={experience.date}
              logo={experience.logo}
              isMd={isMd}
              {...experience.bullet_points}
            />
          ))}
        </div>
        {/* About Me */}
        <div className="section">
          <h2 className="title section-heading">About Me</h2>
          {/* About Me: Languages */}
          <div className="section-box">
            <h3 className="title box-heading">Languages</h3>
            <ul className="pt-4 grid grid-rows-3 gris-flow-col">
              {LANGUAGES.map((language_item, index) => (
                <li key={index} className="lg:text-sm text-xs py-2">
                  {`${language_item.language} (${language_item.fluency})`}
                </li>
              ))}
            </ul>
          </div>
          {/* About Me: Interests */}
          <div className="section-box my-10 lg:mb-20">
            <h3 className="title box-heading">Interests</h3>
            <ul className="pt-4">
              {INTERESTS.map((interest, index) => (
                <li key={index} className="lg:text-sm text-xs py-1">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMeSection;
