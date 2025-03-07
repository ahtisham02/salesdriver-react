import React from "react";
import img from "../../../assets/section.jpg";

export default function Section() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-50">
      <div className="md:w-1/2 space-y-5">
        <h2 className="text-3xl md:text-4xl lg:text-[45px] font-extrabold text-gray-900 !leading-tight">
          40+ Years of <br /> <span className="text-blueclr">Trained Expertise.</span>
        </h2>
        <h3 className="text-2xl font-semibold text-gray-800">
          Proven Results. Scalable Sales.
        </h3>
        <p className="text-gray-700 text-[15px] leading-relaxed">
          With <span className="font-bold">40+ years of experience</span> and a track record of success across{" "}
          <span className="font-bold">15+ industries</span>, we go beyond lead generation{" "}
          <span className="font-bold">— we build scalable sales systems that drive real revenue.</span>
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Rockford Hunt (Founder & CEO)</h4>
            <p className="text-gray-700 text-[15px]">
              A 20+ year sales veteran with $100M+ in new business sales, securing 8-figure contracts across healthcare, tech, finance, and government.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Leann Lundstedt (Co-founder & COO)</h4>
            <p className="text-gray-700 text-[15px]">
              A Certified Project Manager with two 8-figure company exits, specializing in scalable sales strategies and automation.
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={img}
          alt="Sales Expertise"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
}
