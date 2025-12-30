import React, { useState } from "react";
import { Bell, Mail, MessageSquare, Monitor, CheckCircle2 } from "lucide-react";

const NotificationSettingsSection = () => {
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

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-10 border border-white/40 shadow-xl shadow-blue-900/5">
        <div className="flex items-start gap-4 mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-white text-[#00A7E2] rounded-[20px] flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
            <Bell size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#003049] tracking-tight">Notification Channels</h2>
            <p className="text-gray-500 font-medium">Calibrate how and when you want to be reached.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: 'emailAlerts', icon: Mail, label: 'Email Broadcasts', desc: 'Official updates and transaction receipts.' },
              { id: 'pushNotifications', icon: Monitor, label: 'Instant Push', desc: 'Real-time alerts directly in your active session.' },
              { id: 'smsAlerts', icon: MessageSquare, label: 'Direct SMS', desc: 'Critical security alerts sent to your mobile.' },
              { id: 'weeklyDigest', icon: CheckCircle2, label: 'Insight Digest', desc: 'A curated weekly summary of your performance.' },
            ].map((item) => (
              <div key={item.id} className="p-8 rounded-[24px] bg-white/50 border border-transparent flex items-center justify-between hover:border-blue-100/50 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 group">
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm border ${
                    settings[item.id] 
                      ? "bg-[#00A7E2] text-white border-blue-200 scale-110 rotate-3" 
                      : "bg-white text-gray-400 border-gray-100 group-hover:text-[#00A7E2]"
                  }`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003049] text-lg">{item.label}</h4>
                    <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
                  </div>
                </div>
                <button 
                  onClick={() => toggleSetting(item.id)}
                  className={`w-14 h-7 rounded-full transition-all duration-500 relative flex items-center px-1 ${
                    settings[item.id] ? 'bg-[#003049]' : 'bg-gray-200'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow-lg transition-transform duration-500 ${
                    settings[item.id] ? 'translate-x-7' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-gray-100/50">
             <button className="px-10 py-4 bg-[#00A7E2] text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-[#0089bd] hover:scale-105 active:scale-95 transition-all">
                Sync Notifications
             </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettingsSection;
