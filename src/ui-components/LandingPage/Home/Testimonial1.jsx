import React from "react";
import img from "../../../assets/h1.jpg";
import { useNavigate } from "react-router-dom";

export default function SalesDriverDifference() {
  const navigate = useNavigate();
  
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 text-center">
      <p className="sm:text-[13px] text-[11px] font-medium text-blueclr">
        Our Approach
      </p>
      <h2 className="text-3xl md:text-[49px] lg:!leading-[4rem] font-extrabold text-gray-900 mb-12 md:mb-10">
        The SalesDriver <br className="hidden md:block" /> Difference
      </h2>
 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-left">
        <div className="space-y-6 text-gray-700">
          <p className="text-[16px]">
            <span className="font-bold">SalesDriver</span> eliminates sales
            inefficiencies with a
            <span className="font-bold"> structured, AI-powered system</span>{" "}
            that drives predictable revenue.
          </p>
          <p className="text-[16px]">
            We combine{" "}
            <span className="font-bold">
              strategy, automation, and targeting
            </span>{" "}
            to streamline the sales process, optimize outreach, and increase
            conversions.
          </p>
          <p className="text-[16px]">
            Our AI-driven approach optimizes every stage of the sales cycle—from
            CRM integration to content marketing, SEO, and digital ads.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={img}
            alt="Sales Process"
            className="shadow-lg rounded-lg w-full max-w-[450px] h-[300px] object-cover"
          />
        </div>

        <div className="space-y-4 text-gray-700">
          <p className="text-[16px]">
            <span className="font-bold">Strategy:</span> Data-driven sales
            roadmaps that guide prospects from lead to close.
          </p>
          <p className="text-[16px]">
            <span className="font-bold">Automation:</span> AI-powered tools for
            outreach, follow-ups, and engagement—maximizing efficiency.
          </p>
          <p className="text-[16px]">
            <span className="font-bold">Targeting:</span> Advanced data insights
            to connect with the right prospects at the right time.
          </p>

          <button onClick={()=>{navigate('/contact')}} className="bg-yellowclr hover:bg-yellow-600 transition duration-300 text-white font-semibold text-sm py-3 px-6 mt-6 rounded-lg shadow-md">
            GET STARTED
          </button>

          <p className="text-gray-500 text-[11px]">
            See how our AI-powered system drives consistent sales growth.
          </p>
        </div>
      </div>
    </div>
  );
}
