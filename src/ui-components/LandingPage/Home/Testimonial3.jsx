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
    <div className="px-6 py-8 my-4">
      <div className="mb-8">
        <h1 className="lg:text-[55px] text-3xl text-center font-extrabold text-gray-800 mt-2">
          Industries
        </h1>
      </div>

      <div className="mb-6 pb-3 overflow-x-auto scrollbar-hide">
        <div className="flex justify-center min-w-max">
          {tabs.map(({ name }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`px-6 py-2 sm:text-lg text-base font-medium relative ${
                activeTab === name
                  ? "text-blueclr font-bold border-b-[3px] border-blueclr"
                  : "text-gray-600 border-b-[3px] border-gray-500"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row w-full max-w-5xl bg-white px-8 lg:px-14 py-12 mx-auto rounded-xl">
        {/* Rainbow Border */}
        <div
          className="absolute inset-0 rounded-xl p-[1px]"
          style={{
            background:
              "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
            WebkitMask:
              "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
            zIndex: 0,
          }}
        ></div>

        {/* Content Wrapper to Fix Alignment */}
        <div className="relative flex flex-col md:flex-row w-full bg-white rounded-xl p-6 z-10">
          {/* Left Content */}
          <div className="md:w-1/2 pr-6">
            <h1 className="sm:text-3xl text-2xl lg:!leading-normal font-bold">
              {activeTabData.headline}
            </h1>
            {activeTabData.description.map((desc, index) => (
              <p key={index} className="text-gray-600 mt-2 sm:text-base text-[14px]">
                {desc}
              </p>
            ))}

            <button className="text-blue-500 mt-3 flex items-center sm:text-base text-[14px]">
              {activeTabData.button} <ArrowRight className="ml-2" size={18} />
            </button>

            <div className="mt-4">
              <h2 className="font-semibold flex items-center sm:text-base text-[14px]">
                SERVICE CATEGORY <ChevronDown className="ml-2" size={20} />
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {activeTabData.services.map((service, index) => (
                  <button key={index} className="border p-2 rounded-lg">
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <div className="rounded-lg flex items-center mt-7 sm:mt-0 sm:mb-0 mb-3 justify-center">
              <img className="" src={img} alt="img" />
            </div>

            <div className="mt-6">
              <h2 className="font-semibold flex items-center sm:text-base text-[14px]">
                SOLUTION CATEGORY <ChevronDown className="ml-2" size={20} />
              </h2>
              <div className="grid sm:grid-cols-3 grid-cols-2 text-[14px] sm:text-base gap-2 mt-2">
                <button className="border p-2 rounded-lg">BUTTON</button>
                <button className="border p-2 rounded-lg">BUTTON</button>
                <button className="border p-2 rounded-lg">BUTTON</button>
                <button className="border p-2 rounded-lg">BUTTON</button>
                <button className="border p-2 rounded-lg">BUTTON</button>
                <button className="border p-2 rounded-lg">BUTTON</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}