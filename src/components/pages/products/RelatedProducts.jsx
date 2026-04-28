import { ShopContext } from "../../../context/ShopContext";
import Title from "../../ui/Title";
import ProductCard from "../../ui/ProductCard";
import { useSelector } from "react-redux";

const RelatedProducts = () => {
  const { products } = useSelector((s) => s.products);

  return (
    <section>
      <div className="text-center text-2xl mb-4">
        <Title normal_txt="RELATED" bold_txt="PRODUCTS" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products?.slice(0, 5)?.map((item) => {
          return <ProductCard key={item?._id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;
