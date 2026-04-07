import { NavLink } from "react-router-dom";

const PROFILE_ITEMS = [
  { label: "My Profile", path: "/profile" },
  { label: "Orders", path: "/orders" },
  { label: "Logout", action: "logout" },
];

const ProfileDropdown = ({ onLogout }) => {
  return (
    <div
      className="mt-0 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
      role="menu"
    >
      <ul className="py-2 text-sm text-gray-700">
        {PROFILE_ITEMS.map((item) => {
          // ✅ Handle logout separately
          if (item.action === "logout") {
            return (
              <li key={item.label}>
                <button
                  onClick={onLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-black transition"
                  role="menuitem"
                >
                  {item.label}
                </button>
              </li>
            );
          }

          // ✅ Navigation items
          return (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 transition ${
                    isActive
                      ? "bg-gray-100 text-black font-medium"
                      : "hover:bg-gray-100 hover:text-black"
                  }`
                }
                role="menuitem"
              >
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileDropdown;







// const ProfileDropdown = () => {
//   return (
//     <ul className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
//       <li className="cursor-pointer hover:text-black">My Profile</li>
//       <li className="cursor-pointer hover:text-black">Orders</li>
//       <li className="cursor-pointer hover:text-black">Logout</li>
//     </ul>
//   );
// };

// export default ProfileDropdown;
