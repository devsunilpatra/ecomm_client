import { useDispatch, useSelector } from "react-redux";
import { setSortType } from "../../../features/products/productSlice";

const sortData = [
  { label: "Sort by: Relavant", value: "relevant" },
  { label: "Sort by: Low to High", value: "low-high" },
  { label: "Sort by: High to Low", value: "high-low" },
];

const SortBox = () => {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.products.filters.sortType);

  return (
    <select
      value={sortType}
      onChange={(e) => dispatch(setSortType(e.target.value))}
      className="border border-gray-300 text-sm px-2"
    >
      {sortData?.map((sort) => {
        return (
          <option key={sort?.label} value={sort?.value}>
            {" "}
            {sort?.label}
          </option>
        );
      })}
    </select>
  );
};

export default SortBox;
