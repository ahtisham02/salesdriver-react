import React, { useState, useEffect } from "react";
import PricingCard from "./PricingCard";
import bgImg from "../../../assets/new_assets/p_bg.png";

import { subscriptionService } from "../../../services/subscriptionService";
import { toast } from "react-toastify";

export default function PricingSection() {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await subscriptionService.getPlans();
        setPlans(data);
      } catch (error) {
        console.error("Failed to fetch plans:", error);
        toast.error("Failed to load pricing plans.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlans();
  }, []);

  const handleCheckout = async (planType) => {
    try {
      const successUrl = `${window.location.origin}/profile?session_id={CHECKOUT_SESSION_ID}`;
      const cancelUrl = `${window.location.origin}/pricing`;
      const checkoutUrl = await subscriptionService.createCheckout(planType, successUrl, cancelUrl);
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error(error.message || "Failed to initiate checkout.");
    }
  };

  if (isLoading) {
    return (
      <div className="w-full py-32 flex justify-center items-center bg-gradient-to-b from-[#FFF9E6] to-[#FFF9E6]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00A1E0]"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full py-20 md:py-32 px-4 md:px-8 lg:px-16 font-plus-jakarta overflow-hidden bg-gradient-to-b from-[#FFF9E6] via-[#FFFBF0] to-[#FFF9E6]">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-[10%] w-32 h-32 bg-[#F59E0B]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-[10%] w-48 h-48 bg-[#00A1E0]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Sparkles */}
      <div className="absolute top-[15%] left-[5%] animate-bounce opacity-40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#F59E0B]">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute top-[25%] right-[8%] animate-bounce delay-700 opacity-30">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#F59E0B]">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in space-y-4">
          <div className="inline-block relative">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-[#4A3F35] via-[#B45309] to-[#4A3F35] bg-clip-text text-transparent animate-gradient tracking-tight">
              Three plans.<br />One complete system.
            </h1>
            {/* Decorative line */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent rounded-full opacity-60"></div>
          </div>
          
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mt-8 md:mt-10 mb-6 opacity-90 leading-relaxed">
            No more managing separate credits for every tool. SalesDriver gives you one unified credit
            balance across a single, connected platform.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm italic mb-10">
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            No third-party API keys required
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          </div>
          
          <div className="relative mt-12 mb-16">
            <span className="bg-[#B45309] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl animate-pulse inline-block border border-white/20">
              ✨ Special limited time pricing
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={plan.id || index} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards', opacity: 0 }}>
              <PricingCard 
                plan={plan} 
                isPopular={plan.plan_type === "Business"}
                onCheckout={() => handleCheckout(plan.plan_type)}
              />
            </div>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="text-center opacity-70">
          <p className="inline-flex items-center gap-2 text-gray-700 text-sm font-bold bg-white/40 px-6 py-3 rounded-full border border-gray-100 shadow-sm backdrop-blur-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#00A1E0]">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All plans include: credits, data access, and access to premium tools
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 6s ease infinite;
        }
        .animate-bounce {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
