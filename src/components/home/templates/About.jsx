import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="relative z-10 flex max-h-fit items-center justify-center bg-neutral pb-10">
      <div className="grid grid-cols-2 gap-10">
        <div className="mt-20 flex items-center justify-center px-5">
          <Image
            src="/img/snack/waffle-bg.png"
            className="h-[400px] w-[400px]"
            alt=""
            width={400}
            height={400}
          />
        </div>
        <div className="mt-24 max-w-sm space-y-5">
          <h3>About Us</h3>
          <h1 className="text-4xl font-bold capitalize text-accent">
            the best enjoyable place around you
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            voluptatibus nihil facilis incidunt accusantium est soluta, velit
            suscipit magni aliquid veritatis fugiat quibusdam praesentium
            consequuntur, similique illum voluptate. Doloribus, dolorem?
          </p>
          <button className="rounded-xl bg-secondary px-3 py-2 text-white">
            Learn Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
