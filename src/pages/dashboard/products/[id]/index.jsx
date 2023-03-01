/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import Button from "@components/UI/atoms/Button";
import DashboardLayout from "@components/dashboard/templates/DashboardLayout";

export default function Page({ params }) {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <img src="/img/burger/burger.jpg" alt="" />
          <div className="flex w-full items-center justify-center gap-1 bg-white p-1">
            <img src="/img/burger/burger.jpg" alt="" className="w-20" />
            <img src="/img/burger/burger.jpg" alt="" className="w-20" />
          </div>
        </div>
        <div className="h-fit space-y-4 bg-white p-2">
          <div>
            <p className="flex flex-col text-2xl font-bold ">
              {"Mexican Cheesy Double Beef Burger"
                .toLowerCase()
                .replace(/\b\w/g, (letter) => letter.toUpperCase())}
            </p>
            <p className="text-sm font-medium text-slate-400">
              with Garlic Onion
            </p>
          </div>
          <div className="m-2 flex items-center">
            <BsFillStarFill className="text-yellow-500" />
            <BsFillStarFill className="text-yellow-500" />
            <BsFillStarFill className="text-yellow-500" />
            <BsFillStarFill className="text-yellow-500" />
            <AiOutlineStar className="text-[18px] text-slate-400" />
            <p className="mx-3">(45)</p>
          </div>
          <p className="m-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            repellat voluptates iste nostrum molestiae sunt voluptatum non?
            Dolorum tempore corporis sed quia. Facilis est nostrum reiciendis
            possimus officiis obcaecati, quam pariatur, optio qui, saepe tempore
            cumque a quas rem. Est ipsam, error ipsum rem fuga quae magnam
            necessitatibus beatae quis.
          </p>
          <div className="m-2 flex space-x-10">
            <p className="text-xl font-semibold text-slate-500">Price</p>
            <p className="text-xl font-bold">Rp. 25.000</p>
          </div>
          <Button className="w-full">Edit Product</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
