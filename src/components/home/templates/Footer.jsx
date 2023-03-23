import Logo from "@components/UI/atoms/Logo";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="section-contact-us relative flex flex-col items-center justify-center bg-[url('/img/bg-food-2.jpg')] bg-cover bg-center">
      <div className="relative z-10 mx-auto flex grid-cols-4 flex-col items-center justify-center gap-5 sm:grid sm:w-[80%] sm:p-10 ">
        <div>
          <Logo mode="light" className="pl-24 sm:-ml-3 sm:pl-0" size="md" />
          <p className="px-3 text-center text-sm text-neutral sm:px-0 sm:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laudantium, delectus porro! Totam dolores aut voluptatem fugiat
            consectetur. Quia, rem natus.
          </p>
        </div>
        <div className="mx-auto space-y-2 pt-4 text-center text-neutral sm:text-left">
          <h4 className="text-2xl font-bold">Company</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=" mx-auto space-y-2 pt-4 text-center capitalize text-neutral sm:text-left">
          <h4 className="text-2xl font-bold">Services</h4>
          <ul>
            <li>healthy food</li>
            <li>online order</li>
            <li>home delivery</li>
          </ul>
        </div>
        <div className="mx-auto space-y-2 pb-3 text-center sm:text-left">
          <h4 className="text-lg font-bold capitalize text-neutral">
            if you get more updates
          </h4>
          <input type="text" className="px-2 py-1 outline-none" />
          <ul className="mt-1 flex justify-center gap-2 sm:justify-start">
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
