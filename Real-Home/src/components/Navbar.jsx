import React, { useState } from "react";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import navbar from "../assets/navbar.png";

const Header = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Services", path: "/services" },
    { name: "Catalogue", path: "/catalogue" },
    { name: "About Us", path: "/aboutpage" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`flex items-center justify-between px-5 pb-1 lg:pl-10 lg:pr-10 bg-gray-200 shadow-md rounded-br-2xl rounded-bl-2xl ${className}`}>
      {/* Logo */}
      <div className="flex items-center mt-2">
        <img
          src={logo}
          alt="real-homes"
          className="w-8 lg:w- lg:h-8 rounded-full"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex gap-6 text-sm font-normal w-auto bg-white px-14 py-2 text-gray-800 mt-1 rounded-full">
        <div>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:font-semibold rounded-full hover:bg-gray-900 hover:text-white transition duration-300 px-4 py-2">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Auth Buttons */}
      <div className="hidden sm:flex items-center gap-4 bg-white px-5 py-2 rounded-full text-sm">
        <button className="px-6 py-1  text-gray-800 rounded-full hover:bg-gray-900 hover:text-white transition duration-300">
          <Link to="/signin">Sign in</Link>
        </button>
        <button className="px-6 py-1  text-gray-800 rounded-full hover:bg-gray-900 hover:text-white transition duration-300">
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>

      {/* Mobile Toggle Button */}
      <button onClick={toggleMenu} className="sm:hidden relative">
        <motion.img
          src={navbar}
          alt="real-homes"
          className="w-8 h-fit"
          animate={{
            rotate: isOpen ? 90 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      </button>

      {/* Mobile Sidebar */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 flex flex-col p-6 text-lg font-normal text-gray-800">
          <button
            onClick={toggleMenu}
            className="self-end mb-8 text-black active:text-gray-500">
            Close
          </button>

          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={toggleMenu}
              className="mb-4 text-xl font-medium active:bg-gray-700 p-2 rounded">
              {item.name}
            </Link>
          ))}
          <div className="mt-auto">
            <button className="block w-full px-4 py-2 text-gray-800 rounded active:bg-gray-100 mb-4">
              <Link to="/signin" onClick={toggleMenu}>
                Sign in
              </Link>
            </button>
            <button className="block w-full px-4 py-2  text-gray-800 rounded active:bg-gray-900 active:text-white">
              <Link to="/signup" onClick={toggleMenu}>
                Sign Up
              </Link>
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
