import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/LandingPages/HomeUpdated/Home";
import ServicesPage from "../pages/LandingPages/Services/Services";
import SolutionsPage from "../pages/LandingPages/Solutions/Solutions";
import IndustriesPage from "../pages/LandingPages/Industries/Industries";
import CompanyPage from "../pages/LandingPages/Company/Company";
import ContactUsPage from "../pages/LandingPages/ContactUs/ContactUs";
import CasestudyPage from "../pages/LandingPages/CaseStudy/CaseStudy";
import HowitworksPage from "../pages/LandingPages/Howitworks/Howitworks";
import DictionaryPage from "../pages/LandingPages/Dictionary/Dictionary";
import WebinarPage from "../pages/LandingPages/Webinar/Webinar";
import BlogPage from "../pages/LandingPages/Blog/Blog";
import DataSheetsPage from "../pages/LandingPages/DataSheets/DataSheets";
import WhitePapersPage from "../pages/LandingPages/WhitePapers/WhitePapers";
import DownloadablesPage from "../pages/LandingPages/Downloadables/Downloadables";
import PostDetails from "../pages/LandingPages/PostDetails/PostDetails";
import Privacy from "../pages/LandingPages/Privacy/Privacy";
import Terms from "../pages/LandingPages/Terms/Terms";
import AboutUsPage from "../pages/LandingPages/AboutUs/AboutUs"; // Import About Us
import PricingPage from "../pages/LandingPages/Pricing/Pricing"; // Import Pricing
import PlatformPage from "../pages/LandingPages/Platform/Platform"; // Import Platform
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
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/data-sheets" element={<DataSheetsPage />} />
          <Route path="/white-papers" element={<WhitePapersPage />} />
          <Route path="/downloadables" element={<DownloadablesPage />} />
          <Route path="/about-us" element={<AboutUsPage />} /> {/* New Route */}
          <Route path="/pricing" element={<PricingPage />} /> {/* Pricing Route */}
          <Route path="/platform" element={<PlatformPage />} /> {/* Platform Route */}
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/post/:slug" element={<PostDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
