import React, { useState } from "react";
import img from "../../../assets/h1.jpg";
import { ChevronDown, ChevronUp } from "lucide-react";

const tabs = [
  { name: "Marketing" },
  { name: "SaaS and Tech" },
  { name: "Consulting" },
  { name: "B2B Agencies" },
  { name: "Real Estate" },
  { name: "HealthCare" },
  { name: "Industrial" },
];

const cards = [
  {
    id: 1,
    title: "Case Study 1",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: img,
  },
  {
    id: 2,
    title: "Case Study 2",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: img,
  },
  {
    id: 3,
    title: "Case Study 3",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: img,
  },
];

export default function Testimonial() {
  const [activeTab, setActiveTab] = useState("Marketing");
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="relative z-20 bg-[#ECF7FD] md:rounded-t-[300px]">
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

      <div className="max-w-6xl pb-14 mx-auto space-y-6">
        {cards.map((card) => (
          <div key={card.id} className="border border-blueclr p-10 rounded-md bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 items-start">
              <div className="pr-10">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-40 h-16 object-cover mb-6"
                />
                <h2 className="text-2xl lg:text-4xl font-bold text-blueclr">
                  {card.title}
                </h2>
                <p className="text-gray-700 mt-8 text-[16px]">
                  {card.description}
                </p>
              </div>

              <div>
                <div
                  className="flex items-center text-gray-900 font-semibold cursor-pointer"
                  onClick={() => handleToggle(`service-${card.id}`)}
                >
                  <h2 className="text-xl font-semibold text-slate-800 flex items-center">
                    SERVICE CATEGORY
                    {openDropdown === `service-${card.id}` ? (
                      <ChevronUp className="ml-2" size={22} />
                    ) : (
                      <ChevronDown className="ml-2" size={22} />
                    )}
                  </h2>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 px-4 ease-in-out mt-4 ${
                    openDropdown === `service-${card.id}`
                      ? "max-h-screen py-4"
                      : "max-h-0"
                  }`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                    {[...Array(6)].map((_, index) => (
                      <button
                        key={index}
                        className="py-3 px-6 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full hover:scale-105"
                      >
                        BUTTON
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div
                    className="flex items-center mt-10 text-gray-900 font-semibold cursor-pointer"
                    onClick={() => handleToggle(`solution-${card.id}`)}
                  >
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center">
                      SOLUTION CATEGORY
                      {openDropdown === `solution-${card.id}` ? (
                        <ChevronUp className="ml-2" size={22} />
                      ) : (
                        <ChevronDown className="ml-2" size={22} />
                      )}
                    </h2>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 px-4 ease-in-out mt-4 ${
                      openDropdown === `solution-${card.id}`
                        ? "max-h-screen py-4"
                        : "max-h-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                      {[...Array(6)].map((_, index) => (
                        <button
                          key={index}
                          className="py-3 px-6 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full hover:scale-105"
                        >
                          BUTTON
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
