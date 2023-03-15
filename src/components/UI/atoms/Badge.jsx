import axiosClient from "@lib/axios";
import { toTitleCase } from "@lib/textFunction";
import { useSession } from "next-auth/react";

const Badge = ({
  children,
  status = "warning",
  button = false,
  payment = false,
  order = {},
}) => {
  let bgColorClass;
  let bgColorClassOnHover;
  let textColorClass;

  const { data } = useSession();

  const handleOnclick = () => {
    console.log("iki Biasa");
  };

  const handleOnPay = async () => {
    try {
      const userId = data?.user._id;

      const res = await axiosClient.post(`/api/users/${userId}/cart/checkout`, {
        orderId: order._id, // Use the order ID from MongoDB
        firstName: toTitleCase(data?.user.name),
        lastName: "",
        amount: order.total,
        email: data?.user.email,
        phone: "085222333444",
      });

      const transactionToken = res.data.transactionToken;

      window.snap.pay(transactionToken, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          alert("payment success!");
          console.log(result);
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          alert("waiting for payment!");
          console.log(result);
        },
        onError: function (result) {
          /* You may add your own implementation here */
          alert("payment failed!");
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  switch (status) {
    case "success":
      bgColorClass = "bg-green-100";
      bgColorClassOnHover = "bg-green-100 hover:bg-green-700";
      textColorClass = "text-green-800";
      break;
    case "error":
      bgColorClass = "bg-red-100";
      bgColorClassOnHover = "bg-red-100 hover:bg-red-700";
      textColorClass = "text-red-800";
      break;
    case "primary":
      bgColorClass = "bg-blue-100";
      bgColorClassOnHover = "bg-blue-100 hover:bg-blue-700";
      textColorClass = "text-blue-800";
      break;
    default:
      bgColorClass = "bg-yellow-100";
      bgColorClassOnHover = "bg-yellow-100 hover:bg-yellow-700";
      textColorClass = "text-yellow-800";
      break;
  }

  return (
    <>
      {button ? (
        <span
          className={`inline-flex cursor-pointer items-center rounded-full px-2.5 py-0.5 text-xs font-medium hover:text-white ${bgColorClassOnHover} ${textColorClass}`}
          onClick={payment ? handleOnPay : handleOnclick}
        >
          {children}
        </span>
      ) : (
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${bgColorClass} ${textColorClass}`}
        >
          {children}
        </span>
      )}
    </>
  );
};

export default Badge;
