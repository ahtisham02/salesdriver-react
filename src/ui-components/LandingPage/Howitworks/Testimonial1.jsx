import React from "react";
import img from "../../../assets/auto.jpg";
import { useNavigate } from "react-router-dom";

export default function SalesDriverSteps() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white px-10 pt-16 pb-20 gap-6 lg:gap-10">
      <div className="w-full lg:w-1/2 order-first lg:order-1">
        <img
          src={img}
          alt="Sales process"
          className="w-full h-80 md:h-96 object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 space-y-6">
        <p className="text-sm sm:text-[13px] font-medium text-blueclr uppercase tracking-wider -mb-4">
          Our Process
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          SalesDriver Steps
        </h2>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-blueclr">Step 1 | Strategy</h3>
          <p className="text-gray-600 mt-2 leading-relaxed">
            We focus on strategic planning, mapping your ideal customer journey,
            and developing a data-driven program proven to drive sales.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-blueclr">
            Step 2 | Automation
          </h3>
          <p className="text-gray-600 mt-2 leading-relaxed">
            We maximize brand/target interactions at all points of the customer
            journey. Our solution is tailored to the client, all reporting to a
            CRM.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-blueclr">Step 3 | Targeting</h3>
          <p className="text-gray-600 mt-2 leading-relaxed">
            We identify your audience, understand their pain points, and tailor
            your message: the right message, to the right prospect, at the right
            time.
          </p>
        </div>

        <div className="mt-8 flex space-x-4">
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 text-white bg-blueclr rounded-lg font-semibold shadow-lg hover:bg-opacity-90 transition transform hover:scale-105"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/services")}
            className="px-8 py-3 border-[1.9px] border-blueclr text-blueclr rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
