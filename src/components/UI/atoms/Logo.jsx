/* eslint-disable @next/next/no-img-element */
const Logo = ({ className = "", mode = "dark", size = "xl" }) => {
  return (
    <div
      className={`flex w-fit items-center justify-center rounded-sm p-3 text-center ${className}`}
    >
      <img
        src="/img/ruesto-logo.png"
        className={`${size === "xl" ? "h-14 w-12" : "h-10 w-8"}`}
        alt=""
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
  );
};

export default Logo;
