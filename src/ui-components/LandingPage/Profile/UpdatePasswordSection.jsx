import React, { useState } from "react";
import { Lock, Eye, EyeOff, CheckCircle2, ShieldCheck, Shield } from "lucide-react";

const UpdatePasswordSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompleted(true);
    // Handle update password logic
  };

  if (completed) {
    return (
      <div className="bg-white rounded-[24px] p-8 md:p-12 border border-gray-100 shadow-sm animate-in fade-in zoom-in duration-500 text-center">
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-3xl font-bold text-[#003049] mb-4">Password updated!</h2>
        <p className="text-gray-500 mb-8 leading-relaxed max-w-sm mx-auto">
          Your security settings have been updated successfully. We recommend using a unique password for different accounts.
        </p>
        <button
          onClick={() => setCompleted(false)}
          className="px-8 py-3.5 bg-[#00A7E2] text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-[#0089bd] hover:scale-[1.02] transition-all"
        >
          Back to Security
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-10 border border-white/40 shadow-xl shadow-blue-900/5 transition-all hover:shadow-2xl hover:shadow-blue-900/10">
        <div className="flex items-start gap-4 mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-white text-[#00A7E2] rounded-[20px] flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#003049] tracking-tight">Security Access</h2>
            <p className="text-gray-500 font-medium">Manage your authentication credentials and account protection.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          <div className="space-y-8">
            <div className="group/field">
              <label className="block text-sm font-black text-[#003049] uppercase tracking-widest mb-3 px-1 opacity-70">Current Credentials</label>
              <div className="relative group/input">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-[#00A7E2] transition-colors" size={22} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full pl-12 pr-12 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100/50 focus:border-[#00A7E2] focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium"
                  placeholder="Verify current password"
                  value={formData.currentPassword}
                  onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#00A7E2] transition-colors"
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100/50">
                <p className="text-sm font-black text-[#003049] uppercase tracking-widest mb-6 opacity-70">New Security Phase</p>
                
                <div className="space-y-5">
                    <div className="group/field">
                        <label className="block text-sm font-bold text-[#003049] mb-2 px-1">Define New Password</label>
                        <div className="relative group/input">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-[#00A7E2] transition-colors" size={22} />
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                className="w-full pl-12 pr-12 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100/50 focus:border-[#00A7E2] focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium"
                                placeholder="Min. 8 intricate characters"
                                value={formData.newPassword}
                                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="group/field">
                        <label className="block text-sm font-bold text-[#003049] mb-2 px-1">Confirm Consistency</label>
                        <div className="relative group/input">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-[#00A7E2] transition-colors" size={22} />
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                className="w-full pl-12 pr-12 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100/50 focus:border-[#00A7E2] focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium"
                                placeholder="Re-type ensuring match"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50/50 to-white/50 rounded-3xl p-8 lg:p-10 border border-gray-100/50 space-y-8 h-fit">
            <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#00A7E2] rounded-full"></div>
                <h3 className="text-xl font-bold text-[#003049]">Strength Protocol</h3>
            </div>
            <ul className="space-y-5">
              {[
                "At least 8 robust characters",
                "Uppercase & lowercase variance",
                "Numerical integration required",
                "Symbolic complexity (#, $, @, %)",
              ].map((req, i) => (
                <li key={i} className="flex items-center gap-4 text-[15px] text-gray-600 font-semibold group/req">
                  <div className="w-6 h-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm group-hover/req:bg-[#00A7E2] group-hover/req:border-[#00A7E2] transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A7E2] group-hover/req:bg-white"></div>
                  </div>
                  {req}
                </li>
              ))}
            </ul>
            <div className="pt-8">
                 <button
                    type="submit"
                    className="w-full py-4 bg-[#003049] text-white font-bold rounded-2xl shadow-2xl shadow-blue-900/10 hover:bg-[#001d2d] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group/submit"
                >
                    <ShieldCheck size={22} className="transition-transform group-hover/submit:scale-110" />
                    Commit Security Update
                </button>
            </div>
          </div>
        </form>
      </div>
      
      {/* 2FA Layer */}
      <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-8 md:p-10 border border-white/40 shadow-xl shadow-blue-900/5 flex flex-col md:flex-row items-center justify-between gap-8 group/2fa">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-[24px] flex items-center justify-center shrink-0 shadow-sm group-hover/2fa:scale-110 group-hover/2fa:rotate-3 transition-transform duration-500">
            <Shield size={32} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#003049]">Two-Factor Authentication</h3>
            <p className="text-gray-500 font-medium">Add a secondary verification layer for maximum security.</p>
          </div>
        </div>
        <button className="whitespace-nowrap px-8 py-3.5 rounded-2xl bg-[#003049]/5 border-2 border-orange-200/50 text-orange-600 font-black tracking-tight hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
          ENABLE PROTECTION
        </button>
      </div>
    </div>
  );
};

export default UpdatePasswordSection;
