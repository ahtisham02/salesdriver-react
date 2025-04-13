import React, { useState } from "react";
import img from "../../../assets/resizedi.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Section() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div ref={ref}>
      <div className="w-full mt-10 bg-gradient-to-t from-[#ECF7FD] to-[#fbfeff]">
        <div className="relative flex flex-col items-center text-center py-10">
          <h1 className="text-4xl pt-5 md:text-5xl font-bold text-blueclr">
            We Are SalesDriver
          </h1>
          <p className="text-lg pb-5 md:text-xl text-gray-800 mt-2">
            We Drive Sales
          </p>

          <div className="absolute sm:flex hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] hidden top-0 left-0 md:left-10 bg-white shadow-lg rounded-full px-4 py-2 text-sm md:text-base font-medium text-gray-700 items-center">
            <span className="text-blueclr font-bold mr-1">All-in-One</span>{" "}
            Sales and Marketing Ecosystem
          </div>
          <div className="absolute top-0 hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] right-0 md:right-10 bg-white shadow-lg rounded-full px-4 py-2 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
            <span className="text-blueclr font-bold mr-1">Human-Powered</span>{" "}
            AI Solutions
          </div>

          <div className="absolute bottom-0 hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] left-0 md:left-40 bg-white shadow-lg rounded-full px-4 py-2 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
            <span className="text-blueclr font-bold mr-1">Data-enriched</span>{" "}
            Execution
          </div>
          <div className="absolute bottom-0 hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] right- md:right-40 bg-white shadow-lg rounded-full px-4 py-2 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
            <span className="text-blueclr font-bold mr-1">Advanced</span>{" "}
            Proprietary Tools
          </div>
        </div>

        <section className="relative flex flex-col items-center text-left md:text-center bg-white mt-10 px-6 md:px-12 pt-12 pb-6">
          <h2 className="text-3xl hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] md:text-4xl font-bold text-[#005895] leading-normal">
            What We Do
          </h2>
          <p className="text-gray-700 hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] text-lg mt-3 leading-relaxed max-w-3xl">
            We build sales-driven solutions by combining virtual sales teams,
            automations, and data-driven strategies that grow your revenue.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 w-full max-w-5xl">
            <div className="flex flex-col items-center text-blueclr">
              <span className="text-3xl font-bold">
                {hasAnimated ? (
                  <CountUp end={20} duration={2.5} className="text-black" />
                ) : (
                  "0+"
                )}
                +
              </span>
              <p className="text-gray-600 text-sm">
                Years of Agency Experience
              </p>
            </div>

            <div className="flex flex-col items-center text-blueclr">
              <span className="text-3xl font-bold">
                <span className="text-black"> $</span>
                {hasAnimated ? (
                  <CountUp
                    end={100}
                    duration={2.5}
                    suffix="M"
                    className="text-black"
                  />
                ) : (
                  "0M+"
                )}
                +
              </span>
              <p className="text-gray-600 text-sm">New Business Sales</p>
            </div>

            <div className="flex flex-col items-center text-blueclr">
              <span className="text-3xl font-bold">
                {hasAnimated ? (
                  <CountUp end={15} duration={2.5} className="text-black" />
                ) : (
                  "0+"
                )}
                +
              </span>
              <p className="text-gray-600 text-sm">
                Industries Served Worldwide
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blueclr">
                {hasAnimated ? (
                  <CountUp
                    end={10}
                    duration={2.5}
                    suffix="K"
                    className="text-black"
                  />
                ) : (
                  "0K+"
                )}
                +
              </span>
              <p className="text-gray-600 text-sm">
                of Meetings Booked & Deals Closed
              </p>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-center gap-12 md:px-10 pb-10 pt-5 bg-white mb-10">
          <div className="md:w-1/2 px-8 py-7 text-left">
            <h2 className="text-3xl md:text-4xl hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] font-bold text-[#005895] leading-normal">
              What is a SalesDriver?
            </h2>
            <p className="text-gray-700 text-[16px] font-bold mt-5 leading-relaxed">
              I am a SalesDriver, You are a SalesDriver. We Drive Sales.
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
              className="w-full h-full object-contain max-w-xl hover:scale-[1.03] transition-all duration-300"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
