import React, { useState } from 'react';
import saasImg from '../../../assets/new_assets/B2B/saasnew.png';
import agenciesImg from '../../../assets/new_assets/B2B/agencies.png';
import itMspsImg from '../../../assets/new_assets/B2B/it&msps.png';
import manufacturingImg from '../../../assets/new_assets/B2B/manufacturing.png';
import professionalServicesImg from '../../../assets/new_assets/B2B/professionalservices.png';
import logisticsImg from '../../../assets/new_assets/B2B/logistics.png';
import esteamsImg from '../../../assets/new_assets/B2B/esteams.png';
import founderImg from '../../../assets/new_assets/B2B/founder.png';
import b2bBg from '../../../assets/new_assets/b2b_bg.png';

const B2BPlatformSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: 'SaaS',
      badge: 'SaaS',
      heading: 'Deliver repeatable results',
      description: 'When every quarter runs toward the same goal.',
      subtext: 'Get better sequences, more volume.',
      link1: { text: 'Learn how SaaS teams get results', url: '#' },
      link2: { text: 'Buy Credits', url: '#' },
      image: saasImg,
    },
    {
      id: 1,
      title: 'Agencies',
      badge: 'Agencies',
      heading: 'Track every opportunity',
      description: 'See which campaigns are succeeding when.',
      subtext: 'Better visibility, cleaner attribution.',
      link1: { text: 'Learn how agencies get results', url: '#' },
      link2: { text: 'Buy Credits', url: '#' },
      image: agenciesImg,
    },
    {
      id: 2,
      title: 'IT and MSPs',
      badge: 'IT and MSPs',
      heading: 'Reach buyers earlier',
      description: 'Quality outbound that helps you get in earlier.',
      subtext: 'Cleaner data, better timing.',
      link1: { text: 'Learn how IT and MSPs get results', url: '#' },
      link2: { text: 'Buy Credits', url: '#' },
      image: itMspsImg,
    },
    {
      id: 3,
      title: 'Manufacturing',
      badge: 'Manufacturing',
      heading: 'Win more qualified work',
      description: 'Target the right accounts at the right time.',
      subtext: 'Better targeting, more pipeline.',
      link1: { text: 'Learn how manufacturers get results', url: '#' },
      link2: { text: 'Buy Credits', url: '#' },
      image: manufacturingImg,
    },
    {
      id: 4,
      title: 'Professional services',
      badge: 'Professional services',
      heading: 'Operate with full visibility',
      description: 'See the full picture across teams and campaigns.',
      subtext: 'Unified data, better decisions.',
      link1: { text: 'Learn how professional services get results', url: '#' },
      link2: { text: 'Buy Credits', url: '#' },
      image: professionalServicesImg,
    },
    {
      id: 5,
      title: 'Logistics',
      badge: 'Logistics',
      heading: 'Standardize the entire motion',
      description: 'Build a repeatable system that scales.',
      subtext: 'Consistent process, predictable growth.',
      link1: { text: 'Learn how logistics teams get results', url: '#' },
      link2: { text: 'Buy Credits', url: '#' },
      image: logisticsImg,
    },
    {
      id: 6,
      title: 'Enterprise sales teams',
      badge: 'Enterprise',
      heading: 'Sell without the chaos',
      description: 'Structure that doesn\'t slow you down.',
      subtext: 'Clean data, faster execution.',
      link1: { text: 'Learn how enterprise teams get results', url: '#' },
      link2: { text: 'Buy Credits', url: '#' },
      image: esteamsImg,
    },
    {
      id: 7,
      title: 'Founders doing their own sales',
      badge: 'Founders',
      heading: 'Move faster with less',
      description: 'Get results without a full sales team.',
      subtext: 'Simple tools, real impact.',
      link1: { text: 'Learn how founders get results', url: '#' },
      link2: { text: 'Buy Credits', url: '#' },
      image: founderImg,
    },
  ];

  return (
    <section
      className="relative min-h-screen py-20 md:py-32 px-4 md:px-8 lg:px-16"
      style={{
        background: 'linear-gradient(180deg, #0a4a5c 0%, #0d5a6e 100%)',
      }}
    >
      {/* Optional background image overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${b2bBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header - Responsive */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 md:px-5 py-1.5 md:py-2 bg-[#E5F6FC] text-[#00A7E2] text-xs md:text-sm font-medium rounded-full mb-4 md:mb-6">
            Built by Experts
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight px-4">
            Built for real B2B teams
          </h1>
          <p className="text-base md:text-xl text-white/90 px-4">
            Sales teams that use SalesDriver see the difference fast
          </p>
        </div>

        {/* Main Content Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 md:gap-6 mt-12 md:mt-16 lg:items-stretch">
          {/* Left Sidebar - Vertical Tabs - Horizontal on Mobile */}
          <div className="lg:space-y-0 bg-[#0a5a7a] rounded-xl p-0.5 shadow-xl flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 lg:flex-shrink lg:w-full text-left px-4 md:px-5 py-3 font-semibold text-sm md:text-[15px] transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${
                  activeTab === tab.id
                    ? 'bg-[#d4e9f5] text-[#005a8c]'
                    : 'bg-transparent text-white/90 hover:bg-white/5'
                } ${
                  index === 0 ? 'rounded-l-[10px] lg:rounded-l-none lg:rounded-t-[10px]' : ''
                } ${
                  index === tabs.length - 1 ? 'rounded-r-[10px] lg:rounded-r-none lg:rounded-b-[10px]' : ''
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Right Content Area - Responsive */}
          <div className="bg-[#f0f4f8] rounded-xl overflow-hidden shadow-xl flex flex-col">
            {/* Image - Responsive Height */}
            <div className="w-full flex-shrink-0">
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className="w-full h-[200px] md:h-[300px] object-cover"
              />
            </div>

            {/* Content Card - Responsive Padding */}
            <div className="px-6 md:px-8 py-5 md:py-6 bg-[#f0f4f8] flex-grow flex flex-col">
              {/* Badge */}
              <div className="inline-block px-3 py-0.5 border-2 border-[#00a0dc] text-[#00a0dc] text-xs font-semibold rounded-full mb-2 md:mb-2.5 self-start">
                {tabs[activeTab].badge}
              </div>

              {/* Heading - Responsive */}
              <h2 className="text-2xl md:text-3xl font-bold text-[#005a8c] mb-2 leading-tight">
                {tabs[activeTab].heading}
              </h2>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-700 mb-1 md:mb-2">
                {tabs[activeTab].description}
              </p>

              {/* Subtext */}
              {tabs[activeTab].subtext && (
                <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-5">
                  {tabs[activeTab].subtext}
                </p>
              )}

              {/* Links - Responsive */}
              <div className="flex flex-wrap gap-4 md:gap-6 mt-auto">
                <a
                  href={tabs[activeTab].link1.url}
                  className="text-[#00a0dc] font-semibold hover:text-[#0080b8] flex items-center gap-1.5 transition-colors text-xs md:text-sm group"
                >
                  {tabs[activeTab].link1.text}
                  <span className="text-sm md:text-base transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href={tabs[activeTab].link2.url}
                  className="text-[#00a0dc] font-semibold hover:text-[#0080b8] flex items-center gap-1.5 transition-colors text-xs md:text-sm group"
                >
                  {tabs[activeTab].link2.text}
                  <span className="text-sm md:text-base transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BPlatformSection;
