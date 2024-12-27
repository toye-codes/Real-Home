import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from "./components/About";
import FeaturedProperties from './components/FeaturedProperties'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Services />
    <About />
    <FeaturedProperties />
  </StrictMode>
);
