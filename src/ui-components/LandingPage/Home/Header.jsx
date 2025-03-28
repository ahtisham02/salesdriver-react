import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/Hero/heroimage.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-[53%_47%] sm:mt-12 mt-4 mb-28 md:mt-2 md:mb-2 md:h-[90vh] h-screen bg-[#ecf7fd]">
      <div className="flex bg-white flex-col justify-center px-6 md:px-12">
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

      <div className="w-full md:h-[85vh] h-auto my-auto flex items-center justify-center">
        <img
          src={img}
          alt="Sales Growth"
          className="w-[90%] md:w-[99%] h-auto md:h-[75vh] object-fill"
        />
      </div>
    </div>
  );
}
