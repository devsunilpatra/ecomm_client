import { NavLink } from "react-router-dom";
import { NAV_ITEMS as navItems } from "../../../constants/navItems";

const NavItems = () => {
  return (
    <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
      {navItems.map((item) => (
        <li key={item.path}>
          <NavLink to={item.path}>
            {({ isActive }) => (
              <div className="flex flex-col items-center gap-1">
                <p>{item.name}</p>
                <hr
                  className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                    isActive ? "visible" : "invisible"
                  }`}
                />
              </div>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
