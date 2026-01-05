import React from "react";
import PricingSection from "../../../ui-components/LandingPage/Pricing/PricingSection";
import CreditSystemSection from "../../../ui-components/LandingPage/Pricing/CreditSystemSection";
import IncludedSection from "../../../ui-components/LandingPage/Pricing/IncludedSection";
import FAQSection from "../../../ui-components/LandingPage/Pricing/FAQSection";
import Slider from '../../../ui-components/LandingPage/Home/Slider';
import ReadySection from "../../../ui-components/LandingPage/Pricing/ReadySection";

export default function Pricing() {
  return (
    <div className="flex-grow">
      <PricingSection />
      <div className="py-10">
      <Slider /> 
      </div>
      <CreditSystemSection />
      <IncludedSection />
      <FAQSection />
      <ReadySection />
    </div>
  );
}
