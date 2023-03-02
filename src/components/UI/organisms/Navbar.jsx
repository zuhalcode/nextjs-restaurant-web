import React from "react";
import LinkButton from "../atoms/LinkButton";
import Logo from "../atoms/Logo";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-20 flex w-full justify-between bg-white bg-opacity-95 px-10 shadow-sm">
        <Logo />
        <ul className="flex w-[60%] items-center justify-around px-2">
          <LinkButton>Home</LinkButton>
          <LinkButton link="/products">Products</LinkButton>
          <li className="navlink">About</li>
          <li className="navlink">Contact</li>
          <li className="navlink">Cart</li>
          <LinkButton link="/auth/register">Sign Up</LinkButton>
          <LinkButton link="/auth/login">Sign In</LinkButton>
        </ul>
      </div>
      <hr className="border-slate-500" />
    </>
  );
};

export default Navbar;
