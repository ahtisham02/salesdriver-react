import React, { useState } from "react";
import creditBg from "../../../assets/new_assets/credit_system.png";

export default function CreditSystemSection() {
  const [sliderValue, setSliderValue] = useState(1); // 0, 1, 2 for the three tiers
  
  // Define pricing tiers based on slider position
  const pricingTiers = [
    { credits: 1000, name: "Starter", price: 99, creditsText: "1,000 credits / month" },
    { credits: 5000, name: "Growth (Most Popular)", price: 299, creditsText: "5,000 credits / month" },
    { credits: 12000, name: "Enterprise", price: 499, creditsText: "12,000 credits / month" }
  ];
  
  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);
  };

  const currentPlan = pricingTiers[sliderValue];

  return (
    <div className="relative w-full py-20 md:py-32 px-4 md:px-8 lg:px-16 font-plus-jakarta overflow-hidden bg-[#001F2B]">
      {/* Background Image with Parallax-like opacity */}
      <img
        src={creditBg}
        alt="Credit System Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00A1E0]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F59E0B]/5 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Content Card */}
        <div className="bg-[#001F33]/80 backdrop-blur-xl rounded-[40px] p-8 md:p-14 border border-white/10 shadow-2xl animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-[#00A1E0]/10 border border-[#00A1E0]/20 px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A1E0] animate-pulse"></span>
                <span className="text-[#00A1E0] text-xs font-black uppercase tracking-widest">Credits System</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                One balance powers <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A1E0] to-[#00D1FF] animate-gradient">everything</span>
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="text-gray-300 text-lg leading-relaxed font-semibold opacity-80">
                  Instead of managing different credit pools across multiple tools, the SalesDriver System uses a single shared balance.
                </p>
                <p className="text-gray-400 text-base leading-relaxed border-l-2 border-[#00A1E0]/30 pl-6 font-bold opacity-60">
                  Each tool uses credits in a predictable, structured way.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {[
                  "Email discovery", "Verification", "Data pulls", 
                  "Tracking lookups", "Enrichment", "Certain API calls"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group/item cursor-default">
                    <div className="w-2 h-2 rounded-full bg-[#00A1E0] group-hover/item:scale-150 transition-transform shadow-[0_0_10px_rgba(0,161,224,0.5)]"></div>
                    <span className="text-gray-300 text-sm font-bold tracking-wide group-hover/item:text-white transition-colors opacity-80 group-hover/item:opacity-100">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-5">
                <button className="px-10 py-4 bg-[#00A1E0] text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-[#0088CC] transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(0,161,224,0.5)] hover:shadow-xl hover:shadow-[#00A1E0]/40 transform hover:-translate-y-1 active:scale-95">
                  Buy Credits
                </button>
                <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2 group transform hover:-translate-y-1 active:scale-95">
                  View Plans
                  <svg className="transform group-hover:translate-x-1.5 transition-transform duration-300" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Slider & Pricing */}
            <div className="animate-fade-in-right">
              <div className="bg-white/5 backdrop-blur-md rounded-[32px] p-8 md:p-10 border border-white/5 shadow-inner">
                {/* Credit Slider */}
                <div className="mb-12">
                  <div className="flex justify-between items-end mb-6">
                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Select Volume</span>
                    <span className="text-white text-xs font-bold bg-[#00A1E0]/20 px-3 py-1 rounded-full border border-[#00A1E0]/30">{currentPlan.credits.toLocaleString()} Credits</span>
                  </div>
                  
                  {/* Slider Labels */}
                  <div className="flex justify-between text-gray-400 text-[10px] font-bold mb-3 px-1">
                    <span>1,000</span>
                    <span>5,000</span>
                    <span>12,000</span>
                  </div>
                  
                  {/* Custom Slider */}
                  <div className="relative h-10 flex items-center">
                    <input
                      type="range"
                      min="0"
                      max="2"
                      step="1"
                      value={sliderValue}
                      onChange={handleSliderChange}
                      className="w-full h-2.5 bg-[#002B49] rounded-full appearance-none cursor-pointer slider-thumb relative z-10"
                      style={{
                        background: `linear-gradient(to right, #00A1E0 0%, #00A1E0 ${(sliderValue / 2) * 100}%, #002B49 ${(sliderValue / 2) * 100}%, #002B49 100%)`
                      }}
                    />
                    {/* Ticks */}
                    <div className="absolute inset-0 flex justify-between items-center px-[10px] pointer-events-none">
                      {[0, 1, 2].map(i => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= sliderValue ? 'bg-white/50' : 'bg-white/20'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Current Plan Display */}
                <div className="relative overflow-hidden group/plan">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A1E0]/10 to-transparent opacity-0 group-hover/plan:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <h3 className="text-[#00A1E0] font-black text-sm uppercase tracking-widest mb-3">{currentPlan.name}</h3>
                    <p className="text-gray-400 text-xs font-semibold mb-6">{currentPlan.creditsText}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white text-6xl md:text-7xl font-black tracking-tighter">${currentPlan.price}</span>
                      <span className="text-gray-500 text-xl font-medium">/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-left { animation: fade-in-left 1s ease-out 0.2s forwards; opacity: 0; }
        .animate-fade-in-right { animation: fade-in-right 1s ease-out 0.4s forwards; opacity: 0; }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 8px solid #00A1E0;
          box-shadow: 0 0 20px rgba(0, 161, 224, 0.4);
          transition: all 0.3s ease;
        }
        
        .slider-thumb::-moz-range-thumb {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 8px solid #00A1E0;
          box-shadow: 0 0 20px rgba(0, 161, 224, 0.4);
          transition: all 0.3s ease;
        }
        
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 0 30px rgba(0, 161, 224, 0.6);
        }
        
        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 0 30px rgba(0, 161, 224, 0.6);
        }
      `}</style>
    </div>
  );
}
