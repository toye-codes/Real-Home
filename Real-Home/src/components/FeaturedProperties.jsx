import React from "react";
import uphill from "../assets/uphill.png";
import farm from "../assets/farm.png";
import beach from "../assets/beach.png";
import { CreditCard, MapPin } from "lucide-react";

const propsCard = [
  {
    id: 1,
    propertyImage: uphill,
    name: "Uphill Duplex",
    price: "3 million",
    location: "Houston, Texas",
    link: "https://www.freepik.com/",
  },

  {
    id: 2,
    propertyImage: farm,
    name: "Farm House",
    price: "3 million",
    location: "Houston, Texas",
    link: "https://www.freepik.com/",
  },

  {
    id: 3,
    propertyImage: beach,
    name: "Beach House",
    price: "3 million",
    location: "Houston, Texas",
    link: "https://www.freepik.com/",
  },
];

const FeaturedProperties = () => {
  const Properties = propsCard.map(
    ({ id, propertyImage, name, price, location, link }) => {
      return (
        <div
          key={id}
          className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between p-4 hover:shadow-xl transition-shadow duration-300">
          <img
            src={propertyImage}
            alt={name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard size={16} className="text-gray-500" />
                <p className="text-lg font-semibold">{name}</p>
              </div>
              <p className="text-lg font-semibold text-orange-500">{price}</p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-500" />
                <p className="text-sm text-gray-600">{location}</p>
              </div>
              <button
                className="text-sm text-blue-500 hover:underline focus:outline-none"
                onClick={() => window.open(link, "_blank")}>
                View more details
              </button>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Our Featured Properties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Properties}
      </div>
      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300">
          Browse more
        </button>
      </div>
    </section>
  );
};

export default FeaturedProperties;
