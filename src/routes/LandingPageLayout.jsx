import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../ui-components/LandingPage/Common/Navbar";
import Footer from "../ui-components/LandingPage/Common/Footer";
import SLFooter from "../ui-components/LandingPage/Common/SlFooter";

const Layout = () => {
  const location = useLocation();
  const isPostPage = location.pathname.startsWith("/post/");

  return (
    <div className="text-black font-plus-jakarta">
      <Navbar />
      <main>
        <div className={isPostPage ? "" : "pt-16"}>
          <Outlet />
        </div>
      </main>
      <SLFooter />
      <Footer />
    </div>
  );
};

export default Layout;
