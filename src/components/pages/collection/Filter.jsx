import { assets } from "../../../assets/assets";

const Filter = ({
  showFilter,
  setShowFilter,
  toggleCategory,
  toggleSubCategory,
}) => {
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
          <p className="flex gap-2">
            <input
              type="checkbox"
              value={"Men"}
              onChange={toggleCategory}
              className="w-3"
            />{" "}
            Men
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value={"Women"}
              onChange={toggleCategory}
              className="w-3"
            />
            Women
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value={"Kids"}
              onChange={toggleCategory}
              className="w-3"
            />
            Kids
          </p>
        </div>
      </div>

      {/* Subcategory Filter */}
      <div
        className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"}`}
      >
        <p className="mb-3 text-sm font-medium ">TYPE</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          <p className="flex gap-2">
            <input
              type="checkbox"
              name=""
              value={"Topwear"}
              onChange={toggleSubCategory}
              className="w-3"
            />{" "}
            Topwear
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              name=""
              value={"Bottomwear"}
              onChange={toggleSubCategory}
              className="w-3"
            />
            Bottomwear
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              name=""
              value={"Winterwear"}
              onChange={toggleSubCategory}
              className="w-3"
            />
            Winterwear
          </p>
        </div>
      </div>
    </section>
  );
};

export default Filter;

// import React, { useState } from "react";

// // Config-driven filters
// const FILTER_CONFIG = [
//   {
//     title: "Categories",
//     key: "category",
//     options: ["Men", "Women", "Kids"],
//   },
//   {
//     title: "Type",
//     key: "type",
//     options: ["Topwear", "Bottomwear", "Winterwear"],
//   },
// ];

// const Filter = ({ showFilter }) => {
//   const [selectedFilters, setSelectedFilters] = useState({});

//   const handleChange = (key, value) => {
//     setSelectedFilters((prev) => {
//       const prevValues = prev[key] || [];

//       const updatedValues = prevValues.includes(value)
//         ? prevValues.filter((v) => v !== value)
//         : [...prevValues, value];

//       return {
//         ...prev,
//         [key]: updatedValues,
//       };
//     });
//   };

//   return (
//     <section className="w-full">
//       <p className="my-3 text-lg font-semibold flex items-center gap-2 cursor-pointer">
//         FILTERS
//       </p>

//       {FILTER_CONFIG.map((filter) => (
//         <div
//           key={filter.key}
//           className={`border border-gray-200 rounded-lg px-4 py-4 mt-5 shadow-sm transition ${
//             showFilter ? "block" : "hidden"
//           }`}
//         >
//           <p className="mb-3 text-sm font-semibold text-gray-800 uppercase tracking-wide">
//             {filter.title}
//           </p>

//           <div className="flex flex-col gap-2 text-sm text-gray-600">
//             {filter.options.map((option, index) => {
//               const id = `${filter.key}-${index}`;

//               return (
//                 <label
//                   key={option}
//                   htmlFor={id}
//                   className="flex items-center gap-2 cursor-pointer hover:text-black transition"
//                 >
//                   <input
//                     id={id}
//                     type="checkbox"
//                     value={option}
//                     checked={
//                       selectedFilters[filter.key]?.includes(option) || false
//                     }
//                     onChange={() => handleChange(filter.key, option)}
//                     className="accent-black w-4 h-4 cursor-pointer"
//                   />
//                   {option}
//                 </label>
//               );
//             })}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Filter;
