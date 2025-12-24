import React from "react";
import fb from "../../../assets/Website_Media/Website_Media/icons/facebook.svg";
import yt from "../../../assets/Website_Media/Website_Media/icons/youtube.svg";
import insta from "../../../assets/Website_Media/Website_Media/icons/instagram.svg";
import linkedin from "../../../assets/Website_Media/Website_Media/icons/linkedin.svg";
import img from "../../../assets/Website_Media/Website_Media/white_salesdriver_logo.svg"; // Keeping original logo import
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#001A2C] text-white pt-16 pb-8 px-5 md:px-20 font-plus-jakarta">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mb-16">
          {/* Left Section: Logo, Address, Contact, Socials */}
          <div className="flex flex-col space-y-8 lg:w-1/3">
            {/* Logo */}
            <div>
              <img
                src={img}
                alt="SalesDriver Logo"
                className="h-8 cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>

            {/* Address */}
            <div>
              <h4 className="font-bold mb-2 text-white">Address</h4>
              <p className="text-gray-300 text-sm">
                2117 Lake Ave, Altadena 91001
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-2 text-white">Contact</h4>
              <p className="text-gray-300 text-sm underline cursor-pointer hover:text-[#fbad18] transition-colors">
                +1 877 333 5540
              </p>
              <p className="text-gray-300 text-sm underline cursor-pointer hover:text-[#fbad18] transition-colors">
                info@salesdriver.io
              </p>
            </div>

            {/* Social Icons - Now on the left */}
            <div className="flex space-x-4">
               <a
                href="https://www.linkedin.com/company/salesdriver-io"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
              </a>
               <a
                href="https://www.facebook.com/salesdriver/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <img src={fb} alt="Facebook" className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/salesdriver.io/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <img src={insta} alt="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@salesdriver"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <img src={yt} alt="YouTube" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Section: Link Columns */}
          <div className="flex flex-col md:flex-row gap-16 lg:w-1/2 justify-end mt-10 lg:mt-0">
             {/* Company Column */}
            <div>
              <h3 className="font-bold mb-3 text-white">Company</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li
                  className="cursor-pointer hover:text-[#fbad18] transition-colors"
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </li>
                <li
                  className="cursor-pointer hover:text-[#fbad18] transition-colors"
                  onClick={() => {
                    navigate("/blog");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Blog
                </li>
                <li
                  className="cursor-pointer hover:text-[#fbad18] transition-colors"
                  onClick={() => {
                    navigate("/howitworks");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  How It Works
                </li>
                <li
                  className="cursor-pointer hover:text-[#fbad18] transition-colors"
                  onClick={() => {
                    navigate("/casestudy");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Case Studies
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-bold mb-3 text-white">Resources</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li
                  className="cursor-pointer hover:text-[#fbad18] transition-colors"
                  onClick={() => {
                    navigate("/data-sheets");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  DataSheets
                </li>
                <li
                  className="cursor-pointer hover:text-[#fbad18] transition-colors"
                  onClick={() => {
                    navigate("/white-papers");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Whitepapers
                </li>
                <li
                  className="cursor-pointer hover:text-[#fbad18] transition-colors"
                  onClick={() => {
                    navigate("/downloadables");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Downloadables
                </li>
                <li
                  className="cursor-pointer hover:text-[#fbad18] transition-colors"
                  onClick={() => {
                    navigate("/dictionary");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Dictionary
                </li>
                <li
                  className="cursor-pointer hover:text-[#fbad18] transition-colors"
                  onClick={() => {
                    navigate("/webinar");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Webinars
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <div className="mb-4 md:mb-0">
             &copy; {new Date().getFullYear()} SalesDriver. All rights reserved.
            </div>
            <div className="flex space-x-6">
                <span
                    className="cursor-pointer hover:text-white transition-colors underline"
                    onClick={() => navigate("/privacy")}
                >
                    Privacy policy
                </span>
                <span
                    className="cursor-pointer hover:text-white transition-colors underline"
                    onClick={() => navigate("/terms")}
                >
                    Terms of service
                </span>
                <span className="cursor-pointer hover:text-white transition-colors underline">
                    Cookie settings
                </span>
            </div>
        </div>
      </div>
    </footer>
  );
}

