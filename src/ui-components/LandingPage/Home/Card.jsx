import React, { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import img from "../../../assets/h1.jpg";

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

const caseStudies = [
  {
    id: 1,
    title: "Case Study 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Case Study 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Case Study 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "Case Study 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState("Marketing");
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="px-6 py-8 my-4">
      <div className="mb-8">
        <h1 className="sm:text-[45px] text-[35px] text-center font-extrabold text-gray-800 mt-2">
        Work Delivers Results
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
                  ? "text-blue-500 font-bold border-b-[3px] border-blue-500"
                  : "text-gray-600 border-b-[3px] border-gray-500"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {caseStudies.map(({ id, title, description }) => (
          <div key={id} className="border p-4 rounded-lg shadow-md">
            <img
              src={img}
              alt={title}
              className="w-full h-32 object-cover mb-4"
            />
            <p className="text-gray-700 mb-2 text-[14px] sm:text-base">{description}</p>
            <a
              href="#"
              className="text-blue-500 flex items-center font-semibold text-[14px] sm:text-base"
            >
              S BUTTON <ArrowRight className="ml-2" size={18} />
            </a>
            <div className="mt-4">
              <button
                className="w-full py-2 bg-gray-200 text-[14px] sm:text-base rounded-md flex justify-between items-center px-4"
                onClick={() => toggleExpand(id)}
              >
                SERVICE CATEGORY
                {expanded[id] ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {expanded[id] && (
                <p className="p-2 text-gray-600 text-[14px] sm:text-base">Service details...</p>
              )}
            </div>
            <div className="mt-2">
              <button
                className="w-full py-2 text-[14px] sm:text-base bg-gray-200 rounded-md flex justify-between items-center px-4"
                onClick={() => toggleExpand(`sol-${id}`)}
              >
                SOLUTION CATEGORY
                {expanded[`sol-${id}`] ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {expanded[`sol-${id}`] && (
                <p className="p-2 text-gray-600 text-[14px] sm:text-base">Solution details...</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-6 mr-4 text-[14px] sm:text-base">
        <a
          href="#"
          className="text-blue-500 flex items-center justify-end font-semibold"
        >
          VIEW ALL <ArrowRight className="ml-2" size={18} />
        </a>
      </div>
    </div>
  );
}
