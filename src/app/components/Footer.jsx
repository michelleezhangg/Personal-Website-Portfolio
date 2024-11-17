import React from "react";
import Link from "next/link";
import { PERSONAL } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-lightblue py-3">
      <div className="flex flex-wrap justify-between items-center">
        <Link href={"#"}>
          <h1 className="title text-2xl pl-5 pb-2">{PERSONAL.name}</h1>
          <h3 className="text-sm font-light pl-5 uppercase pb-2">
            {PERSONAL.role}
          </h3>
        </Link>
        <p className="w-full text-right ml-auto mt-auto lg:mr-8 mr-4 lg:text-md text-xs sm:w-auto">
          &copy; 2024 Michelle Zhang. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
