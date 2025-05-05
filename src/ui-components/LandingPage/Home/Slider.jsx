import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import meetnow from "../../../assets/Rectangle 35.png";
import cc from "../../../assets/Rectangle 35 (2).png";
import webpoint from "../../../assets/Website_Media/Website_Media/client_images/web.png";
import scp from "../../../assets/Rectangle 35 (1).png";
import icon from "../../../assets/Rectangle 35 (5).png";

import tre from "../../../assets/Website_Media/Website_Media/client_images/tres.png";
import health from "../../../assets/Website_Media/Website_Media/client_images/health-options.png";
import forum from "../../../assets/Website_Media/Website_Media/client_images/forum.png";

const logos = [meetnow, cc, webpoint, scp, icon, tre, health, forum];

export default function SLFooter() {
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
    <div ref={ref} className="text-center max-w-[1200px] mx-auto">
      <div className="overflow-hidden">
        <h2 className="text-3xl hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] md:text-[46px] lg:!leading-[4rem] font-extrabold text-[#005895] mb-1 mt-5">
          Trusted by{" "}
          <span className="text-blueclr">
            {hasAnimated ? (
              <CountUp end={100} duration={2.5} suffix="+" />
            ) : (
              "0+"
            )}
          </span>{" "}
          companies
        </h2>
      </div>

      <div>
        <Marquee speed={40} pauseOnHover direction="right">
          {logos.map((logo, index) => {
            const isLarge = logo === cc || logo === scp;
            const issmall = logo === webpoint

            return (
              <div key={index} className="mx-6 overflow-hidden">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className={`object-contain hover:scale-105 transition duration-200 ${
                    isLarge
                      ? "w-40 h-40 md:w-48 md:h-48"
                      : issmall ? "w-28 h-28"
                      : "w-32 h-32 md:w-36 md:h-36"
                  }`}
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}
