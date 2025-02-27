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
  Headset,
  ArrowRight,
} from "lucide-react";

const tabs = [
  { name: "Strategy", icon: Activity },
  { name: "Sales", icon: TrendingUp },
  { name: "Data", icon: Database },
  { name: "Content", icon: FileText },
  { name: "Automation", icon: Zap },
  { name: "SEO/Ads", icon: Search },
  { name: "Support", icon: Headset },
];

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState("Strategy");

  return (
    <div className="px-6 py-8 my-4">
      <div className="mb-8">
        <p className="sm:text-[12px] text-[11px] font-medium text-blueclr">HOW WE HELP YOU</p>
        <h1 className="sm:text-[32px] text-[28px] font-extrabold text-gray-800 mt-2">
          Our Services
        </h1>
        <p className="sm:text-lg text-base font-semibold text-gray-700 mt-1.5">
          Expert-built Services, Built for You
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

      <div className="flex min-h-screen">
        <div className="w-1/4 hidden md:block p-4">
          {tabs.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`flex items-center w-full px-4 py-3 rounded-lg mb-2 transition-all text-left ${
                activeTab === name
                  ? "bg-[#999DA0] text-gray-800 font-semibold"
                  : ""
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
            <h1 className="md:text-3xl text-2xl font-bold">{activeTab}</h1>
            <p className="text-gray-600 mt-2 text-[14px] sm:text-base">
              SalesDriver's {activeTab.toLowerCase()} services provide agencies
              with a structured, data-driven approach to acquiring new clients.
            </p>
            <p className="text-gray-600 mt-2 text-[14px] sm:text-base">
              Our experts analyze the customer journey, optimize touchpoints,
              and create a scalable sales roadmap that drives predictable
              growth.
            </p>

            <button className="text-blue-500 mt-3 text-[14px] sm:text-base flex items-center">
              M BUTTON <ArrowRight className="ml-2" size={18} />
            </button>

            <div className="mt-4">
              <h2 className="font-semibold flex items-center sm:text-base text-[14px]">
                LINKED SERVICES <ChevronDown className="ml-2" size={20} />
              </h2>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 mt-2 sm:text-base text-[14px]">
                <button className="border-[1.5px] border-black p-2 rounded-lg">
                  DEDICATED ACCOUNT
                </button>
                <button className="border-[1.5px] border-black p-2 rounded-lg">
                  SALES ACQUISITION
                </button>
                <button className="border-[1.5px] border-black p-2 rounded-lg">
                  CUSTOMER JOURNEY
                </button>
                <button className="border-[1.5px] border-black p-2 rounded-lg">
                  MAPPING/TRACKING
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-lg flex items-center mt-7 sm:mt-0 sm:mb-0 mb-3 justify-center">
              <img className="" src={img} alt="img" />
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
