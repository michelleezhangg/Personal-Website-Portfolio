import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import {
  NAME as name,
  ROLE as role,
  navLinks,
} from '../constants';

const Navbar = () => {
  return (
    <nav className='bg-lightblue sticky top-0'>
      <div className='flex flex-wrap items-center justify-between'>
        <Link href={'#'}>
          <h1 className='title text-xl font-black pl-5 pb-2'>{name}</h1>
          <h3 className='text-xs font-light pl-5 uppercase'>{role}</h3>
        </Link>
        <div className='menu block' id='navbar'>
          <ul className='flex p-4 gap-6'>
           {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;