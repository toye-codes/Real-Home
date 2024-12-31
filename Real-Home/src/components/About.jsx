import React from "react";
import about from "../assets/about.png";

const features = [
  {
    title: "Great Customer Service",
    description:
      "We prioritize your satisfaction by offering prompt and professional support at every step. Your concerns are our top priority.",
  },
  {
    title: "Discounts and Offers",
    description:
      "Enjoy incredible savings with our exclusive deals and special discounts tailored just for you.",
  },
  {
    title: "Outstanding Quality",
    description:
      "Our products and services are crafted with precision and care, ensuring you receive nothing short of excellence.",
  },
  {
    title: "Amazing In-House Tools",
    description:
      "From state-of-the-art software to advanced technology, we provide tools that simplify your life and improve efficiency.",
  },
];

const About = () => {
  return (
    <section className="text-center bg-gray-50 ml-6 mr-4 mt-10 mb-10">
      <h2 className="text-2xl md:text-5xl font-bold mb-2">
        What makes us Stand out
      </h2>
      <p className="hidden sm:inline text-gray-600 text-xl">
        Here are some few reasons why we are your preferred choice
      </p>

      <div className="md:flex justify-center md:justify-between items-start lg:gap-8 md:gap-5 mt-1 sm:mt-20 ">
        <img
          src={about}
          alt="real-homes"
          className="hidden sm:hidden md:inline lg:flex md:w-full shadow-lg lg:max-w-sm h-96 md:rounded-tr-custom md:rounded-bl-custom lg:rounded-tr-custom lg:rounded-bl-custom"
        />

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6 md:gap-6 lg:max-w-3xl text-left mt-5">
          {features.map((feature, index) => (
            <div key={index}>
              <h3 className="text-black md:text-orange-500 text-base md:text-xl lg:text-xl font-semibold mb-3 md:mb-5 ">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-normal text-sm md:text-lg lg:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <img
          src={about}
          alt="real-homes"
          className=" mt-8 md:hidden lg:hidden shadow-lg max-w-sm w-full h-52"
        />
      </div>

      <div className="lg:flex lg:flex-col lg:items-end">
        <button className=" mt-8 bg-black text-white text-base md:text-xl px-4 py-2 rounded hover:bg-gray-800 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
