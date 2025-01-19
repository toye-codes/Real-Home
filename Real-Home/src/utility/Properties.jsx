import axios from "axios";
import { useState, useEffect } from "react";
import { MapPin, BedDouble, Bath, Home, ArrowRight } from "lucide-react";

const Properties = () => {

    //  const [results, setResults] = useState([]);
    //   const [loading, setLoading] = useState(false);
    //   const [searchProperties, setSearchProperties] = useState({
    //     propertyType: "",
    //     location: "",
    //     priceRange: "",
    //   });
    
    //   // Getting the event tracker for each value
    //   const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setSearchProperties((prev) => ({
    //       ...prev,
    //       [name]: value,
    //     }));
    //   };
    
    //  const handleSubmit = () => {
    //    // Check if searchProperties contains data before calling the API
    //    if (
    //      searchProperties.propertyType ||
    //      searchProperties.location ||
    //      searchProperties.priceRange
    //    ) {
    //      getListing(); // Call getListing when form is submitted
    //    } else {
    //      console.log("Please fill in the search fields.");
    //    }
    //  };



  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  const getProperties = async () => {
    const url = "http://localhost:5000/properties";

    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      setProperties(data);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch properties");
    }
  };

  useEffect(() => {
    getProperties();
  }, []);


  return (
    <div className="w-auto px-5 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {error ? (
        <p>{error}</p>
      ) : (
        properties.map((property) => (
          <div
            key={property.id}
            className="rounded-xl bg-white overflow-hidden hover:shadow-lg transition-shadow shadow-lg w-auto h-auto my-10">
            {/* Image */}
            <img
              src={property.image}
              alt={property.type}
              className=" rounded-xl w-full h-auto object-cover "
            />

            {/* Property details */}
            <div className="px-5 py-3">
              <div className="flex justify-between gap-5">
                <p className="text-2xl font-bold text-black">{property.type}</p>
                <p className="text-xl text-orange-300 font-bold ">
                  ${property.price}
                </p>
              </div>

              <div className="flex gap-1 py-3">
                <MapPin size={27} />
                <p className="text-gray-700 font-semibold text-lg">
                  {property.location}
                </p>
              </div>

              <div className="flex gap-5 py-2">
                <div className="flex gap-1 text-xl font-normal ">
                  <BedDouble size={27} />
                  <p>Bedrooms: {property.bedrooms}</p>
                </div>

                <div className="flex gap-1 font-normal text-lg">
                  <Bath size={27} />
                  <p>Bathrooms: {property.bathrooms}</p>
                </div>
                <div className="flex gap-1 text-lg font-normal">
                  <Home size={27} />
                  <p>{property.size}</p>
                </div>
              </div>

              <div className="flex flex-col items-center py-2 bg-orange-400 rounded-md text-xl text-white">
                <button className="flex  gap-2 items-center">
                  View Details <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Properties;
