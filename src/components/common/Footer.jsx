import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-8 md:my-10 md:mt-24 text-sm">
        <div>
          <Link to="/">
            <img src={assets?.logo} alt="logo" className="mb-5 w-44" />
          </Link>

          <p className="w-full md:w-2/3 text-gray-600 ">
            Discover the latest collection featuring modern designs, premium
            quality, and timeless style for every occasion. Please arrange me
            the paragraph here
          </p>
        </div>

        {/* Company Links */}
        <nav aria-label="Company">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-black transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="hover:text-black transition">
                Delivery
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-black transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li className="hover:text-black transition">
              <Link href="tel:+918660925010">+91-8660925010</Link>
            </li>
            <li className="hover:text-black transition">
              <Link href="mailto:itzsunilpatra@gmail.com">
                itzsunilpatra@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div>
        <hr className="border-t border-gray-400" />
        <p className="py-5 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Leecart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
