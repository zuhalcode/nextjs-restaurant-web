import Swal from "sweetalert2";

const ValidationModal = ({ title, text, confirmButtonText, onConfirm }) => {
  const handleConfirm = async () => {
    const result = await Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText,
    });

    if (result.isConfirmed) {
      onConfirm();
    }
  };

  return null;
};

export default ValidationModal;
