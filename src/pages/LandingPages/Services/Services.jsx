import React from "react";
import Header from "../../../ui-components/LandingPage/Services/Header";
// import MainHeader from "../../../ui-components/LandingPage/Services/MainHeader";
import Slider from "../../../ui-components/LandingPage/Home/Slider";
import Testimonial1 from "../../../ui-components/LandingPage/Home/Testimonial1";
import Testimonial4 from "../../../ui-components/LandingPage/Home/Testimonial4";
import Reviews from "../../../ui-components/LandingPage/Services/Reviews";

export default function HomePage() {
  return (
    <div className="flex-grow">
      {/* <MainHeader /> */}
      <Header />
      <Testimonial1 />
      <Slider />
      <Testimonial4 />
      <Reviews />
    </div>
  );
}
