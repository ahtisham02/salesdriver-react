import React, { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import img from "../../../assets/h1.jpg";

const tabs = [
  { name: "Blog" },
  { name: "Whitepapers" },
  { name: "Webinars" },
  { name: "Downloadables" },
  { name: "Guides" },
];

const caseStudies = [
  {
    id: 1,
    title: "Case Study 1",
    author: "John Doe",
    date: "4 Feb 2022",
    label: "Label",
    description: "Article description",
  },
  {
    id: 2,
    title: "Case Study 2",
    author: "Jane Smith",
    date: "10 Mar 2022",
    label: "Case Study",
    description: "Another example of a case study description.",
  },
  {
    id: 3,
    title: "Case Study 2",
    author: "Jane Smith",
    date: "10 Mar 2022",
    label: "Case Study",
    description: "Another example of a case study description.",
  },
];

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState("Blog");
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="sm:px-8 px-4 py-14 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="sm:text-[13px] text-[11px] font-medium text-blueclr">
          Insights & Content
        </h2>
        <h1 className="md:text-5xl text-3xl font-bold text-gray-900 mt-2">
          Stay Ahead in Sales
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Get practical insights, proven strategies, and expert guidance to
          sharpen your sales process.
        </p>
      </div>

      <div className="mb-8 overflow-x-auto scrollbar-hide">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {caseStudies.map(({ id, title, author, date, label, description }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-52 lg:h-56 object-cover"
            />
            <div className="p-5">
              <p className="text-gray-500 text-sm">
                {author} • {date}
              </p>
              <h2 className="text-xl font-semibold text-gray-900 mt-2">
                {label}
              </h2>
              <p className="text-gray-700 mt-2">{description}</p>
              <button
                className="mt-4 text-blueclr flex items-center font-semibold hover:text-blue-700 transition-all duration-300"
                onClick={() => toggleExpand(id)}
              >
                Read More <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/webinar"
          className="text-blueclr text-lg font-semibold flex items-center justify-center hover:text-blue-700 transition-all duration-300"
        >
          VIEW ALL <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
    </div>
  );
}
