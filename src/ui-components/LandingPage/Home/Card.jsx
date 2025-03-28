import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import img from "../../../assets/sl4.webp";
import img1 from "../../../assets/sl5.webp";
import img2 from "../../../assets/sm3.webp";
import img3 from "../../../assets/sm3.webp";
import img4 from "../../../assets/sm3.webp";
import vector from "../../../assets/Vector7.png";

const descriptions = [
  "Case Study 1: Marketing strategies that worked.",
  "Case Study 2: SaaS solutions for enterprise-scale clients.",
  "Case Study 3: How we helped a consulting firm grow.",
  "Case Study 4: B2B agencies transforming the digital space.",
  "Case Study 5: Real Estate innovations for property management.",
  "Case Study 6: HealthCare advancements with technology.",
  "Case Study 7: Industrial solutions for greater efficiency.",
  "Case Study 8: Category-specific insights for success.",
  "Case Study 9: Category-specific insights for success.",
  "Case Study 10: Industrial solutions for greater efficiency.",
  "Case Study 11: Marketing strategies that worked.",
  "Case Study 12: SaaS solutions for enterprise-scale clients.",
  "Case Study 13: How we helped a consulting firm grow.",
  "Case Study 14: B2B agencies transforming the digital space.",
  "Case Study 15: Real Estate innovations for property management.",
  "Case Study 16: HealthCare advancements with technology.",
  "Case Study 17: Industrial solutions for greater efficiency.",
  "Case Study 18: Category-specific insights for success.",
  "Case Study 19: Category-specific insights for success.",
  "Case Study 20: Industrial solutions for greater efficiency.",
  "Case Study 21: Industrial solutions for greater efficiency.",
  "Case Study 22: Marketing strategies that worked.",
  "Case Study 23: How we helped a consulting firm grow.",
  "Case Study 24: B2B agencies transforming the digital space.",
  "Case Study 25: Real Estate innovations for property management.",
  "Case Study 26: HealthCare advancements with technology.",
  "Case Study 27: Industrial solutions for greater efficiency.",
  "Case Study 28: Category-specific insights for success.",
  "Case Study 29: Category-specific insights for success.",
  "Case Study 30: Industrial solutions for greater efficiency.",
];

const tabs = [
  { name: "Marketing", cards: [1, 2, 3, 4, 5] },
  { name: "SaaS and Tech", cards: [6, 7, 8, 9, 10] },
  { name: "Consulting", cards: [11, 12, 13, 14, 15] },
  { name: "B2B Agencies", cards: [16, 17, 18, 19, 20] },
  { name: "Real Estate", cards: [21, 22, 23, 24, 25] },
  { name: "HealthCare", cards: [26, 27, 28, 29, 30] },
  { name: "Industrial", cards: [31, 32, 33, 34, 35] },
  { name: "Category", cards: [36, 37, 38, 39, 40] },
];

const caseStudies = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  title: `Case Study ${i + 1}`,
  img: [img, img1, img2, img3, img4][i % 5],
  description:
    descriptions[i] ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}));

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [expanded, setExpanded] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setCurrentIndex(0);
    setIsAnimationActive(true);
  };

  const getVisibleCards = () => {
    const activeTabData = tabs.find((tab) => tab.name === activeTab);
    const startIndex = currentIndex * 3;
    const endIndex = startIndex + 3;
    return activeTabData.cards
      .slice(startIndex, endIndex)
      .map((id) => caseStudies.find((card) => card.id === id));
  };

  useEffect(() => {
    if (isAnimationActive) {
      setTimeout(() => {
        setIsAnimationActive(false);
      }, 700);
    }
  }, [currentIndex, isAnimationActive]);

  return (
    <div className="px-6 relative py-16 bg-gray-50">
      <img
        src={vector}
        alt="Vector Background"
        className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2"
      />
      <div className="relative z-10">
        <div className="text-center mb-12 ">
          <p className="inline-block bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
            case studies{" "}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#005895] mt-3">
            Outstanding <br /> Experiences{" "}
          </h2>
        </div>

        <div className="mb-10 overflow-x-auto scrollbar-hide">
          <div className="flex justify-center min-w-max space-x-6 border-b border-gray-300">
            {tabs.map(({ name }) => (
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
          {getVisibleCards().map(({ id, title, description, img }) => (
            <div
              key={id}
              className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden p-6 border border-gray-200 ${
                isAnimationActive ? "animate-slideIn" : ""
              }`}
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
                  className={`w-full py-3 bg-gray-100 text-sm rounded-xl flex justify-between items-center px-4 font-medium hover:bg-gray-200 transition-all duration-300 border ${
                    activeTab === "Marketing"
                      ? "border-blueclr"
                      : "border-gray-300"
                  }`}
                  onClick={() => toggleExpand(id)}
                >
                  Service Category
                  {expanded[id] ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 py-1 ease-in-out ${
                    expanded[id] ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row gap-2">
                    <button className="py-3 px-6 mt-2 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full lg:w-1/2">
                      {activeTab}
                    </button>
                    <button className="py-3 text-nowrap px-6 mt-2 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full lg:w-1/2">
                      Another Button
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <button
                  className={`w-full py-3 bg-gray-100 text-sm rounded-xl flex justify-between items-center px-4 font-medium hover:bg-gray-200 transition-all duration-300 border ${
                    activeTab === "Marketing"
                      ? "border-blueclr"
                      : "border-gray-300"
                  }`}
                  onClick={() => toggleExpand(`sol-${id}`)}
                >
                  Solution Category
                  {expanded[`sol-${id}`] ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 py-1 ease-in-out ${
                    expanded[`sol-${id}`] ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row">
                    <button className="py-3 px-6 mt-2 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full">
                      {activeTab}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-blueclr text-white text-lg font-semibold rounded-xl shadow-md  transition-all duration-300">
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
}
