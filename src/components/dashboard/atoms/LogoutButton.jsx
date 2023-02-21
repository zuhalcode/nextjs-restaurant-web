import { logout } from "@store/slices/authSlice";
import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth/login");
  };
  return (
    <li className="flex w-full justify-center">
      <button className="flex w-[80%] items-center space-x-5 rounded-md py-3 pl-1">
        <FiLogOut />
        <p className="text-sm uppercase" onClick={handleLogout}>
          Logout
        </p>
      </button>
    </li>
  );
}
