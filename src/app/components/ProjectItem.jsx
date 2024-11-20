"use client";
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { calculateDuration } from "../utils/calculateDuration";

const ProjectItem = ({ title, date, location, links, ...bullet_points }) => {
  const bullet_point_values = Object.values(bullet_points);

  return (
    <div className="section-box lg:mb-20 mb-10">
      <h3 className="title box-heading">{title}</h3>
      <div>
        <p className="lg:text-md text-sm">{date}</p>
        <p className="lg:text-md text-sm">{location}</p>
      </div>
      <div className="lg:my-0 my-1">
        {links.map((link, index) => (
          <Link href={link.url} key={index}>
            <button className="button transparent-button lg:text-xs text-[10px] px-8 mr-5 lg:my-4 my-1">
              {link.link_name}
            </button>
          </Link>
        ))}
      </div>
      <ul className="lg:text-sm text-xs list-disc ml-5">
        {bullet_point_values.map((point, index) => (
          <li key={index} className="mb-2">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link_name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProjectItem;
