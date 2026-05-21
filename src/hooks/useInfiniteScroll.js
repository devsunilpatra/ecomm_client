// import { useEffect, useRef, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import ProductCard from "../components/ProductCard";
// import { products } from "../assets/assets";

// const ITEMS_PER_PAGE = 12;

// const Collection = () => {
  

//   const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
//   const loaderRef = useRef(null);

//   // (Optional) Filter products
//   const filteredProducts = products.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   // Visible products
//   const visibleProducts = filteredProducts.slice(0, visibleCount);

//   // Intersection Observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const first = entries[0];

//         if (
//           first.isIntersecting &&
//           visibleCount < filteredProducts.length
//         ) {
//           setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
//         }
//       },
//       {
//         rootMargin: "100px",
//       }
//     );

//     const currentRef = loaderRef.current;

//     if (currentRef) observer.observe(currentRef);

//     return () => {
//       if (currentRef) observer.unobserve(currentRef);
//     };
//   }, [visibleCount, filteredProducts.length]);

//   // 🔄 Reset on search/filter change
//   useEffect(() => {
//     setVisibleCount(ITEMS_PER_PAGE);
//   }, [search]);


//   return{}

// //   return (
// //     <main className="p-6">
// //       {/* 🛍️ Product Grid */}
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //         {visibleProducts.map((product) => (
// //           <ProductCard key={product._id} product={product} />
// //         ))}
// //       </div>

// //       {/* ⬇️ Loader / Sentinel */}
// //       <div
// //         ref={loaderRef}
// //         className="h-16 flex justify-center items-center"
// //       >
// //         {visibleCount < filteredProducts.length ? (
// //           <p className="text-gray-500">Loading more...</p>
// //         ) : (
// //           <p className="text-gray-400">No more products</p>
// //         )}
// //       </div>
// //     </main>
// //   );
// };

// export default Collection;
