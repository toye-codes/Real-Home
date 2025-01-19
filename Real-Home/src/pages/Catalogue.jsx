import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Bath,
  BedDouble,
  Home,
  DollarSign,
} from "lucide-react";
import NavBar from "../components/Navbar";
import { PropertiesData } from "../components/PropertiesData";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const CataloguePage = () => {
  const [searchData, setSearchData] = useState({
    propertyType: "",
    location: "",
    priceRange: "",
  });
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOption, setSortOption] = useState("newest");
  const [viewDetails, setViewDetails] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      searchData.propertyType ||
      searchData.location ||
      searchData.priceRange
    ) {
      const filteredProperties = PropertiesData.filter((property) => {
        const matchType =
          !searchData.propertyType ||
          property.type
            .toLowerCase()
            .includes(searchData.propertyType.toLowerCase());
        const matchLocation =
          !searchData.location ||
          property.location
            .toLowerCase()
            .includes(searchData.location.toLowerCase());
        const matchPrice =
          !searchData.priceRange ||
          property.price <= parseInt(searchData.priceRange);

        return matchType && matchLocation && matchPrice;
      });

      setFilteredData(filteredProperties);
      console.log(filteredProperties);
    } else {
      setFilteredData([]);
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    const sortProperties = (properties) => {
      if (sortOption === "newest") {
        return properties.sort((a, b) => new Date(b.date) - new Date(a.date));
      }
      if (sortOption === "price-low") {
        return properties.sort((a, b) => a.price - b.price);
      }
      if (sortOption === "price-high") {
        return properties.sort((a, b) => b.price - a.price);
      }
      if (sortOption === "size") {
        return properties.sort((a, b) => a.size - b.size);
      }
      return properties;
    };

    const sortedProperties = sortProperties(
      filteredData.length > 0 ? filteredData : PropertiesData
    );
    setFilteredData(sortedProperties);
  }, [sortOption, filteredData]);

  // Handle view details
  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setViewDetails((prev) => !prev);
  };

  // Close modal
  const handleCloseModal = () => {
    setViewDetails(false);
    setSelectedProperty(null);
  };

  const handleContactUs = () => {
    navigate("/contact")
  }

  return (
    <section className="min-h-screen bg-gray-50 pb-">
      <NavBar />
      <div className="bg-white shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Find Your Perfect Home Worldwide
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <input
              type="text"
              name="propertyType"
              placeholder="Property Type"
              value={searchData.propertyType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div className="relative">
              <input
                type="text"
                name="location"
                placeholder="Location (City, Country)"
                value={searchData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="text"
                name="priceRange"
                placeholder="Price Range"
                value={searchData.priceRange}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <DollarSign className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-orange-400 text-white py-3 px-6 rounded-lg hover:bg-orange-500 transition-colors flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Available Properties
          </h2>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="size">Size</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            filteredData.map((property) => (
              <div
                key={property.id}
                className="rounded-lg bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={property.image}
                  alt={property.type}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-bold text-gray-800">
                      {property.type}
                    </h3>
                    <p className="text-orange-500 font-bold">
                      ${property.price}
                    </p>
                  </div>
                  <p className="text-gray-700 flex items-center gap-1 mb-3">
                    <MapPin size={20} />
                    {property.location}
                  </p>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <BedDouble size={18} /> {property.bedrooms} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={18} /> {property.bathrooms} Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <Home size={18} /> {property.size}
                    </span>
                  </div>
                  <button
                    onClick={() => handleViewDetails(property)}
                    className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal for property details */}
      {viewDetails && selectedProperty && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 text-3xl">
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {selectedProperty.type}
            </h2>
            <img
              src={selectedProperty.image}
              alt={selectedProperty.type}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-gray- mb-4 text-xl text-red-700">
              {selectedProperty.location} | ${selectedProperty.price}
            </p>
            <p className="text-gray-600 mb-4 ">{selectedProperty.description}</p>

            {/* Features Section */}
            <div className="text-black mb-4">
              <div className="flex justify-between">
                <span className="flex items-center gap-1 text-lg">
                  <BedDouble size={20} /> {selectedProperty.bedrooms} Bedrooms
                </span>
                <span className="flex items-center gap-1">
                  <Bath size={20} /> {selectedProperty.bathrooms} Bathrooms
                </span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="flex items-center gap-1">
                  <Home size={20} /> {selectedProperty.size}
                </span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleContactUs}
              className="flex flex-col items-center w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
              Contact Us for More Info
            </button>
          </div>
        </div>
      )}

      <div className="pt-5">
        <Footer/>
      </div>
    </section>
  );
};

export default CataloguePage;