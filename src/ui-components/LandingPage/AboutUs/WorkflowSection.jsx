import React from "react";
import { ArrowRight } from "lucide-react";

export default function WorkflowSection() {
  return (
    <div className="bg-[#e2f5fb] w-full py-16 px-5 md:px-20 font-plus-jakarta text-[#00263A]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column */}
        <div className="lg:w-1/2">
          <h4 className="text-[#00A1E0] font-bold text-sm tracking-wide uppercase mb-3">
            Workflow
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-[#005F8F] mb-6 leading-tight">
            Built around what your team actually does
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Clean data flows to verified contacts. Enrichment connects to
            tracking, which connects to call history, scripts, and AI support.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <button className="relative w-full sm:w-auto px-8 py-2.5 rounded-full border-2 border-[#005F8F] text-[#005F8F] font-semibold overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <span className="absolute inset-0 bg-gradient-to-r from-[#005F8F] to-[#00A1E0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative group-hover:text-white transition-colors duration-300">Explore</span>
            </button>
            <div className="flex items-center gap-2 text-[#00A1E0] font-semibold cursor-pointer hover:gap-3 transition-all duration-300 group">
              <span className="group-hover:text-[#005F8F] transition-colors">Arrow</span> 
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h4 className="text-[#00A1E0] font-semibold text-sm mb-3">
            SalesDriver is structured around the real workflow of a modern sales
            team:
          </h4>
          <h3 className="text-3xl font-bold text-[#005F8F] mb-4">
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
