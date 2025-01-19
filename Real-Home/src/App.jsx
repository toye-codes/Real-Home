import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import FeaturedProperties from "./components/FeaturedProperties";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-gray-200 ">
      <header className="mt-0">
        <Navbar className="fixed w-full" />
        <Hero />
      </header>
      <section>
        <Services />
      </section>
      <section>
        <About />
      </section>
      <section>
        <FeaturedProperties />
      </section>
      <section>
        <Testimonials />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;
