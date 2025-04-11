import React from "react";
import HeadImg from "../../../assets/69c37d04d3feadc39b5681a70e9d7638.png";
import vector from "../../../assets/Vector8.png";
import { useNavigate } from "react-router-dom";

export default function NewSec() {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#f7fbff] relative px-10 lg:px-16 pt-16 pb-12 flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-12 lg:space-y-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${HeadImg})` }}
    >
      <div className="absolute inset-0 bg-white opacity-75"></div>

      <div className="relative z-10 lg:w-1/2 mb-10">
        <p className="inline-block bg-[#ECF7FD] text-blueclr text-xs font-semibold px-5 py-2 border border-blue-500 rounded-full">
          ABOUT US
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-3 text-blue-900">
          We Are SalesDriver. <br /> We Drive Sales.
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">
          <div className="bg-[#D9EEFA] border border-blue-300 rounded-3xl p-6 shadow-md text-center flex flex-col justify-center">
            <p className="text-3xl font-bold">
              20<span className="text-blueclr">+ Yrs</span>
            </p>
            <p className="text-gray-700 text-sm mt-1">Agency Experience</p>
          </div>
          <div className="bg-[#D9EEFA] border border-blue-300 rounded-3xl p-6 shadow-md text-center flex flex-col justify-center">
            <p className="text-3xl font-bold">
              $100M <span className="text-blueclr">+</span>
            </p>
            <p className="text-gray-700 text-sm mt-1">New Business Sales</p>
          </div>
        </div>
      </div>

      <img
        src={vector}
        alt="Vector Background"
        className="absolute lg:block hidden top-[42%] left-0 w-full h-auto -translate-y-1/2"
      />

      <div className="relative z-10 lg:w-1/2 lg:!mt-10 lg:ml-56 space-y-6">
        <h2 className="text-2xl md:text-[34px] font-bold">Your Complete Solution</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our goal is to help you build a repeatable, scalable sales system so
          you can focus on what matters: closing deals and growing your
          business.
        </p>
        <p className="font-semibold text-lg">
          <span className="text-blueclr ">100k+</span> People Join
        </p>
        <div className="flex justify-center lg:-ml-[44px]">
          <button
            onClick={() => navigate("/company")}
            className="mt-4 bg-blueclr text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
