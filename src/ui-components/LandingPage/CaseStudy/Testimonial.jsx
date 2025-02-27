import React, { useState } from "react";
import img from "../../../assets/h1.jpg";
import { ChevronDown } from "lucide-react";

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

  return (
    <>
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
        <div key={card.id} className="border border-blueclr p-10 rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-[64%_30%] gap-6 items-start">
            <div className="pr-10">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-40 h-16 object-cover mb-6"
              />
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">{card.title}</h2>
              <p className="text-gray-700 mt-8 text-[16px]">{card.description}</p>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center text-gray-900 font-semibold">
                  SERVICE CATEGORY <ChevronDown className="ml-2" size={18} />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[...Array(6)].map((_, index) => (
                    <button
                      key={index}
                      className="text-gray-900 px-5 py-1 rounded-md text-sm font-medium"
                    >
                      BUTTON
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mt-10 text-gray-900 font-semibold">
                  SOLUTION CATEGORY <ChevronDown className="ml-2" size={18} />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[...Array(6)].map((_, index) => (
                    <button
                      key={index}
                      className="text-gray-900 px-5 py-1 rounded-md text-sm font-medium"
                    >
                      BUTTON
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
