import React from "react";
import Header from "../../../ui-components/LandingPage/Industries/Header";
import Slider from "../../../ui-components/LandingPage/Industries/Slider";
import Testimonial1 from "../../../ui-components/LandingPage/Industries/Testimonial1";
// import Testimonial4 from "../../../ui-components/LandingPage/Services/Testimonial4";
import Reviews from "../../../ui-components/LandingPage/Industries/Reviews";

export default function HomePage() {
  return (
    <div className="flex-grow">
      <Header />
      <Testimonial1 />
      <Slider />
      <Reviews /> 
      {/* 
      <Testimonial4 />
      */}
    </div>
  );
}
