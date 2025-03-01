import React from "react";

export default function StatsSection() {
  return (
    <div className="text-center py-12 lg:py-14 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl lg:text-5xl lg:leading-snug font-bold text-gray-900">
        Sales That Deliver <br /> Results
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10 lg:mt-16 text-gray-600">
        <div>
          <p className="text-xl md:text-2xl lg:text-4xl font-bold text-blueclr mb-1.5">$100M+</p>
          <p className="text-sm md:text-base">in revenue generated for clients.</p>
        </div>
        <div>
          <p className="text-xl md:text-2xl lg:text-4xl font-bold text-blueclr mb-1.5">10,000+</p>
          <p className="text-sm md:text-base">sales meetings booked.</p>
        </div>
        <div>
          <p className="text-xl md:text-2xl lg:text-4xl font-bold text-blueclr mb-1.5">40+</p>
          <p className="text-sm md:text-base">years of combined experience.</p>
        </div>
        <div>
          <p className="text-xl md:text-2xl lg:text-4xl font-bold text-blueclr mb-1.5">15+</p>
          <p className="text-sm md:text-base">industries served worldwide.</p>
        </div>
        <div>
          <p className="text-xl md:text-2xl lg:text-4xl font-bold text-blueclr mb-1.5">30-50%</p>
          <p className="text-sm md:text-base">Faster sales cycles with AI automation</p>
        </div>
        <div>
          <p className="text-xl md:text-2xl lg:text-4xl font-bold text-blueclr mb-1.5">20-40%</p>
          <p className="text-sm md:text-base">Increase in conversion rates.</p>
        </div>
      </div>
    </div>
  );
}
