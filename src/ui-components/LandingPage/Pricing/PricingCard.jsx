import React from "react";
import { Check } from "lucide-react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

export default function PricingCard({ plan, isYearly, isPopular }) {
  const navigate = useNavigate();
  const price = isYearly ? plan.price.yearly : plan.price.monthly;
  
  return (
    <div className={`relative h-full bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,160,220,0.1)] transition-all duration-500 border border-white/60 group hover:-translate-y-2 flex flex-col ${isPopular ? 'ring-[3px] ring-[#F59E0B]/30 scale-105 z-10 md:my-[-10px] bg-white border-[#F59E0B]/10' : ''}`}>
      
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute text-nowrap -top-4 left-1/2 -translate-x-1/2 bg-[#B45309] text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-xl border border-white/20">
          Most Popular
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-xs font-black text-[#00A1E0] uppercase tracking-[0.2em] mb-10">{plan.name}</h3>
      
      {/* Price */}
      <div className="mb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-gray-400 text-2xl font-black tracking-tighter">$</span>
          <span className="text-5xl md:text-7xl font-black text-[#003049] tracking-tighter">
            <CountUp end={price} duration={1} separator="," />
          </span>
          <span className="text-gray-400 text-xl font-bold">/mo</span>
        </div>
      </div>
      
      {/* Yearly Note */}
      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-10 opacity-60">{plan.yearlyNote}</p>
      
      {/* Features */}
      <div className="space-y-4 mb-10 flex-grow">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 group/item">
            <div className="w-6 h-6 rounded-full bg-[#FEF3C7] border border-[#FDE68A] flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#F59E0B] transition-all duration-300">
              <Check size={12} className="text-[#B45309] group-hover/item:text-white transition-colors duration-300" strokeWidth={4} />
            </div>
            <span className="text-gray-600 text-sm font-bold opacity-80 group-hover/item:opacity-100 transition-opacity">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button 
        onClick={() => navigate('/contact')}
        className={`w-full py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:scale-95 ${
        isPopular 
          ? 'bg-[#B45309] text-white shadow-[0_10px_20px_-10px_rgba(180,83,9,0.5)]' 
          : 'bg-[#003049] text-white hover:bg-[#002B49] shadow-[0_10px_20px_-10px_rgba(0,48,73,0.5)]'
      }`}>
        Get started
      </button>
      
      {/* Gradient border effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${isPopular ? 'from-[#F59E0B] to-[#D97706]' : 'from-[#00A1E0] to-transparent'} rounded-[32px] opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-all duration-700`}></div>
    </div>
  );
}
