import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Lock, Eye, EyeOff, CheckCircle2, Loader2 } from "lucide-react";
import { authService } from "../../services/authService";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [showPassword, setShowPassword] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (!token) {
      toast.error("Invalid or missing reset token.");
      return;
    }
    setIsLoading(true);
    try {
      await authService.resetPassword(token, formData.password);
      setCompleted(true);
      toast.success("Password reset successfully!");
    } catch (error) {
      toast.error(error.message || "Failed to reset password.");
    } finally {
      setIsLoading(false);
    }
  };

  if (completed) {
    return (
      <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform hover:scale-110 duration-300">
          <CheckCircle2 size={32} />
        </div>
        <h2 className="text-3xl font-bold text-[#003049] mb-4">Password reset</h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Your password has been successfully reset. Click below to log in magically.
        </p>
        <Link
          to="/signin"
          className="block w-full py-3.5 bg-[#00A7E2] text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-[#0089bd] transition-all"
        >
          Continue to login
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center lg:text-left mb-8">
        <h2 className="text-3xl font-bold text-[#003049] mb-2">Set new password</h2>
        <p className="text-gray-500">Your new password must be different from previous used passwords.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              required
              disabled={isLoading}
              className="w-full pl-10 pr-12 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A7E2] focus:border-transparent outline-none transition-all disabled:opacity-50"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button
              type="button"
              disabled={isLoading}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Confirm Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              required
              disabled={isLoading}
              className="w-full pl-10 pr-12 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A7E2] focus:border-transparent outline-none transition-all disabled:opacity-50"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-[#00A7E2] text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-[#0089bd] transition-all disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Resetting Password...
            </>
          ) : (
            "Reset password"
          )}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
