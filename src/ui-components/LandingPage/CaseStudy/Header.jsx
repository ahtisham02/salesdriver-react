import React from "react";

export default function ContactHeader() {
  return (
    <div className="px-6 py-8 my-7 text-center">
      <h1 className="lg:text-[55px] text-3xl font-extrabold text-gray-900">
        Case Studies
      </h1>

      <p className="text-blueclr text-[14px] md:text-[16px] mt-10">
        Subline text goes here.{" "}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <button className="px-4 py-3 text-sm uppercase bg-yellowclr shadow-md text-white rounded-md font-medium">
          Get started{" "}
        </button>
        <button className="px-4 py-3 text-sm uppercase border border-[#3F464B] shadow-md text-[#3F464B] rounded-md font-medium">
          learn more{" "}
        </button>
      </div>
    </div>
  );
}
