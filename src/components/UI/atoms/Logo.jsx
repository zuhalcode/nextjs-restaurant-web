import Image from "next/image";
import Link from "next/link";

const Logo = ({ className = "", mode = "dark", size = "xl" }) => {
  return (
    <Link href="/">
      <div
        className={`flex w-fit items-center justify-center rounded-sm p-3 text-center ${className}`}
      >
        <Image
          src="/img/ruesto-logo.png"
          // className={`${size === "xl" ? "h-14 w-12" : "h-10 w-8"}`}
          alt=""
          width={size === "xl" ? 48 : 32}
          height={size === "xl" ? 56 : 40}
        />
        <p
          className={`mt-2 font-berkshire ${
            size === "xl" ? "text-3xl" : "text-xl"
          } font-semibold uppercase tracking-wide ${
            mode === "dark" ? "text-accent" : "text-secondaryD"
          }`}
        >
          Ruesto
        </p>
      </div>
    </Link>
  );
};

export default Logo;
