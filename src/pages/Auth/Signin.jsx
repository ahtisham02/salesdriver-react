import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import { authService } from "../../services/authService";
import { toast } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await authService.signin(formData);
      toast.success("Signed in successfully!");
      navigate("/");
    } catch (error) {
      let errorMessage = error.message || "Invalid email or password.";
      // Clean up backend error messages (e.g., removing "401: " prefix)
      if (errorMessage.includes("401: ")) {
        errorMessage = errorMessage.replace("401: ", "");
      }
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center lg:text-left mb-8">
        <h2 className="text-3xl font-bold text-[#003049] mb-2">Welcome back</h2>
        <p className="text-gray-500">Please enter your details to sign in.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
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
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

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

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00A7E2] focus:ring-[#00A7E2]" />
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Remember for 30 days</span>
          </label>
          <Link to="/forgot-password" size="sm" className="font-semibold text-[#00A7E2] hover:text-[#0089bd] transition-colors">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-[#00A7E2] text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-[#0089bd] hover:shadow-blue-200 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Signing In...
            </>
          ) : (
            "Sign in"
          )}
        </button>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-gray-50 px-2 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button type="button" disabled={isLoading} className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors font-semibold text-gray-700 disabled:opacity-50">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
            Google
          </button>
          <button type="button" disabled={isLoading} className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors font-semibold text-gray-700 disabled:opacity-50">
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="h-5 w-5" />
            Facebook
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-gray-600">
        Don't have an account?{" "}
        <Link to="/signup" className="font-bold text-[#00A7E2] hover:text-[#0089bd] transition-colors">
          Sign up for free
        </Link>
      </p>
    </div>
  );
};

export default Signin;
