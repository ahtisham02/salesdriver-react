import React, { useState } from "react";
import img from "../../../assets/h1.jpg";
import { ArrowRight, ChevronDown } from "lucide-react";

const tabs = [
  { name: "Marketing" },
  { name: "SaaS and Tech" },
  { name: "Consulting" },
  { name: "B2B Agencies" },
  { name: "Real Estate" },
  { name: "HealthCare" },
  { name: "Industrial" },
  { name: "Category" },
];

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState("Marketing");

  return (
    <div className="px-6 py-8 my-4">
      <div className="mb-8">
        <h1 className="lg:text-[55px] text-3xl text-center font-extrabold text-gray-800 mt-2">
          For Industries
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

      <div className="flex flex-col md:flex-row w-full md:w-3/4 md:mx-6 bg-white px-8 py-12 rounded-xl shadow-lg mx-auto">
        <div className="md:w-1/2 pr-6">
          <h1 className="sm:text-3xl text-2xl lg:!leading-normal font-bold">
            More Clients,
            <br /> Less Prospecting
          </h1>
          <p className="text-gray-600 mt-2 sm:text-base text-[14px]">
            Agencies need a steady pipeline of qualified leads to fuel growth.
          </p>
          <p className="text-gray-600 mt-2 sm:text-base text-[14px]">
            Our virtual sales reps handle lead generation and appointment
            setting, so your team can focus on strategy and execution.
          </p>

          <button className="text-blue-500 mt-3 flex items-center sm:text-base text-[14px]">M BUTTON <ArrowRight className="ml-2" size={18} /></button>

          <div className="mt-4">
            <h2 className="font-semibold flex items-center sm:text-base text-[14px]">
              SERVICE CATEGORY <ChevronDown className="ml-2" size={20} />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              <button className="border p-2 rounded-lg">
                DEDICATED ACCOUNT
              </button>
              <button className="border p-2 rounded-lg">
                SALES ACQUISITION
              </button>
              <button className="border p-2 rounded-lg">
                CUSTOMER JOURNEY
              </button>
              <button className="border p-2 rounded-lg">
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
  );
}
