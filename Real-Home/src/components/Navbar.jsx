import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import logo from "../assets/logo.png";
import navbar from "../assets/navbar.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 lg:pl-10 lg:pt-5 lg:pb-5 lg:pr-10 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="real-homes" className="w-8 lg:w-11 lg:h-10" />
      </div>

      <nav className="hidden sm:flex gap-6 text-xl font-normal w-auto text-gray-800">
        <a
          href="/home"
          className="hover:font-semibold ">
          Home
        </a>
        <a
          href="/services"
          className="hover:font-semibold">
          Services
        </a>
        <a
          href="/catalogue"
          className="hover:font-semibold ">
          Catalogue
        </a>
        <a
          href="/about-us"
          className="hover:font-semibold ">
          About us
        </a>
        <a
          href="/contact"
          className="hover:font-semibold">
          Contact
        </a>
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <button className="sm:flex px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-100">
          <Link to="/signin">Sign in</Link>
        </button>
        <button className="px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-orange-500 hover:text-white">
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>

      <button onClick={toggleMenu} className="md:hidden relative">
        {/* Animated Navbar Icon */}
        <motion.img
          src={navbar}
          alt="real-homes"
          className="w-8 h-fit"
          animate={{
            rotate: isOpen ? 90 : 0, // Rotate 90 degrees if open, 0 if closed
          }}
          transition={{
            duration: 0.5, // Animation duration
            ease: "easeInOut",
          }}
        />
        {isOpen && (
          <div className="absolute top-5 right-0 w-auto bg-white shadow-md text-lg font-normal text-gray-800 py-4 px-7">
            <a
              href="/home"
              className="block mb-6 hover:font-semibold hover:bg-slate-500 hover:py-2 hover:px-2 hover:text-white hover:underline-offset-4">
              Home
            </a>
            <a
              href="/services"
              className="block mb-6  hover:font-semibold hover:bg-slate-500 hover:py-2 hover:px-2 hover:text-white hover:underline hover:underline-offset-4">
              Services
            </a>
            <a
              href="/catalogue"
              className="block mb-6  hover:font-semibold hover:bg-slate-500 hover:py-2 hover:px-2 hover:text-white hover:underline hover:underline-offset-4">
              Catalogue
            </a>
            <a
              href="/about-us"
              className="block mb-6  hover:font-semibold hover:bg-slate-500 hover:py-2 hover:px-2 hover:text-white hover:underline hover:underline-offset-4">
              About us
            </a>
            <a
              href="/contact"
              className="block mb-6 hover:font-semibold hover:bg-slate-500 hover:py-2 hover:px-2 hover:text-white hover:underline hover:underline-offset-4">
              Contact
            </a>
          </div>
        )}
      </button>
    </header>
  );
};

export default Header;
