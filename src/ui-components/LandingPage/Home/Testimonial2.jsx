import React, { useState } from "react";
import img from "../../../assets/Website_Media/Website_Media/illustrations/styled-resized-two-colleagues-making-sketches-on-the-flipchart-2024-10-16-23-01-09-utc.png";
import img1 from "../../../assets/Website_Media/Website_Media/illustrations/sales-illustration.png";
import img2 from "../../../assets/Website_Media/Website_Media/illustrations/data-illustration.png";
import img3 from "../../../assets/Website_Media/Website_Media/illustrations/content-illustration.png";
import img4 from "../../../assets/Website_Media/Website_Media/illustrations/automation-illustration_.png";
import img5 from "../../../assets/Website_Media/Website_Media/illustrations/seoads-illustration  copy.png";
import HeadImg from "../../../assets/69c37d04d3feadc39b5681a70e9d7638.png";
import elipse from "../../../assets/Ellipse.png";
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
    <div className="px-8 relative pt-10 pb-20 bg-slate-50 min-h-screen">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HeadImg}
          alt="Header Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-75"></div>
      </div>
      <img
        src={elipse}
        alt="Glow"
        className="absolute lg:block hidden -top-10 left-0 w-96 h-96"
      />
      <img
        src={elipse}
        alt="Glow"
        className="absolute lg:block hidden bottom-0 right-0 w-96 h-96"
      />
      <div className="relative z-10">
        <div className="mb-12 text-center">
          <p className="inline-block bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
            OUR Services
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#005895] mt-3">
            Expert-built Services,
            <br /> Built for You{" "}
          </h2>
        </div>

        <div className="mb-6 pb-3 overflow-x-auto scrollbar-hide">
          <div className="flex justify-center min-w-max space-x-6">
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

        <div className="relative flex flex-col w-full max-w-5xl bg-white mx-auto rounded-xl shadow-lg border border-gray-200">
          <div className="flex flex-col w-full bg-white px-10 py-14 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row w-full">
              <div className="md:w-[67%] pr-8">
                <h2 className="text-lg mb-2.5 font-medium leading-snug text-blueclr">
                  {activeTabData?.name}
                </h2>
                <h2 className="text-2xl md:text-4xl font-bold leading-snug text-[#005895]">
                  {activeTabData?.heading}
                </h2>
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

              <div className="md:w-[33%] flex items-center mt-10 mb-5 md:mb-0 md:mt-0">
                <div className="overflow-hidden w-full">
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
    </div>
  );
}
