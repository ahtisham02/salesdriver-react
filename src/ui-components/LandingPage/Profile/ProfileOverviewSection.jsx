import React from "react";
import { User, Phone, MapPin, Loader2 } from "lucide-react";

const ProfileOverviewSection = ({ userData, isLoading, editFormData, setEditFormData }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <Loader2 className="animate-spin text-[#00A7E2]" size={48} />
        <p className="text-gray-500 font-medium tracking-tight">Retrieving profile architecture...</p>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Identity Configuration */}
      <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-10 border border-white/40 shadow-xl shadow-blue-900/5 transition-all hover:shadow-2xl hover:shadow-blue-900/10">
        <div className="flex items-start gap-4 mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-white text-[#00A7E2] rounded-[20px] flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
            <User size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#003049] tracking-tight">Identity Configuration</h2>
            <p className="text-gray-500 font-medium">Manage your personal and contact identifiers.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3 group/field">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Full Legal Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within/field:text-[#00A7E2] transition-colors" size={20} />
              <input 
                type="text"
                className="w-full pl-12 pr-5 py-4 bg-white/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-100/50 focus:border-[#00A7E2] outline-none transition-all font-bold text-[#003049] placeholder:text-gray-300"
                value={editFormData.full_name}
                onChange={(e) => setEditFormData({...editFormData, full_name: e.target.value})}
                placeholder="Ex. John Doe"
              />
            </div>
          </div>
          
          <div className="space-y-3 group/field">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Mobile Interface</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within/field:text-[#00A7E2] transition-colors" size={20} />
              <input 
                type="text"
                className="w-full pl-12 pr-5 py-4 bg-white/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-100/50 focus:border-[#00A7E2] outline-none transition-all font-bold text-[#003049] placeholder:text-gray-300"
                value={editFormData.phone}
                onChange={(e) => {
                  const val = e.target.value;
                  const filtered = val.replace(/[^0-9+]/g, "");
                  setEditFormData({...editFormData, phone: filtered});
                }}
                placeholder="+15550000000"
              />
            </div>
          </div>

          <div className="space-y-3 group/field md:col-span-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Base of Operations</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within/field:text-[#00A7E2] transition-colors" size={20} />
              <input 
                type="text"
                className="w-full pl-12 pr-5 py-4 bg-white/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-100/50 focus:border-[#00A7E2] outline-none transition-all font-bold text-[#003049] placeholder:text-gray-300"
                value={editFormData.address}
                onChange={(e) => setEditFormData({...editFormData, address: e.target.value})}
                placeholder="Global Workspace, NYC"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverviewSection;
