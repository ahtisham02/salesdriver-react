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
          <div className="text-white space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Built by people who sell
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-lg leading-relaxed">
              SalesDriver came from real frustration. We watched good sales teams struggle with tools that didn't fit how they actually work. So we built something different.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button className="px-8 py-3 rounded-full border border-blue-400 text-white font-medium hover:bg-blue-800/50 transition-colors duration-300">
                Learn about SalesDriver
              </button>
              <a href="#" className="flex items-center gap-2 text-white font-medium hover:text-blue-200 transition-colors group">
                Contact us
                <span className="group-hover:translate-x-1 transition-transform">›</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src={builtPeopleImg}
                alt="Team working together"
                className="w-full h-auto lg:h-[550px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuiltByPeopleSection;
