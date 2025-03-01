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
    <div className="sm:px-6 px-3 py-8 my-4">
      <div className="mb-8">
        <h1 className="text-xs text-center font-medium text-blueclr mt-2">
          Insights & Content
        </h1>
        <h1 className="sm:text-[45px] text-4xl text-center font-extrabold text-gray-800 mt-1">
          Stay Ahead in Sales
        </h1>
        <h1 className="text-[15px] text-center text-gray-800 mt-4">
          Get practical insights, proven strategies, and expert guidance to
          sharpen your sales process.{" "}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:mx-10 lg:mx-12">
        {caseStudies.map(({ id, title, author, date, label, description }) => (
          <div key={id} className="border rounded-lg shadow-lg overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-52 lg:h-56 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm">
                {author} • {date}
              </p>
              <h2 className="text-lg font-semibold mt-1">{label}</h2>
              <p className="text-gray-700 mt-1">{description}</p>
              <button
                className="mt-3 text-blue-500 flex items-center font-semibold"
                onClick={() => toggleExpand(id)}
              >
                Read More <ArrowRight className="ml-2" size={18} />
              </button>
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
