import AddToCartBtn from "@components/UI/atoms/AddToCartBtn";
import ProductImage from "@components/UI/atoms/ProductImage";
import ProductSkeleton from "@components/UI/atoms/Skeleton/ProductSkeleton";
import RootLayout from "@components/UI/templates/RootLayout";
import SideCart from "@components/products/organism/SideCart";
import Link from "next/link";

import { useEffect } from "react";
import { toRupiah, toTitleCase } from "@lib/textFunction";
import { getAllProducts } from "@store/actions/productAction";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <RootLayout title="Products">
      <div className="relative min-h-screen px-10 pt-24">
        <div className="flex items-center justify-between font-semibold">
          <p className="text-lg">Showing all results</p>
          <div className="flex items-center justify-center gap-10 border-b-2 border-accent  px-3 pb-2 font-semibold">
            Default sorting <BsChevronDown className="mt-1" />
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 justify-items-center pt-16 pb-10 sm:grid-cols-3">
          {loading ? (
            <ProductSkeleton counts={3} />
          ) : (
            products.data?.map((product) => (
              <div
                key={product._id}
                className="sm:group cursor-pointer duration-300 sm:space-y-2 sm:hover:-translate-y-4"
              >
                <div className="sm:group relative h-[100px] w-full overflow-hidden rounded-md sm:h-[350px] sm:w-[350px]">
                  <ProductImage src={product.image} width={350} isSmScreen />
                  <AddToCartBtn btnDefault={false} id={product._id} />
                </div>

                <div>
                  <p className="text-base font-bold sm:text-2xl">
                    {toTitleCase(product.name)}
                  </p>
                  <p className="pb-3 text-lg text-accent">
                    {toRupiah(product.price)}
                  </p>
                  <Link href={`/products/${product._id}`}>
                    <button className="w-[80%] rounded-sm border bg-secondary text-sm font-bold text-neutral opacity-100 duration-300 hover:border-secondary hover:bg-white hover:text-secondary group-hover:translate-y-0 group-hover:opacity-100 sm:w-full sm:-translate-y-5 sm:py-3 sm:text-base sm:opacity-0">
                      Show Detail
                    </button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
        {/* End Products */}

        {/* Cart Side */}
        <SideCart />
        {/* End Cart Side */}
      </div>
    </RootLayout>
  );
};

export default Products;
