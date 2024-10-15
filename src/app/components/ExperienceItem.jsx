import React from 'react';
import Image from 'next/image';

const ExperienceItem = ({
  company, position, location, date, logo, ...bullet_points
}) => {
  const bullet_point_values = Object.values(bullet_points);

  return (
    <div className='section-box grid grid-cols-2 mb-20'>
        <h3 className='title box-heading col-span-2'>
          {company}
        </h3>
      <div>
        <p className='title'>
          {position}
        </p>
        <p className='pt-2 text-sm'>
          {location}
        </p>
        <p className='text-sm'>
          {date}
        </p>
        <Image
          src={logo}
          alt={`${company} Logo`}
          className='text-sm font-light'
          width={100}
          height={100}
        />
      </div>
      <ul className='text-sm list-disc'>
        {bullet_point_values.map((point, index) => (
          <li key={index} className='mb-2'>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
