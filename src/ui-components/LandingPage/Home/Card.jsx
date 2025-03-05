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
];

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState("Marketing");
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="px-6 py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="md:text-5xl text-3xl font-extrabold text-gray-900">
          Work Delivers Results
        </h1>
      </div>

      <div className="mb-10 overflow-x-auto scrollbar-hide">
        <div className="flex justify-center min-w-max space-x-6 border-b border-gray-300">
          {tabs.map(({ name }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`pb-3 text-lg font-medium transition-all duration-300 ${
                activeTab === name
                  ? "text-blueclr font-bold border-b-2 border-blueclr"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map(({ id, title, description }) => (
          <div
            key={id}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden p-6 border border-gray-200"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-44 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {description}
            </p>
            <a
              href="#"
              className="mt-3 text-blueclr flex items-center font-semibold hover:text-blue-700 transition-all duration-300"
            >
              Learn More <ArrowRight className="ml-2" size={18} />
            </a>

            <div className="mt-6">
              <button
                className="w-full py-3 bg-gray-100 text-sm rounded-xl flex justify-between items-center px-4 font-medium hover:bg-gray-200 transition-all duration-300"
                onClick={() => toggleExpand(id)}
              >
                Service Category
                {expanded[id] ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {expanded[id] && (
                <p className="p-4 text-gray-700 bg-gray-50 rounded-xl mt-3">
                  Service details...
                </p>
              )}
            </div>

            <div className="mt-3">
              <button
                className="w-full py-3 bg-gray-100 text-sm rounded-xl flex justify-between items-center px-4 font-medium hover:bg-gray-200 transition-all duration-300"
                onClick={() => toggleExpand(`sol-${id}`)}
              >
                Solution Category
                {expanded[`sol-${id}`] ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {expanded[`sol-${id}`] && (
                <p className="p-4 text-gray-700 bg-gray-50 rounded-xl mt-3">
                  Solution details...
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/dictionary"
          className="inline-flex items-center px-6 py-3 bg-blueclr text-white text-lg font-semibold rounded-xl shadow-md hover:bg-blue-600 transition-all duration-300"
        >
          View All <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
    </div>
  );
}
