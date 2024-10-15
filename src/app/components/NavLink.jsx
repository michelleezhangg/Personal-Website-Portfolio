import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pr-4 hover:text-darkblue uppercase"
    >
      {title}
    </Link>
  );
};

export default NavLink;
