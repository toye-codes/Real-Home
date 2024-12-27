import React from "react";
import logo from '../assets/logo.png';
import navbar from '../assets/navbar.png'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 lg:pl-10 lg:pt-5 lg:pb-5 lg:pr-10 bg-white shadow-md ">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="real-homes" className=" w-8 lg:w-11 lg:h-10"/>
      </div>

      <nav className="hidden sm:flex gap-6 text-xl font-normal w-auto text-gray-800">
        <a href="/home" className="hover:text-orange-500">
          Home
        </a>
        <a href="/services" className="hover:text-orange-500">
          Services
        </a>
        <a href="/catalogue" className="hover:text-orange-500">
          Catalogue
        </a>
        <a href="/about-us" className="hover:text-orange-500">
          About us
        </a>
        <a href="/contact" className="hover:text-orange-500">
          Contact
        </a>
      </nav>

      {/* Auth Buttons (Visible only on medium and larger screens) */}
       <div className=" flex items-center gap-4">
            <button className="sm:flex px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-100">
                Log in
            </button>
            <button className="px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-orange-500 hover:text-white">
                Sign up
            </button>
        </div>
        
        <div className="lg:hidden">
            <img src={navbar} alt='real-homes' className="w-6"/>
        </div>
    </header>
  );
};

export default Header;
