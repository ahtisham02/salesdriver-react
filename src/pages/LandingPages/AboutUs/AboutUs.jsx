import React from "react";
import Header from "../../../ui-components/LandingPage/AboutUs/Header";
import WhatWeDoSection from "../../../ui-components/LandingPage/AboutUs/WhatWeDoSection";
import WorkflowSection from "../../../ui-components/LandingPage/AboutUs/WorkflowSection";
import BeliefsSection from "../../../ui-components/LandingPage/AboutUs/BeliefsSection";
import TeamSection from "../../../ui-components/LandingPage/AboutUs/TeamSection";
import SystemSection from "../../../ui-components/LandingPage/AboutUs/SystemSection";
import ReadySection from "../../../ui-components/LandingPage/AboutUs/ReadySection";

export default function AboutUs() {
  return (
    <div className="flex-grow">
      <Header />
      <WhatWeDoSection />
      <WorkflowSection />
      <BeliefsSection />
      <TeamSection />
      <SystemSection />
      <ReadySection />
      {/* Content will go here later */}
    </div>
  );
}

