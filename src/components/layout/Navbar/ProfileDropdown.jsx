const ProfileDropdown = () => {
  return (
    <ul className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
      <li className="cursor-pointer hover:text-black">My Profile</li>
      <li className="cursor-pointer hover:text-black">Orders</li>
      <li className="cursor-pointer hover:text-black">Logout</li>
    </ul>
  );
};

export default ProfileDropdown;
