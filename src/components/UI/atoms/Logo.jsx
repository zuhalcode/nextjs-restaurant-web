/* eslint-disable @next/next/no-img-element */
const Logo = ({ className = "", color = "bg-none" }) => {
  return (
    <div
      className={`flex w-fit items-center justify-center gap-2 rounded-sm ${color} p-3 text-center ${className}`}
    >
      <img src="/img/ruesto-logo.png" className="h-14 w-12" alt="" />
      <p className="mt-2 font-berkshire text-3xl font-bold uppercase tracking-wider text-accent">
        Ruesto
      </p>
    </div>
  );
};

export default Logo;
