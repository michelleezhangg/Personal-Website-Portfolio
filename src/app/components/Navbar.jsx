"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { NAME, ROLE, NAV_LINKS } from '../constants/constants';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='bg-lightblue sticky top-0'>
      <div className='flex flex-wrap items-center justify-between'>
        <Link href={'#'}>
          <h1 className='title text-2xl pl-5 pb-2'>{NAME}</h1>
          <h3 className='text-sm font-light pl-5 uppercase'>{ROLE}</h3>
        </Link>
        {/* Mobile Menu */}
        <div className='block md:hidden'>
          {!navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-1'>
                <Bars3Icon className='h-8 w-8' />
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-1'>
                <XMarkIcon className='h-8 w-8' />
              </button>
          )}
        </div>
        {/* Standard Menu */}
        <div className='hidden md:block' id='navbar'>
          <ul className='flex p-4 gap-6'>
           {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={NAV_LINKS} /> : null}
    </nav>
  );
}

export default Navbar;