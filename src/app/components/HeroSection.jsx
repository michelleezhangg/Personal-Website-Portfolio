import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const name = 'Michelle Zhang';
  const role = 'Software Engineer';
  const bioIntro = `Hey there! My name is Michelle Zhang and I am a software engiener!
    I graduated from Chapman University in May 2024 with a B.S. in Computer Science and a minor in Data Analytics.`;
  const bioBackground = 'I have a background in Full-Stack Developing, Web Development, and Data Analytics.';

  return (
    <section>
      <div className='grid grid-rows-1 lg:grid-rows-3'>
        <div className='row-span-2 place-self-center mt-4 lg:m-0'>
          <Image
            src='/images/profile.png'
            alt='hero image'
            className='absolute transform -translate-x-1/2 translate-y-1/2 top-1/2 left-1/2'
            width={300}
            height={300}
          />
        </div>
        <div className='col-span-7 place-self-center'>
          <h1 className='text-black mb-4 text-4xl lg:text-6xl font-extrabold'>{name}</h1>
          <h3 className='text-black text-lg mb-6 lg:text-xl'>{role}</h3>
          <div>
            {/* TODO: make background color transition smoother */}
            <button className='px-6 py-3 rounded-full mr-4 bg-[#0050FF] text-white border border-[#0050FF] hover:bg-white hover:text-black hover:border-black transition-all hover:delay-200'>Resume</button>
            <button className='px-6 py-3 rounded-full bg-transparent text-black border border-black mt-3 hover:bg-[#0050FF] hover:text-white hover:border-transparent transition-all hover:delay-200'>Projects</button>
          </div>
          <p className='text-black text-lg mb-6 lg:text-xl'>{bioIntro}</p>
          <p className='text-black text-lg mb-6 lg:text-xl'>{bioBackground}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection