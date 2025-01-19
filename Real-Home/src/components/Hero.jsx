import { Play } from "lucide-react";
import home from "../assets/home.png";
import hero from "../assets/hero.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import antaira from "../assets/antaira.png";
import chanel from "../assets/chanel.png";
import homes from "../assets/homes.png";
import realhomes from "../assets/realhomes.png";
import daniel from "../assets/daniel.png";
import { useNavigate } from "react-router-dom";

// Data for the stats section
const stats = [
  { value: "5000+", label: "Satisfied Clients" },
  { value: "5000+", label: "Downloads" },
  { value: "5000+", label: "Countries" },
];

// Data for the brands section
const brands = [chanel, realhomes, homes, antaira, daniel];

// Stats component to make the stats section reusable
const Stat = ({ value, label }) => (
  <div>
    <h3 className="font-semibold text-lg md:text-2xl text-orange-300">
      {value}
    </h3>
    <p className="text-gray-500">{label}</p>
  </div>
);

const StatsSection = ({ stats }) => (
  <div className="flex flex-wrap gap-5">
    {stats.map(({ value, label }, index) => (
      <Stat key={index} value={value} label={label} />
    ))}
  </div>
);

const BrandsSection = ({ brands }) => (
  <div className="flex flex-wrap gap-4 mt-7 md:gap-14 lg:gap-20 lg:ml-10 lg:mr-5">
    {brands.map((brand, index) => (
      <img
        key={index}
        src={brand}
        alt={`brand-${index}`}
        className="w-14 md:w-24 lg:w-28"
      />
    ))}
  </div>
);

const Hero = () => {
  const navigate = useNavigate();

  // This function links the Get started button to the Sign up page
  const handleSignUp = () => {
    navigate("/signup");
  };

  // This function links the Learn More button to the About section
  const handleLearnMore = () => {
    navigate("/aboutpage")
  }

  return (
    <section>
      <div className="bg-[#f1f0f0] md:flex md:flex-row pb-5">
        {/* Left Section */}
        <div className="flex flex-col items-center ml-4 mr-4 md:ml-20 md:flex-row">
          <div className="mt-24 md:mt-0">
            {/* Main Heading */}
            <div className="mt-9 lg:mt-28 w-fit">
              <h1 className="text-2xl text-center w-auto font-medium mt-16 md:text-4xl md:text-left lg:mt-1 lg:text-6xl lg:w-auto">
                The <span className="text-orange-300">Best</span> Apartments In
                And Out Of Your City
              </h1>
              <p className="w-fit text-center mt-5 text-base md:text-lg">
                Here at Homes, we have the most sought-after apartments in any
                location of your choice. We make your priority our priority.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-3 mt-10 md:flex-row md:mt-12 lg:mt-14 lg:mb-14">
              {/* Get Started Button */}
              <button
                onClick={handleSignUp}
                className="text-base text-white bg-black border-none rounded-full px-6 py-2 lg:text-2xl lg:w-auto lg:px-4 lg:py-2` hover:bg-gray-800 hover:text-white">
                Get Started
              </button>
              {/* Learn More Button */}
              <button
                onClick={handleLearnMore}
                className="flex gap-2 text-base w-auto border-none rounded-full px-2 py-2 lg:text-2xl lg:w-auto lg:px-4 lg:py-2 text-white hover:bg-gray-800 bg-black hover:text-white hover:transition-all">
                Learn More
                <span className="mt-1 md:mt-2 lg:w-auto">
                  <Play size={20} fill="currentColor" />
                </span>
              </button>
            </div>

            {/* Stats Section for larger screens */}
            <div className="hidden md:flex flex-col mb-0">
              <StatsSection stats={stats} />
              {/* App Store Buttons */}
              <div className="flex gap-3 mt-5">
                <img src={google} alt="google play" className="w-28" />
                <img src={apple} alt="app store" className="w-28" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col ml-4 mr-4">
          <img
            src={home}
            alt="real-home"
            className="w-auto mb-5 rounded-lg lg:h-auto lg:pt-20"
          />
          {/* Stats Section for smaller screens */}
          <div className="flex flex-col gap-3 md:hidden lg:hidden">
            <StatsSection stats={stats} />
            {/* App Store Buttons */}
            <div className="flex gap-3 mt-5">
              <img src={google} alt="google play" className="w-28" />
              <img src={apple} alt="app store" className="w-28" />
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Brands Section */}
      <div className="ml-7 mt- bg-none p-3 mr-3 md:ml-20 md:pb-5">
        <p className="text-base text-left text-gray-600 md:text-lg">
          Trusted by over 50,000 brands
        </p>
        <BrandsSection brands={brands} />
      </div>
    </section>
  );
};

export default Hero;
