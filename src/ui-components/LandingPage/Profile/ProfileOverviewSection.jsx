import React from "react";
import { User, Mail, MapPin, Briefcase, Calendar, Edit3, Camera } from "lucide-react";

const ProfileOverviewSection = () => {
  const user = {
    name: "John Doe",
    email: "john@ex.com",
    role: "Senior Marketing Manager",
    company: "SalesDriver Inc.",
    location: "New York, USA",
    joined: "January 2024",
    avatar: "https://i.pravatar.cc/150?u=1",
    bio: "Passionate about scaling outbound operations and building meaningful connections through data-driven strategies."
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Profile Header Card */}
      <div className="bg-white/70 backdrop-blur-xl rounded-[32px] overflow-hidden border border-white/40 shadow-xl shadow-blue-900/5 transition-all hover:shadow-2xl hover:shadow-blue-900/10 group/header">
        <div className="h-40 bg-gradient-to-r from-[#003049] via-[#005a8c] to-[#00A7E2] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)] scale-150"></div>
        </div>
        <div className="px-10 pb-10">
          <div className="flex flex-col md:flex-row items-end gap-8 -mt-20 mb-10 relative z-10">
            <div className="relative group/avatar">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#00A7E2] to-blue-300 rounded-[40px] blur-lg opacity-0 group-hover/avatar:opacity-40 transition-opacity duration-500"></div>
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-40 h-40 rounded-[40px] object-cover ring-[12px] ring-white shadow-2xl relative z-10 transition-transform duration-500 group-hover/avatar:scale-[1.02]"
              />
              <button className="absolute inset-0 bg-black/50 rounded-[40px] flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-all duration-300 z-20 backdrop-blur-[2px]">
                <Camera className="text-white" size={32} />
              </button>
            </div>
            <div className="flex-1 pb-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                <h1 className="text-4xl font-black text-[#003049] tracking-tight">{user.name}</h1>
                <span className="px-3 py-1 bg-blue-50 text-[#00A7E2] text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100">PRO USER</span>
              </div>
              <p className="text-gray-500 font-semibold text-lg flex items-center justify-center md:justify-start gap-2">
                <Briefcase size={20} className="text-[#00A7E2]" />
                {user.role}
              </p>
            </div>
            <button className="flex items-center gap-2 px-8 py-4 bg-[#00A7E2] text-white font-bold rounded-[20px] shadow-2xl shadow-blue-200 hover:bg-[#0089bd] hover:scale-105 active:scale-95 transition-all mb-4 mx-auto md:mx-0 group/btn">
              <Edit3 size={20} className="transition-transform group-hover/btn:rotate-12" />
              Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 border-t border-gray-100/50">
            {[
              { icon: Mail, label: 'Email Address', value: user.email },
              { icon: MapPin, label: 'Location Base', value: user.location },
              { icon: Briefcase, label: 'Primary Entity', value: user.company }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 p-6 rounded-[24px] bg-white/50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 group/card">
                <div className="w-14 h-14 bg-gradient-to-br from-white to-blue-50 rounded-2xl flex items-center justify-center text-[#00A7E2] shadow-sm border border-blue-50/50 group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform">
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.15em] mb-1">{item.label}</p>
                  <p className="text-[15px] font-bold text-[#003049]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-10 border border-white/40 shadow-xl shadow-blue-900/5">
        <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-[#00A7E2] rounded-full"></div>
            <h3 className="text-2xl font-bold text-[#003049]">Professional Bio</h3>
        </div>
        <p className="text-gray-600 leading-loose text-lg font-medium italic">
          "{user.bio}"
        </p>
        <div className="mt-10 pt-8 border-t border-gray-100/50 flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm text-gray-400 font-bold uppercase tracking-wider">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                    <Calendar size={18} />
                </div>
                Journey started {user.joined}
            </div>
            <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                    <div key={i} className="w-2 h-2 rounded-full bg-blue-100"></div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverviewSection;
