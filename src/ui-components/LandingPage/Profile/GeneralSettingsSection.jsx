import React, { useState } from "react";
import { Settings, Globe, Moon, Sun, Trash2, LogOut, ChevronRight } from "lucide-react";

const GeneralSettingsSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-10 border border-white/40 shadow-xl shadow-blue-900/5">
        <div className="flex items-start gap-4 mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-white text-gray-500 rounded-[20px] flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
            <Settings size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#003049] tracking-tight">System Environment</h2>
            <p className="text-gray-500 font-medium">Configure your workspace aesthetics and global preferences.</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Appearance */}
          <div className="p-8 rounded-[24px] bg-white/50 border border-transparent flex items-center justify-between group hover:border-blue-100/50 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-[#00A7E2] transition-all duration-500 shadow-sm border border-gray-50 group-hover:rotate-12">
                {darkMode ? <Moon size={24} /> : <Sun size={24} />}
              </div>
              <div>
                <h4 className="font-bold text-[#003049] text-lg">Visual Theme</h4>
                <p className="text-xs text-gray-500 font-medium">Switch between deep dark and clean light modes.</p>
              </div>
            </div>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-black text-[#003049] hover:bg-gray-50 hover:border-[#003049] transition-all flex items-center gap-3 group/btn"
            >
              {darkMode ? 'DARK MODE' : 'LIGHT MODE'}
              <ChevronRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Language */}
          <div className="p-8 rounded-[24px] bg-white/50 border border-transparent flex items-center justify-between group hover:border-blue-100/50 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-[#00A7E2] transition-all duration-500 shadow-sm border border-gray-50 group-hover:-rotate-12">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#003049] text-lg">Localization</h4>
                <p className="text-xs text-gray-500 font-medium">Define your primary linguistic interface.</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-black text-[#003049] hover:bg-gray-50 hover:border-[#003049] transition-all flex items-center gap-3 group/btn">
              ENGLISH (US)
              <ChevronRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-100/50 space-y-8">
            <div className="flex items-center gap-3 px-1">
                <div className="w-2 h-6 bg-red-500 rounded-full"></div>
                <h3 className="text-sm font-black text-red-500 uppercase tracking-[0.2em]">Restricted Actions</h3>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="flex-1 w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl border-2 border-gray-100 text-[#003049] font-black tracking-tight hover:bg-[#003049] hover:text-white hover:border-[#003049] transition-all duration-300">
                    <LogOut size={22} />
                    GLOBAL SIGN OUT
                </button>
                <button className="flex-1 w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-red-50 text-red-600 font-black tracking-tight hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg shadow-red-100/50">
                    <Trash2 size={22} />
                    TERMINATE ACCOUNT
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettingsSection;
