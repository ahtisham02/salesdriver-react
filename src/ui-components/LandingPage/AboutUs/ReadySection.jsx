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
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
          Ready to start <br /> building better for B2B
        </h2>
        <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          SalesDriver isn’t a tool you’ll forget about next month. <br className="hidden md:block" />
          SalesDriver gives you the structure your team needs to move fast and
          close deals.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <button className="relative px-12 py-4 bg-[#00A1E0] text-white font-black uppercase tracking-widest text-xs rounded-full transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(0,161,224,0.5)] hover:shadow-2xl hover:shadow-[#00A1E0]/40 transform hover:-translate-y-1 active:scale-95 overflow-hidden group">
            <span className="relative z-10">Start free</span>
          </button>
          <button className="relative px-12 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white hover:shadow-lg transform hover:-translate-y-1 active:scale-95 overflow-hidden group">
            <span className="relative z-10">Learn more</span>
          </button>
        </div>

        <p className="text-gray-400 text-sm">
          Plans start at $99 a month, and your first month is free.
        </p>
      </div>
    </div>
  );
}
