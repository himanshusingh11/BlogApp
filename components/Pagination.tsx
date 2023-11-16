import React from "react";
import Link from "next/link";

function Pagination() {
  return (
    <div className="mx-auto flex w-5/6 flex-col items-center justify-evenly sm:w-5/6 sm:flex-col md:w-4/6 md:flex-col lg:w-4/6 lg:flex-row xl:w-4/6 xl:flex-row 2xl:w-3/6 2xl:flex-row">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">1</span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">10</span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">100</span>{" "}
        Entries
      </span>

      <div className="inline-flex w-5/6 justify-evenly sm:w-5/6 md:w-3/6 lg:w-3/6 xl:w-4/6 2xl:w-2/6">
        <Link
          href={"/"}
          className="mx-auto my-14  inline-flex h-10 w-[100px] flex-col items-center justify-center gap-2.5 rounded-lg bg-[rgba(235,242,254,1)] text-center font-medium text-[rgba(35,46,82,1)]"
        >
          Prev
        </Link>

        <Link
          href={"/"}
          className="mx-auto my-14  inline-flex h-10 w-[100px] flex-col items-center justify-center gap-2.5 rounded-lg bg-[rgba(235,242,254,1)] text-center font-medium text-[rgba(35,46,82,1)]"
        >
          Next
        </Link>
      </div>
    </div>
  );
}

export default Pagination;
