import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/LandingPages/Home/Home";
import ServicesPage from "../pages/LandingPages/Services/Services";
import SolutionsPage from "../pages/LandingPages/Solutions/Solutions";
import IndustriesPage from "../pages/LandingPages/Industries/Industries";
import Layout from "./LandingPageLayout";
import ScrollToTop from "../utils/ScrollToTop";

const MainRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Landing Page Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
