import React from "react";
import img from "../../../assets/h1.jpg";

export default function SalesDriverDifference() {
  return (
    <div className="max-w-7xl mx-auto pb-16 pt-10 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-[49px] lg:!leading-[4rem] font-extrabold text-gray-900 mb-12 md:mb-16">
        The SalesDriver <br /> Difference
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-left">
        <div className="text-[16px]">
          <p className="text-gray-700 mt-4">
            SalesDriver eliminates sales inefficiencies with a structured,
            AI-powered system that drives predictable revenue.
          </p>
          <p className="text-gray-700 mt-4">
            We combine strategy, automation, and targeting to streamline the
            sales process, optimize outreach, and increase conversions.
          </p>
          <p className="text-gray-700 mt-4">
            We optimize your entire sales process using AI and expert-driven
            strategies to optimize every stage of the sales cycle—from CRM
            integration to content marketing, SEO, and digital ads.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={img}
            alt="img"
            className="shadow-md w-full max-w-[450px] h-[290px]"
          />
        </div>

        <div className="text-left text-[16px]">
          <p className="text-gray-700">
            <span className="font-bold">Strategy: </span>Data-driven sales
            roadmaps that guide prospects from lead to close.
          </p>
          <p className="text-gray-700 mt-4">
            <span className="font-bold">Automation: </span>AI-powered tools for
            outreach, follow-ups, and engagement—maximizing efficiency.
          </p>
          <p className="text-gray-700 mt-4">
            <span className="font-bold">Targeting: </span>Advanced data insights
            to connect with the right prospects at the right time.
          </p>

          <button className="bg-blueclr text-white font-medium text-sm py-2 px-4 mt-6 rounded-md shadow">
            GET STARTED
          </button>

          <p className="text-gray-500 text-[12px] mt-2">
            See how our AI-powered system drives consistent sales growth.
          </p>
        </div>
      </div>
    </div>
  );
}
