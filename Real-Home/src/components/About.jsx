import React from "react";
import about from '../assets/about.png'

const About = () => {
  return (
    <section className="text-center bg-gray-50 ml-6 mr-4 mt-10 mb-10">
      <h2 className="text-2xl md:text-5xl font-bold mb-2">
        What makes us Stand out
      </h2>
      <p className="hidden sm:inline text-gray-600 text-xl">
        Here are some few reasons why we are your preferred choice
      </p>

      <div className="flex flex-wrap justify-center md:justify-between items-start lg:gap-8 mt-1 sm:mt-20 ">
        <img
          src={about}
          alt="real-homes"
          className="hidden sm:hidden md:inline lg:flex md:w-full shadow-lg lg:max-w-sm h-custom lg:rounded-tr-custom lg:rounded-bl-custom"
        />

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6 md:gap-6 lg:max-w-3xl text-left mt-5">
          <div>
            <h3 className="text-black md:text-orange-500 text-base md:text-xl lg:text-3xl font-semibold mb-3 md:mb-5 ">
              Great Customer Service
            </h3>
            <p className="text-gray-600 font-normal text-sm md:text-lg lg:text-xl">
              We prioritize your satisfaction by offering prompt and
              professional support at every step. Your concerns are our top
              priority.
            </p>
          </div>
          <div>
            <h3 className="text-black md:text-orange-500 text-base md:text-xl lg:text-3xl font-semibold mb-3 md:mb-5 ">
              Discounts and Offers
            </h3>
            <p className="text-gray-600 font-normal text-sm md:text-lg lg:text-xl ">
              Enjoy incredible savings with our exclusive deals and special
              discounts tailored just for you.
            </p>
          </div>
          <div>
            <h3 className="text-black md:text-orange-500 text-base md:text-xl lg:text-3xl font-semibold mb-3 md:mb-5 ">
              Outstanding Quality
            </h3>
            <p className="text-gray-600 font-normal text-sm md:text-lg  lg:text-xl ">
              Our products and services are crafted with precision and care,
              ensuring you receive nothing short of excellence.
            </p>
          </div>
          <div>
            <h3 className="text-black md:text-orange-500 text-base md:text-xl lg:text-3xl font-semibold mb-3 md:mb-5 ">
              Amazing In-House Tools
            </h3>
            <p className="text-gray-600 font-normal text-sm  md:text-lg lg:text-xl">
              From state-of-the-art software to advanced technology, we provide
              tools that simplify your life and improve efficiency.
            </p>
          </div>
        </div>

        <img
          src={about}
          alt="real-homes"
          className=" mt-8 md:hidden lg:hidden shadow-lg max-w-sm w-full h-52"
        />
      </div>

      <div className="lg:flex lg:flex-col lg:items-end">
        <button className=" mt-8 bg-black text-white text-base md:text-xl px-9 py-4 rounded hover:bg-gray-800 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
