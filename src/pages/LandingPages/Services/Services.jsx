import React from "react";
import Header from "../../../ui-components/LandingPage/Services/Header";
import Slider from "../../../ui-components/LandingPage/Services/Slider";
import Testimonial1 from "../../../ui-components/LandingPage/Services/Testimonial1";
import Testimonial4 from "../../../ui-components/LandingPage/Services/Testimonial4";
import Reviews from "../../../ui-components/LandingPage/Services/Reviews";

export default function HomePage() {
  return (
    <div className="flex-grow">
      <Header />
      <Testimonial1 />
      <Slider />
      <Testimonial4 />
      <Reviews />
    </div>
  );
}
