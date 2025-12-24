import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import gbBg from "../../../assets/new_assets/gb.png";
import platformImg from "../../../assets/new_assets/8tool.png";
import communityImg from "../../../assets/new_assets/community.png";
import academyImg from "../../../assets/new_assets/academy.png";
import marketplaceImg from "../../../assets/new_assets/marketplace.png";
import assistantImg from "../../../assets/new_assets/assistant.png";
import bonusImg from "../../../assets/new_assets/bonustoola.png";

const tabs = [
  {
    id: "platform",
    label: "Platform",
    title: "Eight tools built for outbound sales",
    description: "ExactMails, MTN Data, Trafera, MTN Verify, Enrichly, HyperPitch, SD Callix, and AI SDR. All included. All working together.",
    image: platformImg,
    benefits: [
      "Clean data and verification",
      "Enrichment and identity",
      "Visitor intelligence",
      "Personalized outreach and call history"
    ]
  },
  {
    id: "community",
    label: "Community",
    title: "A private network for people who sell",
    description: "Weekly calls, member groups, workflow swaps, and real operator support. No noise, no fluff—just a community built to help B2B teams move faster.",
    image: communityImg,
    benefits: [
      "Weekly live sessions",
      "Peer discussions",
      "Workflow exchange",
      "Template sharing",
      "Direct support channel"
    ]
  },
  {
    id: "academy",
    label: "Academy",
    title: "Training built for real pipelines",
    description: "A full library of outbound frameworks, scripts, diagrams, ICP models, and practical execution guides. Everything your team needs to understand the system and improve performance—not theory, just what works.",
    image: academyImg,
    benefits: [
      "System diagrams",
      "Messaging frameworks",
      "Pipeline math",
      "Landing page guidance",
      "Call breakdowns"
    ]
  },
  {
    id: "marketplace",
    label: "Marketplace",
    title: "Talent, services, and opportunities in one place",
    description: "Hire specialists, find gigs, post projects, explore partners, and access services designed for B2B sales teams. A built-in ecosystem that helps you fill gaps and move faster.",
    image: marketplaceImg,
    benefits: [
      "Job board",
      "Project posting",
      "Partner listings",
      "Talent directory",
      "Service offers"
    ]
  },
  {
    id: "ai-assistant",
    label: "AI Assistant",
    title: "Built-in AI tuned to your sales system",
    description: "Get help with messaging, segmentation, workflow planning, troubleshooting, offer development, and call prep. An assistant that understands the SalesDriver System and your pipeline.",
    image: assistantImg,
    benefits: [
      "Rewrite messages",
      "Build workflows",
      "Fix segmentation",
      "Diagnose issues",
      "Guide outreach"
    ]
  },
  {
    id: "bonus-tools",
    label: "Bonus tools",
    title: "Extra tools that replace even more subscriptions",
    description: "CRM, WordPress hosting, security, social scheduling, affiliate management, and partner SaaS credits are included—helping your team reduce software spend while using a single system.",
    image: bonusImg,
    benefits: [
      "Hosting & security",
      "CRM",
      "Scheduling",
      "Affiliate manager",
      "SaaS credit perks"
    ]
  }
];

export default function IncludedSection() {
  const [activeTab, setActiveTab] = useState("platform");
  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="relative w-full py-24 px-5 md:px-20 font-plus-jakarta overflow-hidden bg-white">
      {/* Background Image */}
      <img
        src={gbBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#005895]/5 border border-[#00A1E0]/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-[#005895] text-[10px] font-black uppercase tracking-widest">Included</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#005895] mb-6 leading-tight tracking-tight">
            Every plan comes <br /> 
            <span>with Full System</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-80">
            Regardless of which plan you choose, your team gets
          </p>
        </div>

        {/* Tabs Container */}
        <div className="bg-white/60 backdrop-blur-2xl rounded-[40px] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* Tab Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 bg-gray-50/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-4 text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                  activeTab === tab.id
                    ? "text-[#00A1E0] bg-white shadow-sm scale-[1.01]"
                    : "text-gray-400 hover:text-gray-600 hover:bg-white/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-14 lg:p-20">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              {/* Left Content */}
              <div className="flex-1 text-left" key={activeTab}>
                <div className="animate-reveal">
                  <span className="text-[#00A1E0] text-xs font-black uppercase tracking-widest mb-6 block opacity-60">{currentTab.label}</span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#005895] mb-8 leading-tight tracking-tight">
                    {currentTab.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-10 font-medium font-plus-jakarta">
                    {currentTab.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-5 mb-12">
                    {currentTab.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-4 text-gray-700 font-bold group/benefit animate-reveal-item" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#00A1E0]/20 flex items-center justify-center group-hover/benefit:bg-[#00A1E0]/40 transition-colors">
                          <div className="w-1 h-1 rounded-full bg-[#00A1E0]" />
                        </div>
                        <span className="group-hover/benefit:translate-x-1 transition-transform duration-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-8 animate-reveal" style={{ animationDelay: '400ms' }}>
                    <button className="px-10 py-4 rounded-full border-2 border-[#00A1E0] text-[#00A1E0] font-black uppercase tracking-widest text-xs hover:bg-[#00A1E0] hover:text-white transition-all duration-500 shadow-lg shadow-[#00A1E0]/10 hover:shadow-2xl hover:shadow-[#00A1E0]/30 transform hover:-translate-y-1">
                      Explore Suite
                    </button>
                    <button className="flex items-center gap-3 text-[#00A1E0] font-black uppercase tracking-widest text-xs group cursor-pointer group hover:opacity-80 transition-opacity">
                      Learn Tool
                      <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-500 text-[#00A1E0]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content - Visual */}
              <div className="flex-1 relative">
                <div className="relative aspect-video lg:aspect-square w-full max-w-[650px] mx-auto overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-2xl">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-radial-gradient from-[#00A1E0]/20 to-transparent blur-[100px] animate-pulse" />
                  
                  <div className="relative z-10 w-full h-full p-0">
                    <img
                      src={currentTab.image}
                      alt={currentTab.label}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes reveal-item {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -15px); }
        }
        .animate-reveal { animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-reveal-item { animation: reveal-item 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
