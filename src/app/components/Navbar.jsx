import React from 'react';
import Link from 'next/link';
import {
  NAME as name,
  ROLE as role,
} from '../constants';

const Navbar = () => {
  return (
    <nav className='bg-lightblue'>
      <div>
        <Link href={'#'}>
          <h1 className='title text-black mb-4 text-xl font-black'>{name}</h1>
          <h3 className='text-black text-se font-semibold'>{role}</h3>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;