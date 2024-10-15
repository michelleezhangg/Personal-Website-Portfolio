import React from 'react';
import ProjectItem from './ProjectItem';
import { PROJECTS } from '../constants/constants';

const Projects = () => {
  return (
    <section id='projects' className='section bg-lightblue'>
      <div className='flex flex-col items-center'>
        <h1 className='title text-6xl pt-20'>Projects</h1>
        <div className='flex p-10'>
          <button className='button blue-button px-8 mx-4'>
            GitHub
          </button>
          <button className='button transparent-button px-6'>
            LinkedIn
          </button>
        </div>
        <div className='section'>
          {PROJECTS.map(( project, index ) => (
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
