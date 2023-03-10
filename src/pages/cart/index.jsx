import AddToCartBtn from "@components/UI/atoms/AddToCartBtn";
import Loading from "@components/UI/atoms/Loading";
import RootLayout from "@components/UI/templates/RootLayout";
import { toRupiah } from "@lib/textFunction";
import { fetchCartItems } from "@store/actions/cartAction";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, loading, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/");
    const userId = data?.user._id;
    dispatch(fetchCartItems(userId));
  }, [data, dispatch, router, status]);

  return (
    <RootLayout title="Cart">
      <h1 className="px-16 pt-20">cart</h1>
      <div className="grid max-h-96 grid-cols-12 gap-10  px-14 py-5">
        <div className="col-span-8 px-3">
          {!loading ? (
            cartItems?.map((item) => (
              <div
                key={item._id}
                className="flex w-full items-center justify-between border-b border-accent py-5"
              >
                <div className="flex items-center justify-center gap-5 font-semibold capitalize">
                  <div
                    className={`relative h-[50px] w-[50px] overflow-hidden rounded-full`}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={item.image}
                        alt=""
                        fill // menempatkan gambar ke dalam kotak
                        style={{ objectFit: "cover" }} // memotong gambar agar pas di dalam kotak
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1024px" // specify available sizes
                        priority={true}
                      />
                    </div>
                  </div>
                  <h2 className=" min-w-[12rem] text-accent">{item.name}</h2>
                </div>
                <div className="min-w-[2rem] text-center">{item.quantity}</div>
                <div className="min-w-[12rem] text-center">
                  {toRupiah(item.price)}
                </div>
                <div className="min-w-[2rem] text-center">X</div>
              </div>
            ))
          ) : (
            <Loading />
          )}

          <p className="px-5 py-3 text-right text-4xl font-bold">
            {toRupiah(totalPrice || 0)}
          </p>
        </div>
        <div className="col-span-4 mt-5 rounded-md text-neutral">
          <div className="w-full rounded-md bg-accent p-5">
            <h2 className="text-lg font-bold capitalize">Payment Detail</h2>
            <hr className="my-3 border-neutral" />
            <span className="mb-3 flex justify-between">
              Total Price : <p>{toRupiah(totalPrice)}</p>
            </span>
            <AddToCartBtn />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Cart;
