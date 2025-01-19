import React from "react";
import { Users, Home, Award, Shield } from "lucide-react";
import aboutpage from "../assets/aboutpage.png";
import MissJane from "../assets/MissJane.png";
import MrBrown from "../assets/MrBrown.png";
import CEO from "../assets/CEO.png";
import MrJude from "../assets/MrJude.jpg"
import NavBar from "../components/Navbar"
import { ReachUs } from "./Services";
import { useNavigate } from "react-router-dom";

<NavBar className="fixed w-full" />;

const AboutPage = () => {
   const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate("/signup")
  }

  const handleContact = () => {
    navigate("/contact")
  }


  return (
    <section>
      <NavBar className="fixed w-full" />;

      <div className="bg-gray-300">
        {/* Hero Section */}
        <div className="bg-white mt-10 py-8 px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            About <span className="text-orange-400">Real Home</span>
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Your trusted partner in finding the perfect living space
          </p>
        </div>

        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-600">
                  Founded in 2020, Real Home emerged from a simple yet powerful
                  idea: make the home-finding process seamless and enjoyable. We
                  understood the challenges that come with finding the perfect
                  living space, and we set out to create a solution.
                </p>
                <p className="text-gray-600">
                  Today, we've grown into a trusted platform that connects
                  thousands of people with their dream homes. Our commitment to
                  innovation and customer satisfaction has made us a leader in
                  the real estate industry.
                </p>
              </div>
              <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={aboutpage}
                  alt="Real Home Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <p className="text-orange-400 text-2xl font-bold">5000+</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <p className="text-orange-400 text-2xl font-bold">1000+</p>
            <p className="text-gray-600">Properties</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <p className="text-orange-400 text-2xl font-bold">50+</p>
            <p className="text-gray-600">Cities</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <p className="text-orange-400 text-2xl font-bold">24/7</p>
            <p className="text-gray-600">Support</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-orange-400 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                Trust & Security
              </h3>
            </div>
            <p className="text-gray-600">
              We prioritize transparency and security in every transaction,
              ensuring our clients' peace of mind throughout their journey.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-orange-400 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                Excellence
              </h3>
            </div>
            <p className="text-gray-600">
              Our commitment to excellence drives us to continuously improve our
              services and exceed client expectations.
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-orange-400 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                Community Focus
              </h3>
            </div>
            <p className="text-gray-600">
              We believe in building strong communities by helping people find
              homes they truly love and connect with their neighborhoods.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-7xl mx-auto px-4 pb-5">
          <div className="bg-white rounded-lg shadow-sm py-10 px-6">
            <h2 className="text-2xl text-center font-semibold text-gray-900 mb-10">
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-md overflow-hidden bg-gray-100">
                  <img
                    src={MissJane}
                    alt="Miss Jane - Co-founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-900">Miss Jane</h3>
                <p className="text-sm text-gray-600">Co-founder</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-md overflow-hidden bg-gray-100">
                  <img
                    src={MrBrown}
                    alt="Mr. Brown - Operations Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-900">Mr. Brown</h3>
                <p className="text-sm text-gray-600">Operations Manager</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-md overflow-hidden bg-gray-100">
                  <img
                    src={CEO}
                    alt="Dr. Alice Smith - CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-900">Dr. Alice Smith</h3>
                <p className="text-sm text-gray-600">CEO</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-md overflow-hidden bg-gray-100">
                  <img
                    src={MrJude}
                    alt="Mr. John Doe - Marketing Head"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-900">Mr. Jude</h3>
                <p className="text-sm text-gray-600">Marketing Head</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReachUs
        handleGetStarted={handleGetStarted}
        handleContact={handleContact}
      />
    </section>
  );
};

export default AboutPage;
