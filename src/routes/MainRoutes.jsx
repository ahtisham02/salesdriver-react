import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/LandingPages/Home/Home";
import ServicesPage from "../pages/LandingPages/Services/Services";
import SolutionsPage from "../pages/LandingPages/Solutions/Solutions";
import IndustriesPage from "../pages/LandingPages/Industries/Industries";
import CompanyPage from "../pages/LandingPages/Company/Company";
import ContactUsPage from "../pages/LandingPages/ContactUs/ContactUs";
import CasestudyPage from "../pages/LandingPages/CaseStudy/CaseStudy";
import HowitworksPage from "../pages/LandingPages/Howitworks/Howitworks";
import DictionaryPage from "../pages/LandingPages/Dictionary/Dictionary";
import WebinarPage from "../pages/LandingPages/Webinar/Webinar";
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
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/casestudy" element={<CasestudyPage />} />
          <Route path="/howitworks" element={<HowitworksPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/webinar" element={<WebinarPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
