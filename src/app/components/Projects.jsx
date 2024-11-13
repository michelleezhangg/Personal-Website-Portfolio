import React from "react";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import { SOCIAL_LINKS, PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="section bg-lightblue">
      <div className="flex flex-col items-center">
        {/* Section Title and Buttons */}
        <h1 className="title section-major-heading lg:p-10 p-4 pt-20">
          Projects
        </h1>
        <div className="flex pb-10">
          <Link href={SOCIAL_LINKS.github}>
            <button className="button blue-button lg:text-md text-sm px-8 mx-4">
              GitHub
            </button>
          </Link>
          <Link href={SOCIAL_LINKS.linkedin}>
            <button className="button transparent-button lg:text-md text-sm px-6">
              LinkedIn
            </button>
          </Link>
        </div>
        {/* Project Items */}
        <div className="section">
          {PROJECTS.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              date={project.date}
              location={project.location}
              links={project.links}
              {...project.bullet_points}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
