import React from 'react';
import Image from 'next/image';
import {
  NAME as name,
  ROLE as role,
  BIO_INTRO as bioIntro,
  BIO_BACKGROUND as bioBackground,
  PHONE_NUMBER as phoneNumber,
  EMAIL as email,
} from '../constants';

const HeroSection = () => {
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
          <p className='titlemb-3 mt-8 text-4xl font-black'>{name}</p>
          <p className='mb-6 mx-2 text-me font-light uppercase tracking-[.25em] whitespace-nowrap'>{role}</p>
          <div className='grid grid-cols-[75px_1fr]'>
            <p className='text-sm mb-5 font-black'>Phone</p>
            <p className='flex justify-center text-sm mb-5'>{phoneNumber}</p>
            <p className='text-sm font-black'>Email</p>
            <p className='flex justify-center text-sm'>{email}</p>
          </div>
        </div>
        <div className='p-10 pt-16'>
          <h1 className='title mb-4 text-7xl font-black'>{name}</h1>
          <h3 className='text-3xl font-semibold'>{role}</h3>
          <div>
            <button className='px-8 py-1 rounded-full bg-darkblue text-white font-bold border-2 border-darkblue mr-4
            hover:bg-white hover:text-black transition-all duration-500 hover:delay-150 uppercase text-me'>
              Resume
            </button>
            <button className='px-6 py-1 rounded-full bg-transparent font-bold border-2 border-black my-8
            hover:bg-darkblue hover:text-white hover:border-transparent transition-all duration-500 hover:delay-150 uppercase'>
              Projects
            </button>
          </div>
          <p className='text-xl mb-6'>{bioIntro}</p>
          <p className='text-xl mb-6'>{bioBackground}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;