import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import img from "../../../assets/Website_Media/Website_Media/client_images/logo.png";
import img1 from "../../../assets/Website_Media/Website_Media/client_images/logo1.png";
import img2 from "../../../assets/Website_Media/Website_Media/client_images/logo2.png";
import img3 from "../../../assets/Website_Media/Website_Media/client_images/logo4.png";
import img4 from "../../../assets/Website_Media/Website_Media/client_images/DEEPLY GOOD_logo_original.png";

const logos = [img, img1, img2, img3, img4];

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

            return (
              <div key={index} className="mx-6 overflow-hidden">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className={`object-contain hover:scale-105 transition duration-200 w-40 h-40 md:w-48 md:h-48}`}
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}
