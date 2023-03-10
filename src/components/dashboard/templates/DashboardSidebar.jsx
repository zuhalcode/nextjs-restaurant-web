import Logo from "@components/UI/atoms/Logo";
import LogoutButton from "../atoms/LogoutButton";
import SidebarLink from "../atoms/SidebarLink";

export default function Sidebar() {
  const menu = [
    {
      name: "dashboard",
      url: "/dashboard",
    },
    {
      name: "products",
      url: "/dashboard/products",
    },
    {
      name: "customers",
      url: "/dashboard/customers",
    },
  ];

  return (
    <div className="col-span-2 min-h-screen border-r border-r-slate-200 bg-white">
      <Logo className="mx-auto" />
      <ul className="mt-10 flex flex-col items-center justify-center space-y-2">
        {menu.map((menu, index) => (
          <SidebarLink menu={menu} key={index}>
            {menu.name.toUpperCase()}
          </SidebarLink>
        ))}
        <LogoutButton />
      </ul>
    </div>
  );
}
