import React from "react";
import CountUp from "react-countup";
import img1 from "../../../assets/new_assets/WhatWeDo/w1.png";
import img2 from "../../../assets/new_assets/WhatWeDo/w2.png";
import img3 from "../../../assets/new_assets/WhatWeDo/w3.png";
import bgImg from "../../../assets/new_assets/g_bg.png";

const StatItem = ({ number, label }) => {
  // Parse number and symbol (e.g., "20+" -> number: 20, symbol: "+")
  const numericValue = parseInt(number.replace(/[^0-9]/g, ''));
  const symbol = number.replace(/[0-9]/g, '');
  
  return (
    <div className="text-center group cursor-default">
      <div className="relative inline-block">
        {/* Gradient border effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-[#00A1E0] to-[#005F8F] rounded-lg opacity-0 group-hover:opacity-15 blur-lg transition-all duration-500"></div>
        <h3 className="relative text-3xl md:text-5xl font-black text-black mb-1 transform group-hover:scale-110 transition-transform duration-500 tracking-tight">
          <CountUp end={numericValue} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A1E0] to-[#0088CC]">{symbol}</span>
        </h3>
      </div>
      <p className="text-gray-500 text-xs md:text-sm max-w-[150px] mx-auto leading-tight mt-3 font-bold uppercase tracking-wider group-hover:text-[#00A1E0] transition-colors">
        {label}
      </p>
    </div>
  );
};

const CheckListItem = ({ text }) => (
  <div className="flex items-center gap-3 mb-4 group cursor-default">
    <div className="w-6 h-6 rounded-full bg-orange-400/10 border border-orange-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400 transition-colors duration-300">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 4L3.5 6.5L9 1"
          stroke="currentColor"
          className="text-orange-500 group-hover:text-white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <span className="text-gray-700 text-sm md:text-base font-bold opacity-80 group-hover:opacity-100 transition-opacity">{text}</span>
  </div>
);

export default function WhatWeDoSection() {
  return (
    <div className="relative w-full py-12 md:py-20 px-5 md:px-20 font-plus-jakarta overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Gradient border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00A1E0] via-[#005F8F] to-[#00A1E0] rounded-2xl md:rounded-3xl opacity-20 blur-xl"></div>
        
        <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl space-y-16 md:space-y-24 border border-gray-100">
        {/* Part 1: Intro & Stats */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#005F8F] mb-6 tracking-tight">
            What We Do
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-12 md:mb-16 max-w-3xl mx-auto px-2">
            We build sales-driven solutions by combining virtual sales teams,
            automations, and data-driven strategies that grow your revenue.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-b border-gray-100 pb-8 md:pb-12">
            <StatItem number="20+" label="Years of Agency Experience" />
            <StatItem number="$100M+" label="New Business Data" />
            <StatItem number="15+" label="Industries Served Worldwide" />
            <StatItem number="10Ks+" label="of Meetings Booked & Deals Closed" />
          </div>
        </div>

        {/* Part 2: Why we exist */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h3 className="text-3xl md:text-5xl font-black text-[#005F8F] mb-6 tracking-tight">
              Why we exist
            </h3>
            <h4 className="text-lg font-bold text-[#00263A] mb-4">
              B2B sales isn't complicated.
            </h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The industry made it complicated with fifteen different tools,
              overpriced subscriptions, and setups that never get finished.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              SalesDriver brings the core pieces together into one system built
              for real workflows.
            </p>
            <div className="space-y-1">
              <p className="text-xs font-black text-[#00A1E0] uppercase mb-4 tracking-[0.2em]">
                core values:
              </p>
              <CheckListItem text="Total control" />
              <CheckListItem text="Complex setups" />
              <CheckListItem text="Expensive subscriptions" />
              <CheckListItem text="Disconnection" />
              <CheckListItem text="Messy data" />
              <CheckListItem text="Missing structure" />
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src={img1} alt="Why we exist diagram" className="max-w-full" />
          </div>
        </div>

        {/* Part 3: It started as a real problem */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <h3 className="text-3xl md:text-5xl font-black text-[#005F8F] mb-6 tracking-tight">
              It started as <br /> a real problem
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our founder spent more than 20 years building sales systems inside
              agencies, enterprise teams, and fast-moving companies. Everywhere
              he went, he saw the same issues.
            </p>
            <p className="text-[#00263A] font-semibold mb-4">
              The recurring issues:
            </p>
            <div className="space-y-1">
              <CheckListItem text="Poor data quality" />
              <CheckListItem text="Reps working in different tools" />
              <CheckListItem text="Broken tracking" />
              <CheckListItem text="Time lost to software, not selling" />
              <CheckListItem text="Founders stuck overlapping systems together" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src={img2}
              alt="Busy office problem"
              className="w-full rounded-[2rem]"
            />
          </div>
        </div>

        {/* Part 4: Rockford Hunt */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:w-1/2">
            <h3 className="text-3xl md:text-5xl font-black text-[#005F8F] mb-6 tracking-tight">
              Rockford Hunt built <br /> this from experience
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Rockford has spent his entire career in B2B development, sales
              systems, and data.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Rockford Hunt has led sales, built systems, architected data pipelines, led
              rev ops, and closed more than{" "}
              <span className="text-[#00A1E0] font-semibold">
                $200M in revenue
              </span>
              .
            </p>
            <p className="text-gray-600 leading-relaxed">
              SalesDriver is the framework he refined over{" "}
              <span className="text-[#00A1E0] font-semibold">two decades</span>{" "}
              — now turned into a product companies can use on day one.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            {/* Floating Tags */}
            <div className="absolute top-[2%] left-[-5%] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg text-[#005F8F] text-xs md:text-sm font-black border-l-[4px] border-[#00A1E0] hidden md:block z-10 hover:scale-105 transition-transform">
              VP Business Development at Omnicom
            </div>
            <div className="absolute top-[15%] right-[-8%] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg text-[#005F8F] text-xs md:text-sm font-black border-l-[4px] border-[#00A1E0] hidden lg:block z-10 hover:scale-105 transition-transform">
              Designer of multiple<br />enterprise outbound systems
            </div>
            <div className="absolute bottom-[45%] left-[-10%] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg text-[#005F8F] text-xs md:text-sm font-black border-l-[4px] border-[#00A1E0] hidden lg:block z-10 hover:scale-105 transition-transform">
              Developed data products used<br />across agencies & SaaS teams
            </div>
            <div className="absolute bottom-[25%] right-[-5%] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg text-[#005F8F] text-xs md:text-sm font-black border-l-[4px] border-[#00A1E0] hidden md:block z-10 hover:scale-105 transition-transform">
              Built & trained<br />100+ sales reps
            </div>
            <div className="absolute bottom-[5%] left-[20%] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg text-[#005F8F] text-xs md:text-sm font-black border-l-[4px] border-[#00A1E0] hidden md:block z-10 hover:scale-105 transition-transform">
              Rockford Hunt<br />SalesDriver CEO & Founder
            </div>
            
            <img
              src={img3}
              alt="Rockford Hunt"
              className="w-full relative z-0"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
