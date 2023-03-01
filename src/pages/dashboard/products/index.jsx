/* eslint-disable @next/next/no-img-element */
import Button from "@components/UI/atoms/Button";
import { useRouter } from "next/navigation";
import React from "react";
import DashboardLayout from "@components/dashboard/templates/DashboardLayout";

export default function Products() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const router = useRouter();
  return (
    <DashboardLayout head="Products">
      <Button
        size="sm"
        className="mb-2"
        handleOnClick={() => router.push("/dashboard/products/addproduct")}
      >
        Add Product
      </Button>
      <div className="grid grid-cols-4 gap-3">
        {products.map((id) => (
          <div key={id} className="rounded-b-sm bg-white pb-3">
            <img src="/img/burger/burger.jpg" alt="" />
            <p className="my-2 text-center text-xl font-bold uppercase">
              Beef Cheese Burger
            </p>
            <p className="mx-auto w-[95%] text-center text-sm font-semibold text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, earum?
            </p>
            <p className="my-2 px-2 text-center text-xl font-semibold">
              $99.18
            </p>

            <Button
              className="mx-auto flex w-[92%] items-center justify-center"
              handleOnClick={() => router.push(`/dashboard/products/${id}`)}
            >
              <p className="text-sm">Product Details</p>
            </Button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
