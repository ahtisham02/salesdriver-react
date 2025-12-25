import React from "react";
import bgImg from "../../../assets/new_assets/g_bg.png";

export default function Header() {
  return (
    <div className="relative w-full py-12 md:py-20 px-5 md:px-20 text-center font-plus-jakarta overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black pb-4 md:pb-6 leading-tight bg-gradient-to-r from-[#005F8F] via-[#00A1E0] to-[#005F8F] bg-clip-text text-transparent animate-gradient tracking-tight">
          Built for people who <br className="hidden sm:block" /> sell for a living
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-semibold opacity-80">
          SalesDriver exists because B2B sales turned into a maze of tools,
          subscriptions, and scattered systems.
        </p>
        
        {/* Decorative line */}
        <div className="mt-10 w-24 h-1.5 mx-auto bg-gradient-to-r from-transparent via-[#00A1E0] to-transparent rounded-full opacity-60"></div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </div>
  );
}
