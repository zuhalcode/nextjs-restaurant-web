import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillDashboard } from "react-icons/ai";
import { FiBox, FiLogOut, FiUsers } from "react-icons/fi";

export default function SidebarLink({ children, menu }) {
  const pathname = usePathname();

  return (
    <li
      className={`flex w-full justify-center border-l-[3px] ${
        menu.name === "dashboard" && pathname === menu.url
          ? "border-l-blue-500"
          : menu.name !== "dashboard" &&
            pathname &&
            pathname.startsWith(menu.url)
          ? "border-l-blue-500"
          : ""
      }`}
    >
      <Link
        href={menu.url}
        className={`flex w-[80%] items-center space-x-5 rounded-md ${
          menu.name === "dashboard" && pathname === menu.url
            ? "bg-blue-500 px-5 text-white"
            : menu.name !== "dashboard" &&
              pathname &&
              pathname.startsWith(menu.url)
            ? "bg-blue-500 px-5 text-white"
            : ""
        }  py-3 `}
      >
        {menu.name === "dashboard" ? (
          <AiFillDashboard />
        ) : menu.name === "products" ? (
          <FiBox />
        ) : menu.name === "customers" ? (
          <FiUsers />
        ) : (
          <FiLogOut />
        )}

        <p className="text-sm ">{children}</p>
      </Link>
    </li>
  );
}
