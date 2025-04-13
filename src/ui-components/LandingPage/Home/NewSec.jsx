import React, { useState } from "react";
import HeadImg from "../../../assets/69c37d04d3feadc39b5681a70e9d7638.png";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function NewSec() {
  const navigate = useNavigate();
  const [hasAnimated, setHasAnimated] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div
      ref={ref}
      className="bg-[#f7fbff] relative px-10 lg:px-16 pt-16 pb-12 flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-12 lg:space-y-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${HeadImg})` }}
    >
      <div className="absolute inset-0 bg-white opacity-75"></div>

      <div className="relative z-10 lg:w-1/2 mb-10">
        <p className="inline-block hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
          ABOUT US
        </p>
        <h1 className="text-3xl hover:scale-[1.04] transition-transform duration-200 md:text-5xl font-extrabold mt-3 text-blue-900">
          We Are SalesDriver. <br /> We Drive Sales.
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">
          <div className="bg-[#D9EEFA] border hover:scale-[1.04] transition-transform duration-200 border-blue-300 rounded-3xl p-6 shadow-md text-center flex flex-col justify-center">
            <p className="text-3xl font-bold text-blueclr">
              {hasAnimated ? (
                <CountUp end={20} duration={2.5} className="text-black" />
              ) : (
                "0"
              )}
              + Yrs
            </p>
            <p className="text-gray-700 text-sm mt-1">Agency Experience</p>
          </div>
          <div className="bg-[#D9EEFA] border hover:scale-[1.04] transition-transform duration-200 border-blue-300 rounded-3xl p-6 shadow-md text-center flex flex-col justify-center">
            <p className="text-3xl font-bold text-blueclr">
              <span className="text-black">$</span>
              {hasAnimated ? (
                <CountUp
                  end={100}
                  duration={2.5}
                  suffix="M"
                  className="text-black"
                />
              ) : (
                "0"
              )}
              +
            </p>
            <p className="text-gray-700 text-sm mt-1">New Business Sales</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 lg:w-1/2 lg:!mt-10 lg:ml-56 space-y-6">
        <h2 className="text-2xl md:text-[34px] font-bold">
          Your Complete Solution
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our goal is to help you build a repeatable, scalable sales system so
          you can focus on what matters: closing deals and growing your
          business.
        </p>
        <div className="flex justify-center lg:-ml-[44px]">
          <button
            onClick={() => navigate("/company")}
            className="mt-4 bg-blueclr hover:scale-[1.04] duration-200 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-[#0091C4] transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
