import React, { useState } from "react";
import ProfileOverviewSection from "../../../ui-components/LandingPage/Profile/ProfileOverviewSection";
import UpdatePasswordSection from "../../../ui-components/LandingPage/Profile/UpdatePasswordSection";
import NotificationSettingsSection from "../../../ui-components/LandingPage/Profile/NotificationSettingsSection";
import BillingSection from "../../../ui-components/LandingPage/Profile/BillingSection";
import GeneralSettingsSection from "../../../ui-components/LandingPage/Profile/GeneralSettingsSection";
import { User, Shield, Bell, CreditCard, Settings, ChevronRight } from "lucide-react";

import gb from "../../../assets/new_assets/gb.png";

const Profile = () => {
  const [activeTab, setActiveTab ] = useState("profile");

  const tabs = [
    { id: "profile", icon: User, label: "My Profile", component: ProfileOverviewSection },
    { id: "security", icon: Shield, label: "Security", component: UpdatePasswordSection },
    { id: "notifications", icon: Bell, label: "Notifications", component: NotificationSettingsSection },
    { id: "billing", icon: CreditCard, label: "Billing", component: BillingSection },
    { id: "general", icon: Settings, label: "General", component: GeneralSettingsSection },
  ];

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || ProfileOverviewSection;

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{ 
          backgroundImage: `url(${gb})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="fixed inset-0 z-0 bg-gray-50/70 pointer-events-none" />

      <div className="relative z-10 max-w-[1380px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-72 lg:shrink-0">
            <div className="sticky top-32">
              <div className="mb-8 px-4">
                <h2 className="text-3xl font-bold text-[#003049] mb-1">Account</h2>
                <p className="text-gray-500 text-sm font-medium">Personalize your experience</p>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl font-bold transition-all duration-300 group ${
                      activeTab === tab.id 
                        ? "bg-white text-[#00A7E2] shadow-xl shadow-blue-100/40 border border-blue-50 translate-x-2" 
                        : "text-gray-500 hover:text-[#003049] hover:bg-white/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id 
                          ? "bg-[#00A7E2] text-white rotate-6" 
                          : "bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-[#00A7E2]"
                      }`}>
                        <tab.icon size={20} />
                      </div>
                      <span className="text-[15px]">{tab.label}</span>
                    </div>
                    {activeTab === tab.id && <ChevronRight size={16} className="text-[#00A7E2]" />}
                  </button>
                ))}
              </nav>
              
              <div className="mt-12 p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 overflow-hidden relative group">
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-100/50 rounded-full blur-2xl group-hover:bg-blue-200/50 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#00A7E2] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 mb-4 transition-transform hover:scale-110">
                        <Shield size={24} />
                    </div>
                    <h4 className="text-[#003049] font-bold text-sm mb-1">Security First</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">Your data is secured with enterprise-grade encryption.</p>
                  </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            <div className="max-w-4xl">
              <ActiveComponent />
            </div>
          </main>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
