import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import img from "../../../assets/sl3.png";
import img1 from "../../../assets/sl6.webp";
import img2 from "../../../assets/sl7.png";

const tabs = [
  { name: "Blog", cards: [1, 2, 3] },
  { name: "Whitepapers", cards: [4, 5, 6] },
  { name: "Webinars", cards: [7, 8, 9] },
  { name: "Downloadables", cards: [10, 11, 12] },
  { name: "Guides", cards: [13, 14, 15] },
];

const caseStudies = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Case Study ${i + 1}`,
  author: `Author ${i + 1}`,
  date: `${i + 1} Jan 2023`,
  label: `Label ${i + 1}`,
  description: `Description for case study ${i + 1}.`,
  img: [img, img1, img2][i % 3],
}));

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimationActive, setIsAnimationActive] = useState(false);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {getVisibleCards().map(({ id, title, author, date, label, description, img }) => (
          <div
            key={id}
            className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
              isAnimationActive ? "animate-slideIn" : ""
            }`}
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
              >
                Read More <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          className="inline-flex items-center px-6 py-3 bg-blueclr text-white text-lg font-semibold rounded-xl shadow-md  transition-all duration-300"
        >
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
  );
}