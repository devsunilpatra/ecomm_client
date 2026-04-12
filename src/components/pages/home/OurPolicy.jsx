import { assets } from "../../../assets/assets";

const OurPolicy = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20">
      {/* //Exchange */}
      <div>
        <img
          src={assets.exchange_icon}
          alt="exchange"
          className="w-12 m-auto mb-3"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>

      {/* //Return */}

      <div>
        <img
          src={assets.quality_icon}
          alt="exchange"
          className="w-12 m-auto mb-3"
        />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>

      {/* //Support */}

      <div>
        <img
          src={assets.support_img}
          alt="exchange"
          className="w-12 m-auto mb-3"
        />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </section>
  );
};

export default OurPolicy;
