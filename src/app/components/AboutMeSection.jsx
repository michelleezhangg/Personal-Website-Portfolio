import React from 'react';

const AboutMeSection = () => {
  return (
    <section className='bg-lightblue'>
      <div className='flex flex-col items-center'>
        <h1 className='title text-6xl p-10 pt-20 font-black'>About Me</h1>
        <button className='button blue-button px-8'>
          Resume
        </button>
      </div>
      <section className='grid grid-rows-5 bg-white'>
        {/* Education */}
        <div className=''>
          Education
        </div>
        {/* Professional Experience */}
        <div className=''>
          Professional Experience
        </div>
        {/* About Me */}
        <div className=''>
          About Me
        </div>
      </section>
    </section>
  );
}

export default AboutMeSection;
