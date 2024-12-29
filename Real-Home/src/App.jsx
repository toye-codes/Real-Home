import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import FeaturedProperties from "./components/FeaturedProperties";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";


import React from 'react'

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <FeaturedProperties />
      <Testimonials />
      <Footer />
    </section>
  );
}

export default App