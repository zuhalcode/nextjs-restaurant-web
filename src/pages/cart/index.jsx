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
  // const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/");
    const userId = data?.user._id;
    dispatch(fetchCartItems(userId));
  }, [data, dispatch, router, status]);
  console.log(loading);

  return (
    <RootLayout title="Cart">
      <div className="grid min-h-screen grid-cols-12 px-16 pt-24">
        <div className="col-span-12 px-3">
          <h1 className="">cart</h1>
          {!loading ? (
            cartItems?.map((item) => (
              <div
                key={item._id}
                className="flex w-full items-center justify-between border-b border-accent py-5"
              >
                <div className="flex items-center justify-center gap-5 font-semibold capitalize">
                  <div
                    className={`relative h-[80px] w-[80px] overflow-hidden rounded-full`}
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
                  <h2 className="text-accent">{item.name}</h2>
                </div>
                <div className="">{item.quantity}</div>
                <div className="">{toRupiah(item.price)}</div>
                <div className="">X</div>
              </div>
            ))
          ) : (
            <Loading />
          )}

          <p className="px-5 py-3 text-right text-4xl font-bold">
            {toRupiah(totalPrice || 0)}
          </p>
        </div>
        <div className="grid-cols-3"></div>
      </div>
    </RootLayout>
  );
};

export default Cart;
