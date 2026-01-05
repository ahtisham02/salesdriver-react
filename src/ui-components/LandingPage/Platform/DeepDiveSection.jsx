import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// Import logos
import logo1 from '../../../assets/new_assets/B2B/logo/logo1.png';
import logo2 from '../../../assets/new_assets/B2B/logo/logo2.png';
import logo3 from '../../../assets/new_assets/B2B/logo/logo3.png';
import logo4 from '../../../assets/new_assets/B2B/logo/logo4.png';
import logo5 from '../../../assets/new_assets/B2B/logo/logo5.png';
import logo6 from '../../../assets/new_assets/B2B/logo/logo6.png';
import logo7 from '../../../assets/new_assets/B2B/logo/logo7.png';
import logo8 from '../../../assets/new_assets/B2B/logo/logo8.png';

// Import tool images
import exactMailsImg from '../../../assets/new_assets/DeepDive/exactmails.png';
import mtnDataImg from '../../../assets/new_assets/DeepDive/mtndata.png';
import traferaImg from '../../../assets/new_assets/DeepDive/trafera.png';
import mtnVerifyImg from '../../../assets/new_assets/DeepDive/mtnverify.png';
import enrichyImg from '../../../assets/new_assets/DeepDive/enrichy.png';
import hyperPitchImg from '../../../assets/new_assets/DeepDive/hyperpitch.png';
import callixImg from '../../../assets/new_assets/DeepDive/callix.png';
import aisdrImg from '../../../assets/new_assets/DeepDive/aisdr.png';

const DeepDiveSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  const tools = [
    {
      id: 0,
      name: 'Exact Mails',
      logo: logo1,
      title: 'Verified email discovery',
      description: 'Finds verified business emails tied to real prospects.',
      details: 'Uses multi-step verification so you don\'t burn domains or waste time on bad addresses.',
      useCases: [
        'Build accurate contact lists',
        'Replace outdated CRM emails',
        'Supply SDRs with clean data',
        'Refresh old databases',
        'Fill missing emails from ICP lists',
      ],
      whyItMatters: 'Clean, predictable, and structured for high-volume teams.',
      links: [
        { text: 'See More', url: '/tools/exact-mails' },
        { text: 'Video', url: '#' },
      ],
      image: exactMailsImg,
      slug: 'exact-mails'
    },
    {
      id: 1,
      name: 'MTN Data',
      logo: logo2,
      title: 'Company and contact intelligence',
      description: 'Delivers detailed company data, job titles, revenue, signals, and contact attributes.',
      details: 'The power of targeting, segmentation, scoring, and market understanding.',
      useCases: [
        'ICP building',
        'Account research',
        'Territory mapping',
        'Accurate segmentation',
      ],
      whyItMatters: 'You get structured intelligence without just for an unverified email.',
      links: [
        { text: 'See More', url: '/tools/mtn-data' },
        { text: 'Video', url: '#' },
      ],
      image: mtnDataImg,
      slug: 'mtn-data'
    },
    {
      id: 2,
      name: 'TRAFERA.IO',
      logo: logo3,
      title: 'Website visitor identification and behavior tracking',
      description: 'Shows which companies visit your site and what they may click, without relying on outdated tracking methods.',
      details: 'You see high-level activity and patterns that standard analytics miss.',
      useCases: [
        'Identify warm buyers',
        'Trigger outreach on key accounts visit',
        'See which pages influence pipeline',
        'Prioritize ICP follow-up',
      ],
      whyItMatters: 'Timing gives you clarity most teams don\'t have.',
      links: [
        { text: 'See More', url: '/tools/trafera' },
        { text: 'Video', url: '#' },
      ],
      image: traferaImg,
      slug: 'trafera'
    },
    {
      id: 3,
      name: 'MTN Verify',
      logo: logo4,
      title: 'Email and data validation',
      description: 'Verifies emails and data fields to protect deliverability, reduce bounce rates, and level databases lasting.',
      details: 'You stop wasting sends on bad data that standard validators miss.',
      useCases: [
        'Validate',
        'Clean old CRM data',
        'Prevent list decay',
        'Keep enrichment emails accurate',
        'Protect sender reputation',
      ],
      whyItMatters: 'You stop wasting credits on bad data.',
      links: [
        { text: 'See More', url: '/tools/mtn-verify' },
        { text: 'Video', url: '#' },
      ],
      image: mtnVerifyImg,
      slug: 'mtn-verify'
    },
    {
      id: 4,
      name: 'ENRICHY',
      logo: logo5,
      title: 'Deep enrichment and profile building',
      description: 'This team partial records into strong, usable targets.',
      details: 'Fills in missing data, adds context, and completes profiles for contacts and companies.',
      useCases: [
        'Account-level research',
        'Persona-specific needs',
        'Append missing fields',
        'CRM cleanup and scoring',
        'Multi-source targeting',
      ],
      whyItMatters: 'Your pipelines stop relying on weak or incomplete profiles.',
      links: [
        { text: 'See More', url: '/tools/enrichy' },
        { text: 'Video', url: '#' },
      ],
      image: enrichyImg,
      slug: 'enrichy'
    },
    {
      id: 5,
      name: 'HyperPitch.io',
      logo: logo6,
      title: 'Mass personalized landing pages',
      description: 'Creates flat, mass landing pages for outreach, follow-up, or warm touches.',
      details: 'Auto-personalized landing pages for your full list.',
      useCases: [
        'Higher response rates',
        'Personalized introductions',
        'Account follow-up',
        'Deal acceleration',
        'Event-based outreach',
      ],
      whyItMatters: 'Direct, fast conversations that stands out without forcing reps to burn hours on warm touches.',
      links: [
        { text: 'See More', url: '/tools/hyperpitch' },
        { text: 'Video', url: '#' },
      ],
      image: hyperPitchImg,
      slug: 'hyperpitch'
    },
    {
      id: 6,
      name: 'CALLIX',
      logo: logo7,
      title: 'Call recording, transcripts, notes, and searchable history',
      description: 'Captures calls, transcribes them, organizes notes, and makes follow-up simple.',
      details: 'Reps don\'t lose context. Managers don\'t need to rely on memory.',
      useCases: [
        'CRM call reviews',
        'QA and coaching',
        'Pipeline insights',
        'Handoff clarity',
        'Multithreaded sales reporting',
      ],
      whyItMatters: 'Call history becomes an asset instead of a blind spot.',
      links: [
        { text: 'See More', url: '/tools/callix' },
        { text: 'Video', url: '#' },
      ],
      image: callixImg,
      slug: 'callix'
    },
    {
      id: 7,
      name: 'AI SDR (LIGHT)',
      logo: logo8,
      title: 'Optional automation support',
      description: 'Provides support for replies, follow-up logic, and light assistance without trying to run your entire pipeline.',
      details: 'You stay in control. The AI handles the repetitive stuff.',
      useCases: [
        'Draft responses',
        'Handle follow-up',
        'Route qualified leads',
        'Reverse messaging',
        'Create versions of email personas',
      ],
      whyItMatters: 'Useful but not intrusive.',
      links: [
        { text: 'See More', url: '/tools/aisdr-light' },
        { text: 'Video', url: '#' },
      ],
      image: aisdrImg,
      slug: 'aisdr-light'
    },
  ];

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(index);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px',
        }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#0a4a5c] to-[#0d5a6e] py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
            Deep Dive our Tools
          </h2>
          
          {/* Tab Navigation - Responsive */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2">
            {tools.map((tool, index) => (
              <button
                key={tool.id}
                onClick={() => {
                  setActiveSection(index);
                  sectionRefs.current[index]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }}
                className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === index
                    ? 'bg-white text-[#0a4a5c] shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tool.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Scrollable Content */}
          <div className="space-y-24 md:space-y-32">
            {tools.map((tool, index) => (
              <div
                key={tool.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                onClick={() => window.location.href = `/tools/${tool.slug}`}
                className="min-h-[400px] md:min-h-[500px] cursor-pointer group"
              >
                {/* Logo */}
                <div className="mb-4 md:mb-6">
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="h-6 md:h-8 w-auto object-contain"
                  />
                </div>

                {/* Title - Responsive */}
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight group-hover:text-[#00a0dc] transition-colors">
                  {tool.title}
                </h3>

                {/* Description - Responsive */}
                <p className="text-base md:text-xl text-white/90 mb-3 md:mb-4">
                  {tool.description}
                </p>

                {/* Details - Responsive */}
                <p className="text-sm md:text-base text-white/70 mb-3 md:mb-4">
                  {tool.details}
                </p>

                {/* Why It Matters / Benefit / Credit Usage */}
                <div className="mb-6 md:mb-8 p-4 md:p-5 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-all">
                  <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                    {tool.id === 2 ? 'Why it matters:' : 
                     tool.id === 4 ? 'Benefit:' : 
                     'Credit usage'}
                  </h4>
                  <p className="text-sm md:text-base text-white/80">{tool.whyItMatters}</p>
                </div>

                {/* Links - Responsive */}
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {tool.links.map((link, idx) => (
                    <div
                      key={idx}
                      className="text-white font-semibold hover:text-white/80 flex items-center gap-2 transition-all hover:gap-3 text-sm md:text-base group/link"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = link.url;
                      }}
                    >
                      {link.text}
                      <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Sticky Content with Image - Responsive */}
          <div className="lg:sticky lg:top-24">
            <div className="space-y-4 md:space-y-6">
              {/* Use Cases - Responsive Grid */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10">
                <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Use cases</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-3">
                  {tools[activeSection].useCases.map((useCase, idx) => (
                    <li key={idx} className="text-white/80 flex items-start text-sm md:text-base">
                      <span className="mr-2 text-[#00a0dc]">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image - Responsive */}
              <div className="bg-white/5 relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
                {tools.map((tool, index) => (
                  <img
                    key={tool.id}
                    src={tool.image}
                    alt={tool.title}
                    className={`w-full h-auto rounded-2xl md:rounded-3xl transition-all duration-700 ease-in-out ${
                      activeSection === index
                        ? 'opacity-100 relative'
                        : 'opacity-0 absolute inset-0 pointer-events-none'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepDiveSection;
