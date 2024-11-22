import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { displayDuration } from "../utils/duration";
import { displayDate } from "../utils/displayDate";

const ExperienceItem = ({
  experienceType,
  company,
  position,
  location,
  type,
  date,
  team,
  logo,
  bio,
  isMd,
  ...bullet_points
}) => {
  const bullet_point_values = Object.values(bullet_points);
  const { startMonth, startYear, endMonth, endYear } = date;
  const duration = displayDuration(startMonth, startYear, endMonth, endYear);
  const dateDisplay = displayDate(startMonth, startYear, endMonth, endYear);

  return (
    <div
      className={`section-box grid lg:mb-10 mb-5 ${
        !endMonth || !endYear ? "grid-cols-1" : "grid-cols-2"
      }`}
    >
      <div className="flex flex-col justify-between mr-6">
        {/* Company and position titles based on experience type */}
        {experienceType === "professional" ? (
          <>
            <h3 className="title box-heading col-span-2 text-lg whitespace-nowrap">
              {company}
            </h3>
            <p className="title lg:text-lg text-sm">{position}</p>
          </>
        ) : (
          <>
            <h3 className="title box-heading col-span-2 text-lg whitespace-nowrap">
              {position}
            </h3>
            <p className="title lg:text-lg text-sm">{company}</p>
          </>
        )}
        {team && (
          <p className="lg:text-sm text-xs mt-2 mb-3">{`${team} Team`}</p>
        )}
        <p className="pt-2 lg:text-sm text-xs">{`${location} (${type})`}</p>
        <p className="lg:text-sm text-xs">{`${dateDisplay} (${duration})`}</p>
        {bio && <p className="title text-xs mt-4">{bio.short}</p>}
        <Image
          src={logo}
          alt={`${company} Logo`}
          className="lg:text-sm text-xs font-light self-start mt-auto pt-2"
          width={isMd ? 100 : 70}
          height={isMd ? 100 : 70}
        />
      </div>
      {bullet_point_values && (
        <ul className="lg:text-sm text-xs list-disc mt-7">
          {bullet_point_values.map((point, index) => (
            <li key={index} className="mb-2">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ExperienceItem.propTypes = {
  experienceType: PropTypes.string.isRequired, // "professional" || "volunteering" || "mentorship"
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.shape({
    startMonth: PropTypes.string.isRequired,
    startYear: PropTypes.string.isRequired,
    endMonth: PropTypes.string, // Not required
    endYear: PropTypes.string, // Not required
  }).isRequired,
  team: PropTypes.string, // Not required
  logo: PropTypes.string.isRequired,
  bio: PropTypes.shape({
    // Not required
    short: PropTypes.string,
    long: PropTypes.string,
  }),
  isMd: PropTypes.bool.isRequired,
  bullet_points: PropTypes.object, // Not required
};

export default ExperienceItem;
