/* eslint-disable @next/next/no-img-element */
import Navbar from "@components/UI/organisms/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* Section 1 */}
      <div className="grid min-h-screen grid-cols-12">
        <div className="bg-home-rounded-first-section relative col-span-5 flex items-center justify-end">
          <div className="relative z-10 w-[80%] space-y-8">
            <h1 className="text-5xl font-bold uppercase text-accent">
              our best healthy food
            </h1>
            <div className="space-y-5">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, reprehenderit? Deserunt, debitis laborum rerum odit
                doloribus perspiciatis temporibus beatae, placeat dignissimos
                vitae veritatis magni. Voluptates voluptate quis eius, optio et
                ipsa ducimus facilis a magnam! Tempora ipsa iure, eum quasi quos
                culpa. Quaerat laboriosam minus deserunt. Earum soluta nisi non.
              </p>
              <button className="rounded-xl bg-secondary px-3 py-2 text-white">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-7 bg-secondary">
          <div className="relative right-0 top-16">
            <img
              src="/img/salmon/salmon.png"
              className="h-[500px] w-[1000px]"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* End Section 1 */}

      {/* Section 2 */}
      <div className="relative z-10 flex max-h-fit items-center justify-center bg-[#fbf9f9] pb-10">
        <div className="grid grid-cols-2 gap-10">
          <div className="mt-20 flex items-center justify-center px-5">
            <img
              src="/img/snack/waffle-bg.png"
              className="h-[400px] w-[400px]"
              alt=""
            />
          </div>
          <div className="mt-24 max-w-sm space-y-5">
            <h3 className="text-xl text-secondary">About Us</h3>
            <h1 className="text-4xl font-bold capitalize text-accent">
              the best enjoyable place around you
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae voluptatibus nihil facilis incidunt accusantium est
              soluta, velit suscipit magni aliquid veritatis fugiat quibusdam
              praesentium consequuntur, similique illum voluptate. Doloribus,
              dolorem?
            </p>
            <button className="rounded-xl bg-secondary px-3 py-2 text-white">
              Learn Now
            </button>
          </div>
        </div>
      </div>
      {/* End Section 2 */}

      {/* Section 3 */}
      <div className="flex flex-col items-center justify-center bg-primary p-10">
        <h5 className="text-secondary">Features</h5>
        <h1 className="mt-3 text-4xl font-bold capitalize text-accent">
          our creative services
        </h1>
        <div className="mt-5 flex">
          <div className="w-[300px] space-y-1 rounded-md border border-red-500 p-3">
            <h2 className="font-bold capitalize text-accent">Healthy food</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius
              debitis odio accusantium iure vel, ipsam optio illum maiores
              excepturi?
            </p>
            <p className="underline-red-500 cursor-pointer text-secondary underline-offset-4 hover:underline ">
              Read More ...
            </p>
          </div>
        </div>
      </div>
      {/* End Section 3 */}
    </div>
  );
}
