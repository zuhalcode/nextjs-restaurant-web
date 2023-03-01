import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

export default function LogoutButton() {
  const handleLogout = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <li className="flex w-full justify-center" onClick={handleLogout}>
      <button className="flex w-[80%] items-center space-x-5 rounded-md py-3 pl-1">
        <FiLogOut />
        <p className="text-sm uppercase">Logout</p>
      </button>
    </li>
  );
}
