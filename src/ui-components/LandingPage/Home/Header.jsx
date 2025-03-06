import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/img1.svg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 pt-20 pb-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Elevate Your Sales with{" "}
            <span className="text-blueclr">AI Power</span>
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            AI-driven automation and proven strategies to help you convert leads
            effortlessly.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/howitworks")}
              className="px-6 py-3 text-white bg-blueclr rounded-lg font-semibold shadow-md hover:bg-opacity-90 transition"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/services")}
              className="px-6 py-3 border border-gray-700 text-gray-700 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={img}
            alt="Sales Growth"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}
