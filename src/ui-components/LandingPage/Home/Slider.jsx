import React from "react";
import Marquee from "react-fast-marquee";

import img1 from "../../../assets/download1-removebg-preview.png";
import img2 from "../../../assets/download1.png";
import img3 from "../../../assets/download2-removebg-preview.png";
import img4 from "../../../assets/h2.png";
import img5 from "../../../assets/h3.png";
import img6 from "../../../assets/h4.png";
import img7 from "../../../assets/incubix.webp";
import img8 from "../../../assets/h2.png";

const logos = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function SLFooter() {
  return (
    <div className="text-center pb-2">
      <div>
        <Marquee speed={40} pauseOnHover direction="right">
          {logos.map((logo, index) => (
            <div key={index} className="mx-6">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-28 md:w-32 md:h-32 h-28 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
