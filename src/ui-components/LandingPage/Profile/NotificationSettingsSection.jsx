import React, { useState } from "react";
import { Bell, Mail, MessageSquare, Monitor, CheckCircle2, Sliders, Volume2, VolumeX, ShieldCheck, ChevronRight, Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const NotificationSettingsSection = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [masterNotify, setMasterNotify] = useState(true);
  const [settings, setSettings] = useState({
    emailAlerts: true,
    pushNotifications: false,
    smsAlerts: true,
    weeklyDigest: true,
    productUpdates: true
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSync = async () => {
    setIsSyncing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSyncing(false);
    toast.success("Notification preferences synchronized.");
  };

  const channels = [
    { id: 'emailAlerts', icon: Mail, label: 'Email Architecture', desc: 'Enterprise-grade updates and system receipts.', color: 'blue' },
    { id: 'pushNotifications', icon: Monitor, label: 'Instant Feedback', desc: 'Real-time telemetry directly in your active session.', color: 'sky' },
    { id: 'smsAlerts', icon: MessageSquare, label: 'Direct Protocol', desc: 'Emergency security alerts sent to your mobile device.', color: 'indigo' },
    { id: 'weeklyDigest', icon: CheckCircle2, label: 'Performance Report', desc: 'A curated intelligence summary of your operations.', color: 'emerald' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Master Control Header */}
      <div className="bg-white/70 backdrop-blur-2xl rounded-[32px] p-8 md:p-10 border border-white/40 shadow-xl shadow-blue-900/5 transition-all group/master">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                <div className={`w-20 h-20 rounded-[28px] flex items-center justify-center transition-all duration-700 shadow-2xl ${
                    masterNotify ? "bg-gradient-to-br from-[#00A7E2] to-blue-600 text-white rotate-3" : "bg-gray-100 text-gray-400 -rotate-3"
                }`}>
                    {masterNotify ? <Volume2 size={36} className="animate-pulse" /> : <VolumeX size={36} />}
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-black text-[#003049] tracking-tight mb-1">System Wide Communications</h2>
                    <p className="text-gray-500 font-medium">Global override for all incoming signal protocols.</p>
                </div>
            </div>
            <button 
                onClick={() => setMasterNotify(!masterNotify)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm tracking-widest transition-all duration-500 overflow-hidden relative group/btn ${
                    masterNotify ? "bg-[#003049] text-white shadow-xl shadow-blue-900/20" : "bg-gray-200 text-gray-500 shadow-inner"
                }`}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-transparent opacity-0 group-hover/btn:opacity-20 transition-opacity translate-x-[-100%] group-hover/btn:translate-x-[100%] duration-1000"></div>
                <Sliders size={18} className={masterNotify ? "rotate-90" : ""} />
                {masterNotify ? "COMMUNICATION ACTIVE" : "PROTOCOLS PAUSED"}
            </button>
        </div>
      </div>

      {/* Individual Channels */}
      <div className={`transition-all duration-700 ${masterNotify ? "opacity-100 translate-y-0" : "opacity-40 grayscale pointer-events-none -translate-y-4"}`}>
        <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-10 border border-white/40 shadow-xl shadow-blue-900/5">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-8 bg-[#00A7E2] rounded-full"></div>
                <h3 className="text-xl font-black text-[#003049] uppercase tracking-wider">Interface Channels</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {channels.map((item) => (
                    <div 
                        key={item.id} 
                        onClick={() => toggleSetting(item.id)}
                        className={`p-1 border-2 rounded-[30px] transition-all duration-500 cursor-pointer group/card ${
                            settings[item.id] 
                                ? "border-[#00A7E2]/20 bg-white" 
                                : "border-transparent bg-gray-50/50 grayscale-[0.5]"
                        } hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/5`}
                    >
                        <div className="p-6 flex items-center justify-between">
                            <div className="flex items-center gap-5">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg ${
                                    settings[item.id] 
                                        ? "bg-gradient-to-br from-[#00A7E2] to-blue-600 text-white scale-110 shadow-blue-200" 
                                        : "bg-white text-gray-400"
                                }`}>
                                    <item.icon size={26} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#003049] text-[17px] mb-0.5">{item.label}</h4>
                                    <p className="text-[11px] text-gray-500 font-semibold leading-relaxed max-w-[140px]">{item.desc}</p>
                                </div>
                            </div>
                            
                            <div className={`w-14 h-8 rounded-full transition-all duration-500 relative flex items-center px-1.5 ${
                                settings[item.id] ? 'bg-[#003049] shadow-lg shadow-blue-900/20' : 'bg-gray-200 shadow-inner'
                            }`}>
                                <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-all duration-500 transform ${
                                    settings[item.id] ? 'translate-x-6 scale-110' : 'translate-x-0 scale-90'
                                }`}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100/50 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-gray-400">
                    <ShieldCheck size={20} className="text-[#00A7E2]" />
                    <span className="text-xs font-bold uppercase tracking-widest">End-to-End Encryption Enabled</span>
                </div>
                <button 
                    onClick={handleSync}
                    disabled={isSyncing}
                    className="w-full md:w-auto px-12 py-4 bg-[#00A7E2] text-white font-black text-sm tracking-widest rounded-2xl shadow-2xl shadow-blue-200 hover:bg-[#0089bd] hover:translate-y-[-4px] active:translate-y-0 transition-all flex items-center justify-center gap-3 group/sync disabled:opacity-50"
                >
                    {isSyncing ? <Loader2 className="animate-spin" size={20} /> : <Sliders size={20} className="group-hover/sync:rotate-180 transition-transform duration-700" />}
                    SYNC CONFIGURATION
                    <ChevronRight size={18} className="group-hover/sync:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettingsSection;
