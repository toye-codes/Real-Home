import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Services from "./pages/Services";
import Catalogue from "./pages/Catalogue";
import Contact from "./pages/Contact"
import AboutPage from "./pages/AboutPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/catalogue",
    element: <Catalogue />,
  },
  {
    path: "/aboutpage",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const clientId =
  "640274954613-crhrds2shij8itrud2vn4ep06658ngc4.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
