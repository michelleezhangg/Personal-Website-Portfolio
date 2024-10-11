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
      <div className='grid grid-rows-5'>
      </div>
    </section>
  );
}

export default AboutMeSection;
