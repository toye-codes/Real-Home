import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import FeaturedProperties from "./components/FeaturedProperties";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <About />
      </div>
      <div>
        <FeaturedProperties />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default App;
