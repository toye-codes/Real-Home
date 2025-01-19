import React from "react";
import Navbar from "../components/Navbar";
import { Building, Search, Key, Calculator, Phone } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Exportable ReachUs Component
export const ReachUs = ({ handleGetStarted, handleContact }) => {
  return (
    <div className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Find Your Perfect Home?
        </h2>
        <p className="mb-8 text-gray-300">
          Let us help you discover the best apartments in your desired location.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleGetStarted}
            className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-md font-medium">
            Get Started
          </button>
          <button
            onClick={handleContact}
            className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-md font-medium transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  const services = [
    {
      icon: <Search className="w-8 h-8 text-orange-400" />,
      title: "Property Search",
      description:
        "Find your perfect home with our advanced search tools that help you filter by location, price, and amenities.",
    },
    {
      icon: <Building className="w-8 h-8 text-orange-400" />,
      title: "Apartment Listings",
      description:
        "Access our extensive catalogue of premium apartments both within and outside your city of choice.",
    },
    {
      icon: <Key className="w-8 h-8 text-orange-400" />,
      title: "Property Management",
      description:
        "We handle everything from maintenance to tenant relations, making property ownership stress-free.",
    },
    {
      icon: <Calculator className="w-8 h-8 text-orange-400" />,
      title: "Financial Planning",
      description:
        "Get expert guidance on mortgages, rental yields, and investment opportunities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      <div>
        <Navbar />
      </div>

      <div className="bg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-2 text-gray-600">
            We make your priority our priority.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h2 className="text-xl font-semibold">{service.title}</h2>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Using ReachUs Component */}
      <ReachUs
        handleGetStarted={handleGetStarted}
        handleContact={handleContact}
      />

      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <p className="text-gray-600">Need assistance? We're here to help.</p>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-orange-400" />
            <span className="font-medium">1-800-HOMES</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
