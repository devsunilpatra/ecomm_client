import { Link } from "react-router-dom";
import Title from "../components/ui/Title";
import NewsletterBox from "../components/common/NewsletterBox";
import { Button } from "../components/ui/Button";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <main className="">
      <div className="text-2xl text-center pt-14 border-t border-gray-300">
        <Title normal_txt="CONTACT" bold_txt="US" />
      </div>

      <section className="flex flex-col sm:items-center justify-center md:flex-row gap-10 my-10">
        <img
          src={assets.contact_img}
          alt="contact image"
          className="w-full md:max-w-120"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <h3 className="font-semibold text-xl text-gray-600">OUR STORE</h3>

          <Link className="block text-gray-500">754141 Near Kids Hospital</Link>

          <div className="text-gray-500">
            <Link className="block">Tel: +91 8660925010</Link>
            <Link className="block">Email: greatstackdev@gamil.com</Link>
          </div>

          <h3 className="font-semibold text-xl text-gray-600">
            CAREERS AT FOREVER
          </h3>

          <p className="text-gray-500">
            Learn more our teams and job openings.
          </p>

          <Button>Expolre Jobs</Button>
        </div>
      </section>
      <NewsletterBox />
    </main>
  );
};

export default Contact;
