import React from "react";
import { ArrowRight } from "lucide-react";
import img1 from "../../../assets/Rectangle 35.png";
import img2 from "../../../assets/Rectangle 35 (1).png";
import img3 from "../../../assets/Rectangle 35 (2).png";
import img4 from "../../../assets/Rectangle 35 (3).png";
import img5 from "../../../assets/Rectangle 35 (4).png";
import img6 from "../../../assets/Rectangle 35 (5).png";
import vector from "../../../assets/Group.png";
import RightArrow from "../../../assets/Path.png";
import HeadImg from "../../../assets/69c37d04d3feadc39b5681a70e9d7638.png";
import vector23 from "../../../assets/vector23.png";

const solutions = [
  {
    title: "Virtual Sales Reps",
    logo: "MeetNow Agency",
    logoImg: img1,
  },
  {
    title: "Web Solution",
    logo: "Web Point Digital",
    logoImg: img2,
  },
  {
    title: "Social Selling",
    logo: "SEP Marketing Services",
    logoImg: img3,
  },
  {
    title: "Lead Generation",
    logo: "B2B Marketing.biz",
    logoImg: img4,
  },
  {
    title: "Web Design",
    logo: "CompanyC Creative",
    logoImg: img5,
  },
  {
    title: "Custom Solutions",
    logo: "Icon Devs",
    logoImg: img6,
  },
];

export default function SolutionsSection() {
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
        <div className="flex px-8 justify-between items-center mb-8">
          <div>
            <p className="inline-block bg-[#ECF7FD] text-blue-600 text-xs font-semibold px-4 py-1.5 border border-blue-500 rounded-full">
              OUR PARTNER SOLUTIONS
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mt-2">
              Comprehensive Solutions
            </h1>
            <p className="text-lg font-medium text-gray-600 mt-2">
              Built for the most common issues.
            </p>
          </div>
          <button className="text-blueclr hidden font-semibold text-lg sm:flex items-center hover:underline">
            View All <ArrowRight className="ml-1 w-5 h-5" />
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
        <div className="grid grid-cols-1 px-8 md:grid-cols-3 z-10 relative gap-6 md:gap-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-[#ECF7FD] rounded-xl p-6 md:p-8 shadow-md flex flex-col space-y-4"
            >
              <h2 className="text-3xl font-extrabold text-[#005895] border-b border-white pb-7">
                {solution.title}
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 mt-3">
                  <img
                    src={solution.logoImg}
                    alt={solution.logo}
                    className="w-40 object-contain"
                  />
                </div>
                <img
                  src={RightArrow}
                  alt="Header Background"
                  className="w-6 h-6 object-contain"
                />{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
