import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import img1 from "../../../assets/Website_Media/Website_Media/client_images/channelkey-logo 1.png";
import img2 from "../../../assets/Website_Media/Website_Media/client_images/health-options.png";
import img3 from "../../../assets/Website_Media/Website_Media/client_images/incubix.png";
import img4 from "../../../assets/Website_Media/Website_Media/client_images/jsb.png";
import img5 from "../../../assets/Website_Media/Website_Media/client_images/madscience-earth.png";
import img6 from "../../../assets/Website_Media/Website_Media/client_images/VisitorsCoverage.png";
import img7 from "../../../assets/Website_Media/Website_Media/client_images/jsb.png";

const logos = [img1, img2, img3, img4, img5, img6, img7];

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
    <div ref={ref} className="text-center max-w-7xl mx-auto">
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
          {logos.map((logo, index) => (
            <div key={index} className="mx-6">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-32 md:w-36 md:h-36 h-32 object-contain hover:scale-105 transition duration-200"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
