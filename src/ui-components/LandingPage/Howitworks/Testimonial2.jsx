import React from "react";

export default function StatsSection() {
  return (
    <div className="text-center py-16 lg:py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
      <p className="text-sm font-semibold text-blueclr uppercase tracking-widest mb-2">
        Our Metrics
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
        Sales That Deliver <br className="hidden sm:block" /> Results
      </h2>

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
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-blue-100"
          >
            <p className="text-3xl md:text-4xl font-bold text-blueclr mb-3">
              {stat.value}
            </p>
            <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
