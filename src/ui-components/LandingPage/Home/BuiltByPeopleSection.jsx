import React from 'react';
import builtPeopleImg from '../../../assets/new_assets/builtpeople.png';
import creditBg from '../../../assets/new_assets/credit_system.png';

const BuiltByPeopleSection = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Image/Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src={creditBg}
          alt="Background Texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Built by people <br /> who sell
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-lg leading-relaxed opacity-90">
              SalesDriver came from real frustration. We watched good sales teams struggle with tools that didn't fit how they actually work. So we built something different.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button className="px-8 py-3 rounded-full border-2 border-white/30 bg-white/10 text-white font-black hover:bg-white hover:text-[#003049] transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95">
                Learn about SalesDriver
              </button>
              <a href="#" className="flex items-center gap-2 text-white font-black hover:text-blue-200 transition-all group">
                Contact us
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">›</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-transform duration-700">
              <img
                src={builtPeopleImg}
                alt="Team working together"
                className="w-full h-auto lg:h-[550px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuiltByPeopleSection;
