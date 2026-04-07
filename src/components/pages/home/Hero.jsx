import { assets } from "../../../assets/assets";

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row border border-gray-400">
      {/* LEFT */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
          </div>

          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* RIGHT */}

      <picture className="w-full sm:w-1/2 flex items-center justify-center py-0 sm:py-0">
        <source srcSet={assets?.hero_img} media="(max-width: 768px)" />
        <source srcSet={assets?.hero_img} media="(min-width: 769px)" />
        <img
          src={assets?.hero_img}
          alt="hero img"
          className="w-full"
          loading="eager"
          fetchpriority="high"
        />
      </picture>
    </section>
  );
};

export default Hero;
