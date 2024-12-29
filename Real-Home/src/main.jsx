import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from "./components/About";
import FeaturedProperties from './components/FeaturedProperties'
import Testimonials from './components/Testimonial'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);


