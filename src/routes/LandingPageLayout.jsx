import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui-components/LandingPage/Common/Navbar";
import Footer from "../ui-components/LandingPage/Common/Footer";
import SLFooter from "../ui-components/LandingPage/Common/SlFooter";

const Layout = () => {
  return (
    <div className="text-black font-plus-jakarta">
      <Navbar />
      <main>
          <div className="pt-16">
            <Outlet />
          </div>
      </main>
      <SLFooter />
      <Footer />
    </div>
  );
};

export default Layout;
