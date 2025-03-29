import React from "react";
import img from "../../../assets/resizedi.png";
import vector from "../../../assets/Vector13.png";

export default function Section() {
  return (
    <>
      <div className="w-full py-5 mt-10 bg-gradient-to-t from-[#ECF7FD] to-[#fbfeff]">
        <div className="relative flex flex-col items-center text-center py-10">
          <h1 className="text-4xl pt-5 md:text-5xl font-bold text-blueclr">
            We Are SalesDriver
          </h1>
          <p className="text-lg pb-5 md:text-xl text-gray-800 mt-2">
            We Drive Sales
          </p>

          <div className="absolute flex top-0 left-0 md:left-10 bg-white shadow-lg rounded-full px-4 py-2 text-sm md:text-base font-medium text-gray-700 items-center">
            <span className="text-blueclr font-bold">All-in-One</span> Sales and
            Marketing Ecosystem
          </div>
          <div className="absolute top-0 right-0 md:right-10 bg-white shadow-lg rounded-full px-4 py-2 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
            <span className="text-blueclr font-bold">Human-Powered</span> AI
            Solutions
          </div>

          <div className="absolute bottom-0 left-0 md:left-40 bg-white shadow-lg rounded-full px-4 py-2 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
            <span className="text-blueclr font-bold">Data-enriched</span>{" "}
            Execution
          </div>
          <div className="absolute bottom-0 right-0 md:right-40 bg-white shadow-lg rounded-full px-4 py-2 text-sm md:text-base font-medium text-gray-700 flex items-center">
            <span className="text-blueclr font-bold">Advanced</span> Proprietary
            Tools
          </div>
        </div>

        <img
          src={vector}
          alt="Glow"
          className="absolute lg:block hidden top-24 right-0 w-full h-full object-contain opacity-75 z-10"
        />
        <section className="relative flex flex-col items-center text-center bg-white rounded-t-3xl shadow-sm mx-6 mt-10 px-6 md:px-12 pt-9 pb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005895] leading-normal">
            What We Do
          </h2>
          <p className="text-gray-700 text-lg mt-3 leading-relaxed max-w-3xl">
            We build sales-driven solutions by combining virtual sales teams,
            automations, and data-driven strategies that grow your revenue.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 w-full max-w-5xl">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">
                20<span className="text-blueclr">+</span>
              </span>
              <p className="text-gray-600 text-sm">
                Years of Agency Experience
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">
                $100M<span className="text-blueclr">+</span>
              </span>
              <p className="text-gray-600 text-sm">New Business Sales</p>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">
                15<span className="text-blueclr">+</span>
              </span>
              <p className="text-gray-600 text-sm">
                Industries Served Worldwide
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">
                10Ks<span className="text-blueclr">+</span>
              </span>
              <p className="text-gray-600 text-sm">
                of Meetings Booked & Deals Closed
              </p>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-center gap-12 md:px-10 pb-10 pt-5 bg-white rounded-b-3xl shadow-sm mx-6 mb-10">
          <div className="md:w-1/2 text-center px-8 py-7 md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005895] leading-normal">
              What is a <br /> SalesDriver?
            </h2>
            <p className="text-gray-700 text-[16px] font-bold mt-5 leading-relaxed">
              I am a SalesDriver, You are a SalesDriver.
              <br /> We Drive Sales.
            </p>
            <p className="text-gray-700 text-[17px] mt-4 leading-relaxed">
              A SalesDriver uses data and strategy to accelerate sales. We
              identify opportunities, build meaningful relationships, and own
              the sales process to drive growth. We turn insights into action
              and prospects into partners.
            </p>
            <p className="text-gray-700 text-[17px] mt-4 leading-relaxed">
              Become a SalesDriver—where insights meet action and connections
              drive growth.
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
      </div>
    </>
  );
}
