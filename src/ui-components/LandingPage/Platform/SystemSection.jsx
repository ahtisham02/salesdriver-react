import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../../../assets/new_assets/g_bg.png";

const FloatingTab = ({ text, className, to }) => (
  <Link
    to={to || "#"}
    className={`absolute bg-white/90 backdrop-blur-md px-6 py-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-[#008CC9] font-bold text-sm md:text-base hidden xl:block border border-blue-100 border-l-[4px] border-l-[#00A1E0] ${className} hover:scale-105 hover:shadow-[0_15px_35px_rgba(0,160,220,0.15)] transition-all duration-300 cursor-pointer`}
  >
    {text}
  </Link>
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
        to="/tools/exact-mails"
        className="top-[10%] left-[10%] -rotate-2"
      />
      <FloatingTab
        text="Verify data"
        to="/tools/mtn-verify"
        className="top-[35%] left-[2%] -rotate-3"
      />
      <FloatingTab
        text="Enrich profiles"
        to="/tools/enrichy"
        className="top-[60%] left-[5%] -rotate-3"
      />
      <FloatingTab
        text="Track website activity"
        to="/tools/trafera"
        className="top-[80%] left-[15%] rotate-2"
      />

      <FloatingTab
        text="Understand behavior"
        to="/tools/trafera"
        className="top-[11%] right-[10%] rotate-6"
      />
      <FloatingTab
        text="Record and review calls"
        to="/tools/callix"
        className="top-[58%] right-[2%] rotate-6"
      />
      <FloatingTab
        text="Send effective outreach"
        to="/tools/hyperpitch"
        className="top-[82%] right-[15%] -rotate-3"
      />
      <FloatingTab
        text="Maintain reliable information"
        to="/tools/mtn-verify"
        className="top-[35%] right-[8%] rotate-2"
      />

      {/* Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-5 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#004A77] mb-8 leading-tight tracking-tight">
          A clean set of tools <br /> that cover the <br /> core workflow.
        </h2>
        <p className="text-gray-500 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-semibold opacity-80">
          B2B teams don't need feature-stuffed platforms. They need the basics done right.
          SalesDriver keeps each part focused and reliable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <button className="relative px-10 md:px-12 py-4 bg-[#00A1E0] text-white font-black uppercase tracking-widest text-xs rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_15px_30px_rgba(0,161,224,0.4)] transform hover:-translate-y-1 active:scale-95">
            Discover
          </button>
          <button className="relative px-10 md:px-12 py-4 bg-white/50 backdrop-blur-sm border-2 border-[#8BB9CD]/50 text-[#005F8F] font-black uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:bg-white hover:border-[#008CC9] hover:shadow-lg transform hover:-translate-y-1 active:scale-95">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
}
