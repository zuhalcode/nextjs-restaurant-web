import React from "react";

const Contact = () => {
  return (
    <div className="section-contact-us relative flex items-center justify-center bg-[url('/img/bg-food.jpg')] bg-cover bg-center p-10">
      <div className="relative z-10 mx-auto flex w-[60%] flex-col items-center justify-center gap-5 p-10 text-neutral">
        <h2 className="text-4xl font-bold capitalize">do not miss the test!</h2>
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ex
          odit qui earum ipsam impedit repellat recusandae iusto molestias!
          Accusamus ut maxime modi? Dolorem voluptates necessitatibus excepturi
          id maiores cupiditate.
        </p>
        <div className="flex gap-5">
          <button className="rounded-full border border-neutral bg-transparent px-3 py-2 capitalize text-white">
            Contact with us
          </button>
          <button className="rounded-full bg-secondary px-3 py-2 text-white">
            Learn Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
