import DashboardLayout from "@components/dashboard/templates/DashboardLayout";
import Badge from "@components/UI/atoms/Badge";
import DropdownBadge from "@components/UI/atoms/DropdownBadge";
import Loading from "@components/UI/atoms/Loading";
import axiosClient from "@lib/axios";
import { useEffect, useState } from "react";

export default function Customers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const { data } = await axiosClient.get("/api/users");
        setUsers(data.data || []);

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <DashboardLayout head="Customers">
      <div className="relative flex max-h-[520px] min-w-full flex-col overflow-y-auto border-b border-d-accent align-middle shadow sm:rounded-sm">
        <table className="min-w-full divide-y divide-d-accent">
          <thead className="bg-d-accent">
            <tr className="text-center text-xs font-medium uppercase tracking-wider text-white">
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white text-center">
            {!loading ? (
              users?.map((user) => (
                <tr key={user._id}>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">{user._id}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">{user.name}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">{user.email}</div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="whitespace-nowrap px-6 py-4">
                  <Loading />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
