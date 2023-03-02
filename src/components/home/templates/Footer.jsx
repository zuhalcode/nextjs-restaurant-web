import Logo from "@components/UI/atoms/Logo";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="section-contact-us relative flex flex-col items-center justify-center bg-[url('/img/bg-food-2.jpg')] bg-cover bg-center">
      <div className="relative z-10 mx-auto grid w-[80%] grid-cols-4 items-center justify-center gap-5 p-10 ">
        <div className="">
          <Logo mode="white" className="-ml-3" size="md" />
          <p className="text-sm text-neutral">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laudantium, delectus porro! Totam dolores aut voluptatem fugiat
            consectetur. Quia, rem natus.
          </p>
        </div>
        <div className="mx-auto space-y-2 pt-4 text-neutral">
          <h4 className="text-2xl font-bold">Company</h4>
          <ul className="">
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Products</li>
            <li className="">Services</li>
            <li className="">Contact</li>
          </ul>
        </div>
        <div className=" mx-auto space-y-2 pt-4 capitalize text-neutral">
          <h4 className="text-2xl font-bold">Services</h4>
          <ul>
            <li className="">healthy food</li>
            <li className="">online order</li>
            <li className="">home delivery</li>
          </ul>
        </div>
        <div className="mx-auto space-y-2">
          <h4 className="text-lg font-bold capitalize text-neutral">
            if you get more updates
          </h4>
          <input type="text" className="px-2 py-1 outline-none" />
          <ul className="mt-1 flex gap-2">
            <li className="rounded-sm bg-slate-500 p-2">
              <GrFacebookOption className="text-neutral" />
            </li>
            <li className="rounded-sm bg-slate-500 p-2">
              <GrLinkedinOption className="text-neutral" />
            </li>
            <li className="rounded-sm bg-slate-500 p-2">
              <BsInstagram className="text-neutral" />
            </li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 w-full bg-black bg-opacity-80">
        <p className="py-3 text-center text-white">
          2023 &copy; Ruesto | All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
