import React from 'react';
import bgImg from '../../../assets/new_assets/gb.png';
import oneSubImg from '../../../assets/new_assets/onesubscription.png';

const OneSubscriptionSection = () => {
  const benefits = [
    "Cleaner operations",
    "Faster execution",
    "Reliable data",
    "One shared credit system",
  ];

  return (
    <section 
      className="relative py-20 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{
        backgroundColor: '#e2f5fb',
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Top Centered Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#00a0dc] text-center mb-16 md:mb-24 tracking-tight">
          One <span className='text-[#005a8c]'>Subscription</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img 
              src={oneSubImg} 
              alt="Platform Suite Ecosystem" 
              className="w-full max-w-[700px] h-auto object-contain"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#00a0dc]/30 bg-[#00a0dc]/5 text-[#00a0dc] font-bold text-xs uppercase tracking-widest shadow-sm">
              SalesDriver
            </div>

            {/* Main Heading */}
            <h3 className="text-4xl md:text-5xl font-bold text-[#005a8c] leading-tight tracking-tight">
              A complete<br />
              B2B sales system.
            </h3>

            {/* Benefits List */}
            <ul className="space-y-5 pt-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4 group cursor-default">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffa500]/10 border border-[#ffa500]/30 flex items-center justify-center group-hover:bg-[#ffa500] transition-colors duration-300">
                    <svg 
                      className="w-3.5 h-3.5 text-[#ffa500] group-hover:text-white transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={3} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-[#005a8c] font-semibold opacity-90 group-hover:opacity-100 transition-opacity">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
};

export default OneSubscriptionSection;
