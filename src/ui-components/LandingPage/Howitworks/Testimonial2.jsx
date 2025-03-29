import React from "react";
import Headimg from "../../../assets/Subtract.png";
import vector from "../../../assets/Vector 11.png";

export default function StatsSection() {
  return (
    <div className="relative text-center py-16 lg:py-20 px-4 md:px-8 bg-[#ECF7FD] rounded-t-full">
      <div className="absolute top-0 left-0 w-full h-full flex justify-center">
        <img
          src={Headimg}
          alt="Header Background"
          className="w-full h-auto max-h-[700px] object-cover"
        />
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blueclr mb-12">
          Sales That Deliver <br className="hidden sm:block" /> Results
        </h2>
        <img
          src={vector}
          alt="Vector Background"
          className="absolute lg:block hidden top-1/2 left-0 w-full h-auto -translate-y-1/2"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { value: "$100M+", label: "in revenue generated for clients." },
            { value: "10,000+", label: "sales meetings booked." },
            { value: "40+", label: "years of combined experience." },
            { value: "15+", label: "industries served worldwide." },
            {
              value: "30-50%",
              label: "Faster sales cycles with AI automation",
            },
            { value: "20-40%", label: "Increase in conversion rates." },
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <p className="text-3xl md:text-4xl font-bold text-blueclr mb-3">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
