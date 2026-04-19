import { NavLink } from "react-router-dom";

const PROFILE_ITEMS = [
  { label: "My Profile", path: "/profile" },
  { label: "Orders", path: "/orders" },
  { label: "Logout", path: "/login" },
];

const ProfileDropdown = ({ onLogout }) => {
  return (
    <div
      className="mt-0 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
      role="menu"
    >
      <ul className="py-2 text-sm text-gray-700">
        {PROFILE_ITEMS.map((item) => {
          // Handle logout separately
          if (item.action === "logout") {
            return (
              <li key={item.label}>
                <NavLink
                  // onClick={onLogout}
                  to={item.path}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-black transition"
                  role="menuitem"
                >
                  {item.label}
                </NavLink>
              </li>
            );
          }

          // Navigation items
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






// return (
//     <div
//       className="mt-0 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
//       role="menu"
//     >
//       <ul className="py-2 text-sm text-gray-700">
//         {PROFILE_ITEMS.map((item) => {
//           // Handle logout separately
//           if (item.action === "logout") {
//             return (
//               <li key={item.label}>
//                 <NavLink
//                   onClick={onLogout}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-black transition"
//                   role="menuitem"
//                 >
//                   {item.label}
//                 </NavLink>
//               </li>
//             );
//           }
