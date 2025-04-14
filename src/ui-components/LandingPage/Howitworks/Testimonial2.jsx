import React, { useState } from "react";
import Headimg from "../../../assets/Subtract.png";
import vector from "../../../assets/Vector 11.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const stats = [
    { value: 100, suffix: "M+", label: "in revenue generated for clients." },
    { value: 10000, suffix: "+", label: "sales meetings booked." },
    { value: 40, suffix: "+", label: "years of combined experience." },
    { value: 15, suffix: "+", label: "industries served worldwide." },
    { value: 30, suffix: "-50%", label: "Faster sales cycles with AI automation" },
    { value: 20, suffix: "-40%", label: "Increase in conversion rates." }
  ];

  return (
    <div ref={ref} className="relative text-center pt-16 lg:py-20 px-4 md:px-8">
      <div className="absolute top-0 left-0 w-full h-full flex justify-center">
        <img
          src={Headimg}
          alt="Header Background"
          className="w-full h-full object-cover lg:object-fill"
        />
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] z-40 relative md:text-4xl lg:text-5xl font-bold text-[#005895] mb-6 sm:mb-12">
          Sales That Deliver <br className="hidden sm:block" /> Results
        </h2>
        <img
          src={vector}
          alt="Vector Background"
          className="absolute lg:block hidden top-1/2 left-0 w-full h-auto -translate-y-1/2"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-full bg-[#E0F7FA] shadow-md hover:scale-[1.04] font-semibold z-40 transition-all duration-300">
              <p className="text-3xl md:text-4xl font-bold text-blueclr mb-3">
                {stat.value === 100 && stat.suffix === "M+" ? (
                  <>
                    $
                    {hasAnimated ? (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                    ) : (
                      "0"
                    )}
                  </>
                ) : stat.value === 10000 ? (
                  <>
                    {hasAnimated ? (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} separator="," />
                    ) : (
                      "0"
                    )}
                  </>
                ) : stat.suffix.includes("-") ? (
                  <>
                    {hasAnimated ? (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                    ) : (
                      "0"
                    )}
                  </>
                ) : (
                  <>
                    {hasAnimated ? (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                    ) : (
                      "0"
                    )}
                  </>
                )}
              </p>
              <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}