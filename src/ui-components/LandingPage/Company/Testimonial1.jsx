import React from "react";
import img from "../../../assets/sl4.webp";
import img1 from "../../../assets/sl5.webp";
import img2 from "../../../assets/sl6.webp";
import img3 from "../../../assets/sl7.png";
import img4 from "../../../assets/sm3.webp";
import vector from "../../../assets/Vector7.png";

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

export default function ExactUILayout() {
  return (
    <div className="px-6 relative py-16 bg-[#ECF7FD]">
      <img
        src={vector}
        alt="Vector Background"
        className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2"
      />
      <div className="relative z-10">
        <div className="text-center mb-12">
          <p className="inline-block bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
            Our Team
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#005895] mt-3">
            Meet Our Team
          </h2>
          <p className="text-lg font-medium text-gray-600 mt-2">
            Be confident in the expertise providing you with the best service for all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {teamMembers.map(({ id, name, role, img }) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 text-center overflow-hidden hover:-translate-y-2"
            >
              <img
                src={img}
                alt={name}
                className="w-full h-32 object-cover bg-gray-100 rounded-t-2xl"
              />
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
