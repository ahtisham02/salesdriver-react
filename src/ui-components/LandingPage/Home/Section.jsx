import React from "react";
import img from "../../../assets/h1.jpg";

export default function Section() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl !leading-normal font-bold text-gray-900">
          We Are SalesDriver.
          <br />
          We Drive Sales.
        </h2>
        <p className="text-gray-700 text-[14px] md:text-[16px] mt-4">
          Over 40 years of experience and a track record of $100M+ in new
          business sales, we know what works. We’ve built high-performing sales
          systems that generate leads, close deals, and drive revenue.
        </p>
        <p className="text-gray-700 text-[14px] md:text-[16px] mt-4">
          Our goal is to help you build a repeatable, scalable sales system so
          you can focus on what matters: closing deals and growing your
          business.
        </p>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={img}
          alt="Sales Illustration"
          className="w-full max-w-md rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
