import React from 'react';
import { EDUCATION } from '../constants/constants';

const AboutMeSection = () => {
  return (
    <section id='about-me' className='bg-lightblue'>
      <div className='flex flex-col items-center'>
        <h1 className='title text-6xl p-10 pt-20'>About Me</h1>
        <button className='button blue-button px-8'>
          Resume
        </button>
      </div>
      <section className='grid grid-rows-5'>
        {/* Education */}
        <div className='section-group'>
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
            </div>
            <div>
              <h3 className='title'>
                Relevant Coursework
              </h3>
              {
              }
            </div>
          </div>
        </div>
        {/* Professional Experience */}
        <div className='section-group'>
          <h2 className='title section-heading'>
            Professional Experience
          </h2>
          <div className='section-box'>
            Professional Experience Section
          </div>
        </div>
        {/* About Me */}
        <div className='section-group'>
         <h2 className='title section-heading'>
            About Me
          </h2>
          <div className='section-box'>
            About Me Section
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutMeSection;
