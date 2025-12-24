import React from "react";
import { Check } from "lucide-react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

export default function PricingCard({ plan, isYearly, isPopular }) {
  const navigate = useNavigate();
  const price = isYearly ? plan.price.yearly : plan.price.monthly;
  
  return (
    <div className={`relative h-full bg-white/80 backdrop-blur-sm rounded-[32px] p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 group hover:-translate-y-2 flex flex-col ${isPopular ? 'ring-2 ring-[#F59E0B] scale-105 z-10 md:my-[-10px] bg-white' : ''}`}>
      
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg border border-white/20">
          Most Popular
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-sm font-black text-[#00A1E0] uppercase tracking-widest mb-8">{plan.name}</h3>
      
      {/* Price */}
      <div className="mb-2">
        <div className="flex items-baseline gap-1">
          <span className="text-gray-500 text-2xl font-bold">$</span>
          <span className="text-5xl md:text-6xl font-black text-[#00A1E0] tracking-tighter">
            <CountUp end={price} duration={1} separator="," />
          </span>
          <span className="text-gray-400 text-lg font-medium">/mo</span>
        </div>
      </div>
      
      {/* Yearly Note */}
      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-10 opacity-60">{plan.yearlyNote}</p>
      
      {/* Features */}
      <div className="space-y-4 mb-10 flex-grow">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 group/item">
            <div className="mt-0.5 w-6 h-6 rounded-full bg-[#FEF3C7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FDE68A] transition-all duration-300 group-hover/item:scale-110">
              <Check size={14} className="text-[#F59E0B]" strokeWidth={3} />
            </div>
            <span className="text-gray-600 text-sm font-medium leading-relaxed group-hover/item:text-black transition-colors">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button 
        onClick={() => navigate('/contact')}
        className={`w-full py-4 rounded-full font-bold transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] active:scale-95 ${
        isPopular 
          ? 'bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white' 
          : 'bg-[#002B49] text-white hover:bg-[#00A1E0]'
      }`}>
        Get started
      </button>
      
      {/* Gradient border effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${isPopular ? 'from-[#F59E0B] to-[#D97706]' : 'from-[#00A1E0] to-transparent'} rounded-[32px] opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-all duration-700`}></div>
    </div>
  );
}
