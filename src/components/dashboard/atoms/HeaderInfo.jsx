/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiBell } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function HeaderInfo() {
  return (
    <div className="mx-5 flex space-x-5">
      <ul className="flex items-center gap-3">
        <li className="text-xl text-slate-500">
          <FiSettings />
        </li>
        <li className="text-xl text-slate-500">
          <BiBell />
        </li>
      </ul>
      <div className="border-r-2 border-slate-400" />
      <div className="flex items-center justify-center gap-2">
        <img
          src="/img/profile.jpg"
          alt=""
          className="w-10 rounded-full text-slate-500"
        />
        <MdOutlineKeyboardArrowDown className="text-xl text-slate-500" />
      </div>
    </div>
  );
}
