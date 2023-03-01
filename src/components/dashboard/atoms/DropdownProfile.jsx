/* eslint-disable @next/next/no-img-element */
import { capitalizeFirstLetter } from "@lib/textFunction";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropdownProfile = () => {
  const { data: { user } = {} } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        id="options-menu"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded="true"
      >
        <img
          src="/img/profile.jpg"
          alt=""
          className="w-10 rounded-full text-slate-500"
        />
        <MdOutlineKeyboardArrowDown className="ml-2 mt-[1px] text-xl text-slate-500" />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="mt-2 flex items-center justify-center gap-2">
            <img
              src="/img/profile.jpg"
              alt=""
              className="w-20 rounded-full text-slate-500"
            />
            <div className="">
              <p className="text-lg font-bold text-black">
                {capitalizeFirstLetter(user.name)}
              </p>
              <p className="">{user.email}</p>
            </div>
          </div>
          <hr className="border-b-slate-500" />
          <div
            className="pb-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              My Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownProfile;
