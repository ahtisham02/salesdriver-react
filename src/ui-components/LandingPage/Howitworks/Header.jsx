import React from "react";
import img from "../../../assets/img4.jpg";
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-left">
        <div className="space-y-6 text-gray-700">
          <p className="text-[16px]">
            We help <span className="font-bold">guide you</span> through growing
            your sales with a{" "}
            <span className="font-bold"> structured, AI-powered system</span>{" "}
            designed that modernizes your outreach.
          </p>
          <p className="text-[16px]">
            We optimize{" "}
            <span className="font-bold">your entire sales-cycle</span> - from
            email marketing to social media, SEO, website optimization, PR, and
            ad campaigns.
          </p>
          <p className="text-[16px]">
            <span className="font-bold">Automates follow ups</span> , and makes
            sales easier and more efficient.{" "}
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={img}
            alt="Sales Process"
            className="w-full max-w-[450px] h-[300px] object-cover"
          />
        </div>

        <div className="space-y-4 text-gray-700">
          <p className="text-[16px]">
            <span className="font-bold">Strategy:</span> A data-driven approach
            executed by experts for your growth.
          </p>
          <p className="text-[16px]">
            <span className="font-bold">Automation:</span> Advanced AI-powered
            tools and technology that handles prospecting and engagement for
            you.
          </p>
          <p className="text-[16px]">
            <span className="font-bold">Targeting:</span> Precise outreach to
            connect with high-intent prospects.
          </p>

          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="bg-blueclr  transition duration-300 text-white font-semibold text-sm py-3 px-6 mt-6 rounded-lg shadow-md"
          >
            GET A DEMO
          </button>

          <p className="text-gray-500 text-[11px]">
            Get consistent, scalable results with less effort.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
