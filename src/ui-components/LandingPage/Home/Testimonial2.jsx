import React, { useState } from "react";
import img from "../../../assets/h1.jpg";
import {
  ChevronRight,
  ChevronDown,
  Activity,
  TrendingUp,
  Database,
  FileText,
  Zap,
  Search,
  ArrowRight,
} from "lucide-react";

const tabs = [
  {
    name: "Strategy",
    heading: "Strategy",
    icon: Activity,
    description:
      "SalesDriver’s strategy services provide agencies with a structured, data-driven approach to acquiring new clients. Our experts analyze the customer journey, optimize touchpoints, and create a scalable sales roadmap that drives predictable growth.",
    btn1: "Dedicated Account and Project Manager",
    btn2: "Sales Acquisition Strategy",
    btn3: "Customer Journey",
    btn4: "Mapping/Tracking",
    btn5: "Weekly Review Meeting",
  },
  {
    name: "Sales",
    heading: "Sales",
    icon: TrendingUp,
    description:
      "Our sales services focus on engaging, nurturing, and converting leads into paying clients. We combine AI-driven automation with human expertise to create an efficient, scalable sales funnel.",
    btn1: "Sales Support",
    btn2: "Top of funnel SDR",
    btn3: "AI Sales Chatbot",
    btn4: "Live Reporting Dashboard",
    btn5: "Hot Lead Caller",
  },
  {
    name: "Data",
    heading: "Data & CRM Management",
    icon: Database,
    btn1: "20 Domains: 60 Warmed Emails",
    btn2: "Lead Scoring",
    btn3: "4000 Appended Leads (Buyer & Hiring Intent Data)",
    btn4: "CRM",
    description:
      "SalesDriver integrates data intelligence and CRM solutions to track, manage, and score leads, ensuring sales teams focus on high-priority prospects with the highest likelihood of conversion.",
  },
  {
    name: "Content",
    heading: "Content & Brand Marketing",
    icon: FileText,
    btn1: "Landing Page Creation",
    btn2: "Content Marketing",
    btn3: "Social Media Management",
    btn4: "Content Creation",
    description:
      "High-quality content fuels successful sales. Our content and branding services help agencies attract, educate, and convert prospects through compelling storytelling, design, and digital engagement.",
  },
  {
    name: "Automation",
    heading: "Automation",
    icon: Zap,
    btn1: "AI-Driven Management",
    btn2: "Email,and Social Media Outreach: 12-touch setup",
    btn3: "Campaign Automation",
    description:
      "SalesDriver’s AI-powered automation services remove manual work, allowing agencies to scale lead generation and client engagement efficiently.",
  },
  {
    name: "SEO/Ads",
    heading: "SEO & Digital Advertising",
    icon: Search,
    btn1: "On-page SEO",
    btn2: "IP, Link, Journey, and Heat Map Tracking",
    btn3: "PPC Management",
    btn4: "Backlinks package",
    description:
      "High-quality content fuels successful sales. Our content and branding services help agencies attract, educate, and convert prospects through compelling storytelling, design, and digital engagement.",
  },
];

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState("Strategy");

  const activeTabData = tabs.find((tab) => tab.name === activeTab);

  return (
    <div className="px-6 py-8 my-4">
      <div className="mb-8">
        <p className="sm:text-[12px] text-[11px] font-medium text-blueclr">
          The SalesDriver Advantage
        </p>
        <h1 className="sm:text-[32px] text-[28px] font-extrabold text-gray-800 mt-2">
          Our Services
        </h1>
        <p className="sm:text-lg text-base font-semibold text-gray-700 mt-1.5">
          Helping you get more for your business
        </p>
      </div>

      <div className="mb-6 pb-3 md:hidden overflow-x-auto scrollbar-hide">
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

      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/4 hidden md:block p-4">
          {tabs.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`flex items-center w-full px-4 py-3 rounded-lg mb-2 transition-all text-left ${
                activeTab === name
                  ? "bg-[#999DA0] text-gray-800 font-semibold"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="flex-1">{name}</span>
              <ChevronRight />
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row w-full md:w-3/4 md:mx-6 bg-[#EAEBEB] px-8 py-12 rounded-xl shadow-lg mx-auto">
          <div className="md:w-1/2 pr-6">
            <h1 className="md:text-3xl text-2xl font-bold">
              {activeTabData?.heading}
            </h1>
            <p className="text-gray-600 mt-2 text-[14px] sm:text-base">
              {activeTabData?.description}
            </p>

            <button className="text-blue-500 mt-3 text-[14px] sm:text-base flex items-center">
              M BUTTON <ArrowRight className="ml-2" size={18} />
            </button>

            <div className="mt-4">
              <h2 className="font-semibold flex items-center sm:text-base text-[14px]">
                LINKED SERVICES <ChevronDown className="ml-2" size={20} />
              </h2>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 mt-2 sm:text-base text-[14px]">
                {activeTabData?.btn1 && (
                  <button className="border-[1.5px] border-black p-2 rounded-lg">
                    {activeTabData.btn1}
                  </button>
                )}
                {activeTabData?.btn2 && (
                  <button className="border-[1.5px] border-black p-2 rounded-lg">
                    {activeTabData.btn2}
                  </button>
                )}
                {activeTabData?.btn3 && (
                  <button className="border-[1.5px] border-black p-2 rounded-lg">
                    {activeTabData.btn3}
                  </button>
                )}
                {activeTabData?.btn4 && (
                  <button className="border-[1.5px] border-black p-2 rounded-lg">
                    {activeTabData.btn4}
                  </button>
                )}
                {activeTabData?.btn5 && (
                  <button className="border-[1.5px] border-black p-2 rounded-lg">
                    {activeTabData.btn5}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-lg flex items-center mt-7 sm:mt-0 sm:mb-0 mb-3 justify-center">
              <img className="w-full h-auto rounded-lg" src={img} alt="img" />
            </div>

            <div className="mt-6">
              <h2 className="font-semibold flex items-center sm:text-base text-[14px]">
                CASE STUDIES <ChevronDown className="ml-2" size={20} />
              </h2>
              <div className="grid sm:grid-cols-3 grid-cols-2 text-sm sm:text-base gap-2 mt-2">
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
