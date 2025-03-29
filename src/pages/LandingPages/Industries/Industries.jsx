import React from "react";
// import MainHeader from "../../../ui-components/LandingPage/Industries/MainHeader";
import Header from "../../../ui-components/LandingPage/Home/Testimonial3";
import Slider from "../../../ui-components/LandingPage/Home/Slider";
import Testimonial1 from "../../../ui-components/LandingPage/Home/Testimonial1";
import Reviews from "../../../ui-components/LandingPage/Services/Reviews";

export default function HomePage() {
  return (
    <div className="flex-grow">
      {/* <MainHeader /> */}
      <Header />
      <Testimonial1 />
      <Slider />
      <Reviews /> 
    </div>
  );
}
