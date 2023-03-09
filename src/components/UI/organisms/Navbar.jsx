import LogoutButton from "@components/dashboard/atoms/LogoutButton";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import LinkButton from "../atoms/LinkButton";
import Logo from "../atoms/Logo";

const Navbar = () => {
  const { status } = useSession();

  return (
    <>
      <div className="fixed z-20 flex w-full justify-between bg-white bg-opacity-95 px-10 shadow-sm">
        <Logo />
        <ul className="flex w-[60%] items-center justify-around px-2">
          <LinkButton>Home</LinkButton>
          <LinkButton link="/products">Products</LinkButton>
          <LinkButton link="/about">About</LinkButton>
          <li className="navlink">Contact</li>
          {status === "unauthenticated" ? (
            <>
              <LinkButton link="/auth/register">Sign Up</LinkButton>
              <LinkButton link="/auth/login">Sign In</LinkButton>
            </>
          ) : (
            <>
              <LinkButton link="/cart">Cart</LinkButton>
              <button
                className={`navlink text-accent`}
                onClick={() => signOut()}
              >
                Logout
              </button>
            </>
          )}
        </ul>
      </div>
      <hr className="border-slate-500" />
    </>
  );
};

export default Navbar;
