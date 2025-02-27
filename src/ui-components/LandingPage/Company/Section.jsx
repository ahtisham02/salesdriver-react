import React from "react";
import img from "../../../assets/h1.jpg";

export default function Section() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pb-12 pt-3">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl lg:text-[45px] !leading-snug font-bold lg:font-extrabold text-gray-900">
          40+ Years of
          <br />
          Trained Expertise.
        </h2>
        <h2 className="text-2xl mt-5 !leading-normal font-semibold text-gray-900">
          Proven Results. Scalable Sales.
        </h2>
        <p className="text-gray-700 text-[13px] md:text-[15px] mt-3">
          With 40+ years of experience and a track record of success across 15+
          industries, we go beyond lead generation—we build scalable sales
          systems that drive real revenue.
        </p>
        <h2 className="text-[16px] mt-4 !leading-normal font-semibold text-gray-900">
          Rockford Hunt (Founder & CEO)
        </h2>
        <p className="text-gray-700 text-[13px] md:text-[15px] mt-0.5">
          A 20+ year sales veteran with $100M+ in new business sales, securing
          8-figure contracts across healthcare, tech, finance, and government.
        </p>
        <h2 className="text-[16px] mt-4 !leading-normal font-semibold text-gray-900">
          Leann Lundstedt (Co-founder & COO)
        </h2>
        <p className="text-gray-700 text-[13px] md:text-[15px] mt-0.5">
          A Certified Project Manager with two 8-figure company exits,
          specializing in scalable sales strategies and automation.
        </p>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={img}
          alt="Sales Illustration"
          className="w-full h-96 max-w-md rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
