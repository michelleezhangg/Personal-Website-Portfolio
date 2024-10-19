import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  NAME, ROLE, BIO_INTRO, BIO_BACKGROUND, PHONE_NUMBER, EMAIL,
  LINKS,
} from '../constants/constants';
import GithubIcon from '../../../public/assets/github-icon.svg';
import InstagramIcon from '../../../public/assets/instagram-icon.svg';
import LinkedInIcon from '../../../public/assets/linkedin-icon.svg';

const HeroSection = () => {
  return (
    <section className='section bg-lightblue'>
      <div className='flex p-10'>
        {/* Left Side: Profile Card */}
        <div className='bg-blue p-10 pb-0 m-3 shadow-xl flex flex-col items-center'>
          <Image
            src='/images/profile.png'
            alt='hero image'
            width={200}
            height={200}
            className='rounded-full'
          />
          <p className='title mb-3 mt-8 text-4xl'>{NAME}</p>
          <p className='mb-6 mx-2 text-me font-light uppercase tracking-[.25em] whitespace-nowrap'>{ROLE}</p>
          <div className='grid grid-cols-[75px_1fr]'>
            <p className='text-sm mb-5 font-black'>Phone</p>
            <p className='flex justify-center text-sm mb-5'>{PHONE_NUMBER}</p>
            <p className='text-sm font-black'>Email</p>
            <p className='flex justify-center text-sm'>{EMAIL}</p>
          </div>
          <div className='flex flex-row gap-6 bg-white self-stretch -mx-10 mt-8 py-2 items-center justify-center'>
            <Link href={LINKS.linkedin}>
              <Image
                src={LinkedInIcon}
                alt="LinkedIn Icon"
                width={30}
                height={30}
              />
            </Link>
            <Link href={LINKS.github}>
              <Image
                src={GithubIcon}
                alt="GitHub Icon"
                width={30}
                height={30}
              />
            </Link>
            <Link href={LINKS.instagram}>
              <Image
                src={InstagramIcon}
                alt="Instagram Icon"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
        {/* Right Side: Introduction Card */}
        <div className='p-10 pt-16'>
          <h1 className='title mb-4 text-6xl'>{NAME}</h1>
          <h3 className='text-3xl font-semibold'>{ROLE}</h3>
          <div>
            <button className='button blue-button px-8 mr-4'>
              Resume
            </button>
            <button href='#projects' className='button transparent-button px-6 my-8'>
              Projects
            </button>
          </div>
          <p className='text-xl mb-6'>{BIO_INTRO}</p>
          <p className='text-xl mb-6'>{BIO_BACKGROUND}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;