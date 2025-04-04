import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import img from "../../../assets/sl4.webp";
import img1 from "../../../assets/sl5.webp";
import img2 from "../../../assets/sm3.webp";
import vector from "../../../assets/Vector7.png";

const staticTabs = [
  { name: "Marketing" },
  { name: "SaaS and Tech" },
  { name: "Consulting" },
  // { name: "B2B Agencies" },
  // { name: "Real Estate" }
];

const fallbackImages = [img, img1, img2];

const ExactUILayout = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(staticTabs[0].name);
  const [expanded, setExpanded] = useState({});
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://salesdriver.io/wp-json/wp/v2/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const getTabCategories = () => {
    const tabIndex = staticTabs.findIndex(tab => tab.name === activeTab);
    const startIndex = tabIndex * 3;
    return categories.slice(startIndex, startIndex + 3);
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setIsAnimationActive(true);
  };

  useEffect(() => {
    if (isAnimationActive) {
      setTimeout(() => {
        setIsAnimationActive(false);
      }, 700);
    }
  }, [isAnimationActive]);

  if (loading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  return (
    <div className="px-6 relative py-16 bg-[#ECF7FD]">
      <img
        src={vector}
        alt="Vector Background"
        className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2"
      />
      <div className="relative z-10">
        <div className="text-center mb-12">
          <p className="inline-block bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
            case studies
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#005895] mt-3">
            Outstanding <br /> Experiences
          </h2>
        </div>

        <div className="mb-10 overflow-x-auto scrollbar-hide">
          <div className="flex justify-center min-w-max space-x-6 border-b border-gray-300">
            {staticTabs.map(({ name }) => (
              <button
                key={name}
                onClick={() => handleTabClick(name)}
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
          {getTabCategories().map((category, index) => (
            <div
              key={category.id}
              className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden p-6 border border-gray-200 ${
                isAnimationActive ? "animate-slideIn" : ""
              }`}
            >
              <img
                src={fallbackImages[index % fallbackImages.length]}
                alt={category.name}
                className="w-full h-44 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {category.description || "No description available"}
              </p>
              <a
                href={category.link}
                className="mt-3 text-blueclr flex items-center font-semibold hover:text-blue-700 transition-all duration-300"
              >
                Learn More <ArrowRight className="ml-2" size={18} />
              </a>

              <div className="mt-6">
                <button
                  className={`w-full py-3 bg-gray-100 text-sm rounded-xl flex justify-between items-center px-4 font-medium hover:bg-gray-200 transition-all duration-300 border ${
                    activeTab === category.name
                      ? "border-blueclr"
                      : "border-gray-300"
                  }`}
                  onClick={() => toggleExpand(category.id)}
                >
                  Service Category
                  {expanded[category.id] ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 py-1 ease-in-out ${
                    expanded[category.id] ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row gap-2">
                    <button className="py-3 px-6 mt-2 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full lg:w-1/2">
                      {category.name}
                    </button>
                    <button className="py-3 text-nowrap px-6 mt-2 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full lg:w-1/2">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <button
                  className={`w-full py-3 bg-gray-100 text-sm rounded-xl flex justify-between items-center px-4 font-medium hover:bg-gray-200 transition-all duration-300 border ${
                    activeTab === category.name
                      ? "border-blueclr"
                      : "border-gray-300"
                  }`}
                  onClick={() => toggleExpand(`sol-${category.id}`)}
                >
                  Solution Category
                  {expanded[`sol-${category.id}`] ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 py-1 ease-in-out ${
                    expanded[`sol-${category.id}`] ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row">
                    <button className="py-3 px-6 mt-2 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full">
                      {category.name}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-blueclr text-white text-lg font-semibold rounded-xl shadow-md transition-all duration-300">
            View All <ArrowRight className="ml-2" size={20} />
          </button>
        </div>

        <style jsx>{`
          @keyframes slideInFromRight {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-slideIn {
            animation: slideInFromRight 0.7s forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ExactUILayout;