import React from 'react';

const ProjectItem = ({
  title, date, location, links, ...bullet_points
}) => {
  const bullet_point_values = Object.values(bullet_points);

  return (
    <div className='section-box mb-20'>
      <h3 className='title box-heading'>
        {title}
      </h3>
      <div>
        <p>
          {date}
        </p>
        <p className='text-sm'>
          {location}
        </p>
      </div>
      {links.map((link, index) => (
        <button key={index} className='button transparent-button text-xs px-8 mr-5 my-4'>
          {link.link_name}
        </button>
      ))}
      <ul className='text-sm list-disc ml-5'>
        {bullet_point_values.map((point, index) => (
          <li key={index} className='mb-2'>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItem;
