import React from "react";
import img1 from "../../../assets/new_assets/team/1.png";
import img2 from "../../../assets/new_assets/team/2.png";
import img3 from "../../../assets/new_assets/team/3.png";
import img4 from "../../../assets/new_assets/team/4.png";
import bgImg from "../../../assets/new_assets/g_bg.png";
import vectorImg from "../../../assets/Vector3.png";

const teamMembers = [
  {
    id: 1,
    name: "Rockford Hunt",
    role: "CEO and Founder",
    img: img1,
  },
  {
    id: 2,
    name: "Muhammad Jahanzaib",
    role: "Technical Lead",
    img: img2,
  },
  {
    id: 3,
    name: "Usama Khalil",
    role: "Outreach Specialist",
    img: img3,
  },
  {
    id: 4,
    name: "Skyla Ika",
    role: "Creative Lead",
    img: img4,
  },
];

const TeamMemberCard = ({ member }) => (
  <div className="relative group">
    {/* Rounded Image Container */}
    <div className="h-64 sm:h-72 w-full overflow-hidden rounded-[2rem] mb-6 relative border border-gray-100 shadow-md">
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
      />
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#005F8F]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    {/* Rounded Text Container */}
    <div className="bg-white rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 text-center transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,160,220,0.1)] relative overflow-hidden border border-gray-50">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00A1E0] to-[#005F8F] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      <h3 className="relative text-xl font-black text-[#005F8F] mb-1 group-hover:text-[#00A1E0] transition-colors tracking-tight">{member.name}</h3>
      <p className="relative text-gray-400 text-xs font-bold uppercase tracking-widest">{member.role}</p>
    </div>
  </div>
);

export default function TeamSection() {
  return (
    <div className="relative w-full py-20 px-5 md:px-20 font-plus-jakarta overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      
      {/* Vector Decoration */}
      <img
        src={vectorImg}
        alt="Vector Background"
        className="absolute top-[60%] left-0 w-full h-auto -translate-y-1/2 opacity-50"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#00a0dc]/30 bg-[#00a0dc]/5 text-[#00a0dc] font-black text-xs uppercase tracking-widest shadow-sm">
            OUR TEAM
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#005F8F] tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Be confident in the expertise providing you with the best service for
            all your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
