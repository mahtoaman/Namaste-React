import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import ErrorPage from "./src/components/ErrorPage";


// Define the AppLayout
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// Create the root and render
const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<AppLayout />} />
      <Route path="/contact" element={<About />} />

      {/* Catch-all route for invalid paths */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);