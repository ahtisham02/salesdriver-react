import React, { useState } from "react";
import HeadImg from "../../../assets/Group1000001040.png";

const tabs = [
  "Strategy",
  "Sales",
  "Data",
  "Content",
  "Automation",
  "SEO/Ads",
  "Support",
];

const tabData = {
  Strategy: [
    {
      title: "Virtual Sales",
      description:
        "A dedicated professional to oversee your campaign success and ensure smooth project execution.",
      points: [
        "Keeps your campaigns organized and on track.",
        "Provides expert guidance for smooth execution.",
      ],
    },
    {
      title: "Social Selling",
      description:
        "AI-powered social selling that connects businesses with the right prospects and turns social media into a sales engine.",
      points: [
        "Automated outreach to target ideal customers",
        "AI-driven engagement to increase response rates",
      ],
    },
    {
      title: "Web Design",
      description:
        "Mapping out the entire customer experience to enhance engagement and conversion.",
      points: [
        "Improves customer experience with strategic touchpoints.",
        "Identifies gaps in the conversion process.",
      ],
    },
    {
      title: "Web Solution",
      description:
        "Advanced tracking to measure and optimize each stage of the sales funnel.",
      points: [
        "Provides insights for data-driven decision-making.",
        "Measures marketing and sales success.",
      ],
    },
    {
      title: "Lead Generation",
      description:
        "Regular check-ins to evaluate performance and refine strategies.",
      points: [
        "Ensures continuous campaign improvement.",
        "Keeps you updated with progress reports.",
      ],
    },
  ],
};

export default function ExactUILayout() {
  const [expanded, setExpanded] = useState(1);
  const [activeTab, setActiveTab] = useState("Strategy");

  const features = tabData[activeTab] || [];

  return (
    <div className="container relative mx-auto px-6 lg:px-14 pt-10 lg:pt-14 my-4">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HeadImg}
          alt="Header Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <div className="mb-8 text-center">
          <h1 className="lg:text-[58px] mt-2 text-3xl font-extrabold text-[#00A7E2] tracking-wide">
            Comprehensive Solutions{" "}
          </h1>
        </div>

        <div className="flex overflow-x-auto scrollbar-custom space-x-2 py-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-300 ease-in-out rounded-3xl w-[150px] h-[390px] flex flex-col ${
                expanded === index
                  ? "min-w-[500px] h-[390px] scale-[1.01] shadow-lg items-start bg-[#D9EEFA]"
                  : "items-center bg-[#ECF7FD] hover:scale-[1.03] hover:bg-[#D9EEFA] hover:shadow-lg"
              }`}
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              <span
                className={`text-lg px-6 pt-6 font-bold text-gray-700 ${
                  expanded === index ? "self-start mb-5" : ""
                }`}
              >
                {`0${index + 1}`}
              </span>
              <h3
                className={`text-lg px-6 font-bold text-center transition-transform duration-500 ${
                  expanded === index
                    ? "rotate-0 md:text-3xl"
                    : "rotate-90 !mt-[130px] md:text-xl"
                }`}
              >
                {feature.title}
              </h3>
              {expanded === index && (
                <>
                  <p className="text-gray-600 mt-3 p-6 text-sm leading-relaxed text-center md:text-left">
                    {feature.description}
                  </p>
                  <ol className="list-disc list-inside px-6 text-gray-700 text-sm">
                    {feature.points.map((point, i) => (
                      <li key={i} className="mt-1">
                        {point}
                      </li>
                    ))}
                  </ol>
                  <a
                    href="https://link.salesdriver.io/widget/booking/YLwxGlwqKM9noAp4HNIx"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-auto px-5 py-2.5 text-white text-xl font-semibold self-end rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-[#005895] to-[#00A7E2] transition-all duration-300 ease-in-out hover:from-[#fbad18] hover:to-[#fbad18]"
                  >
                    Learn More
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
