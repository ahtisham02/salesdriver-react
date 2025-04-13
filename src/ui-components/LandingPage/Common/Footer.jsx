import React, { useState } from "react";
// import x from "../../../assets/Website_Media/Website_Media/icons/x.svg";
import fb from "../../../assets/Website_Media/Website_Media/icons/facebook.svg";
import yt from "../../../assets/Website_Media/Website_Media/icons/youtube.svg";
import insta from "../../../assets/Website_Media/Website_Media/icons/instagram.svg";
import linkedin from "../../../assets/Website_Media/Website_Media/icons/linkedin.svg";

import img from "../../../assets/Website_Media/Website_Media/white_salesdriver_logo.svg";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubscribe = async () => {
    if (!email) {
      setStatus({ type: "error", message: "Please enter an email address." });
      return;
    }

    try {
      const response = await fetch(
        "https://salesdriver.io/wp-json/wp/v2/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Subscribed successfully!" });
        setEmail("");
      } else {
        throw new Error(data.message || "Subscription failed.");
      }
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <footer className="bg-[#00263A] text-white pt-10 lg:pt-16 pb-6 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col lg:mr-20 items-center lg:items-start text-center lg:text-left lg:self-center">
            <img
              src={img}
              alt="logo"
              className="md:h-[40px] cursor-pointer md:ml-[50px] mb-2 h-[32px] md:0 z-10"
            />
            <div className="flex space-x-4 mt-4 md:ml-10">
              {/* <a
                href="https://www.linkedin.com/company/salesdriver-io"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-[#fbad18] transition-colors duration-200"
              >
                <img
                  src={x}
                  alt="LinkedIn"
                  className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </a> */}
              <a
                href="https://www.linkedin.com/company/salesdriver-io"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-[#fbad18] transition-colors duration-200"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a
                href="https://www.facebook.com/salesdriver/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-[#fbad18] transition-colors duration-200"
              >
                <img
                  src={fb}
                  alt="Facebook"
                  className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a
                href="https://www.instagram.com/salesdriver.io/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-[#fbad18] transition-colors duration-200"
              >
                <img
                  src={insta}
                  alt="Instagram"
                  className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a
                href="https://www.youtube.com/@salesdriver"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-[#fbad18] transition-colors duration-200"
              >
                <img
                  src={yt}
                  alt="YouTube"
                  className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm mt-6 lg:mt-0">
            {/* <div>
              <h3 className="font-bold mb-3">Services</h3>
              <ul className="space-y-2.5 text-white">
                <li className="cursor-pointer hover:text-blueclr">Strategy</li>
                <li className="cursor-pointer hover:text-blueclr">Sales</li>
                <li className="cursor-pointer hover:text-blueclr">Data</li>
                <li className="cursor-pointer hover:text-blueclr">Content</li>
                <li className="cursor-pointer hover:text-blueclr">
                  Automation
                </li>
                <li className="cursor-pointer hover:text-blueclr">SEO/Ads</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Solutions</h3>
              <ul className="space-y-2.5 text-white">
                <li className="cursor-pointer hover:text-blueclr">
                  Virtual Sales Reps
                </li>
                <li className="cursor-pointer hover:text-blueclr">
                  Complete Web Solution
                </li>
                <li className="cursor-pointer hover:text-blueclr">
                  Social Selling
                </li>
                <li className="cursor-pointer hover:text-blueclr">
                  Lead Generation
                </li>
                <li className="cursor-pointer hover:text-blueclr">
                  Web Design
                </li>
                <li className="cursor-pointer hover:text-blueclr">
                  Custom Software Solutions
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Industry</h3>
              <ul className="space-y-2.5 text-white">
                <li className="cursor-pointer hover:text-blueclr">Marketing</li>
                <li className="cursor-pointer hover:text-blueclr">
                  Technology
                </li>
                <li className="cursor-pointer hover:text-blueclr">
                  Consulting
                </li>
                <li className="cursor-pointer hover:text-blueclr">
                  B2B Agencies
                </li>
                <li className="cursor-pointer hover:text-blueclr">
                  Real Estate
                </li>
                <li className="cursor-pointer hover:text-blueclr">
                  Healthcare
                </li>
                <li className="cursor-pointer hover:text-blueclr">
                  Industrial
                </li>
              </ul>
            </div> */}
            <div>
              <h3 className="font-bold mb-3">Company</h3>
              <ul className="space-y-2.5 text-white">
                {/* <li className="cursor-pointer hover:text-blueclr">About Us</li> */}
                <li
                  className="cursor-pointer hover:text-blueclr"
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </li>
                <li
                  className="cursor-pointer hover:text-blueclr"
                  onClick={() => {
                    navigate("/blog");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Blog
                </li>
                <li
                  className="cursor-pointer hover:text-blueclr"
                  onClick={() => {
                    navigate("/howitworks");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  How It Works
                </li>
                {/* <li className="cursor-pointer hover:text-blueclr">Careers</li> */}
                <li
                  className="cursor-pointer hover:text-blueclr"
                  onClick={() => {
                    navigate("/casestudy");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Case Studies
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Resources</h3>
              <ul className="space-y-2.5 text-white">
                <li
                  className="cursor-pointer hover:text-blueclr"
                  onClick={() => {
                    navigate("/data-sheets");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  DataSheets
                </li>
                <li
                  className="cursor-pointer hover:text-blueclr"
                  onClick={() => {
                    navigate("/white-papers");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Whitepapers
                </li>
                <li
                  className="cursor-pointer hover:text-blueclr"
                  onClick={() => {
                    navigate("/downloadables");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Downloadables
                </li>
                <li
                  className="cursor-pointer hover:text-blueclr"
                  onClick={() => {
                    navigate("/dictionary");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Dictionary
                </li>
                <li
                  className="cursor-pointer hover:text-blueclr"
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
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-4">
          <h3 className="text-white hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] font-bold text-base text-center lg:text-left">
            Get Sales Insights <br /> Straight to Your Inbox
          </h3>
          <div className="flex w-full lg:w-auto items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black w-full lg:w-96 hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px]"
            />
            <button
              onClick={handleSubscribe}
              className="bg-yellowclr text-white font-semibold text-sm px-6 py-3 hover:bg-[#DA9613] hover:scale-[1.04] transition-transform duration-200 rounded-full ml-3"
            >
              SUBSCRIBE
            </button>
          </div>
          {status && (
            <p
              className={`text-${
                status.type === "success" ? "green" : "red"
              }-500 mt-2`}
            >
              {status.message}
            </p>
          )}
        </div>

        <div className="border-t mt-8 pt-6 text-white text-center text-sm">
          &copy; SalesDriver.io. {new Date().getFullYear()}{" "}
          <span
            className="cursor-pointer hover:text-blueclr"
            onClick={() => navigate("/privacy")}
          >
            Privacy
          </span>{" "}
          —{" "}
          <span
            className="cursor-pointer hover:text-blueclr"
            onClick={() => navigate("/terms")}
          >
            Terms
          </span>
        </div>
      </div>
    </footer>
  );
}
