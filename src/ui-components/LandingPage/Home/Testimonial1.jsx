import React from "react";
import HeadImg from "../../../assets/69c37d04d3feadc39b5681a70e9d7638.png";
import vector from "../../../assets/Vector3.png";
import { ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function HowWeWork() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="relative mx-auto pt-5 lg:pt-12 pb-16 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HeadImg}
          alt="Header Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-75"></div>
      </div>

      <div className="relative z-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2">
          <p className="inline-block hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
            OUR PROCESS
          </p>
          <h2 className="text-3xl hover:scale-[1.03] transition-all duration-300 md:text-5xl font-extrabold text-[#005895] mt-3">
            How We Work
          </h2>
          <p className="text-gray-500 hover:scale-[1.03] transition-all duration-300 mt-2.5 font-semibold">
            AI Tools + Human Expertise = More Sales, Less Hassle
          </p>
          {location.pathname === "/" && (
            <button
              onClick={() => navigate("/howitworks")}
              className="text-blueclr mt-6 text-base sm:text-lg flex items-center font-medium group relative"
            >
              <span className="relative z-10 group-hover:translate-y-[-2px] transition-all">
                Learn More
              </span>
              <ArrowRight
                className="ml-2 relative z-10 group-hover:translate-y-[-2px] transition-all"
                size={20}
              />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blueclr transition-all group-hover:w-full"></span>
            </button>
          )}
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 text-gray-700">
          <p className="font-bold text-lg text-[#005895] my-2">
            Struggling with inconsistent sales or wasted time?
          </p>
          <p>
            SalesDriver fixes this with a 3-part system that drives consistent
            revenue:
          </p>
          <p className="text-[#005895] text-lg font-bold my-2">
            We optimize everything.
          </p>
          <p>
            From CRM setup to content, SEO, and ads—we streamline your entire
            sales process.
          </p>
        </div>
      </div>

      <div className="relative mt-12">
        <img
          src={vector}
          alt="Vector Background"
          className="absolute lg:block hidden top-1/2 left-0 w-full h-auto -translate-y-1/2"
        />

        <div className="relative px-6 md:px-12 z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-20">
          {[
            {
              id: "1",
              title: "Strategy First",
              description: "Data-driven plans to turn leads into buyers.",
            },
            {
              id: "2",
              title: "AI Automation That Works",
              description: "Data-driven plans to turn leads into buyers.",
            },
            {
              id: "3",
              title: "Target The Right People",
              description: "Data-driven plans to turn leads into buyers.",
            },
          ].map((step) => (
            <div
              key={step.id}
              className="relative hover:border hover:border-[#fbad18] transition-transform duration-200 hover:scale-105 bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-left"
            >
              <span className="absolute top-5 left-5 bg-[#FFEFDA] text-yellowclr font-bold text-sm px-3 py-1 rounded-lg">
                {step.id}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-10">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2.5">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
