import React from "react";
import LinkButton from "../atoms/LinkButton";
import Logo from "../atoms/Logo";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-20 flex w-full justify-between bg-neutral bg-opacity-95 px-10 shadow-sm">
        <Logo />
        <ul className="flex w-[60%] items-center justify-around px-2">
          <li className="">Home</li>
          <li className="">Products</li>
          <li className="">About</li>
          <li className="">Messages</li>
          <li className="">Contact</li>
          <li className="">Cart</li>
          <LinkButton link="">Sign Up</LinkButton>
        </ul>
      </div>
      <hr className="border-slate-500" />
    </>
  );
};

export default Navbar;
