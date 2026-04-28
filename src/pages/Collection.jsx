import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../features/products/productSlice";
import { selectFilteredProducts } from "../features/products/productSelectors";
import Filter from "../components/pages/collection/Filter";
import SortBox from "../components/pages/collection/SortBox";
import Title from "../components/ui/Title";
import ProductCard from "../components/ui/ProductCard";
// import { products as dummyProducts } from "../assets/assets";
// import { fetchProducts } from "../features/products/productSlice";

const ITEMS_PER_PAGE = 8;

const Collection = () => {
  // const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(true);
  const filteredProducts = useSelector(selectFilteredProducts);

 


  return (
    <main className="flex flex-col sm:flex-row gap-8 pt-10 border-t border-gray-300">
      {/* Filter Options */}
      <div className="min-w-60 lg:sticky top-10 lg:h-80">
        <Filter showFilter={showFilter} setShowFilter={setShowFilter} />
      </div>

      {/* Right Side */}
      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title normal_txt="ALL" bold_txt="COLLECTIONS" />

          {/* price sorting */}
          <SortBox />
        </div>

        {filteredProducts.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-5">
            {filteredProducts?.map((item) => {
              return <ProductCard key={item._id} item={item} />;
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-48 text-2xl">
            No products found
          </div>
        )}
      </div>
    </main>
  );
};

export default Collection;
