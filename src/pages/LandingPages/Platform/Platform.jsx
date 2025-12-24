import React from 'react'
import PlatformReadySection from '../../../ui-components/LandingPage/Platform/PlatformReadySection'
import CreditPoolSection from '../../../ui-components/LandingPage/Platform/CreditPoolSection'
import SystemSection from '../../../ui-components/LandingPage/Platform/SystemSection'
import ExtrasSection from '../../../ui-components/LandingPage/Platform/ExtrasSection'
import B2BPlatformSection from '../../../ui-components/LandingPage/Platform/B2BPlatformSection'
import Slider from '../../../ui-components/LandingPage/Home/Slider';
import DeepDiveSection from '../../../ui-components/LandingPage/Platform/DeepDiveSection';
import PlatformHeroSection from '../../../ui-components/LandingPage/Platform/PlatformHeroSection';

const Platform = () => {
  return (
    <div className="flex-grow">
      <PlatformHeroSection />
      <div className="py-10">
        <Slider /> 
      </div>
      <DeepDiveSection />
      <SystemSection />
      <CreditPoolSection />
      <ExtrasSection />
      <B2BPlatformSection />
      <PlatformReadySection />
    </div>
  )
}

export default Platform


