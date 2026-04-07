import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../../../assets/assets";
import ProfileDropdown from "./ProfileDropdown";
import NavItems from "./NavItems";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center py-5 font-medium">
        {/* Logo */}
        <Link to="/">
          <img src={assets?.logo} alt="Leecart logo" className="w-36" />
        </Link>

        <NavItems />

        <div className="flex items-center gap-6">
          <img
            src={assets?.search_icon}
            alt="serach icon"
            className="w-5 cursor-pointer"
          />

          <div className="group relative">
            <img
              src={assets?.profile_icon}
              alt="profile icon"
              className="w-5 cursor-pointer"
            />

            <div className="group-hover:block hidden absolute right-0 dropdown-menu pt-4">
              <ProfileDropdown />
            </div>
          </div>

          <Link to="/cart" className="relative">
            <img
              src={assets?.cart_icon}
              alt="cart icon"
              className="w-5 cursor-pointer"
            />
            <p className="absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[9px]">
              10
            </p>
          </Link>

          <img
            src={assets.menu_icon}
            alt="menu icon"
            onClick={() => setToggle((prev) => !prev)}
            className="w-5 sm:hidden"
            aria-label="Toggle menu"
          />

          <MobileMenu isOpen={toggle} onClose={() => setToggle(false)} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
