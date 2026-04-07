// components/PageSkeleton.jsx
const PageSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Navbar */}
      <div className="h-16 bg-gray-300 w-full"></div>

      {/* Container */}
      <div className="p-6 space-y-6">
        {/* Title */}
        <div className="h-8 w-1/3 bg-gray-300 rounded"></div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 space-y-4 shadow"
            >
              <div className="h-40 bg-gray-300 rounded"></div>
              <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
