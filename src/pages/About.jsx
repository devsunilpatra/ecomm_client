import { assets } from "../assets/assets";
import NewsletterBox from "../components/common/NewsletterBox";
import Title from "../components/ui/Title";
const About = () => {
  return (
    <main>
      <div className="text-2xl text-center pt-8 border-t border-gray-300">
        <Title normal_txt="ABOUT" bold_txt="US" />
      </div>

      <section className="my-10 flex flex-col sm:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="about img"
          className="w-full md:max-w-112.5 object-cover"
        />

        {/* Content section */}
        <div className="flex flex-col justify-center gap-10 md:w-2/4 text-gray-600">
          <p>
            MyCart is a modern e-commerce platform offering a seamless and
            convenient shopping experience. We provide quality products with a
            user-friendly interface, making it easy to browse and shop anytime.
            Our focus is on simplicity, speed, and reliability.
          </p>
          <p>
            At MyCart, we focus on quality, affordability, and customer
            satisfaction. From curated products to secure checkout and fast
            delivery, every step is designed for a smooth shopping experience.
          </p>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Our Mission</h3>
            <p>
              At MyCart, our mission is to simplify online shopping by
              delivering a seamless, reliable, and customer-centric experience.
              We aim to provide high-quality products, intuitive design, and
              secure transactions while continuously innovating to meet evolving
              customer needs. Our goal is to make shopping convenient,
              accessible, and enjoyable for everyone, every time.
            </p>
          </div>
        </div>
      </section>

      <section className="text-2xl py-8">
        <Title normal_txt="WHY" bold_txt="CHOOSE US" />
        <div className="flex flex-col md:flex-row text-gray-600 text-base md:mb-20 mt-8">
          <div className="border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="text-sm">QUALITY ASSURANCE:</b>
            <p>
              We ensure every product meets high standards through trusted
              sourcing and strict quality checks.
            </p>
          </div>

          <div className="border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="text-sm">CONVENIENCE:</b>
            <p>
              We make shopping simple with easy navigation, a smooth checkout,
              and the freedom to shop anytime, anywhere.
            </p>
          </div>

          <div className="border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="text-sm">EXCEPTIONAL CUSTOMER SERVICE:</b>
            <p>
              We prioritize customers with quick support and reliable
              assistance, ensuring a smooth and satisfying experience.
            </p>
          </div>
        </div>
      </section>

      <NewsletterBox />
    </main>
  );
};

export default About;
