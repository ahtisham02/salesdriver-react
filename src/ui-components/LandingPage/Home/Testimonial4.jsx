import React, { useState } from "react";
import img from "../../../assets/h1.jpg";
import {
  Users,
  Globe,
  Share2,
  UserPlus,
  Layout,
  Code,
  ChevronRight,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const tabs = [
  { name: "Virtual Sales Reps", icon: Users },
  { name: "Web Solution", icon: Globe },
  { name: "Social Selling", icon: Share2 },
  { name: "Lead Generation", icon: UserPlus },
  { name: "Web Design", icon: Layout },
  { name: "Custom Software Sol.", icon: Code },
];

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState("Virtual Sales Reps");

  return (
    <div className="px-6 py-8 my-4">
      <div className="mb-8">
        <p className="sm:text-[12px] text-[11px] font-medium text-blueclr">Our Solutions</p>
        <h1 className="sm:text-[32px] text-[28px] font-extrabold text-gray-800 mt-2">
          Comprehensive Solutions
        </h1>
        <p className="sm:text-lg text-base font-semibold text-gray-800 mt-1.5">
          Built for the most common issues.
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
        <div className="w-1/4 bg-slate-100 p-4 hidden md:block rounded-xl">
          {tabs.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`flex items-center w-full px-4 py-3 rounded-lg mb-2 transition-all text-left ${
                activeTab === name
                  ? "bg-yellow-500 text-white font-bold"
                  : "bg-slate-200"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="flex-1">{name}</span>
              <ChevronRight />
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row w-full md:w-3/4 md:mx-6 bg-white px-8 py-12 rounded-xl shadow-lg mx-auto">
          <div className="md:w-1/2 pr-6">
            <h1 className="text-sm text-blueclr font-medium mb-1">
              MeetNow.agency
            </h1>
            <h1 className="md:text-3xl text-2xl font-bold">{activeTab}</h1>
            <p className="text-gray-600 mt-3 text-[14px] sm:text-base">
              Virtual sales reps that handle outreach, book meetings, and close
              deals, reducing overhead and scaling sales effortlessly.
            </p>
            <h1 className="text-gray-900 font-medium mt-2 text-[14px] sm:text-base">Key Benefits:</h1>
            <ol className="list-disc list-inside text-gray-700 mt-2 text-[14px] sm:text-base">
              <li>Lower costs compared to hiring in-house sales reps</li>
              <li>Consistent pipeline of qualified meetings</li>
              <li>Scalable solution to grow without extra overhead</li>
            </ol>

            <button className="text-blue-500 mt-3 flex items-center text-[14px] sm:text-base">
              LEARN MORE <ArrowRight className="ml-2" size={18} />
            </button>

            <div className="mt-4">
              <h3 className="font-semibold text-sm flex items-center text-[14px] sm:text-base">
                CASE STUDIES <ChevronDown className="ml-2" size={17} />
              </h3>
              <div className="grid sm:grid-cols-3 grid-cols-2 gap-2 mt-4 text-sm">
                <button className="border p-2 rounded-lg">BUTTON</button>
                <button className="border p-2 rounded-lg">BUTTON</button>
                <button className="border p-2 rounded-lg">BUTTON</button>
                <button className="border p-2 rounded-lg">BUTTON</button>
                <button className="border p-2 rounded-lg">BUTTON</button>
                <button className="border p-2 rounded-lg">BUTTON</button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="rounded-lg flex items-center justify-center">
              <img className="" src={img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
