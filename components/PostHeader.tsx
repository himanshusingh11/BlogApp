import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
function Header(props: PostHeaderComponent) {
  return (
    <header className="flex w-full flex-col bg-[#000000] py-5">
      <Nav />

      <div className="container mx-auto my-32  flex flex-col p-10">
        <div className="flex items-center text-center">
          <Link
            href="/"
            type="button"
            className=" mr-2 inline-flex items-center rounded-full bg-gray-300 p-2.5 text-center text-sm font-medium text-black hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaAngleLeft />
          </Link>

          <span className="mx-2 inline text-left text-[10px] font-bold text-white sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]">
            {props.tag}
          </span>

          <time className="inline text-left text-[10px] font-bold text-white sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]">
            {props.date}
          </time>
        </div>

        <h1 className="mt-4 inline text-left text-[32px] font-bold text-white sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[52px] 2xl:text-[52px]">
          {props.title}
        </h1>

        <div className="mb-2 flex w-full gap-x-5 sm:items-center sm:gap-x-3">
          <div className="flex flex-shrink-0 items-center">
            <p className="inline text-left text-[10px] font-bold text-white sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]">
              Publish By{" "}
            </p>
            <Image
              width={32}
              height={32}
              className="mx-2 h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Image Description"
            />
            <p className="inline text-left text-[10px] font-bold text-white sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]">
              {props.authorName}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

interface PostHeaderComponent {
  title?: string;
  description?: string;
  date?: string;
  tag?: string;
  authorName?: string;
}

export default Header;
