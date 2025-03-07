import React from "react";
import img from "../../../assets/img12.avif";

export default function Section() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 pb-12 pt-10 md:pt-16 lg:pt-24 gap-10">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Sales Illustration"
          className="w-full max-w-lg object-cover"
        />
      </div>

      <div className="md:w-1/2 space-y-4">
        <p className="text-sm font-medium text-blueclr uppercase tracking-wide">
          Our Company
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          What We Do
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          We build sales-driven solutions by combining virtual sales teams,
          automations, and data-driven strategies that grow your revenue.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 pt-4">
          {[
            { value: "$100M+", label: "New business sales closed" },
            { value: "40+", label: "Years of agency & sales experience" },
            { value: "15+", label: "Industries served worldwide" },
            { value: "10,000s+", label: "Meetings booked & deals closed" },
          ].map((stat, index) => (
            <div key={index} className="text-left">
              <p className="text-2xl lg:text-3xl font-bold text-blueclr">
                {stat.value}
              </p>
              <p className="text-gray-500 mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
