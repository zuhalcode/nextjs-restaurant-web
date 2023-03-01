/* eslint-disable @next/next/no-img-element */
import { BiBell } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import DropdownProfile from "../atoms/DropdownProfile";

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
      <div className="flex items-center justify-center gap-2 text-slate-500">
        <div className="relative inline-block text-left">
          <DropdownProfile />
        </div>
      </div>
    </div>
  );
}
