import React from "react";
import find from "../assets/find.png";
import payment from "../assets/payment.png";
import details from "../assets/details.png";



const Services = () => {

  const steps = [
    {
      id: 1,
      icon: find,
      title: "Find House",
      description: "Find your desired home choice and check other information.",
    },
    {
      id: 2,
      icon: details,
      title: "Confirm House Details",
      description: "Confirm your house details and other necessary information.",
    },
    {
      id: 3,
      icon: payment,
      title: "Make Payments",
      description: "Make payments and secure property. Our payment process is safe.",
    },
  ];

  // Step Component
  const Step = ({ icon, title, description }) => (
    <div className="bg-white p-14 md:py-0 rounded-lg shadow-md text-center flex-1">
      <div className="mb-6 pt-6">
        <img src={icon} alt={title} className="mx-auto w-18 h-18" />
      </div>
      <h3 className="text-lg md:text-3xl font-semibold text-yellow-600 mb-5">
        {title}
      </h3>
      <p className="text-gray-600 mt-2 pb-10">{description}</p>
    </div>
  );


  return (
    <div className="bg-gray-100 pt-6 pb-5 px-4">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold md:text-5xl md:font-bold">
          How we operate
        </h2>
        <p className="text-gray-600 text-xl mt-3">
          Get your dream home in a few quick and easy steps
        </p>
      </div>
      {/* Steps Section */}
      <div className="flex ml-10 mr-10 lg:my-5 flex-col md:flex-row md:justify-between gap-6">
        {steps.map((step) => (
          <Step
            key={step.id}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;