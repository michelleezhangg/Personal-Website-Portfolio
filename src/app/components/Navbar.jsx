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
          <h1 className='text-black mb-4 text-7xl font-black'>{name}</h1>
          <h3 className='text-black text-3xl font-semibold'>{role}</h3>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar