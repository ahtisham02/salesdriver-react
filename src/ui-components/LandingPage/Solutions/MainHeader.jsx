import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/sol.jpg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-white pt-16 pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 !leading-[1.15]">
            Tailored Solutions for <span className="text-blueclr">Your Success</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Discover customized strategies designed to address your unique business challenges, boost efficiency, and accelerate growth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/howitworks")}
              className="px-8 py-3 text-white bg-blueclr rounded-lg font-semibold shadow-lg hover:bg-opacity-90 transition transform hover:scale-105"
            >
              Learn More
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 border-2 border-blueclr text-blueclr rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div>
          <img
            src={img}
            alt="Business Solutions"
            className="w-full h-[450px] object-contain max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}