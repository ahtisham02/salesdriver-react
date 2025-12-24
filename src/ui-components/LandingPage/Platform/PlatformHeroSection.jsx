import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImg from '../../../assets/new_assets/gb.png';

// Import logos from new_assets/logo
import exactMailsLogo from '../../../assets/new_assets/logo/exactmails (2).png';
import traferaLogo from '../../../assets/new_assets/logo/trafera.io.png';
import mtnVerifyLogo from '../../../assets/new_assets/logo/mtnverify (2).png';
import mtnDataLogo from '../../../assets/new_assets/logo/mtndata (2).png';
import hyperPitchLogo from '../../../assets/new_assets/logo/hyperpitch (2).png';
import salesDriverLogo from '../../../assets/new_assets/logo/salesdriver.png';

const PlatformHeroSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const tools = [
    {
      id: 1,
      logo: exactMailsLogo,
      name: 'ExactMails',
      description: 'Verified email discovery',
      link: 'Learn More',
      featured: true,
    },
    {
      id: 2,
      logo: traferaLogo,
      name: 'Trafera.io',
      description: 'Website visitor identification and behavior tracking',
      link: 'Learn More',
      featured: true,
    },
    {
      id: 3,
      logo: mtnVerifyLogo,
      name: 'MTN Verify',
      description: 'Validation and accuracy at scale',
      link: 'Learn More',
      featured: true,
    },
    {
      id: 4,
      logo: salesDriverLogo,
      name: 'SD Callix',
      description: 'Call tracking, transcripts, and follow-up',
      link: 'Learn More',
      featured: true,
    },
    {
      id: 5,
      logo: mtnDataLogo,
      name: 'MTN Data',
      description: 'Company and contact intelligence',
      link: 'Learn More',
    },
    {
      id: 6,
      logo: salesDriverLogo,
      name: 'Enrichy',
      description: 'Deep enrichment and profile building',
      link: 'Learn More',
    },
    {
      id: 7,
      logo: hyperPitchLogo,
      name: 'HyperPitch',
      description: 'Auto-personalized landing pages for your list',
      link: 'Learn More',
    },
    {
      id: 8,
      logo: salesDriverLogo,
      name: 'AI SDR (light)',
      description: 'Optional automation support',
      link: 'Learn More',
    },
  ];

  const bonusTools = [
    { name: 'CRM' },
    { name: 'Website hosting' },
    { name: 'Website security' },
    { name: 'Social scheduler' },
    { name: 'Affiliate manager' },
    { name: 'SaaS bonus credits' },
    { name: 'Unlimited AI chat' },
  ];

  const filteredTools = activeTab === 'all' 
    ? tools 
    : tools.filter(tool => tool.featured);

  return (
    <section
      className="relative min-h-screen py-20 md:py-32 px-4 md:px-8 lg:px-16"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Top Badge with animation */}
        <div className="text-center mb-6 animate-fade-in">
          <span className="inline-block px-5 py-2 border-2 bg-[#E5F6FC] border-[#00a0dc] text-[#00A7E2] text-sm font-semibold rounded-full hover:bg-[#00a0dc] hover:text-white transition-all duration-300 cursor-pointer">
            Work with SalesDriver
          </span>
        </div>

        {/* Main Heading with gradient text */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-[#005a8c] to-[#00a0dc] bg-clip-text text-transparent leading-tight">
          Your core B2B tools in one system
        </h1>

        {/* Description */}
        <p className="text-center text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto px-4">
          Eight dedicated platforms connected through a single plan and shared credit balance.
        </p>

        {/* CTA Buttons with enhanced hover effects */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            onClick={() => navigate('/pricing')}
            className="px-8 py-3 bg-[#00a0dc] text-white font-semibold rounded-full hover:bg-[#0080b8] hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Self-Run
          </button>
          <button 
            onClick={() => navigate('/services')}
            className="px-8 py-3 text-[#00a0dc] font-semibold hover:text-[#0080b8] hover:bg-[#e8f4f8] rounded-full transition-all duration-300"
          >
            Managed
          </button>
        </div>

        {/* Tab Badge */}
        <div className="text-center mb-6">
          <span className="inline-block px-5 py-2 bg-[#E5F6FC] border-[#00A7E2] border-2 text-[#00A7E2] text-sm font-semibold rounded-full">
            Full plan
          </span>
        </div>

        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-[#005a8c] to-[#00a0dc] bg-clip-text text-transparent leading-tight">
          All tools built to work as one.
        </h1>

        {/* Section Description */}
        <p className="text-center text-gray-700 text-sm md:text-base mb-10 max-w-3xl mx-auto px-4">
          Your built-in tools for data and sales operations.<br className="hidden sm:block" />
          Eight dedicated platforms built to simplify the work into a single credit pool.
        </p>

        {/* Main Content Container - Rounded White Box with shadow */}
        <div className="bg-[#f5fcfe] backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border border-gray-100">
          {/* Tab Navigation with smooth transitions */}
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-[#00a0dc] text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
              }`}
            >
              All tools
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'featured'
                  ? 'bg-[#00a0dc] text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
              }`}
            >
              Featured
            </button>
          </div>

          {/* Tools Grid with stagger animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12">
            {filteredTools.map((tool, index) => (
              <div
                key={tool.id}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#00a0dc] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Logo with hover effect */}
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-7 w-auto object-contain"
                  />
                </div>

                {/* Tool Name */}
                <h3 className="text-lg md:text-xl font-bold text-[#005a8c] mb-2 group-hover:text-[#00a0dc] transition-colors">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {tool.description}
                </p>

                {/* Link with arrow animation */}
                <a
                  href="#"
                  className="text-[#00a0dc] text-sm font-semibold hover:text-[#0080b8] flex items-center gap-1 transition-all group-hover:gap-2"
                >
                  {tool.link}
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Explore Platform Button with pulse effect */}
          <div className="text-center mb-12">
            <button className="px-10 py-3.5 bg-[#00a0dc] text-white font-semibold rounded-full hover:bg-[#0080b8] hover:shadow-xl hover:scale-105 transition-all duration-300">
              Explore the Platform Suite
            </button>
          </div>

          {/* Bonus Tools Badge */}
          <div className="text-center mb-8">
            <span className="inline-block px-5 py-2 bg-[#e8f4f8] text-[#00a0dc] text-sm font-semibold rounded-full">
              Bonus Inclusions
            </span>
          </div>

          {/* Bonus Tools Grid - 3 Column Layout with Checkmarks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4 max-w-5xl mx-auto">
            {bonusTools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-3 group cursor-pointer"
              >
                {/* Checkmark Circle */}
                <div className="w-6 h-6 rounded-full border-2 border-[#ffa500] flex items-center justify-center flex-shrink-0 group-hover:bg-[#ffa500] transition-all duration-300">
                  <svg 
                    className="w-3.5 h-3.5 text-[#ffa500] group-hover:text-white transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                {/* Tool Name */}
                <span className="text-sm md:text-base text-gray-700 font-medium group-hover:text-[#00a0dc] transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformHeroSection;
