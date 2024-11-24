"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import MenuOverlay from "./MenuOverlay";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { PERSONAL, NAV_LINKS } from "../utils/constants";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  useEffect(() => {
    setActiveLink("home");
  }, []);

  const handleMouseEnter = (index) => {
    setTimeout(() => setHoveredDropdown(index), 300); // Delay before showing drop
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null); // Hide dropdown when mouse leaves
  };

  return (
    <nav className="navbar bg-lightblue sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between">
        <Link
          href={"#"}
          onClick={() => {
            scroll.scrollToTop();
            setActiveLink("home");
          }}
        >
          <h1 className="title text-2xl pl-5 py-2">{PERSONAL.name}</h1>
          <h3 className="text-sm font-light pl-5 uppercase pb-2">
            {PERSONAL.role}
          </h3>
        </Link>
        {/* Mobile Menu */}
        <div className="block navbar-md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2"
              aria-label="Open mobile menu"
            >
              <Bars3Icon strokeWidth={2} className="h-8 w-8" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2"
              aria-label="Close mobile menu"
            >
              <XMarkIcon strokeWidth={2} className="h-8 w-8" />
            </button>
          )}
        </div>
        {/* Standard Menu */}
        <div className="hidden navbar-md:block" id="navbar">
          <ul className="flex p-4 gap-6">
            {NAV_LINKS.map((link, index) => (
              <li
                key={index}
                data-testid={`navlink-${index}`}
                className="relative flex items-center"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Main Link */}
                <ScrollLink
                  to={link.path}
                  spy="true"
                  smooth="true"
                  offset={link.path === "home" ? -150 : -100}
                  duration={500}
                  className={`flex items-center text-lg py-2 pr-1 hover:text-darkblue uppercase cursor-pointer ${
                    activeLink === link.path ? "text-darkblue" : ""
                  }`}
                  activeClass="text-darkblue"
                  onSetActive={() => {
                    setActiveLink(link.path);
                    setHoveredDropdown(null);
                  }}
                >
                  {link.title}
                </ScrollLink>
                {/* Dropdown Icons */}
                {link.dropdown && (
                  <motion.div
                    className="flex items-center"
                    animate={{ rotate: hoveredDropdown === index ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`h-5 w-5 hover:text-darkblue cursor-pointer ${
                        hoveredDropdown === index ? "text-darkblue" : ""
                      }`}
                    />
                  </motion.div>
                )}
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {hoveredDropdown === index && link.dropdown && (
                    <motion.ul
                      data-testid={`dropdown-menu-${index}`}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      exit={{ scaleY: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute left-0 top-full bg-lightblue shadow-md p-1 z-40 origin-top"
                    >
                      {link.dropdown.map((dropdownLink, index) => (
                        <li data-testid={`dropdown-link-${index}`} key={index}>
                          <ScrollLink
                            to={dropdownLink.path}
                            spy="true"
                            smooth="true"
                            offset={-100}
                            duration={500}
                            className="block px-5 py-2 text-md text-gray-700 hover:bg-lightblue hover:text-darkblue cursor-pointer uppercase whitespace-nowrap"
                            onSetActive={() => {
                              setActiveLink(dropdownLink.path);
                              setHoveredDropdown(null);
                            }}
                          >
                            {dropdownLink.title}
                          </ScrollLink>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={NAV_LINKS} setNavbarOpen={setNavbarOpen} />
      ) : null}
    </nav>
  );
};

export default Navbar;
