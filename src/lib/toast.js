import Swal from "sweetalert2";
import PropTypes from "prop-types";

const Toast = ({ type, message }) => {
  const toastType = type === "error" ? "error" : "success";

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: toastType,
    title: message,
  });

  return null;
};

Toast.propTypes = {
  type: PropTypes.oneOf(["error", "success"]).isRequired,
  message: PropTypes.string.isRequired,
};

export default Toast;
