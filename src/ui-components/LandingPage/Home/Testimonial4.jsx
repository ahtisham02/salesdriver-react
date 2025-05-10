// SolutionsSection.js
import React from "react";
import { ArrowRight } from "lucide-react";
import HeadImg from "../../../assets/69c37d04d3feadc39b5681a70e9d7638.png";
import vector from "../../../assets/Group.png";
import vector23 from "../../../assets/vector23.png";
import { useNavigate } from "react-router-dom";

const solutions = [
  {
    title: "Social Selling",
    category: "Strategy",
    description:
      "Virtual sales reps that handle outreach, book meetings, and close deals, reducing overhead and scaling sales effortlessly.",
    points: [
      "Daily outreach to 50 high-quality leads",
      "Expert-managed avatars",
      "Direct appointment booking",
    ],
    isInternalLink: true,
    internalNavPath: "/solutions",
    targetTab: "Strategy",
    targetSolutionTitle: "Social Selling",
  },
  {
    title: "Virtual Sales Reps",
    category: "Strategy",
    description:
      "AI-powered social selling that connects businesses with the right prospects and turns social media into a sales engine.",
    points: [
      "Targeted outreach to decision-makers",
      "AI-powered analytics and insights",
      "Dedicated Sales Development Representative",
    ],
    isInternalLink: true,
    internalNavPath: "/solutions",
    targetTab: "Strategy",
    targetSolutionTitle: "Virtual Sales Reps",
  },
  {
    title: "Web Design",
    category: "Strategy",
    description:
      "Conversion-focused web design that enhances user experience and drives measurable business growth.",
    points: [
      "Custom design and development",
      "Data-driven approach for optimal results",
      "Proactive support and maintenance",
    ],
    isInternalLink: true,
    internalNavPath: "/solutions",
    targetTab: "Strategy",
    targetSolutionTitle: "Web Design",
  },
  {
    title: "Web Solution",
    isInternalLink: true,
    internalNavPath: "/solutions",
    targetTab: "Strategy",
    targetSolutionTitle: "Web Solution",
    description:
      "High-converting websites built to attract, engage, and convert customers, ensuring businesses stand out online.",
    points: [
      "Custom responsive website (up to 10 pages)",
      "Search engine optimization basics",
      "Expert-led strategy development",
    ],
  },
  {
    title: "Lead Generation",
    category: "Strategy",
    description:
      "Automated B2B lead generation that delivers high-quality, sales-ready prospects straight to your pipeline.",
    points: [
      "AI-driven lead tracking and scoring",
      "Multi-channel outreach automation",
      "Real-time analytics dashboard",
    ],
    isInternalLink: true,
    internalNavPath: "/solutions",
    targetTab: "Strategy",
    targetSolutionTitle: "Lead Generation",
  },
  {
    title: "Custom Solutions",
    category: "Strategy",
    description:
      "Custom software solutions built to streamline operations, improve efficiency, and support business growth.",
    points: [
      "Business needs analysis",
      "Agile development process",
      "Ongoing support and maintenance",
    ],
    isInternalLink: true,
    internalNavPath: "/solutions",
    targetTab: "Strategy",
    targetSolutionTitle: "Custom Solutions",
  },
];

export default function SolutionsSection() {
  const navigate = useNavigate();

  const handleLearnMoreClick = (solution) => {
    if (solution.isInternalLink) {
      navigate(solution.internalNavPath, {
        state: {
          activeTab: solution.targetTab,
          activeSolution: solution.targetSolutionTitle,
        },
      });
    } else if (solution.path) {
      window.open(solution.path, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="pt-10 relative pb-20 min-h-screen">
      <div className="px-8 absolute inset-0 w-full h-full">
        <img
          src={HeadImg}
          alt="Header Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-75"></div>
      </div>
      <div className="relative z-10">
        {/* ... (header section with "View All" button - no change) ... */}
        <div className="flex px-8 justify-between items-center mb-8">
          <div>
            <p className="inline-block hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
              OUR PARTNER SOLUTIONS
            </p>
            <h1 className="text-3xl md:text-5xl hover:scale-[1.03] transition-all duration-300 font-extrabold text-blue-900 mt-2">
              Comprehensive Solutions
            </h1>
            <p className="text-lg font-medium text-gray-600 mt-2">
              Built for the most common issues.
            </p>
          </div>
          <button
            onClick={() => navigate("/solutions")}
            className="text-blueclr mt-6 text-base sm:text-lg flex items-center font-medium group relative"
          >
            <span className="relative z-10 group-hover:translate-y-[-2px] transition-all">
              View All{" "}
            </span>
            <ArrowRight
              className="ml-2 relative z-10 group-hover:translate-y-[-2px] transition-all"
              size={20}
            />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blueclr transition-all group-hover:w-full"></span>
          </button>
        </div>
        <img
          src={vector}
          alt="Glow"
          className="absolute lg:block hidden -top-10 right-0 w-96 h-96 opacity-75"
        />
        <img
          src={vector23}
          alt="Glow"
          className="absolute bottom-0 left-0 w-96 h-96 opacity-55"
        />

        <div className="grid grid-cols-1 px-8 md:grid-cols-2 lg:grid-cols-3 z-10 relative gap-6 md:gap-10">
          {solutions.map((solution, index) => (
            <div // Changed from <a> to <div> to handle conditional logic for button
              key={index}
              className="bg-[#F4F9FD] rounded-xl px-8 py-10 shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#005895]">
                  {solution.title}
                </h2>
                <p className="text-gray-600 text-[15px] mt-5 mb-4 border-b-[3px] border-gray-200 pb-4">
                  {solution.description}
                </p>
                
                <p className="text-gray-800 font-semibold text-sm mb-3">Popular Features</p>
                <ul className="space-y-3 text-sm list-none pl-0">
                  {solution.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#4B9EDA] mr-2 text-lg leading-none pt-px">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-10">
                <button
                  onClick={() => handleLearnMoreClick(solution)}
                  className="bg-[#4491ba] text-white font-semibold py-2.5 px-4 rounded-md hover:bg-[#3b7e9f] transition-colors w-full text-xs uppercase tracking-wider text-center"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}