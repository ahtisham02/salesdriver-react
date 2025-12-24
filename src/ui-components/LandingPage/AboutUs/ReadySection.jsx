import React from "react";
import bgImg from "../../../assets/new_assets/tech_system.png";

export default function ReadySection() {
  return (
    <div className="relative w-full py-24 px-5 md:px-20 font-plus-jakarta text-white overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg}
          alt="Technical System Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#002B49] bg-opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to start <br /> building better for B2B
        </h2>
        <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          SalesDriver isn’t a tool you’ll forget about next month. <br className="hidden md:block" />
          SalesDriver gives you the structure your team needs to move fast and
          close deals.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button className="relative px-8 py-3 bg-gradient-to-r from-[#00A1E0] to-[#0088CC] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#00A1E0]/50 transform hover:scale-105 overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-[#0088CC] to-[#00A1E0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative">Start free</span>
          </button>
          <button className="relative px-8 py-3 bg-transparent border-2 border-[#527a91] text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white hover:shadow-lg transform hover:scale-105 overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative">Learn more</span>
          </button>
        </div>

        <p className="text-gray-400 text-sm">
          Plans start at $99 a month, and your first month is free.
        </p>
      </div>
    </div>
  );
}
