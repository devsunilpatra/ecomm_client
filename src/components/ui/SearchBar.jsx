import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setShowSearch } from "../../features/products/productSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { search, showSearch } = useSelector((state) => state.products.filters);
  const [localSearch, setLocalSearch] = useState(search);

  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearch(localSearch));
    }, 500);

    return ()=>clearTimeout(timer);
  }, [dispatch, localSearch]);

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  if (!showSearch || !visible) return null;

  return showSearch && visible ? (
    <div className="flex justify-center items-center border-t border-b  bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
        <input
          type="text"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          placeholder="Search..."
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img src={assets?.search_icon} alt="search icon" className="w-4" />
      </div>
      <img
        onClick={() => dispatch(setShowSearch(false))}
        src={assets?.cross_icon}
        alt="cross icon"
        className="w-inline cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
