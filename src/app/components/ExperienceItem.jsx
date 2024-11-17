import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const ExperienceItem = ({
  company,
  position,
  location,
  date,
  logo,
  isMd,
  ...bullet_points
}) => {
  const bullet_point_values = Object.values(bullet_points);

  return (
    <div className="section-box grid grid-cols-2 lg:mb-20 mb-5">
      <div className="flex flex-col justify-between mr-6">
        <h3 className="title box-heading col-span-2 text-lg">{company}</h3>
        <p className="title lg:text-lg text-sm">{position}</p>
        <p className="pt-2 lg:text-sm text-xs">{location}</p>
        <p className="lg:text-sm text-xs">{date}</p>
        <Image
          src={logo}
          alt={`${company} Logo`}
          className="lg:text-sm text-xs font-light self-start mt-auto pt-2"
          width={isMd ? 100 : 70}
          height={isMd ? 100 : 70}
        />
      </div>
      <ul className="lg:text-sm text-xs list-disc mt-5">
        {bullet_point_values.map((point, index) => (
          <li key={index} className="mb-2">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

ExperienceItem.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  isMd: PropTypes.bool.isRequired,
  bullet_points: PropTypes.object,
};

export default ExperienceItem;
