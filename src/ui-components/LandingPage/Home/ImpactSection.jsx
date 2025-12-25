import React from 'react';
import bgImg from '../../../assets/new_assets/gb.png';
import operationalIcon from '../../../assets/new_assets/operationalclarity.png';
import smarterIcon from '../../../assets/new_assets/smarterspend.png';
import strongerIcon from '../../../assets/new_assets/strongerexecution.png';

const ImpactSection = () => {
  const cards = [
    {
      icon: operationalIcon,
      title: "Operational clarity",
      items: [
        "Accurate data",
        "Clean tracking",
        "Clear visitor visibility",
        "Organized call history",
      ]
    },
    {
      icon: smarterIcon,
      title: "Smarter spend",
      items: [
        "Lower total tool spend",
        "One subscription",
        "One credit pool",
      ]
    },
    {
      icon: strongerIcon,
      title: "Stronger execution",
      items: [
        "Reliable enrichment",
        "Operator-built templates",
        "Real support network",
        "Built-in AI assistance",
      ]
    }
  ];

  return (
    <section 
      className="relative py-20 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-start">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#00a0dc]/30 bg-[#00a0dc]/5 text-[#00a0dc] font-bold text-xs uppercase tracking-widest shadow-sm">
              Impact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#005a8c] leading-tight tracking-tight">
              Why teams switch to SalesDriver
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Teams using SalesDriver report lower spend, cleaner data, and faster execution.<br />
              The system works because everything is unified under one plan and credit pool.
            </p>
            <div className="flex items-center gap-6">
              <button className="px-8 py-3 rounded-full border-2 border-[#005a8c] text-[#005a8c] font-bold hover:bg-[#005a8c] hover:text-white transition-all duration-300 hover:shadow-lg active:scale-95">
                Explore
              </button>
              <a href="#" className="text-[#00a0dc] font-bold hover:text-[#0080b8] flex items-center gap-2 group transition-all">
                Learn 
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">›</span>
              </a>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group bg-white/70 backdrop-blur-md rounded-[2rem] p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,160,220,0.1)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="mb-6">
                <img 
                  src={card.icon} 
                  alt={card.title} 
                  className="h-16 w-auto object-contain"
                />
              </div>
              
              <h3 className="text-xl font-bold text-[#005a8c] mb-6">
                {card.title}
              </h3>

              <ul className="space-y-4">
                {card.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-semibold text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Footer text specific to each card/column if needed, or generic styling */}
              <div className="mt-8 pt-6 border-t border-blue-100 text-right">
                 <span className="text-[#005a8c] text-sm font-medium">
                   {index === 0 ? "See everything. Miss nothing." : 
                    index === 1 ? "Spend less. Get more." : 
                    "Execute faster. Win consistently."}
                 </span>
              </div>
            </div>
          ))}
        </div>

      </div>
      
      {/* Decorative Blur/Glow effects to match the soft blue theme */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
    </section>
  );
};

export default ImpactSection;
