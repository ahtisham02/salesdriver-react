import React, { useState } from "react";
import img1 from "../../../assets/new_assets/cto.png";
import { useNavigate } from "react-router-dom";

export default function SlFooter() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add subscription logic here if needed, for now just preventing default
    console.log("Subscribing email:", email);
  };

  return (
    <div className="relative w-full py-20">
      {/* Full Width Background Image */}
      <img
        src={img1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Blue Overlay for Full Width Background */}
      <div className="absolute inset-0 bg-[#001A2C] bg-opacity-75"></div>

      <div className="relative z-10 px-5 md:px-20">
        <div className="max-w-6xl mx-auto bg-[#001A2C]/80 rounded-[50px] p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stay in the loop
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-200">
            Get insights and updates from the SalesDriver team
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-6 py-3 rounded-md bg-[#234B5E] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A1E0] border border-transparent"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#00A1E0] text-white font-semibold rounded-full hover:bg-[#008bc2] transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>

          <p className="text-gray-400 text-xs md:text-sm">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

