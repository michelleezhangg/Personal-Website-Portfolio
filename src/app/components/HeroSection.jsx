import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const name = 'Michelle Zhang';
  const role = 'Software Engineer';
  const bioIntro = `Hey there! My name is Michelle Zhang and I am a software engineer!
    I graduated from Chapman University in May 2024 with a B.S. in Computer Science and a minor in Data Analytics.`;
  const bioBackground = 'I have a background in Full-Stack Developing, Web Development, and Data Analytics.';
  const phoneNumber = '(949) 466-3855';
  const email = 'michelleeeezhangggg@gmail.com';

  return (
    <section className='bg-lightblue mx-18'>
      <div className='flex p-10'>
        <div className='bg-blue p-10 m-3 shadow-xl flex flex-col items-center'>
          <Image
            src='/images/profile.png'
            alt='hero image'
            width={200}
            height={200}
            className='rounded-full'
          />
          <p className='text-black mb-3 mt-8 text-4xl font-black'>{name}</p>
          <p className='text-black mb-6 mx-2 text-me font-light uppercase tracking-[.25em] whitespace-nowrap'>{role}</p>
          <div className='grid grid-cols-[75px_1fr]'>
            <p className='text-black text-sm mb-5 font-black'>Phone</p>
            <p className='flex justify-center text-black text-sm mb-5'>{phoneNumber}</p>
            <p className='text-black text-sm font-black'>Email</p>
            <p className='flex justify-center text-black text-sm'>{email}</p>
          </div>
        </div>
        <div className='p-10 pt-16'>
          <h1 className='text-black mb-4 text-7xl font-black'>{name}</h1>
          <h3 className='text-black text-3xl font-semibold'>{role}</h3>
          <div>
            <button className='px-8 py-1 rounded-full bg-darkblue text-white font-bold border-2 border-darkblue mr-4
            hover:bg-white hover:text-black transition-all duration-500 hover:delay-150 uppercase text-me'>
              Resume
            </button>
            <button className='px-6 py-1 rounded-full bg-transparent text-black font-bold border-2 border-black my-8 
            hover:bg-darkblue hover:text-white hover:border-transparent transition-all duration-500 hover:delay-150 uppercase'>
              Projects
            </button>
          </div>
          <p className='text-black text-xl mb-6'>{bioIntro}</p>
          <p className='text-black text-xl mb-6'>{bioBackground}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection