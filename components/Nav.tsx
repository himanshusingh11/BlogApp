import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Nav() {
  return (
    <div className="container mx-auto my-4 flex  flex-col items-center  justify-center  px-0  py-3 sm:flex-col sm:justify-center sm:px-0 md:flex-row md:justify-between md:px-3 lg:flex-row lg:justify-between lg:px-3 xl:flex-row xl:justify-between xl:px-3 2xl:flex-row 2xl:justify-between 2xl:px-3">
      <a href="/" className="pb-6 text-3xl font-bold text-white">
        Blog<span className="text-blue-600">App</span>
      </a>

      <nav className="md:justify-right mt-5 inline-flex items-start justify-center gap-3 text-left font-medium text-white sm:mt-5 sm:justify-center sm:gap-5 md:mt-0 md:gap-10 lg:mt-0 lg:gap-10  xl:mt-0 xl:gap-10 2xl:mt-0 2xl:gap-10">
        <Link
          href={"/"}
          className="m-0 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg"
        >
          Home
        </Link>
        <Link
          href={"/page/about"}
          className="m-0 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg"
        >
          About
        </Link>
      </nav>
      <div className="hidden flex-row items-center justify-between sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
        <Link href="#" target="_blank">
          {" "}
          <FaFacebookF className="mx-3 text-white" />{" "}
        </Link>
        <Link href="#" target="_blank">
          {" "}
          <FaTwitter className="mx-3 text-white" />{" "}
        </Link>
        <Link href="#" target="_blank">
          {" "}
          <FaInstagram className="mx-3 text-white" />{" "}
        </Link>
        <Link href="#" target="_blank">
          {" "}
          <FaLinkedinIn className="mx-3 text-white" />{" "}
        </Link>
      </div>
    </div>
  );
}

export default Nav;
