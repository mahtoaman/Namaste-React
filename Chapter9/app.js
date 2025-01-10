import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import ErrorPage from "./src/components/ErrorPage";

// Define the AppLayout component with Header and Footer, and render children in between
const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>{" "}
      {/* The "children" will be dynamic content based on the route */}
      <Footer />
    </>
  );
};

// Create the root and render
const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      {/* Route with the AppLayout that always includes Header and Footer */}
      <Route
        path="/"
        element={
          <AppLayout>
            <Body />
          </AppLayout>
        }
      />
      <Route
        path="/about"
        element={
          <AppLayout>
            <About />
          </AppLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <AppLayout>
            <Body />
          </AppLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <AppLayout>
            <About />
          </AppLayout>
        }
      />

      {/* Catch-all route for invalid paths */}
      <Route
        path="*"
        element={
          <AppLayout>
            <ErrorPage />
          </AppLayout>
        }
      />
    </Routes>
  </BrowserRouter>
);
