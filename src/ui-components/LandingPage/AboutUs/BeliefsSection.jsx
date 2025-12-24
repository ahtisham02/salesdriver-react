import React from "react";

export default function BeliefsSection() {
  const tags = [
    "Clear",
    "Practical",
    "Data-driven",
    "Fast to set up",
    "Easy to understand",
    "Affordable",
    "Reliable",
    "Repeatable",
  ];

  return (
    <div className="bg-[#00425A] w-full py-20 px-5 md:px-20 font-plus-jakarta text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-28">
        {/* Left Column */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            What we believe <br /> about B2B sales
          </h2>
          <p className="text-gray-200 text-lg mb-8 leading-relaxed">
            Sales should be clear, practical, and repeatable. Teams shouldn't
            waste money on scattered tools or bloated software that slows them
            down.
          </p>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="px-6 py-2 rounded-full border border-[#235B7A] bg-[#0A4565] text-white text-sm font-medium hover:bg-gradient-to-r hover:from-[#00A1E0] hover:to-[#005F8F] hover:border-[#00A1E0] transition-all duration-300 cursor-default transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl animate-fade-in-up"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <style jsx>{`
            @keyframes fade-in-up {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-in-up {
              animation: fade-in-up 0.5s ease-out forwards;
            }
          `}</style>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-6 text-center lg:text-right">
            We believe teams shouldn’t waste money on dozens of subscriptions.
          </h3>
          <p className="text-gray-200 text-lg text-center lg:text-right">
            Most of all, we believe that sales should feel{" "}
            <span className="font-bold text-white">manageable</span> again.
          </p>
        </div>
      </div>
    </div>
  );
}
