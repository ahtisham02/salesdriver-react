import React from "react";
import bgImg from "../../../assets/new_assets/credit_system.png";
import { ArrowRight } from "lucide-react";

export default function CreditPoolSection() {
  return (
    <div className="relative w-full py-16 md:py-24 px-5 md:px-20 font-plus-jakarta text-white overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg}
          alt="Credit System Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A1E0]/10 rounded-full blur-[120px] animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight tracking-tight">
          One Credit Pool <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A1E0] via-white to-[#00A1E0] animate-gradient">Powers Everything</span>
        </h2>
        
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-bold opacity-90">
          Instead of managing usage across multiple tools, every platform in the SalesDriver Suite operates from one shared credit balance. Simple, predictable, and easy to control.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <button className="relative px-10 md:px-12 py-4 md:py-5 bg-[#00A1E0] text-white font-black uppercase tracking-widest text-xs rounded-full transition-all duration-500 shadow-xl shadow-[#00A1E0]/20 hover:shadow-2xl hover:shadow-[#00A1E0]/40 transform hover:-translate-y-1 active:scale-95 group">
            <span className="relative z-10">See Pricing</span>
          </button>
          <button className="relative px-10 md:px-12 py-4 md:py-5 bg-transparent border-2 border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full transition-all duration-500 hover:bg-white/5 hover:border-white/30 transform hover:-translate-y-1 active:scale-95 group overflow-hidden">
             <div className="flex items-center gap-2">
                <span className="relative z-10">Learn How Credits Work</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
             </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
