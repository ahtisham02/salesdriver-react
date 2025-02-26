import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/LandingPages/Home/Home";
import Layout from "./LandingPageLayout";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        {/* Landing Page Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
