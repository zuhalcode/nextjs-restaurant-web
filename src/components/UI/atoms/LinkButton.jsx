import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LinkButton = ({ children, link = "/" }) => {
  const router = useRouter();
  return (
    <Link
      href={link}
      className={`navlink  ${
        router.asPath === link || router.asPath.startsWith("auth")
          ? " text-secondary after:scale-x-100"
          : "text-accent"
      }`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
