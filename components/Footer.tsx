import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex h-1/2 w-full flex-col items-start justify-around bg-[#010101] p-20 md:flex-row">
        <div className="p-5 ">
          <ul>
            <p className="pb-6 text-3xl font-bold text-white">
              Blog<span className="text-blue-600">App</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="cursor-pointer text-2xl hover:text-yellow-600" />
              <FaTwitter className="cursor-pointer text-2xl hover:text-blue-600" />
              <FaLinkedin className="cursor-pointer text-2xl hover:text-blue-600" />
              <FaYoutube className="cursor-pointer text-2xl hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-2xl font-bold text-gray-800">
              Important Blogs
            </p>
            <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
              Media
            </li>
            <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
              Cricket
            </li>
            <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
              Politics
            </li>
            <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
              India
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="pb-4 text-2xl font-bold text-gray-800">Support</p>
            <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
              Contact Us
            </li>
            <li className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
              Support Portals
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-100  p-5 text-center">
        <h1 className=" font-semibold text-gray-800">
          © 2023-2024 All rights reserved | Build by {" "}
          <span className="cursor-pointer font-semibold hover:text-blue-600">
            Himanshu Singh{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
