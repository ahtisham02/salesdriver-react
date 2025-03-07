import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/sectione.webp";
import bg from "../../../assets/Bg.svg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-slate-50 to-blue-50 pt-16 pb-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 !leading-[1.15]">
            Empowering Growth with <span className="text-blueclr">SalesDriver</span>
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            Unlock your business potential with cutting-edge strategies that turn leads into loyal customers, driving sustainable revenue and impactful growth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/howitworks")}
              className="px-8 py-3 text-white bg-blueclr rounded-lg font-semibold shadow-lg hover:bg-opacity-90 transition transform hover:scale-105"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => navigate("/solutions")}
              className="px-8 py-3 border-[1.9px] border-blueclr text-blueclr rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
            >
              Explore Solutions
            </button>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={img}
            alt="Sales Growth"
            className="w-full h-[450px] object-contain max-w-md md:max-w-lg transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}