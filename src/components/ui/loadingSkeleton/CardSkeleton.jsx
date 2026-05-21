const CardSkeleton = () => {
  return (
    <div className="p-4 border rounded-lg shadow space-y-3 animate-pulse">
      <div className="h-40 bg-gray-300 rounded"></div>
      <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
      <div className="h-4 w-full bg-gray-300 rounded"></div>
      <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
    </div>
  );
};

export default CardSkeleton;
