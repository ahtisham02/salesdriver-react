import React from "react";
import img from "../../../assets/img3.webp";

export default function Section() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 md:px-10 py-10 bg-[#ebf5ff] rounded-3xl mx-12 my-10">
      <div className="md:w-1/2 text-center bg-white px-8 py-7 rounded-3xl md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-normal">
          We Are SalesDriver. <br /> We Drive Sales.
        </h2>
        <p className="text-gray-700 text-[17px] mt-5 leading-relaxed">
          With over 40 years of experience and a track record of $100M+ in new
          business sales, we know what works. Our high-performing sales systems
          generate leads, close deals, and drive revenue.
        </p>
        <p className="text-gray-700 text-[17px] mt-4 leading-relaxed">
          Our goal is to help you build a repeatable, scalable sales system so
          you can focus on what truly matters—closing deals and growing your
          business.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Sales Illustration"
          className="w-full h-[360px] max-w-xl rounded-3xl"
        />
      </div>
    </section>
  );
}
