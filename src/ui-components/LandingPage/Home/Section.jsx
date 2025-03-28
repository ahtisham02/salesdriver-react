import React from "react";
import img from "../../../assets/resizedi.png";

export default function Section() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 md:px-10 py-10 bg-[#ebf5ff] rounded-3xl mx-12 my-10">
      <div className="md:w-1/2 text-center bg-white px-8 py-7 rounded-3xl md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-blueclr leading-normal">
          What is a <br /> SalesDriver?
        </h2>
        <p className="text-gray-700 text-[16px] font-bold mt-5 leading-relaxed">
          I am a SalesDriver, You are a SalesDriver.<br/> We Drive Sales.
        </p>
        <p className="text-gray-700 text-[17px] mt-4 leading-relaxed">
          A SalesDriver uses data and strategy to accelerate sales. We identify
          opportunities, build meaningful relationships, and own the sales
          process to drive growth. We turn insights into action and prospects
          into partners.
        </p>
        <p className="text-gray-700 text-[17px] mt-4 leading-relaxed">
          Become a SalesDriver—where insights meet action and connections drive
          growth.{" "}
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Sales Illustration"
          className="w-full h-[360px] max-w-xl"
        />
      </div>
    </section>
  );
}
