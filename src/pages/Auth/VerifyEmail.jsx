import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, XCircle, Loader2, Mail } from "lucide-react";
import { authService } from "../../services/authService";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState("loading"); // loading, success, error

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setStatus("error");
        return;
      }
      try {
        await authService.verifyEmail(token);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        toast.error(error.message || "Verification failed.");
      }
    };
    verify();
  }, [token]);

  return (
    <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {status === "loading" && (
        <>
            <div className="w-16 h-16 bg-blue-50 text-[#00A7E2] rounded-full flex items-center justify-center mx-auto mb-6">
                <Loader2 size={32} className="animate-spin" />
            </div>
            <h2 className="text-3xl font-bold text-[#003049] mb-4">Verifying email...</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
                We're confirming your credentials. This won't take long.
            </p>
        </>
      )}

      {status === "success" && (
        <>
            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#003049] mb-4">Email verified</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
                Your email has been successfully verified. You can now access all features.
            </p>
            <Link
                to="/signin"
                className="block w-full py-3.5 bg-[#00A7E2] text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-[#0089bd] transition-all"
            >
                Continue to sign in
            </Link>
        </>
      )}

      {status === "error" && (
        <>
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <XCircle size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#003049] mb-4">Verification failed</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
                The link is invalid or has expired. Please try requesting a new one.
            </p>
            <Link
                to="/signin"
                className="block w-full py-3.5 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-all mb-4"
            >
                Back to login
            </Link>
            <button
                onClick={() => window.location.reload()}
                className="font-bold text-[#00A7E2] hover:text-[#0089bd] transition-colors"
            >
                Retry verification
            </button>
        </>
      )}

      <div className="mt-12 p-4 bg-gray-50 rounded-xl border border-dashed border-gray-200 inline-flex items-center gap-2 text-sm text-gray-500">
        <Mail size={16} />
        Need help? <a href="mailto:support@salesdriver.io" className="font-bold text-[#003049] hover:underline">Contact Support</a>
      </div>
    </div>
  );
};

export default VerifyEmail;
