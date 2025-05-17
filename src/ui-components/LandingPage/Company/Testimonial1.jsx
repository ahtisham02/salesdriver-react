import React from "react";
import Slider from "react-slick";
import img from "../../../assets/sl4.webp";
import img1 from "../../../assets/sl5.webp";
import img2 from "../../../assets/sl6.webp";
import img3 from "../../../assets/sl7.png";
import img4 from "../../../assets/sm3.webp";
import vector from "../../../assets/Vector7.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  { id: 1, name: "Rockford Hunt", role: "CEO and Founder", img: img },
  { id: 2, name: "Sophia Carter", role: "Chief Marketing Officer", img: img1 },
  { id: 3, name: "James Anderson", role: "Head of Product Development", img: img2 },
  { id: 4, name: "Olivia Wilson", role: "Lead Software Engineer", img: img3 },
  { id: 5, name: "Michael Brown", role: "Senior UX/UI Designer", img: img4 },
  { id: 6, name: "Emma Johnson", role: "Customer Success Manager", img: img3 },
  { id: 7, name: "Liam Roberts", role: "Operations Director", img: img1 },
  { id: 8, name: "Ava Thompson", role: "Finance and Strategy Lead", img: img },
];

const TeamMemberCard = ({ member }) => (
  <div className="px-2 h-full">
    <div className="bg-white rounded-2xl border-2 border-blue-200 text-center overflow-hidden h-full flex flex-col">
      <div className="flex-shrink-0">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-32 object-cover bg-gray-100 rounded-t-xl"
        />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-gray-500 text-sm mt-auto">{member.role}</p>
      </div>
    </div>
  </div>
);

export default function ExactUILayout() {

  const topRowSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const bottomRowSettings = {
    ...topRowSettings,
    rtl: true
  };

  return (
    <div className="px-6 relative py-16 bg-[#ECF7FD]">
      <img
        src={vector}
        alt="Vector Background"
        className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="inline-block hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
            Our Team
          </p>
          <h2 className="text-3xl md:text-5xl hover:scale-[1.03] transition-all duration-300 font-extrabold text-[#005895] mt-3">
            Meet Our Team
          </h2>
          <p className="text-lg text-left md:text-center font-medium text-gray-600 mt-2">
            Be confident in the expertise providing you with the best service for all your needs.
          </p>
        </div>

         <>
            <div className="mb-8">
              <Slider {...topRowSettings} className="h-full">
                {teamMembers.map((member) => (
                  <TeamMemberCard key={`top-${member.id}`} member={member} />
                ))}
              </Slider>
            </div>

            <div className="mt-8">
              <Slider {...bottomRowSettings} className="h-full">
                {teamMembers.map((member) => (
                  <TeamMemberCard key={`bottom-${member.id}`} member={member} />
                ))}
              </Slider>
            </div>
          </>
      </div>
    </div>
  );
}