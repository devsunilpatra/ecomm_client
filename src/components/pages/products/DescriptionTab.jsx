const DescriptionTab = () => {
  return (
    <section >
      <div className="flex">
        <b className="border border-gray-400 px-5 py-3 text-sm">Description</b>

        <p className="border border-gray-400 px-5 py-3 text-sm">Reviews(122)</p>
      </div>

      <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 border border-gray-400">
        <p>
          A stylish and durable product crafted with high-quality materials for
          everyday comfort and long-lasting use. Its modern design and reliable
          performance make it a perfect choice for any occasion.
        </p>
        <p>
          Customers have consistently praised this product for its excellent
          quality, comfortable fit, and stylish appearance. Many users highlight
          its durability and value for money, noting that it performs well even
          after regular use. The design and finish have received positive
          feedback, making it a popular choice among buyers. Overall, reviews
          reflect high satisfaction, with most customers recommending it for its
          reliability and premium feel.
        </p>
      </div>
    </section>
  );
};

export default DescriptionTab;
