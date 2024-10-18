"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import MenuOverlay from './MenuOverlay';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { NAME, ROLE, NAV_LINKS } from '../constants/constants';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='bg-lightblue sticky top-0'>
      <div className='flex flex-wrap items-center justify-between'>
        <Link href={'#'} onClick={() => scroll.scrollToTop()}>
          <h1 className='title text-xl pl-5 pb-2'>{NAME}</h1>
          <h3 className='text-xs font-light pl-5 uppercase'>{ROLE}</h3>
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
                <ScrollLink
                  to={link.path}
                  spy={true}
                  smooth={true}
                  offset={-200} // Extend spy region up 200px
                  duration={500}
                  className='cursor-pointer text-lg block py-2 pr-4 hover:text-darkblue uppercase'
                  activeClass='text-darkblue'
                >
                  {link.title}
                </ScrollLink>
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