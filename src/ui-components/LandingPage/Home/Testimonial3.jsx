import React, { useState } from "react";
import img from "../../../assets/h1.jpg";
import { ArrowRight, ChevronDown } from "lucide-react";

const tabs = [
  {
    name: "Marketing & Advertising Agencies",
    headline: "More Clients, Less Prospecting",
    description: [
      "Agencies need a steady pipeline of qualified leads to fuel growth.",
      "Our virtual sales reps handle lead generation and appointment setting, so your team can focus on strategy and execution.",
    ],
    button: "Learn More",
    services: [
      "B2B Lead Generation",
      "LinkedIn & Email Outreach",
      "CRM & Pipeline Management",
      "Appointment Setting",
    ],
  },
  {
    name: "SaaS & Technology",
    headline: "Automate Growth with Smarter Outreach",
    description: [
      "Scaling a SaaS business requires consistent lead nurturing.",
      "Our team engages prospects, educates buyers, and converts leads using automated and personalized sales outreach.",
    ],
    button: "Learn More",
    services: [
      "Automated Lead Nurturing",
      "Sales Enablement Strategies",
      "Product Demo & Trial Conversions",
      "CRM & Pipeline Optimization",
    ],
  },
  {
    name: "Business Consulting & Professional Services",
    headline: "Close More High-Value Clients",
    description: [
      "Consultants and professional service providers thrive on trust-based sales.",
      "Our virtual reps connect you with high-value prospects, positioning your expertise for maximum impact.",
    ],
    button: "Learn More",
    services: [
      "High-Value Client Acquisition",
      "Personalized Lead Outreach",
      "LinkedIn Networking & Engagement",
      "Appointment Setting",
    ],
  },
  {
    name: "B2B Service Providers",
    headline: "Scalable Lead Generation, On-Demand",
    description: [
      "Generating a consistent flow of qualified leads is critical for B2B success.",
      "Our team provides scalable outbound prospecting to keep your pipeline full and your sales team closing.",
    ],
    button: "Learn More",
    services: [
      "Scalable Lead Generation",
      "Outbound & Account-Based Marketing",
      "Appointment Setting & Lead Nurturing",
      "CRM & Sales Funnel Optimization",
    ],
  },
  {
    name: "Real Estate & Commercial Development",
    headline: "More Investors & Tenants, Greater Conversions",
    description: [
      "Securing the right investors and tenants takes targeted, relationship-driven sales.",
      "Our outreach team engages, qualifies, and nurtures leads, delivering warm prospects to your sales pipeline.",
    ],
    button: "Learn More",
    services: [
      "Investor Lead Generation",
      "Tenant & Buyer Prospecting",
      "CRM & Relationship Management",
      "Appointment Scheduling",
    ],
  },
  {
    name: "Healthcare & Medical Services",
    headline: "Build Trust, Grow Patient & Provider Networks",
    description: [
      "Healthcare sales require credibility and trust.",
      "Our team specializes in outreach strategies that connect providers, patients, and decision-makers with high-value solutions.",
    ],
    button: "Learn More",
    services: [
      "Healthcare Industry Lead Generation",
      "Trust-Based Sales Outreach",
      "Patient & Provider Engagement",
      "Appointment Coordination",
    ],
  },
  {
    name: "Manufacturing & Industrial Services",
    headline: "Manage Complex Sales Cycles with Precision",
    description: [
      "Selling high-value industrial solutions involves multiple decision-makers and long sales cycles.",
      "Our reps streamline outreach, qualify leads, and guide prospects through every stage.",
    ],
    button: "Learn More",
    services: [
      "Complex Sales Cycle Management",
      "B2B Industrial Lead Generation",
      "Relationship-Based Prospecting",
      "CRM & Pipeline Optimization",
    ],
  },
];

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const activeTabData = tabs.find((tab) => tab.name === activeTab);

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 leading-snug text-center">
        Industries
      </h1>

      <div className="mb-6 pb-3 overflow-x-auto scrollbar-hide">
        <div className="flex justify-start min-w-max space-x-6">
          {tabs.map(({ name }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`px-6 py-2 text-lg font-medium transition-all duration-300 border-b-2 ${
                activeTab === name
                  ? "text-blueclr font-bold border-blueclr"
                  : "text-gray-500 border-gray-300 hover:border-gray-500"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col w-full max-w-5xl bg-white px-6 lg:px-8 py-12 mx-auto rounded-xl shadow-lg border border-gray-200">
        <div className="flex flex-col md:flex-row w-full bg-white rounded-xl p-6 z-10">
          <div className="md:w-1/2 pr-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-800">
              {activeTabData.headline}
            </h2>
            {activeTabData.description.map((desc, index) => (
              <p
                key={index}
                className="text-gray-600 mt-2 text-base sm:text-lg"
              >
                {desc}
              </p>
            ))}
            <button className="text-blueclr hover:text-blue-700 transition duration-300 flex items-center text-lg font-medium mt-4">
              {activeTabData.button} <ArrowRight className="ml-2" size={20} />
            </button>
          </div>

          <div className="md:w-1/2 mt-10 mb-1 md:mb-0 md:mt-0 flex items-center justify-center">
            <img
              src={img}
              alt="Industry"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-10 w-full">
          <h3 className="font-semibold text-lg flex items-center text-gray-800">
            SERVICE CATEGORY <ChevronDown className="ml-2" size={20} />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 w-full">
            {activeTabData.services.map((service, index) => (
              <button
                key={index}
                className="py-3 px-6 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full hover:scale-105 text-gray-800"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
