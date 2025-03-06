import React, { useState } from "react";
import img from "../../../assets/strategy.jpg";
import img1 from "../../../assets/sales.jpg";
import img2 from "../../../assets/data.jpg";
import img3 from "../../../assets/content.jpg";
import img4 from "../../../assets/automation.jpg";
import img5 from "../../../assets/seo.jpg";
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
  ChevronUp,
} from "lucide-react";

const tabs = [
  {
    name: "Strategy",
    heading: "Strategy",
    icon: Activity,
    img: img,
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
    img: img1,
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
    img: img2,
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
    img: img3,
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
    img: img4,
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
    img: img5,
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
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const activeTabData = tabs.find((tab) => tab.name === activeTab);

  return (
    <div className="px-8 pt-10 pb-20 bg-slate-50 min-h-screen">
      <div className="mb-12 text-center">
        <p className="sm:text-[13px] text-[11px] font-medium text-blueclr">
          The SalesDriver Advantage
        </p>
        <h1 className="md:text-5xl text-3xl font-extrabold text-slate-800 mt-3">
          Our Services
        </h1>
        <p className="text-lg font-semibold text-slate-600 mt-2">
          Helping you get more for your business
        </p>
      </div>

      <div className="mb-6 pb-3 md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex justify-center min-w-max">
          {tabs.map(({ name }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`px-6 py-2 text-lg font-semibold relative transition-all ${
                activeTab === name
                  ? "text-blueclr font-bold border-b-[3px] border-blueclr"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        <div className="w-full md:w-1/4 hidden md:block">
          {tabs.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`flex items-center w-full px-5 py-4 rounded-xl mb-3 transition-all text-left shadow-md ${
                activeTab === name
                  ? "bg-blue-100 text-blueclr font-semibold"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon className="w-6 h-6 mr-3 text-blueclr" />
              <span className="flex-1 text-lg">{name}</span>
              <ChevronRight
                className={`w-5 h-5  ${
                  activeTab === name ? "text-blueclr" : "text-slate-500"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex flex-col w-full md:w-3/4 bg-white px-10 py-14 rounded-xl shadow-xl">
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 pr-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                {activeTabData?.heading}
              </h1>
              <p className="text-slate-600 mt-5 text-base sm:text-lg leading-relaxed">
                {activeTabData?.description}
              </p>
              <button className="text-blueclr mt-6 text-base sm:text-lg flex items-center font-medium group relative">
                <span className="relative z-10 group-hover:translate-y-[-2px] transition-all">
                  Learn More
                </span>
                <ArrowRight
                  className="ml-2 relative z-10 group-hover:translate-y-[-2px] transition-all"
                  size={20}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blueclr transition-all group-hover:w-full"></span>
              </button>
            </div>

            <div className="md:w-1/2 flex items-center mt-10 mb-5 md:mb-0 md:mt-0">
              <div className="rounded-xl overflow-hidden shadow-lg w-full">
                <img
                  className="w-full h-auto"
                  src={activeTabData?.img}
                  alt="Service Illustration"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 w-full">
            <h2
              className="text-xl font-semibold text-slate-800 flex items-center cursor-pointer"
              onClick={handleToggle}
            >
              Linked Services
              {isOpen ? (
                <ChevronUp className="ml-2" size={22} />
              ) : (
                <ChevronDown className="ml-2" size={22} />
              )}
            </h2>

            <div
              className={`overflow-hidden transition-all duration-500 px-4 ease-in-out mt-4 ${
                isOpen ? "max-h-screen py-4" : "max-h-0"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {activeTabData?.btn1 && (
                  <button className="py-3 px-6 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full hover:scale-105">
                    {activeTabData.btn1}
                  </button>
                )}
                {activeTabData?.btn2 && (
                  <button className="py-3 px-6 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full hover:scale-105">
                    {activeTabData.btn2}
                  </button>
                )}
                {activeTabData?.btn3 && (
                  <button className="py-3 px-6 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full hover:scale-105">
                    {activeTabData.btn3}
                  </button>
                )}
                {activeTabData?.btn4 && (
                  <button className="py-3 px-6 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full hover:scale-105">
                    {activeTabData.btn4}
                  </button>
                )}
                {activeTabData?.btn5 && (
                  <button className="py-3 px-6 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full hover:scale-105">
                    {activeTabData.btn5}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
