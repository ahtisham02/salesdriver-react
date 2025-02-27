import React from "react";
import img from "../../../assets/h1.jpg";

export default function Section() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pb-12 lg:py-20 pt-3">
     
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-[49px] !leading-snug font-bold lg:font-black text-gray-900">
        We Are SalesDriver
        </h2>
        <h2 className="text-[28px] font-semibold mt-4 text-gray-900">
        We Drive Sales
        </h2>
        <button className="text-lg px-9 py-2 font-medium my-6 rounded-md bg-yellowclr text-white">L Button</button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={img}
          alt="Sales Illustration"
          className="w-full max-w-md rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
