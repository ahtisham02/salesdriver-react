import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/h1.jpg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-white px-6 py-12 md:pt-20 md:px-16 flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl lg:text-[55px] lg:!leading-[4rem] font-extrabold text-blueclr">
          More Leads, More Sales,<br /> Less Effort
        </h1>
        <p className="text-gray-700 mt-4">
          Driven by AI automation, proven strategies, and 40+ years of hands-on
          sales expertise to help you close more deals with less effort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button
            onClick={() => navigate("/aboutus")}
            className="px-4 py-3 text-sm uppercase bg-yellowclr shadow-md text-white rounded-md font-medium"
          >
            Work with us
          </button>
          <button
            onClick={() => navigate("/aboutus")}
            className="px-4 py-3 text-sm uppercase border border-[#3F464B] shadow-md text-[#3F464B] rounded-md font-medium"
          >
            Explore services
          </button>
        </div>
      </div>
      <img src={img} alt="img" className="mx-auto mt-20 rounded-md shadow-2xl" />
    </div>
  );
}
