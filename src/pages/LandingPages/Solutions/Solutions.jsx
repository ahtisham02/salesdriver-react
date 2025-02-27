import React from "react";
import Header from "../../../ui-components/LandingPage/Solutions/Header";
import Slider from "../../../ui-components/LandingPage/Solutions/Slider";
import Testimonial1 from "../../../ui-components/LandingPage/Solutions/Testimonial1";
import Testimonial4 from "../../../ui-components/LandingPage/Solutions/Testimonial4";
import Reviews from "../../../ui-components/LandingPage/Solutions/Reviews";

export default function HomePage() {
  return (
    <div className="flex-grow">
      <Testimonial4 />
      <Testimonial1 />
      <Slider />
      <Header />
      <Reviews />
    </div>
  );
}
