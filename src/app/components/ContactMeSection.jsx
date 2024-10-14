import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  LINKEDIN_LINK, INSTAGRAM_LINK, GITHUB_LINK,
  CONNECT_BIO, EMAIL_PLACEHOLDER, SUBJECT_PLACEHOLDER, MESSAGE_PLACEHOLDER,
} from '../constants/constants';
import GithubIcon from '../../../public/assets/github-icon.svg';
import InstagramIcon from '../../../public/assets/instagram-icon.svg';
import LinkedInIcon from '../../../public/assets/linkedin-icon.svg';

const ContactMeSection = () => {
  return (
    <section id='contact-me' className='bg-lightblue'>
      {/* Section Title */}
      <div className='flex flex-col items-center'>
        <h1 className='title text-6xl pt-20 font-black'>Contact Me</h1>
      </div>
      <section className='grid grid-cols-2 mt-12 pt-10 pb-24 mx-20 gap-4'>
        {/* Left Side: Section Text and Socials */}
        <div>
          <h5 className='text-xl font-bold my-1'>Let's Connect</h5>
          <p className='mb-4 max-w-sm'>{CONNECT_BIO}</p>
          <div className='flex flex-row gap-5 ml-5'>
            <Link href={LINKEDIN_LINK}>
              <Image
                src={LinkedInIcon}
                alt="LinkedIn Icon"
                width={30}
                height={30}
              />
            </Link>
            <Link href={GITHUB_LINK}>
              <Image
                src={GithubIcon}
                alt="GitHub Icon"
                width={30}
                height={30}
              />
            </Link>
            <Link href={INSTAGRAM_LINK}>
              <Image
                src={InstagramIcon}
                alt="Instagram Icon"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
        {/* Right Side: Submission Form */}
        <div>
            <form className='flex flex-col gap-2'>
              <div className='mb-6'>
                <label
                  htmlFor='email'
                  type='email'
                  className='block text-sm font-semibold mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  required
                  className='bg-white border border-black text-sm rounded-lg block w-full p-2.5'
                  placeholder={EMAIL_PLACEHOLDER}
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='subject'
                  className='block text-sm font-semibold mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  required
                  className='bg-white border border-black text-sm rounded-lg block w-full p-2.5'
                  placeholder={SUBJECT_PLACEHOLDER}
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold mb-2'
                >
                  Message
                </label>
                <input
                  type='message'
                  id='message'
                  required
                  className='bg-white border border-black text-sm rounded-lg block w-full p-2.5'
                  placeholder={MESSAGE_PLACEHOLDER}
                />
              </div>
              <button
                type='submit'
                className='button blue-button'
              >
                Send Message
              </button>
            </form>
          </div>
      </section>
    </section>
  );
}

export default ContactMeSection;
