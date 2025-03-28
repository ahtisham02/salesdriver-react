import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react";
import img from "../../../assets/download-removebg-preview.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#00263A] text-white pt-10 lg:pt-16 pb-6 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col lg:mr-20 items-center lg:items-start text-center lg:text-left lg:self-center">
            <img
              src={img}
              alt="logo"
              className="md:h-[64px] md:w-52 h-[52px] md:-mt-2.5 z-10"
            />
            <div className="flex space-x-4 mt-4 md:ml-10">
              <a
                href="https://www.linkedin.com/company/salesdriver-io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-blueclr" />
              </a>
              <a
                href="https://www.facebook.com/salesdriver/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 cursor-pointer hover:text-blueclr" />
              </a>
              <a
                href="https://www.instagram.com/salesdriver.io/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 cursor-pointer hover:text-blueclr" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm mt-6 lg:mt-0">
            <div>
              <h3 className="font-bold mb-3">Services</h3>
              <ul className="space-y-2.5 text-white">
                <li className="cursor-pointer hover:text-blueclr">
                  Strategy
                </li>
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
                <li className="cursor-pointer hover:text-blueclr">
                  Marketing
                </li>
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
            </div>
            <div>
              <h3 className="font-bold mb-3">Company</h3>
              <ul className="space-y-2.5 text-white">
                <li className="cursor-pointer hover:text-blueclr">
                  About Us
                </li>
                <li
                  className="cursor-pointer hover:text-blueclr"
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </li>
                <li className="cursor-pointer hover:text-blueclr">Careers</li>
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
                <li className="cursor-pointer hover:text-blueclr">Blog</li>
                <li className="cursor-pointer hover:text-blueclr">
                  Whitepapers
                </li>
                <li className="cursor-pointer hover:text-blueclr">Guides</li>
                <li
                  className="cursor-pointer hover:text-blueclr"
                  onClick={() => {
                    navigate("/howitworks");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  How It Works
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

        <div className="border-t mt-8 pt-6 text-white text-center text-sm">
          &copy; SalesDriver.io. {new Date().getFullYear()}{" "}
          <a href="/privacy" className="cursor-pointer hover:text-blueclr">
            Privacy
          </a>{" "}
          —{" "}
          <a href="/terms" className="cursor-pointer hover:text-blueclr">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
