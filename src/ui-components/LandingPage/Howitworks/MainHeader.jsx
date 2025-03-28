import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/how.jpg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fafafa] pt-14 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 !leading-[1.15]">
            Discover How <span className="text-blueclr">SalesDriver</span> Works
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            Learn how our innovative platform transforms your business processes, drives growth, and delivers measurable results. From strategy to execution, we’ve got you covered.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/services")}
              className="px-8 py-3 text-white bg-blueclr rounded-lg font-semibold shadow-lg hover:bg-opacity-90 transition transform hover:scale-105"
            >
              See It in Action
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 border-[1.9px] border-blueclr text-blueclr rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
            >
              Talk to an Expert
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={img}
            alt="How SalesDriver Works"
            className="w-full h-[450px] object-contain max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}