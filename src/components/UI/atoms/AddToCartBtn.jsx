// import axiosClient from "@lib/axios";
import { addToCart } from "@store/actions/cartAction";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const AddToCartBtn = ({ children, btnDefault = true, id }) => {
  const router = useRouter();
  const productId = router.query.id || id;

  const dispatch = useDispatch();
  const { data } = useSession();

  const handleOnClick = async () => {
    const userId = data?.user._id;
    if (userId) dispatch(addToCart(userId, productId));
    return null;
  };

  return (
    <>
      {btnDefault ? (
        <button
          className="w-full rounded-sm border bg-secondary py-3 font-semibold uppercase text-neutral duration-300 hover:border-secondary hover:bg-white hover:text-secondary"
          onClick={handleOnClick}
        >
          {children || "Add to cart"}
        </button>
      ) : (
        <div className="absolute top-10 left-10 mx-auto flex h-0 w-[270px] translate-y-0 skew-x-0 items-center justify-center bg-black bg-opacity-80 duration-500 group-hover:h-[270px]">
          <div
            className="add-to-cart-btn relative translate-y-40 overflow-hidden border border-neutral px-4 py-3 uppercase tracking-widest text-neutral opacity-0 duration-300 hover:before:scale-x-100 hover:after:scale-x-100 group-hover:translate-y-0 group-hover:opacity-100 group-hover:duration-500"
            onClick={handleOnClick}
          >
            Add to cart
          </div>
        </div>
      )}
    </>
  );
};

export default AddToCartBtn;
