import React, { useState, useEffect, useRef } from 'react';
import resourcesIcon from '../../../assets/new_assets/Resources/resources.png';
import communityImg from '../../../assets/new_assets/community.png';
import academyImg from '../../../assets/new_assets/academy.png';
import marketplaceImg from '../../../assets/new_assets/marketplace.png';
import aiImg from '../../../assets/new_assets/assistant.png';

const ServicesScrollSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  const steps = [
    {
      id: 'community',
      title: 'Community Network',
      heading: 'Where sales teams actually connect',
      description: 'Join the network for weekly calls, workflow swaps, templates, and real conversations with people who actually sell—not influencers.',
      linkText: 'Enter the Network',
      image: communityImg,
      theme: 'light',
      bgColor: '#e2f5fb',
    },
    {
      id: 'academy',
      title: 'Training academy',
      heading: 'Skills that stick. Results that show.',
      description: 'Frameworks, scripts, sequences, templates, system diagrams, and landing page guidance—built by operators who run real pipelines every day.',
      linkText: 'Visit the Academy',
      image: academyImg,
      theme: 'dark',
      bgColor: '#003049', 
    },
    {
      id: 'marketplace',
      title: 'Marketplace',
      heading: 'Talent and tools in one place',
      description: 'Hire specialists, find gigs, access services built for B2B sales. Everything you need to fill gaps and move faster.',
      linkText: 'Open the Marketplace',
      image: marketplaceImg,
      theme: 'light',
      bgColor: '#ffffff',
    },
    {
      id: 'ai',
      title: 'AI',
      heading: 'Intelligence that moves deals forward',
      description: 'Built-in AI trained on the SalesDriver system to help you write outreach, plan workflows, fix segmentation, and troubleshoot instantly.',
      linkText: 'Talk to SalesDriver AI',
      image: aiImg,
      theme: 'light',
      bgColor: '#e2f5fb',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveStep(index);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const currentTheme = steps[activeStep].theme;

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 md:py-32 px-4 md:px-8 lg:px-16 transition-colors duration-700 ease-in-out`}
      style={{
        backgroundColor: steps[activeStep].bgColor,
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Sticky Column */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32 transition-colors duration-500">
              
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={resourcesIcon} 
                  alt="Resources" 
                  className="h-8 w-auto object-contain"
                />
                <span className={`inline-block px-4 py-1 rounded-full border transition-all duration-500 font-bold text-xs uppercase tracking-widest shadow-sm ${
                  currentTheme === 'dark' 
                    ? 'border-blue-400/30 bg-blue-400/10 text-blue-300' 
                    : 'border-[#00a0dc]/30 bg-[#00a0dc]/5 text-[#00a0dc]'
                }`}>
                  Resources
                </span>
              </div>

              <h2 className={`text-4xl md:text-5xl font-black mb-8 leading-tight transition-colors duration-500 tracking-tight ${
                currentTheme === 'dark' ? 'text-white' : 'text-[#005a8c]'
              }`}>
                Four services built to improve your system
              </h2>

              <p className={`text-lg mb-10 leading-relaxed transition-colors duration-500 ${
                currentTheme === 'dark' ? 'text-blue-100' : 'text-gray-600'
              }`}>
                Community, training, opportunities, and AI support—each designed to help B2B teams learn faster, execute better, and stay ahead.
              </p>

              <div className="flex items-center gap-6">
                <button className={`px-8 py-3 rounded-full border-2 font-black transition-all duration-500 active:scale-95 ${
                  currentTheme === 'dark' 
                    ? 'border-white text-white hover:bg-white hover:text-[#003049] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]' 
                    : 'border-[#005a8c] text-[#005a8c] hover:bg-[#005a8c] hover:text-white hover:shadow-lg'
                }`}>
                  Learn
                </button>
                <a href="#" className={`flex items-center gap-2 font-black transition-colors ${
                  currentTheme === 'dark' 
                    ? 'text-blue-300 hover:text-white' 
                    : 'text-[#005a8c] hover:text-[#00a0dc]'
                } group`}>
                  Video
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">›</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Scrolling Column */}
          <div className="lg:w-2/3 space-y-32">
            {steps.map((step, index) => (
              <div
                key={step.id}
                id={step.id}
                ref={(el) => (stepRefs.current[index] = el)}
                data-index={index}
                className="min-h-[80vh] flex flex-col justify-center"
              >
                {/* Image */}
                <div className="rounded-3xl overflow-hidden shadow-xl mb-6 transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto lg:h-[250px] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="max-w-2xl">
                  <span className={`inline-block px-4 py-1 rounded-full border mb-4 font-bold text-xs uppercase tracking-widest shadow-sm ${
                    step.theme === 'dark' 
                      ? 'border-blue-400/30 bg-blue-400/10 text-blue-300' 
                      : 'border-[#00a0dc]/30 bg-[#00a0dc]/5 text-[#00a0dc]'
                  }`}>
                    {step.title}
                  </span>
                  
                  <h3 className={`text-3xl md:text-5xl font-black mb-6 transition-colors duration-500 tracking-tight ${
                    step.theme === 'dark' ? 'text-white' : 'text-[#005a8c]'
                  }`}>
                    {step.heading}
                  </h3>
                  
                  <p className={`text-lg mb-4 leading-relaxed transition-colors duration-500 ${
                    step.theme === 'dark' ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {step.description}
                  </p>

                  <a href="#" className={`flex items-center gap-2 font-semibold text-lg hover:underline transition-colors ${
                    step.theme === 'dark' ? 'text-white' : 'text-[#005a8c]'
                  }`}>
                    {step.linkText}
                    <span>›</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesScrollSection;
