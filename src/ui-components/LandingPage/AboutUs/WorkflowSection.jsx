import React from "react";
import { ArrowRight } from "lucide-react";

export default function WorkflowSection() {
  return (
    <div className="bg-[#e2f5fb] w-full py-16 px-5 md:px-20 font-plus-jakarta text-[#00263A]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column */}
        <div className="lg:w-1/2 space-y-4">
          <span className="inline-block px-4 py-1 rounded-full border border-[#00a0dc]/30 bg-[#00a0dc]/5 text-[#00a0dc] font-bold text-xs uppercase tracking-widest shadow-sm">
            Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#005F8F] leading-tight tracking-tight">
            Built around what <br /> your team actually does
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Clean data flows to verified contacts. Enrichment connects to
            tracking, which connects to call history, scripts, and AI support.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <button className="relative w-full sm:w-auto px-10 py-3 rounded-full border-2 border-[#005F8F] text-[#005F8F] font-black uppercase tracking-widest text-xs overflow-hidden group transition-all duration-300 hover:shadow-lg active:scale-95">
              <span className="absolute inset-0 bg-gradient-to-r from-[#005F8F] to-[#00A1E0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative group-hover:text-white transition-colors duration-300">Explore</span>
            </button>
            <div className="flex items-center gap-2 text-[#00A1E0] font-black uppercase tracking-widest text-xs cursor-pointer hover:gap-3 transition-all duration-300 group">
              <span className="group-hover:text-[#005F8F] transition-colors">See how it works</span> 
              <ArrowRight size={18} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h4 className="text-[#00A1E0] font-bold text-sm mb-6 uppercase tracking-widest opacity-80">
            SalesDriver is structured around the real workflow of a modern sales
            team:
          </h4>
          <h3 className="text-3xl lg:text-5xl font-black text-[#005F8F] mb-6 tracking-tight">
            You need clean data
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Everything in the system is built to support this, without adding
            noise or unnecessary features.
          </p>
        </div>
      </div>
    </div>
  );
}
