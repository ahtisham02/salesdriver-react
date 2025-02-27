import React from "react";
import img from "../../../assets/h1.jpg";

export default function Section() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 pb-12 pt-3">
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={img}
          alt="Sales Illustration"
          className="w-full h-80 max-w-lg rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl mt-10 sm:mt-2 md:text-4xl lg:text-[45px] !leading-snug font-bold lg:font-extrabold text-gray-900">
          What We Do
        </h2>
        <p className="text-gray-700 text-[13px] md:text-[15px] mt-4">
          We build sales-driven solutions by combining virtual sales teams,
          automations, and data-driven strategies that grow your revenue.
        </p>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="text-left">
            <p className="text-2xl lg:text-3xl font-bold text-blueclr">#XX</p>
            <p className="text-gray-500 mt-1 text-sm">Metric</p>
          </div>
          <div className="text-left">
            <p className="text-2xl lg:text-3xl font-bold text-blueclr">#XX</p>
            <p className="text-gray-500 mt-1 text-sm">Metric</p>
          </div>
          <div className="text-left">
            <p className="text-2xl lg:text-3xl font-bold text-blueclr">#XX</p>
            <p className="text-gray-500 mt-1 text-sm">Metric</p>
          </div>
          <div className="text-left">
            <p className="text-2xl lg:text-3xl font-bold text-blueclr">#XX</p>
            <p className="text-gray-500 mt-1 text-sm">Metric</p>
          </div>
        </div>
      </div>
    </div>
  );
}
