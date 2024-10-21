import React from 'react';
import Link from 'next/link';
import { NAME, ROLE, COPYRIGHT } from '../constants';

const Footer = () => {
  return (
    <footer className='bg-lightblue py-3'>
      <div className='flex flex-row'>
        <Link href={'#'}>
          <h1 className='title text-xl pl-5 pb-2'>{NAME}</h1>
          <h3 className='text-xs font-light pl-5 uppercase'>{ROLE}</h3>
        </Link>
        <p className='ml-auto mt-auto text-slate-400'>{COPYRIGHT}</p>
      </div>
    </footer>
  );
}

export default Footer;
