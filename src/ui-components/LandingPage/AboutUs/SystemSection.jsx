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
        text="Stronger data sources and enrichment"
        className="top-[10%] left-[10%] -rotate-2"
      />
      <FloatingTab
        text="Better website intelligence"
        className="top-[35%] left-[2%] -rotate-3"
      />
      <FloatingTab
        text="Cleaner reporting"
        className="top-[60%] left-[5%] -rotate-3"
      />
      <FloatingTab
        text="Integrated partner ecosystem"
        className="top-[80%] left-[15%] rotate-2"
      />

      <FloatingTab
        text="Expanded AI usage"
        className="top-[25%] right-[10%] rotate-6"
      />
      <FloatingTab
        text="Deeper training paths"
        className="top-[58%] right-[2%] rotate-6"
      />
      <FloatingTab
        text="A more active marketplace"
        className="top-[82%] right-[15%] -rotate-3"
      />

      {/* Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-5">
        <h2 className="text-4xl md:text-6xl font-bold text-[#004A77] mb-6 leading-tight">
          The system keeps <br /> getting stronger <br /> without getting heavy
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          More data sources, better enrichment, and deeper AI integration are
          coming. The goal stays the same: structure without noise.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="relative px-8 py-3 bg-gradient-to-r from-[#00A1E0] to-[#0088CC] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#00A1E0]/50 transform hover:scale-105 overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-[#0088CC] to-[#00A1E0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative">Discover</span>
          </button>
          <button className="relative px-8 py-3 bg-white/90 backdrop-blur-sm border-2 border-[#8BB9CD] text-[#005F8F] font-semibold rounded-full transition-all duration-300 hover:bg-white hover:border-[#00A1E0] hover:shadow-lg transform hover:scale-105">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
}
