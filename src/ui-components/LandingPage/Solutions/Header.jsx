import React, { useState } from "react";

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

const features = [
  {
    title: "Dedicated Account And Project Manager",
    description:
      "A dedicated professional to oversee your campaign success and ensure smooth project execution.",
    points: [
      "Keeps your campaigns organized and on track.",
      "Provides expert guidance for smooth execution.",
    ],
  },
  {
    title: "Sales Acquisition Strategy",
    description:
      "A custom strategy to identify and acquire high-value clients.",
    points: [
      "Helps identify high-value prospects.",
      "Creates a custom plan for effective outreach.",
    ],
  },
  {
    title: "Customer Journey",
    description:
      "Mapping out the entire customer experience to enhance engagement and conversion.",
    points: [
      "Improves customer experience with strategic touchpoints.",
      "Identifies gaps in the conversion process.",
    ],
  },
];
const features1 = [
  {
    title: "Mapping/Tracking",
    description:
      "Advanced tracking to measure and optimize each stage of the sales funnel.",
    points: [
      "Provides insights for data-driven decision-making.",
      "Measures marketing and sales success.",
    ],
  },
  {
    title: "Weekly Review Meeting",
    description:
      "Regular check-ins to evaluate performance and refine strategies.",
    points: [
      "Ensures continuous campaign improvement.",
      "Keeps you updated with progress reports.",
    ],
  },
];

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState("Marketing");

  return (
    <div className="px-6 pt-8 my-4">
      <div className="mb-8">
        <h1 className="lg:text-[55px] text-3xl text-center font-extrabold text-gray-800 mt-2">
          Helping you get more for your business
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
      <h1 className="text-sm max-w-3xl mx-auto text-center font-medium text-gray-800 mt-2">
        SalesDriver’s strategy services provide agencies with a structured,
        data-driven approach to acquiring new clients. Our experts analyze the
        customer journey, optimize touchpoints, and create a scalable sales
        roadmap that drives predictable growth.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3 sm:p-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-[#E8F4FA] p-6 rounded-lg shadow-sm ${
              feature.center ? "md:col-span-2 mx-auto text-center" : ""
            }`}
          >
            <h3 className="text-[24px] font-bold text-[#1E3A5F]">
              {feature.title}
            </h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
            <ul className="list-disc list-inside mt-3 text-gray-700">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:p-6 p-3 md:mx-10 lg:px-56">
        {features1.map((feature, index) => (
          <div
            key={index}
            className={`bg-[#E8F4FA] p-6 rounded-lg shadow-sm ${
              feature.center ? "md:col-span-2 mx-auto text-center" : ""
            }`}
          >
            <h3 className="text-[24px] font-bold text-[#1E3A5F]">
              {feature.title}
            </h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
            <ul className="list-disc list-inside mt-3 text-gray-700">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
