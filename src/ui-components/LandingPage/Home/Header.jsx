import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/image 1 (1).png";
import vector from "../../../assets/Vector 1 (1).png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-[53%_47%] sm:mt-12 mt-4 mb-28 md:mt-2 md:mb-2 md:h-[90vh] h-screen bg-[#ecf7fd]">
      <div className="flex relative bg-white flex-col justify-center px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl px-2 font-bold text-blueclr leading-snug md:leading-tight">
          More Leads, More Sales,{" "}
          <span className="text-blueclr">Less Effort</span>
        </h1>
        <p className="text-gray-700 mt-4 text-lg">
          Driven by AI automation, proven strategies, and 40+ years of hands-on
          sales expertise to help you close more deals with less effort.
        </p>
        <div className="my-6 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/howitworks")}
            className="md:px-9 px-6 py-2 md:py-3 text-white bg-yellowclr rounded-3xl font-semibold shadow-md hover:bg-opacity-90 transition"
          >
            Work with Us
          </button>
          <button
            onClick={() => navigate("/services")}
            className="md:px-8 px-6 py-2 md:py-3 border-[1.9px] border-gray-700 text-gray-700 rounded-3xl font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Explore Services
          </button>
        </div>
      </div>

      <img
        src={vector}
        alt="Vector Background"
        className="absolute lg:block hidden -top-1 left-1/2 w-72 h-full opacity-75"
      />

      <div className="w-full relative md:h-[85vh] h-auto my-auto flex items-center justify-center">
        <img
          src={img}
          alt="Sales Growth"
          className="w-[60%] md:w-[70%] lg:w-[75%] h-[28vh] sm:h-[40vh] md:h-[65vh] object-fill"
        />
        <div className="absolute hidden md:flex flex-col top-0 left-0 md:left-10 bg-white shadow-lg rounded-2xl px-10 py-2 text-sm md:text-base font-medium text-gray-700 items-center">
          <span className="text-blueclr font-bold">20+ Years</span>
          <span>Experience</span>
        </div>

        <div className="absolute left-20 md:left-64 bottom-64 bg-white shadow-lg rounded-full px-4 py-2 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
          <span className="text-blueclr font-bold">Hybrid</span> Human + AI
          Expertise
        </div>
        <div className="absolute bottom-32 right-0 md:right-80 bg-white shadow-lg rounded-full px-4 py-2 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
          <span className="text-blueclr font-bold">100m+</span> Agency Sales
          Tools
        </div>
      </div>
    </div>
  );
}
