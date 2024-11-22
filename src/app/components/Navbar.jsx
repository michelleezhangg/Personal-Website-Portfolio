"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import MenuOverlay from "./MenuOverlay";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { PERSONAL, NAV_LINKS } from "../utils/constants";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    setActiveLink("home");
  }, []);

  const toggleDropdown = (index) => {
    setDropdownOpen((prev) => (prev === index ? null : index));
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
              <Bars3Icon className="h-8 w-8" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2"
              aria-label="Close mobile menu"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          )}
        </div>
        {/* Standard Menu */}
        <div className="hidden navbar-md:block" id="navbar">
          <ul className="flex p-4 gap-6">
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`text-lg block py-2 pr-4 hover:text-darkblue uppercase cursor-pointer ${
                        activeLink === link.path ? "text-darkblue" : ""
                      }`}
                    >
                      {link.title}
                      {dropdownOpen === index ? (
                        <ChevronUpIcon className="h-4 w-4 inline ml-2" />
                      ) : (
                        <ChevronDownIcon className="h-4 w-4 inline ml-2" />
                      )}
                    </button>
                    {dropdownOpen === index && (
                      <ul className="absolute bg-white shadow-md rounded-md mt-2 p-2 z-40">
                        {link.dropdown.map((dropdownLink, index) => (
                          <li key={index}>
                            <ScrollLink
                              to={dropdownLink.path}
                              spy={true}
                              smooth={true}
                              offset={-100}
                              duration={500}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-lightblue hover:text-darkblue cursor-pointer uppercase"
                              onClick={() => {
                                setActiveLink(dropdownLink.path);
                                setDropdownOpen(null);
                              }}
                            >
                              {dropdownLink.title}
                            </ScrollLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <ScrollLink
                    to={link.path}
                    spy={true}
                    smooth={true}
                    offset={link.path === "home" ? -150 : -100}
                    duration={500}
                    className={`text-lg block py-2 pr-4 hover:text-darkblue uppercase cursor-pointer ${
                      activeLink === link.path ? "text-darkblue" : ""
                    }`}
                    activeClass="text-darkblue"
                    onSetActive={(to) => {
                      setActiveLink(to);
                    }}
                  >
                    {link.title}
                  </ScrollLink>
                )}
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
