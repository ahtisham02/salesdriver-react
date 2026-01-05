import React, { useState } from "react";
import { LogOut, Trash2, Globe, Loader2, AlertTriangle, X } from "lucide-react";
import { authService } from "../../../services/authService";
import { userService } from "../../../services/userService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const GeneralSettingsSection = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleLogout = async () => {
    try {
      await authService.logout();
      toast.success("Signed out successfully.");
      navigate("/signin");
    } catch (error) {
      toast.error("Logout failed.");
    }
  };

  const handleDeleteAccount = async () => {
    setIsLoading(true);
    try {
      await userService.deleteCurrentUser();
      toast.success("Account terminated successfully.");
      navigate("/signup");
    } catch (error) {
      toast.error("Failed to terminate account.");
    } finally {
      setIsLoading(false);
      setShowDeleteModal(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-10 border border-white/40 shadow-xl shadow-blue-900/5">
        <div className="flex items-start gap-4 mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-white text-[#00A7E2] rounded-[20px] flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
            <Globe size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#003049] tracking-tight">System Core</h2>
            <p className="text-gray-500 font-medium">Manage your session and fundamental account status.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-[24px] bg-white/40 border border-gray-100 hover:border-[#003049]/10 transition-all duration-300">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="w-14 h-14 bg-[#003049]/5 text-[#003049] rounded-2xl flex items-center justify-center transition-transform hover:scale-110">
                <LogOut size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#003049]">Terminate Session</h3>
                <p className="text-sm text-gray-500 font-medium">Securely exit your current active session.</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-8 py-3.5 bg-white text-[#003049] font-black tracking-tight rounded-2xl border border-gray-200 hover:bg-gray-50 hover:border-[#003049] transition-all"
            >
              Sign Out
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-[24px] bg-red-50/30 border border-red-100 hover:border-red-200 transition-all duration-300">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="w-14 h-14 bg-red-100/50 text-red-500 rounded-2xl flex items-center justify-center transition-transform hover:scale-110">
                <Trash2 size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-600">Eliminate Account</h3>
                <p className="text-sm text-gray-500 font-medium">Permanently delete all data and configurations.</p>
              </div>
            </div>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="px-8 py-3.5 bg-red-500 text-white font-black tracking-tight rounded-2xl shadow-lg shadow-red-200 hover:bg-red-600 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[#003049]/60 backdrop-blur-sm" onClick={() => !isLoading && setShowDeleteModal(false)}></div>
          <div className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-xl font-black text-[#003049]">Confirm Deletion</h3>
              </div>
              <button 
                onClick={() => setShowDeleteModal(false)}
                disabled={isLoading}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors disabled:opacity-50"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            <div className="p-8">
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                Are you absolutely sure you want to delete your account? This action is <span className="text-red-600 font-black">irreversible</span> and will permanently remove all your data, subscriptions, and configurations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  disabled={isLoading}
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 py-4 bg-gray-50 text-gray-400 font-bold rounded-2xl hover:bg-gray-100 hover:text-gray-600 transition-all border border-gray-100"
                >
                  Cancel
                </button>
                <button
                  disabled={isLoading}
                  onClick={handleDeleteAccount}
                  className="flex-1 py-4 bg-red-500 text-white font-black rounded-2xl shadow-xl shadow-red-100 hover:bg-red-600 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Trash2 size={20} />}
                  Delete Forever
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralSettingsSection;
