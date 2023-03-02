import React from "react";

const Features = () => {
  return (
    <div className="-mt-10 flex min-h-[500px] flex-col items-center justify-center bg-primary">
      <h3>Features</h3>
      <h1 className="mt-3 text-4xl font-bold capitalize text-accent">
        our creative services
      </h1>
      <div className="mt-5 flex gap-5">
        <div className="w-[300px] space-y-1 rounded-md border border-secondary p-3">
          <h2 className="font-bold capitalize text-accent">Healthy food</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius
            debitis odio accusantium iure vel, ipsam optio illum maiores
            excepturi?
          </p>
          <p className="navlink max-w-fit">Read More ...</p>
        </div>
        <div className="w-[300px] space-y-1 rounded-md border border-secondary p-3">
          <h2 className="font-bold capitalize text-accent">Online Order</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius
            debitis odio accusantium iure vel, ipsam optio illum maiores
            excepturi?
          </p>
          <p className="navlink max-w-fit">Read More ...</p>
        </div>
        <div className="w-[300px] space-y-1 rounded-md border border-secondary p-3">
          <h2 className="font-bold capitalize text-accent">Home delivery</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius
            debitis odio accusantium iure vel, ipsam optio illum maiores
            excepturi?
          </p>
          <p className="navlink max-w-fit">Read More ...</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
