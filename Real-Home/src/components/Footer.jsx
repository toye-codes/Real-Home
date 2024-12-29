import logo from "../assets/logo.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-gray-200 px-7 md:px-10 lg:px-28 py-6">
      <div className="flex justify-between gap-2  items-center">
        <div>
          <img src={logo} alt="real-home" className=" w-16 h-16 mb-5" />
          <a href="#" className="text-xl font-semibold">
            Home
          </a>
        </div>

        <div className="flex flex-col items-left ml-6 mb-5">
          <p className="text-base md:text-xl font-semibold mb-3 ">
            Terms of Service
          </p>
          <p className="text-base md:text-xl font-semibold mb-3">
            Privacy Policy
          </p>
          <p className="text-base md:text-xl font-semibold mb-3">FAQ</p>
          <p className="text-base md:text-xl font-semibold mb-3">Discounts</p>
        </div>

        <div className="flex flex-col items-left">
          <a href="#" className="text-base md:text-xl font-semibold mb-3">
            Help
          </a>
          <a href="#" className="text-base  md:text-xl font-semibold mb-3">
            Contact
          </a>
          <a href="#" className="text-base md:text-xl font-semibold mb-3">
            Offers
          </a>
          <a href="#" className="text-base md:text-xl font-semibold mb-3">
            About
          </a>
        </div>
      </div>

      <hr />

      <div className="flex justify-between gap-5">
        <div className="flex flex-col items-start ">
          <p className="text-lg md:text-xl lg:w-full text-left mb-3">
            Follow our socials
          </p>
          <div className="flex items-center gap-2 ">
            <Facebook fill="blue" className="w-8 h-8" />
            <Instagram fill="rgb(252, 165, 165)" className="w-8 h-8" />
            <Twitter fill="black" className="w-8 h-8" />
            <Linkedin fill="blue" className="w-8 h-8" />
          </div>
        </div>

        <div className="flex flex-col items-center pr-7">
          <p className="text-base md:text-xl lg:text-2xl w-full text-left mb-3">Get our mobile app and enjoy a better experience</p>
          <div className="flex items-center gap-2">
            <img src={apple} alt="apple" className="w-18 h-10" />
            <img src={google} alt="google" className="w-18 h-10" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer