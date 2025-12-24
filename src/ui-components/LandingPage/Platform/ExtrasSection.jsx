import React from "react";
import saasImg from "../../../assets/new_assets/saas.png";
import bgImg from "../../../assets/new_assets/gb.png";
import { Check } from "lucide-react";

export default function ExtrasSection() {
  const leftFeatures = [
    "CRM",
    "Website hosting",
    "Website security"
  ];

  const rightFeatures = [
    "Social scheduler",
    "Affiliate management system",
    "Bonus SaaS credits from partner programs"
  ];

  return (
    <div className="relative w-full lg:mt-20 py-16 md:py-24 px-5 md:px-20 font-plus-jakarta overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
         <img
              src={saasImg}
              alt="SaaS Platform Extras"
              className="w-[85%] hidden lg:block object-cover -mb-[650px] -ml-[250px]"
            />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src={saasImg}
              alt="SaaS Platform Extras"
              className="w-full lg:hidden object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#004A77] mb-6 leading-tight">
              Extras that replace <br />
              even more <br />
              subscriptions
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Alongside the Platform Suite, you also get access to third-party tools, including:
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Left Column */}
              <div className="space-y-3">
                {leftFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFB800] flex items-center justify-center">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-sm md:text-base font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                {rightFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFB800] flex items-center justify-center">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-sm md:text-base font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
              Everything designed to keep costs tight while you grow.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-[#00A1E0] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#00A1E0]/30 transform hover:scale-105">
                View Plans
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-[#004A77] text-[#004A77] font-semibold rounded-full transition-all duration-300 hover:bg-[#004A77] hover:text-white transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
