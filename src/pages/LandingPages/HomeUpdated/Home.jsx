import React from 'react'
import Header from '../../../ui-components/LandingPage/Home/Header';
import Slider from '../../../ui-components/LandingPage/Home/Slider';
import FAQSection from '../../../ui-components/LandingPage/Pricing/FAQSection';
import CreditSystemSection from '../../../ui-components/LandingPage/Pricing/CreditSystemSection';
import PricingSection from '../../../ui-components/LandingPage/Pricing/PricingSection';
import B2BPlatformSection from '../../../ui-components/LandingPage/Platform/B2BPlatformSection';
import HomeHeroSection from '../../../ui-components/LandingPage/Home/HomeHeroSection';
import RealStoriesSection from '../../../ui-components/LandingPage/Home/RealStoriesSection';
import BuiltByPeopleSection from '../../../ui-components/LandingPage/Home/BuiltByPeopleSection';
import ImpactSection from '../../../ui-components/LandingPage/Home/ImpactSection';
import OneSubscriptionSection from '../../../ui-components/LandingPage/Home/OneSubscriptionSection';
import ServicesScrollSection from '../../../ui-components/LandingPage/Home/ServicesScrollSection';
import PlatformHeroSection from '../../../ui-components/LandingPage/Platform/PlatformHeroSection';

export default function HomePage() {
   return (
       <div className="flex-grow">
         <HomeHeroSection />
         <PlatformHeroSection />
         <OneSubscriptionSection />
         <B2BPlatformSection />
         <ServicesScrollSection />
         <ImpactSection />
         <PricingSection />
         <div  className="py-10">
           <Slider />
         </div>
         <CreditSystemSection />
         <RealStoriesSection />
         <FAQSection />
         <BuiltByPeopleSection />
       </div>
   );
}
