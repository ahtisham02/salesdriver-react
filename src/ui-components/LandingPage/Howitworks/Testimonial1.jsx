import React from "react";
import img from "../../../assets/h1.jpg";

export default function SalesDriverSteps() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-10 gap-6 lg:gap-10">
      <div className="w-full lg:w-1/2 order-first lg:order-1">
        <img
          src={img}
          alt="Sales process"
          className="w-full h-80 md:h-96 object-cover rounded-md"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl md:text-[38px] font-bold text-gray-900">
          SalesDriver Steps
        </h2>

        <div className="mt-7">
          <h3 className="text-xl font-bold text-blueclr">Step 1 | Strategy</h3>
          <p className="text-gray-700 mt-3">
            We focus on strategic planning, mapping your ideal customer journey,
            and developing a data-driven program proven to drive sales.
          </p>
        </div>

        <div className="mt-7">
          <h3 className="text-xl font-bold text-blueclr">
            Step 2 | Automation
          </h3>
          <p className="text-gray-700 mt-3">
            We maximize brand/target interactions at all points of the customer
            journey. Our solution is tailored to the client, all reporting to a
            CRM.
          </p>
        </div>

        <div className="mt-7">
          <h3 className="text-xl font-bold text-blueclr">Step 3 | Targeting</h3>
          <p className="text-gray-700 mt-3">
            We identify your audience, understand their pain points, and tailor
            your message: the right message, to the right prospect, at the right
            time.
          </p>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="bg-blueclr text-sm text-white px-4 py-2 rounded font-semibold">
            GET STARTED
          </button>
          <button className="border border-gray-400 text-sm text-gray-700 px-4 py-2 rounded font-semibold">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
