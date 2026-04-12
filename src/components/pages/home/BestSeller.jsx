import { useContext, useMemo } from "react";
import { ShopContext } from "../../../context/ShopContext";
import Title from "../../ui/Title";
import ProductCard from "../../ui/ProductCard";

const BestSeller = () => {
  const { products = [] } = useContext(ShopContext);

  const latestProduct = useMemo(() => {
    return products.slice(0, 5);
  }, [products]);

  console.log(latestProduct);
  if (!latestProduct.length) {
    return (
      <section className="my-10 text-center">
        <p className="text-gray-500">No products available</p>
      </section>
    );
  }

  return (
    <section className="my-10">
      <div className="py-8 text-center text-3xl">
        <Title normal_txt="BEST" bold_txt="SELLER" />
        <p className="w-3/4 m-auto text-gray-700 text-xs sm:text-sm md:text-base">
          Explore our latest collection with modern designs, premium quality,
          and timeless style.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {latestProduct?.map((item) => {
          return <ProductCard key={item?._id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default BestSeller;
