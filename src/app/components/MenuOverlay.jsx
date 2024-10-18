import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link, index) => (
        <li key={index}>
          <ScrollLink
            to={link.path}
            spy={true}
            smooth={true}
            offset={-200} // Extend spy region up 200px
            duration={500}
            className='block py-2 pr-4 hover:text-darkblue uppercase'
            activeClass='text-darkblue'
            onClick={() => setNavbarOpen(false)} // Close the menu when a link is clicked
          >
            {link.title}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
}

export default MenuOverlay;