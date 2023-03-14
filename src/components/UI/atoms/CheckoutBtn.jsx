import axiosClient from "@lib/axios";
import { fetchCartItems } from "@store/actions/cartAction";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const CheckoutBtn = ({ cartItems, userId, loading, totalPrice }) => {
  const dispatch = useDispatch();
  const handleOnCheckout = async () => {
    try {
      const res = await axiosClient.post(`/api/order/create`, {
        user: userId,
        items: cartItems,
        total: totalPrice,
      });

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: res.data.message,
      });

      dispatch(fetchCartItems());
    } catch (error) {
      console.error(error); // handle any error here
    }
  };

  return (
    <button
      disabled={loading || cartItems.length === 0}
      className="w-full rounded-sm bg-neutral py-2 font-semibold uppercase text-accent duration-100 hover:border hover:border-neutral hover:bg-accent hover:text-neutral"
      onClick={handleOnCheckout}
    >
      Checkout
    </button>
  );
};

export default CheckoutBtn;
