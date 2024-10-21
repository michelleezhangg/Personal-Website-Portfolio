import React from 'react';
import Link from 'next/link';
import { PERSONAL, COPYRIGHT } from '../constants';

const Footer = () => {
  return (
    <footer className='bg-lightblue py-3'>
      <div className='flex flex-row'>
        <Link href={'#'}>
          <h1 className='title text-2xl pl-5 pb-2'>{PERSONAL.name}</h1>
          <h3 className='text-sm font-light pl-5 uppercase'>{PERSONAL.role}</h3>
        </Link>
        <p className='ml-auto mt-auto mr-8'>{COPYRIGHT}</p>
      </div>
    </footer>
  );
}

export default Footer;
