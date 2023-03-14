import DashboardLayout from "@components/dashboard/templates/DashboardLayout";
import Badge from "@components/UI/atoms/Badge";
import Loading from "@components/UI/atoms/Loading";
import axiosClient from "@lib/axios";
import { formatDate } from "@lib/dateFunction";
import { toRupiah } from "@lib/textFunction";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data } = useSession();

  useEffect(() => {
    const userId = data?.user._id;
    const fetchOrder = async () => {
      try {
        setLoading(true);
        if (userId) {
          const res = await axiosClient.post("/api/order", {
            userId,
          });
          setOrders(res.data.data || []);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrder();
  }, [data]);

  return (
    <DashboardLayout>
      <div className="flex max-h-[450px] min-w-full flex-col overflow-y-auto border-b border-d-accent align-middle shadow sm:rounded-sm">
        <table className="min-w-full divide-y divide-d-accent">
          <thead className="bg-d-accent">
            <tr className="text-center text-xs font-medium uppercase tracking-wider text-white">
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Order Date
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white text-center">
            {orders && orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id}>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">{order._id}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {formatDate(order.createdAt)}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {toRupiah(order.total)}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 capitalize">
                    <Badge status="success">{order.status}</Badge>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Badge status="primary" button>
                      Details
                    </Badge>
                  </td>
                </tr>
              ))
            ) : !loading && orders === 0 ? (
              <tr>
                <td colSpan="5" className="whitespace-nowrap px-6 py-4">
                  <div className="text-center  text-lg font-semibold text-accent">
                    Orders empty
                  </div>
                </td>
              </tr>
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
};

export default Orders;
