import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/Website_Media/Website_Media/salesdriver_logo.svg";
import authBg from "../assets/Website_Media/Website_Media/designs/cta_banner_bg.png";

const AuthLayout = () => {
  return (
    <div className="h-screen flex font-plus-jakarta bg-gray-50 overflow-hidden">
      {/* Left Side: Illustration & Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 h-full relative overflow-hidden bg-[#003049]">
        <img 
          src={authBg} 
          alt="Auth Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="relative z-10 flex flex-col justify-between p-12 w-full h-full">
          <div>
            <Link to="/">
              <img src={logo} alt="SalesDriver" className="h-10 w-auto brightness-0 invert" />
            </Link>
          </div>
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
              Scale your outbound with confidence.
            </h1>
            <p className="text-blue-100 text-lg">
              Join thousands of teams using SalesDriver to find, verify, and engage their next best customers.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#003049] bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-blue-200">
               Trusted by 2,000+ companies worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Auth Form Container */}
      <div className="w-full lg:w-1/2 h-full overflow-y-auto scrollbar-hide flex flex-col items-center p-6 md:p-12 relative">
        <div className="lg:hidden absolute top-8 left-8">
            <Link to="/">
              <img src={logo} alt="SalesDriver" className="h-8 w-auto" />
            </Link>
        </div>
        
        <div className="w-full max-w-md my-auto pt-16 lg:pt-0">
          <Outlet />
        </div>
        
        {/* Footer for mobile/desktop */}
        <div className="mt-8 mb-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SalesDriver. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
