import React from "react";
import img from "../../../assets/Website_Media/Website_Media/designs/rock_image.png";
import vector from "../../../assets/Vector 14.png";

export default function Section() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pb-12 pt-6 bg-white">
      <div className="relative md:w-1/2 space-y-5">
        <img
          src={vector}
          alt="Background Vector"
          className="absolute lg:block hidden -top-64 -left-40 w-full h-96 object-contain"
        />

        <h2 className="text-3xl hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] md:text-4xl lg:text-[45px] font-extrabold text-[#005895] !leading-tight">
          Meet Our Founder
        </h2>
        <h3 className="text-2xl font-semibold text-gray-800">
          Proven Results. Scalable Sales.
        </h3>
        <p className="text-gray-700 text-[15px] leading-relaxed">
          With <span className="font-bold">years of experience</span> and a
          track record of success across{" "}
          <span className="font-bold">15+ industries</span>, we go beyond lead
          generation{" "}
          <span className="font-bold">
            — we build scalable sales systems that drive real revenue.
          </span>
        </p>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">
            Rockford Hunt (Founder & CEO)
          </h4>
          <p className="text-gray-700 text-[15px]">
            A 20+ year sales veteran with $100M+ in new business sales, securing
            8-figure contracts across healthcare, tech, finance, and government.
          </p>
        </div>
      </div>

      <div className="relative md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={img}
          alt="Sales Expertise"
          className="w-full max-w-md md:ml-28"
        />

        <div className="absolute md:block hidden top-4 left-0 bg-white shadow-lg px-4 py-2 rounded-full text-sm font-medium transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] hover:shadow-xl">
          <span className="text-blueclr font-bold">Secured</span> 8-figure
          Contracts
        </div>

        <div className="absolute md:block hidden bottom-4 left-0 bg-white shadow-lg px-4 py-2 rounded-full text-sm font-medium transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] hover:shadow-xl">
          <span className="text-blueclr font-bold">20+</span> years of Experience
        </div>

        <div className="absolute md:block hidden top-12 right-0 bg-white shadow-lg px-4 py-2 rounded-full text-sm font-medium transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] hover:shadow-xl">
          <span className="text-blueclr font-bold">Omnicom</span> Experience
        </div>
      </div>
    </section>
  );
}
