import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/image 1 (1).png";
import vector from "../../../assets/Vector 1 (1).png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-[53%_47%] sm:mt-12 mt-4 mb-12 lg:mb-16 md:mt-2 md:mb-2 md:h-[90vh] h-screen bg-[#ecf7fd]">
      <div className="flex relative bg-white flex-col justify-center px-6 md:px-12 2xl:px-20">
        <h1 className="text-4xl md:text-5xl font-black text-blueclr leading-snug md:leading-tight">
          More Leads, More Sales,{" "}<br/>
          <span className="text-blueclr">Less Effort</span>
        </h1>
        <p className="text-gray-700 mt-4 text-lg">
          Driven by AI automation, proven strategies, and 40+ years of hands-on
          sales expertise to help you close more deals with less effort.
        </p>
        <div className="my-6 flex flex-col sm:flex-row gap-4">
          <a
            href="https://link.salesdriver.io/widget/booking/YLwxGlwqKM9noAp4HNIx"
            className="md:px-9 px-6 py-2 md:py-3 text-white hover:bg-[#DA9613] hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] bg-yellowclr rounded-3xl font-semibold shadow-md hover:bg-opacity-90 text-center"
          >
            Work with Us
          </a>
          <button
            onClick={() => navigate("/services")}
            className="md:px-8 px-6 hover:border-[#3F464B] py-2 md:py-3 border-[1.9px] border-gray-700 text-gray-700 rounded-3xl font-semibold shadow-md hover:bg-gray-200 hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px]"
          >
            Explore Services
          </button>
        </div>
      </div>

      <img
        src={vector}
        alt="Vector Background"
        className="absolute lg:block hidden -top-1 left-1/2 w-64 h-full opacity-75"
      />

      <div className="w-full relative md:h-[85vh] h-auto my-auto flex items-center justify-center">
        <img
          src={img}
          alt="Sales Growth"
          className="w-[60%] md:w-[70%] lg:w-[75%] h-[28vh] sm:h-[40vh] md:h-[65vh] object-contain"
        />
        <div className="absolute hidden transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] md:flex flex-col top-0 left-0 md:left-10 bg-white shadow-lg rounded-2xl px-10 py-2 text-sm md:text-base font-medium text-gray-700 items-center">
          <span className="text-blueclr font-bold mr-1">20+ Years</span>
          <span>Experience</span>
        </div>

        <div className="absolute transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] left-20 md:left-64 bottom-64 bg-white shadow-lg rounded-full px-4 py-2 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
          <span className="text-blueclr font-bold mr-1">Hybrid</span> Human + AI
          Expertise
        </div>
        <div className="absolute transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] bottom-32 right-0 md:right-80 bg-white shadow-lg rounded-full px-4 py-2 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
          <span className="text-blueclr font-bold mr-1">100m+</span> Agency Sales
          Tools
        </div>
      </div>
    </div>
  );
}
