import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Filter from "../components/pages/collection/Filter";
import SortBox from "../components/pages/collection/SortBox";
import Title from "../components/ui/Title";
import ProductCard from "../components/ui/ProductCard";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const handelApplyFilter = () => {
    let productCopy = products.slice();

    if (showSearch && search) {
      productCopy = productCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    setFilterProducts(productCopy);
  };

  const handleSortedProducts = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        handelApplyFilter();
    }
  };

  useEffect(() => {
    handelApplyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    handleSortedProducts();
  }, [sortType]);

  return (
    <main className="flex flex-col sm:flex-row gap-8 pt-10 border-t border-gray-300">
      {/* Filter Options */}
      <div className="min-w-60 lg:sticky top-10 lg:h-80">
        <Filter
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          toggleCategory={toggleCategory}
          toggleSubCategory={toggleSubCategory}
        />
      </div>

      {/* Right Side */}
      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title normal_txt="ALL" bold_txt="COLLECTIONS" />

          {/* price sorting */}
          <SortBox setSortType={setSortType} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-5">
          {filterProducts?.map((item) => {
            return <ProductCard key={item._id} item={item} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Collection;
