import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links, setNavbarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index} className="relative flex items-center">
          {/* Main Link */}
          <ScrollLink
            to={link.path}
            spy={true}
            smooth={true}
            offset={-350} // Extend spy region up 350px for mobile view
            duration={500}
            className="flex items-center text-lg py-2 pr-1 hover:text-darkblue uppercase cursor-pointer"
            activeClass="text-darkblue"
            onClick={() => setNavbarOpen(false)} // Close the menu when a link is clicked
          >
            {link.title}
          </ScrollLink>
          {/* Dropdown Icon */}
          {link.dropdown && (
            <button
              onClick={() => toggleDropdown(index)}
              className="flex items-center"
              aria-label={`${dropdownOpen === index ? "Close" : "Open"} dropdown menu`}
            >
              {dropdownOpen === index ? (
                <ChevronUpIcon className="h-5 w-5 text-darkblue" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 hover:text-darkblue" />
              )}
            </button>
          )}
          {/* Dropdown Menu */}
          {dropdownOpen === index && link.dropdown && (
            <ul className="absolute top-full bg-lightblue shadow-md mt-2 p-2 z-40">
              {link.dropdown.map((dropdownLink, index) => (
                <li key={index}>
                  <ScrollLink
                    to={dropdownLink.path}
                    spy={true}
                    smooth={true}
                    offset={-350} // Extend spy region up 350px for mobile view
                    duration={500}
                    className="block px-5 py-2 text-md text-gray-700 hover:bg-lightblue hover:text-darkblue cursor-pointer uppercase whitespace-nowrap"
                    onClick={() => setNavbarOpen(false)} // Close the menu when a dropdown link is clicked
                  >
                    {dropdownLink.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          )}
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
