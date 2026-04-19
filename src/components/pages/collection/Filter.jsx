import { assets } from "../../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory, toggleSubCategory } from "../../../features/products/productSlice";

const categories = [
  { value: "Men", label: "Men" },
  { value: "Women", label: "Women" },
  { value: "Kids", label: "Kids" },
];
const subCategories = [
  { value: "Topwear", label: "Topwear" },
  { value: "Bottomwear", label: "Bottomwear" },
  { value: "Winterwear", label: "Winterwear" },
];

const Filter = ({
  showFilter,
  setShowFilter
}) => {
  const dispatch = useDispatch();
  const {category, subCategory} = useSelector((state) => state.products.filters);

  
  return (
    <section>
      <p
        onClick={() => setShowFilter((prev) => !prev)}
        className=" md:my-2 text-xl flex items-center cursor-pointer gap-2"
      >
        FILTERS
        <img
          src={assets?.dropdown_icon}
          alt="dropdown icon"
          className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
        />
      </p>

      {/* Category Filter */}
      <div
        className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"}`}
      >
        <p className="mb-3 text-sm font-medium ">CATEGORIES</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          {categories?.map((catg) => {
            return (
              <label className="flex gap-2" key={catg?.label}>
                <input
                  type="checkbox"
                  value={catg?.value}
                  checked={category.includes(catg.value)}
                  onChange={()=>dispatch(toggleCategory(catg.value))}
                  className="w-3"
                />{" "}
                {catg?.label}
              </label>
            );
          })}
        </div>
      </div>

      {/* Subcategory Filter */}
      <div
        className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"}`}
      >
        <p className="mb-3 text-sm font-medium ">TYPE</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          {subCategories?.map((subCatg)=>{
            return  <label className="flex gap-2" key={subCatg?.label}>
            <input
              type="checkbox"
              value={subCatg?.value}
              checked={subCategory.includes(subCatg.value)}
              onChange={()=>dispatch(toggleSubCategory(subCatg.value))}
              className="w-3"
            />{" "}
            {subCatg?.label}
          </label>
          })}
          
        </div>
      </div>
    </section>
  );
};

export default Filter;

