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
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <main>
      <header>
        <Navbar />
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
