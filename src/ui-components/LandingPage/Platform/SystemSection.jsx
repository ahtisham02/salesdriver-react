import React from "react";
import bgImg from "../../../assets/new_assets/g_bg.png";

const FloatingTab = ({ text, className }) => (
  <div
    className={`absolute bg-white px-6 py-2 rounded-2xl shadow-sm text-[#008CC9] font-semibold text-sm md:text-lg hidden xl:block border-l-[3px] border-[#00A1E0] ${className} hover:scale-105 transition-transform duration-300`}
    style={{ boxShadow: "0 4px 20px rgba(0, 140, 201, 0.15)" }}
  >
    {text}
  </div>
);

export default function SystemSection() {
  return (
    <div className="relative w-full py-16 md:py-24 overflow-hidden font-plus-jakarta bg-[#EAF8FF]">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Floating Tabs */}
      <FloatingTab
        text="Find accurate contacts"
        className="top-[10%] left-[10%] -rotate-2"
      />
      <FloatingTab
        text="Verify data"
        className="top-[35%] left-[2%] -rotate-3"
      />
      <FloatingTab
        text="Enrich profiles"
        className="top-[60%] left-[5%] -rotate-3"
      />
      <FloatingTab
        text="Track website activity"
        className="top-[80%] left-[15%] rotate-2"
      />

      <FloatingTab
        text="Understand behavior"
        className="top-[11%] right-[10%] rotate-6"
      />
      <FloatingTab
        text="Record and review calls"
        className="top-[58%] right-[2%] rotate-6"
      />
      <FloatingTab
        text="Send effective outreach"
        className="top-[82%] right-[15%] -rotate-3"
      />
      <FloatingTab
        text="Maintain reliable information"
        className="top-[35%] right-[8%] rotate-2"
      />

      {/* Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-5 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#004A77] mb-6 md:mb-8 leading-tight">
          A clean set of tools that <br /> cover the core <br /> workflow.
        </h2>
        <p className="text-gray-500 text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          B2B teams don't need feature-stuffed platforms.<br /> They need the basics done right.<br />
          SalesDriver keeps each part focused and reliable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <button className="relative px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[#00A1E0] to-[#0088CC] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#00A1E0]/50 transform hover:scale-105 overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-[#0088CC] to-[#00A1E0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative">Discover</span>
          </button>
          <button className="relative px-8 md:px-10 py-3 md:py-4 bg-white/90 backdrop-blur-sm border-2 border-[#8BB9CD] text-[#005F8F] font-semibold rounded-full transition-all duration-300 hover:bg-white hover:border-[#00A1E0] hover:shadow-lg transform hover:scale-105">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
}
