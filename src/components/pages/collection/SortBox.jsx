const SortBox = ({ setSortType }) => {
  return (
    <select
      onChange={(e) => setSortType(e.target.value)}
      className="border border-gray-300 text-sm px-2"
    >
      <option value="relevant"> Sort by: Relavant</option>
      <option value="low-high">Sort by: Low to High</option>
      <option value="high-low">Sort by: High to Low</option>
    </select>
  );
};

export default SortBox;
