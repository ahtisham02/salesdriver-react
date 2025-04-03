import React from "react";
import Marquee from "react-fast-marquee";

import img1 from "../../../assets/Website_Media/Website_Media/client_images/channelkey-logo 1.png";
import img2 from "../../../assets/Website_Media/Website_Media/client_images/health-options.png";
import img3 from "../../../assets/Website_Media/Website_Media/client_images/incubix.png";
import img4 from "../../../assets/Website_Media/Website_Media/client_images/jsb.png";
import img5 from "../../../assets/Website_Media/Website_Media/client_images/madscience-earth.png";
import img6 from "../../../assets/Website_Media/Website_Media/client_images/VisitorsCoverage.png";
import img7 from "../../../assets/Website_Media/Website_Media/client_images/jsb.png";

const logos = [img1, img2, img3, img4, img5, img6, img7];

export default function SLFooter() {
  return (
    <div className="text-center pb-2">
      <h2 className="text-3xl md:text-[46px] lg:!leading-[4rem] font-extrabold text-gray-900 mb-3 mt-16">
        Trusted by <span className="text-blueclr">100+</span> companies{" "}
      </h2>
      <div>
        <Marquee speed={40} pauseOnHover direction="right">
          {logos.map((logo, index) => (
            <div key={index} className="mx-6">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-32 md:w-36 md:h-36 h-32 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
