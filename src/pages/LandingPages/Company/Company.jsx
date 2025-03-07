import React from "react";
import Header from "../../../ui-components/LandingPage/Company/Header";
import Section from "../../../ui-components/LandingPage/Company/Section";
import Slider from "../../../ui-components/LandingPage/Home/Slider";
import Testimonial1 from "../../../ui-components/LandingPage/Company/Testimonial1";
import Reviews from "../../../ui-components/LandingPage/Services/Reviews";

export default function CompanyPage() {
  return (
    <div className="flex-grow">
      <Header />
      <Testimonial1 />
      <Slider />
      <Section />
      <Reviews />
    </div>
  );
}
