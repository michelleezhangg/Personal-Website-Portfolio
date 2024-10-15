import React from 'react';
import Image from 'next/image';

const ToolListItem = ({ name, icon }) => {
  return (
    <div className='flex flex-row gap-12'>
      <Image 
        src={icon}
        alt={`${name} Icon`}
        className='text-sm font-semibold'
        width={30}
        height={30}
      />
      <p className='text-sm font-semibold'>
        {name}
      </p>
    </div>
  );
};

export default ToolListItem;
