import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const NotificationModal = ({ type = "success", message = "successfull" }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const iconColor = type === "success" ? "text-green-500" : "text-red-500";
  const Icon = type === "success" ? FaCheckCircle : FaTimesCircle;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative z-10 rounded-md bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <Icon className={`mr-4 h-6 w-6 ${iconColor}`} />
            <span className="text-lg font-semibold">{message}</span>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            onClick={() => {
              setShow(false);
            }}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
