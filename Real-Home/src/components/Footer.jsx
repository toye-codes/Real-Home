import logo from "../assets/logo.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 md:px-8 lg:px-14 pb-10 py-6">
      <div className="flex justify-between gap-8 mt-6 items-start">
        {/* Logo and Home Link */}
        <div>
          <img
            src={logo}
            alt="Real Home Logo"
            className="w-16 h-16 mb-5 rounded-full"
          />
          <a
            href="#"
            className="text-xl font-semibold hover:text-gray-400 transition-colors">
            Home
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col mb-5 space-y-2">
          <a
            href="#"
            className="text-sm md:text-base lg:text-lg font-semibold hover:text-gray-400 transition-colors">
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm md:text-base lg:text-lg font-semibold hover:text-gray-400 transition-colors">
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm md:text-base lg:text-lg font-semibold hover:text-gray-400 transition-colors">
            FAQ
          </a>
          <a
            href="#"
            className="text-sm md:text-base lg:text-lg font-semibold hover:text-gray-400 transition-colors">
            Discounts
          </a>
        </div>

        {/* Other Links */}
        <div className="flex flex-col mb-5 space-y-2">
          <a
            href="#"
            className="text-sm md:text-base lg:text-lg font-semibold hover:text-gray-400 transition-colors">
            Help
          </a>
          <a
            href="#"
            className="text-sm md:text-base lg:text-lg font-semibold hover:text-gray-400 transition-colors">
            Contact
          </a>
          <a
            href="#"
            className="text-sm md:text-base lg:text-lg font-semibold hover:text-gray-400 transition-colors">
            Offers
          </a>
          <a
            href="#"
            className="text-sm md:text-base lg:text-lg font-semibold hover:text-gray-400 transition-colors">
            About
          </a>
        </div>
      </div>

      <hr className="border-gray-700 mb-5" />

      <div className="flex justify-between gap-8">
        {/* Social Media Links */}
        <div className="flex flex-col items-start">
          <p className="text-sm md:text-base lg:text-lg mb-3">
            Follow our socials
          </p>
          <div className="flex items-center gap-4">
            <FaFacebook
              aria-label="Facebook"
              className="text-blue-600 w-8 h-8 hover:text-blue-400 transition-colors"
            />
            <FaInstagram
              aria-label="Instagram"
              className="text-pink-500 w-8 h-8 hover:text-pink-400 transition-colors"
            />
            <FaTwitter
              aria-label="Twitter"
              className="text-blue-400 w-8 h-8 hover:text-blue-300 transition-colors"
            />
            <FaLinkedin
              aria-label="LinkedIn"
              className="text-blue-700 w-8 h-8 hover:text-blue-500 transition-colors"
            />
          </div>
          <div className="mt-5 hidden md:block">
            <img src={google} alt="Google Play Store" className=" hidden w-24 h-12" />
          </div>
        </div>

        {/* Mobile App Section */}
        <div className="flex flex-col items-center">
          <p className="text-sm md:text-base lg:text-lg text-center mb-3">
            Get our mobile app and enjoy a better experience
          </p>
          <div className="flex items-center gap-4">
            <img src={apple} alt="Apple App Store" className=" lg:inline w-24 h-10" />
            <img
              src={google}
              alt="Google Play Store"
              className="w-24 h-10 hidden md:block"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
