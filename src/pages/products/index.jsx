import RootLayout from "@components/UI/templates/RootLayout";
import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <RootLayout>
      <div className="flex min-h-screen items-center justify-center ">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            width={100}
            height={100}
            alt=""
            src="/img/ruesto-logo.png"
            className=""
          />
          <p className="text-center font-berkshire text-3xl font-bold uppercase">
            Ruesto
          </p>
          <h1 class="animate-opacity-bottom-to-top text-center text-4xl opacity-0 transition-opacity duration-1000">
            Hello, world!
          </h1>
        </div>
      </div>
    </RootLayout>
  );
};

export default Products;
