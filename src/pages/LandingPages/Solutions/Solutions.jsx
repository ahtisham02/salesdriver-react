import React from "react";
import Header from "../../../ui-components/LandingPage/Solutions/Header";
// import MainHeader from "../../../ui-components/LandingPage/Solutions/MainHeader";
import Slider from "../../../ui-components/LandingPage/Home/Slider";
import Testimonial1 from "../../../ui-components/LandingPage/Home/Testimonial1";
import Testimonial2 from "../../../ui-components/LandingPage/Home/Testimonial2";
import Reviews from "../../../ui-components/LandingPage/Services/Reviews";

export default function HomePage() {
  return (
    <div className="flex-grow">
      {/* <MainHeader /> */}
      <Header />
      <Testimonial1 />
      <Slider />
      <Testimonial2 />
      <Reviews />
    </div>
  );
}
