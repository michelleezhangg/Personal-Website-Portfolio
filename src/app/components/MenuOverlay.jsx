import React from "react";
import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";

const MenuOverlay = ({ links, setNavbarOpen }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index} className="relative flex items-center">
          {/* Main Link */}
          <ScrollLink
            to={link.path}
            spy="true"
            smooth="true"
            offset={-350} // Extend spy region up 350px for mobile view
            duration={500}
            className="flex items-center text-lg py-2 pr-1 hover:text-darkblue uppercase cursor-pointer"
            activeClass="text-darkblue"
            onClick={() => setNavbarOpen(false)} // Close the menu when a link is clicked
          >
            {link.title}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
};

MenuOverlay.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      dropdown: PropTypes.arrayOf(
        // Optional
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
  setNavbarOpen: PropTypes.func.isRequired,
};

export default MenuOverlay;
