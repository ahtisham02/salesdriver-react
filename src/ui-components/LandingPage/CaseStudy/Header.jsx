import React from "react";
import Headimg from "../../../assets/Subtract.png";

export default function ContactHeader() {
  return (
    <div className="px-6 relative py-8 md:my-7 text-center bg-[#ECF7FD] rounded-t-full sm:rounded-none sm:bg-inherit mt-6 sm:mt-0">
      <div className="absolute inset-0">
        <img
          src={Headimg}
          alt="Header Background"
          className="absolute top-0 left-0 w-auto h-auto min-w-full min-h-full object-contain"
        />
      </div>
      <div className="relative z-10 mt-6">
        <h1 className="lg:text-[55px] text-3xl font-extrabold text-blueclr">
          Case Studies
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 px-6 sm:px-0 justify-center mt-10">
          <button className="px-6 py-2.5 text-sm uppercase bg-yellowclr shadow-md text-white rounded-md font-medium">
            Get started
          </button>
          <button className="px-6 py-2.5 text-sm uppercase border border-[#3F464B] shadow-md text-[#3F464B] rounded-md font-medium">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
}
