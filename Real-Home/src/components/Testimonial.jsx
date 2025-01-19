import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import john from "../assets/john.png";
import marie from "../assets/marie.png";


const TestimonialCard = ({ image, text, name }) => (
  <div className="p-4 w-auto rounded-lg shadow-lg bg-gray-50 text-center testimonial">
    <img
      src={image}
      alt={name}
      className="rounded-md mb-4 w-full h-48 object-contain testimonial-image"
    />
    <p className="text-gray-700 mb-4">{text}</p>
    <h3 className="font-semibold text-gray-900">{name}</h3>
  </div>
);

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: john,
      text: "You guys are amazing, customer service is top-notch. I’m super proud of myself for making you guys my source. The house is perfect, just as it was advertised. Thanksss.",
      name: "John Walker",
    },
    {
      id: 2,
      image: marie,
      text: "I can’t believe how stress-free the entire process was, you guys helped my family and I and we’re so grateful.",
      name: "Marie Sole",
    },
    {
      id: 3,
      image: john,
      text: "You guys are amazing, customer service is top-notch. I’m super proud of myself for making you guys my source. The house is perfect, just as it was advertised. Thanksss.",
      name: "Johnny Jonnes",
    },
    {
      id: 4,
      image: marie,
      text: "I can’t believe how stress-free the entire process was, you guys helped my family and I and we’re so grateful.",
      name: "Alan Smith",
    },
    {
      id: 3,
      image: john,
      text: "You guys are amazing, customer service is top-notch. I’m super proud of myself for making you guys my source. The house is perfect, just as it was advertised. Thanksss.",
      name: "Johnny Jonnes",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    } else if (direction === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Calculate indices for two testimonials
  const secondIndex = (currentIndex + 1) % testimonials.length;


  // Get Started
  const navigate = useNavigate();

  const [getStarted, setGetStarted] = useState(false);

  const handleGetStarted = () => {
    if (!getStarted) {
      navigate("/signup");
    }
  }

  
  

  return (
    <section className="bg-white py-8 px-4 lg:px-16 relative">
      <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-8">
        What our clients are saying
      </h2>

      <div className="flex items-center justify-center relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-16">
          {[currentIndex, secondIndex].map((index) => {
            const testimonial = testimonials[index];
            return (
              <TestimonialCard
                key={testimonial.id}
                image={testimonial.image}
                text={testimonial.text}
                name={testimonial.name}
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center w-full max-w-4xl mx-auto mt-4">
        <button
          className="p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
          onClick={() => handleNavigation("prev")}
          aria-label="Previous testimonial">
          <ChevronLeft />
        </button>
        <button
          className="p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
          onClick={() => handleNavigation("next")}
          aria-label="Next testimonial">
          <ChevronRight />
        </button>
      </div>

      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map(({ id }, index) => (
          <button
            key={id}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              currentIndex === index || secondIndex === index
                ? "bg-black"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}></button>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleGetStarted}
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
          Get started
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
