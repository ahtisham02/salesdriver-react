import React from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../../../assets/new_assets/tech_system.png";
import { Sparkles } from "lucide-react";

export default function ReadySection() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full py-16 md:py-24 px-5 md:px-20 font-plus-jakarta text-white overflow-hidden bg-[#002B49]">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg}
          alt="Technical System Background"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#002B49] via-[#002B49]/80 to-[#002B49]"></div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A1E0]/20 rounded-full blur-[120px] animate-pulse"></div>

      {/* Floating Sparkles */}
      <div className="absolute top-20 right-[15%] animate-float opacity-30">
        <Sparkles size={32} className="text-[#00A1E0]" />
      </div>
      <div className="absolute bottom-20 left-[10%] animate-float-slow opacity-20">
        <Sparkles size={24} className="text-[#F59E0B]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-[#00A1E0]/10 border border-[#00A1E0]/20 px-4 py-1.5 rounded-full mb-8">
          <span className="text-[#00A1E0] text-[10px] font-black uppercase tracking-widest">Get Started</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
          Start your first <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A1E0] via-white to-[#00A1E0] animate-gradient">month free</span>
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
          Get the full SalesDriver System — tools, community, training, marketplace, and AI — with no risk.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <button 
            onClick={() => navigate('/pricing')}
            className="relative px-12 py-5 bg-gradient-to-r from-[#00A1E0] to-[#0088CC] text-white font-black uppercase tracking-widest text-xs rounded-full transition-all duration-500 shadow-xl shadow-[#00A1E0]/20 hover:shadow-2xl hover:shadow-[#00A1E0]/40 transform hover:-translate-y-1 active:scale-95 overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#0088CC] to-[#00A1E0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">Start Free for 30 Days</span>
          </button>
          <button 
            onClick={() => navigate('/platform')}
            className="relative px-12 py-5 bg-transparent border-2 border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full transition-all duration-500 hover:bg-white/5 hover:border-white/30 transform hover:-translate-y-1 active:scale-95 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">Learn more</span>
          </button>
        </div>

        <p className="text-gray-400 text-sm font-bold opacity-60 flex items-center justify-center gap-2 uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A1E0] animate-pulse"></span>
          Plans start at $99 a month
        </p>
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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
