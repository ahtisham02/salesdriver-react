import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";
import { authService } from "../../services/authService";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await authService.forgotPassword(email);
      setSubmitted(true);
      toast.success("Reset link sent!");
    } catch (error) {
      toast.error(error.message || "Failed to send reset link.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="w-16 h-16 bg-blue-50 text-[#00A7E2] rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail size={32} />
        </div>
        <h2 className="text-3xl font-bold text-[#003049] mb-4">Check your email</h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          We've sent a password reset link to <span className="font-semibold text-gray-900">{email}</span>
        </p>
        {/* <button
          onClick={() => window.location.href = `mailto:${email}`}
          className="w-full py-3.5 bg-[#00A7E2] text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-[#0089bd] mb-6 transition-all"
        >
          Open email app
        </button> */}
        <p className="text-gray-600">
          Didn't receive the email?{" "}
          <button 
            onClick={() => setSubmitted(false)} 
            disabled={isLoading}
            className="font-bold text-[#00A7E2] hover:text-[#0089bd] transition-colors disabled:opacity-50"
          >
            Click to resend
          </button>
        </p>
        <Link to="/signin" className="inline-flex items-center gap-2 mt-8 font-bold text-gray-500 hover:text-gray-800 transition-colors">
          <ArrowLeft size={18} />
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center lg:text-left mb-8">
        <h2 className="text-3xl font-bold text-[#003049] mb-2">Forgot password?</h2>
        <p className="text-gray-500">No worries, we'll send you reset instructions.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              required
              disabled={isLoading}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A7E2] focus:border-transparent outline-none transition-all disabled:opacity-50"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-[#00A7E2] text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-[#0089bd] hover:shadow-blue-200 transition-all font-plus-jakarta disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Sending Reset Link...
            </>
          ) : (
            "Reset password"
          )}
        </button>
      </form>

      <div className="mt-8 text-center">
        <Link to="/signin" className="inline-flex items-center gap-2 font-bold text-gray-500 hover:text-gray-800 transition-colors">
          <ArrowLeft size={18} />
          Back to sign in
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
