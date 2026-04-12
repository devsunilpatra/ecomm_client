const NewsletterBox = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="text-center py-16">
      <p className="text-2xl font-medium text-gray-800 ">
        Join our newsletter & get 20% off
      </p>
      <p className="w-3/4 m-auto my-3 text-gray-700 text-xs sm:text-sm md:text-base">
        Be the first to discover new collections, special offers, and curated
        trends.
      </p>

      <form
        onSubmit={submitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
        />
        <button type="submit" className="bg-black text-white px-10 py-4 cursor-pointer">
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
};

export default NewsletterBox;
