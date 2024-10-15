import React from 'react';
import Image from 'next/image';
import ToolListItem from './ToolListItem';
import ExperienceItem from './ExperienceItem';
import { EDUCATION, INTERESTS, LANGUAGES, PROFESSIONAL_EXPERIENCE } from '../constants/constants';
import ChapmanLogo from '../../../public/images/chapman-logo.png';

const AboutMeSection = () => {
  return (
    <section id='about-me' className='section bg-lightblue'>
      <div className='flex flex-col items-center'>
        <h1 className='title text-6xl p-10 pt-20'>About Me</h1>
        <button className='button blue-button px-8'>
          Resume
        </button>
      </div>
      <section>
        {/* Education: Chapman University */}
        <div className='section'>
          <h2 className='title section-heading'>
            Education
          </h2>
          <div className='section-box grid grid-cols-2'>
            <div>
              <h3 className='title box-heading'>
                {EDUCATION.university}
              </h3>
              <p className='title'>
                {EDUCATION.major}
              </p>
              <p>{EDUCATION.minor}</p>
              <p>{EDUCATION.scholarship}</p>
              <p className='pt-3'>
                Graduation: <strong>{EDUCATION.graduation}</strong>
              </p>
              <p>GPA: <strong>{EDUCATION.gpa}</strong></p>
              <Image
                src={ChapmanLogo}
                alt='Chapman Logo'
                className='text-sm font-semibold'
                width={200}
                height={200}
              />
            </div>
            <div>
              <h3 className='title'>
                Relevant Coursework
              </h3>
              <ul className='text-sm list-disc ml-6'>
                {EDUCATION.relevant_coursework.map((course, index) => (
                  <li key={index}>
                    {course}
                  </li>
                ))}
              </ul>
              <h3 className='title pt-5'>
                Organizations
              </h3>
              <ul className='text-sm list-disc ml-6'>
                {EDUCATION.organizations.map((org, index) => (
                  <li key={index}>
                    {org}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Education: Programming Languages */}
        <div className='section'>
          <div className='section-box grid grid-cols-2 gap-4'>
            <h3 className='title box-heading col-span-2'>
              Programming Languages
            </h3>
            <div>
              <h4 className='title'>
                Proficient
              </h4>
              <ul className='pt-4'>
                {EDUCATION.programming_languages.proficient.map((tool, index) => (
                  <li key={index} className='py-2'>
                    <ToolListItem name={tool.name} path={tool.path} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className='title'>
                Familiar
              </h4>
              <ul className='pt-4'>
                {EDUCATION.programming_languages.familiar.map((tool, index) => (
                  <li key={index} className='py-2'>
                    <ToolListItem name={tool.name} path={tool.path} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Education: Technical Skills */}
        <div className='section'>
          <div className='section-box'>
            <h3 className='title box-heading'>
              Technical Skills
            </h3>
            <ul className='pt-4 grid grid-rows-4 grid-flow-col'>
              {EDUCATION.technical_skills.map((tool, index) => (
                <li key={index} className='py-2'>
                  <ToolListItem name={tool.name} path={tool.path} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Professional Experience */}
        <div className='section -mb-20'>
          <h2 className='title section-heading'>
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
              {...experience.bullet_points}
            />
          ))}
        </div>
        {/* About Me */}
        <div className='section pb-20'>
          <h2 className='title section-heading'>
            About Me
          </h2>
          {/* About Me: Languages */}
          <div className='section-box my-10'>
            <h3 className='title box-heading'>
              Languages
            </h3>
            <ul className='pt-4 grid grid-rows-3 gris-flow-col'>
              {LANGUAGES.map((language_item, index) => (
                <li key={index} className='py-2'>
                  {`${language_item.language} (${language_item.fluency})`}
                </li>
              ))}
            </ul>
          </div>
          {/* About Me: Interests */}
          <div className='section-box my-10'>
            <h3 className='title box-heading'>
              Interests
            </h3>
            <ul className='pt-4'>
              {INTERESTS.map((interest, index) => (
                <li key={index} className='text-sm py-1'>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutMeSection;
