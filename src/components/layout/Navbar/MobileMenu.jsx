import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { NAV_ITEMS as nav_items } from "../../../constants/navItems";
import { assets } from "../../../assets/assets";

const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    // Cleanup
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Lock scroll when menu is open

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col text-gray-700 h-full">
          {/* Header */}
          <button
            onClick={onClose}
            className="flex items-center gap-4 p-4 border-b"
            aria-label="Close menu"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <span className="font-medium">Back</span>
          </button>

          {/* Nav Items */}
          <nav className="flex flex-col">
            {nav_items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `py-3 px-6 border-b transition-colors ${
                    isActive
                      ? "bg-gray-100 text-black font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;
