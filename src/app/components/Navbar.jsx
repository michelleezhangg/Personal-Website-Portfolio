import React from 'react';
import Link from 'next/link';
import {
  NAME as name,
  ROLE as role,
  NAV_HOME as home,
  NAV_ABOUT_ME as aboutMe,
  NAV_PROJECTS as projects,
  NAV_CONTACT_ME as contactMe,
} from '../constants';

const Navbar = () => {
  return (
    <nav className='bg-lightblue'>
      <div>
        <Link href={'#'}>
          <h1 className='title text-black text-xl font-black'>{name}</h1>
          <h3 className='text-black text-se font-semibold'>{role}</h3>
        </Link>
        <div className='menu'>
          <ul>
            <li><Link href={"#"}>{home}</Link></li>
            <li><Link href={"#about"}>{aboutMe}</Link></li>
            <li><Link href={"#projects"}>{projects}</Link></li>
            <li><Link href={"#contact"}>{contactMe}</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;