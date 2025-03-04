import React from "react";
import img from "../../../assets/h1.jpg";

export default function Section() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-16 bg-white">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-normal">
          We Are SalesDriver. <br /> We Drive Sales.
        </h2>
        <p className="text-gray-600 text-lg mt-5 leading-relaxed">
          With over 40 years of experience and a track record of $100M+ in new
          business sales, we know what works. Our high-performing sales systems
          generate leads, close deals, and drive revenue.
        </p>
        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          Our goal is to help you build a repeatable, scalable sales system so
          you can focus on what truly matters—closing deals and growing your
          business.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Sales Illustration"
          className="w-full max-w-lg rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
