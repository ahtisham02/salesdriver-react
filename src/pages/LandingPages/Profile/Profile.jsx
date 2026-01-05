import React, { useState, useEffect } from "react";
import ProfileOverviewSection from "../../../ui-components/LandingPage/Profile/ProfileOverviewSection";
import UpdatePasswordSection from "../../../ui-components/LandingPage/Profile/UpdatePasswordSection";
import NotificationSettingsSection from "../../../ui-components/LandingPage/Profile/NotificationSettingsSection";
import BillingSection from "../../../ui-components/LandingPage/Profile/BillingSection";
import GeneralSettingsSection from "../../../ui-components/LandingPage/Profile/GeneralSettingsSection";
import { User, Shield, Bell, CreditCard, Settings, ChevronRight, Camera, CheckCircle2, Briefcase, Calendar, Edit3, X, Loader2, Save, HelpCircle } from "lucide-react";
import { userService } from "../../../services/userService";
import { toast } from "react-toastify";

import gb from "../../../assets/new_assets/gb.png";

const Profile = () => {
  const [activeTab, setActiveTab ] = useState("profile");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const fileInputRef = React.useRef(null);
  const [editFormData, setEditFormData] = useState({
    full_name: "",
    phone: "",
    address: "",
    avatar_url: ""
  });

  const fetchUser = async () => {
    try {
      const data = await userService.getCurrentUser();
      setUserData(data);
      setEditFormData({
        full_name: data.full_name || "",
        phone: data.phone || "",
        address: data.address || "",
        avatar_url: data.avatar_url || ""
      });
    } catch (error) {
      toast.error("Failed to load profile data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
    
    // Check for successful Stripe checkout
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("session_id")) {
      toast.success("Welcome aboard! Your subscription has been activated successfully.");
      // Clear the query param without refreshing
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleUpdateProfile = async () => {
    setIsUpdating(true);
    try {
      await userService.updateCurrentUser(editFormData);
      toast.success("Profile updated successfully!");
      fetchUser(); // Refresh data
    } catch (error) {
      toast.error(error.message || "Failed to update profile.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, we would upload this file to a storage bucket (S3/Cloudinary)
      // and get a URL back, or use a multipart form data update.
      // For now, let's simulate the selection success.
      toast.info(`Image "${file.name}" selected. System integration for image uploads is pending.`);
      // If we had a base64 preview:
      // const reader = new FileReader();
      // reader.onloadend = () => setEditFormData({...editFormData, avatar_url: reader.result});
      // reader.readAsDataURL(file);
    }
  };

  const tabs = [
    { id: "profile", icon: User, label: "My Profile", component: ProfileOverviewSection },
    { id: "security", icon: Shield, label: "Security", component: UpdatePasswordSection },
    { id: "notifications", icon: Bell, label: "Notifications", component: NotificationSettingsSection },
    { id: "billing", icon: CreditCard, label: "Billing", component: BillingSection },
    { id: "general", icon: Settings, label: "General", component: GeneralSettingsSection },
  ];

  const getInitials = (name) => {
    if (!name) return "SD";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || ProfileOverviewSection;

  const user = {
    name: userData?.full_name || "SalesDriver User",
    email: userData?.email || "user@ex.com",
    role: "Proprietary User",
    company: userData?.address || "Organization",
    location: userData?.address || "Global",
    joined: userData?.created_at ? new Date(userData.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : "N/A",
    is_verified: userData?.is_verified
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      {/* Invisible File Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/*" 
        onChange={handleImageSelect}
      />
      
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
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
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

              {/* Cute Support Card */}
              <div className="mt-8 p-6 bg-gradient-to-br from-[#003049] to-[#005a8c] rounded-[32px] text-white overflow-hidden relative group/card shadow-2xl shadow-blue-900/10">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover/card:bg-white/20 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md border border-white/10 group-hover/card:scale-110 transition-transform duration-500">
                    <HelpCircle size={20} className="text-[#00A7E2]" />
                  </div>
                  <h3 className="font-black text-sm mb-1 tracking-tight">Need assistance?</h3>
                  <p className="text-[11px] text-blue-100 font-bold opacity-80 mb-4 leading-relaxed">
                    Our dedicated support team is ready to help you 24/7.
                  </p>
                  <button className="w-full py-3 bg-[#00A7E2] text-white text-[10px] font-black rounded-xl hover:bg-white hover:text-[#003049] transition-all uppercase tracking-widest">
                    GET SUPPORT
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            <div className="max-w-4xl space-y-8">
              {/* Global Profile Header */}
              <div className="bg-white/70 backdrop-blur-xl rounded-[32px] overflow-hidden border border-white/40 shadow-xl shadow-blue-900/5 transition-all hover:shadow-2xl hover:shadow-blue-900/10 group/header">
                <div className="h-32 bg-gray-50/50 relative overflow-hidden flex items-center justify-end px-10">
                    <div className="flex gap-2 opacity-50">
                      {[1, 2, 3].map(i => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-200"></div>
                      ))}
                    </div>
                </div>
                
                <div className="px-10 pb-10">
                  <div className="flex flex-col md:flex-row items-end gap-8 -mt-16 mb-4 relative z-10">
                    <div className="relative group/avatar">
                      <div className="absolute -inset-1 bg-gradient-to-tr from-[#00A7E2] to-blue-300 rounded-[40px] blur-lg opacity-20 group-hover/avatar:opacity-40 transition-opacity duration-500"></div>
                      <div className="w-40 h-40 rounded-[40px] bg-white ring-[12px] ring-white shadow-2xl relative z-10 flex items-center justify-center transition-transform duration-500 group-hover/avatar:scale-[1.02] border border-gray-50 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                          <span className="text-4xl font-black text-[#00A7E2] tracking-tighter">{getInitials(user.name)}</span>
                        </div>
                        <button 
                          onClick={() => fileInputRef.current?.click()}
                          className="absolute inset-0 bg-black/5 rounded-[40px] flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-all duration-300 z-20 backdrop-blur-[1px]"
                        >
                          <Camera className="text-[#003049]" size={32} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex-1 pb-4 text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                          <h1 className="text-4xl font-black text-[#003049] tracking-tight">{user.name}</h1>
                          {user.is_verified && (
                            <div className="bg-[#00A7E2] text-white p-1 rounded-full flex items-center justify-center shadow-lg shadow-blue-100" title="Verified Account">
                              <CheckCircle2 size={16} strokeWidth={3} />
                            </div>
                          )}
                        </div>
                        <span className={`inline-flex items-center px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border self-center md:self-auto ${
                          user.is_verified 
                            ? "bg-blue-50 text-[#00A7E2] border-blue-100" 
                            : "bg-gray-50 text-gray-400 border-gray-100"
                        }`}>
                          {user.is_verified ? "VERIFIED ACCT" : "PRO USER"}
                        </span>
                      </div>
                      <p className="text-gray-500 font-bold text-lg flex items-center justify-center md:justify-start gap-2 mb-1">
                        <Briefcase size={20} className="text-[#00A7E2]/60" />
                        {user.role}
                      </p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400 font-bold uppercase tracking-wider">
                          <Calendar size={14} />
                          Active since {user.joined}
                      </div>
                    </div>
                    <button 
                      onClick={handleUpdateProfile}
                      disabled={isUpdating}
                      className="flex items-center gap-2 px-8 py-4 bg-[#00A7E2] text-white font-bold rounded-[20px] shadow-2xl shadow-blue-100 hover:bg-[#0089bd] hover:scale-105 active:scale-95 transition-all mb-4 mx-auto md:mx-0 group/btn"
                    >
                      {isUpdating ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} className="transition-transform group-hover/btn:scale-110" />}
                      Save Updates
                    </button>
                  </div>
                </div>
              </div>

              <ActiveComponent 
                userData={userData} 
                isLoading={isLoading} 
                editFormData={editFormData} 
                setEditFormData={setEditFormData} 
              />
            </div>
          </main>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
