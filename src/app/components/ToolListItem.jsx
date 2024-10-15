import React from 'react';
import Image from 'next/image';

const ToolListItem = ({ name, path }) => {
  return (
    <div className='flex flex-row gap-8 items-center'>
      <Image 
        src={path}
        alt={`${name} Icon`}
        className='text-sm font-light'
        width={40}
        height={40}
      />
      <p className='text-sm font-semibold'>
        {name}
      </p>
    </div>
  );
};

export default ToolListItem;
