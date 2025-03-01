import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react";
import img from "../../../assets/download-removebg-preview.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#f6f9f6] text-[#111] pt-10 lg:pt-16 pb-6 px-5 md:px-20">
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
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-yellowclr" />
              </a>
              <a
                href="https://www.facebook.com/salesdriver/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 cursor-pointer hover:text-yellowclr" />
              </a>
              <a
                href="https://www.instagram.com/salesdriver.io/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 cursor-pointer hover:text-yellowclr" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm mt-6 lg:mt-0">
            <div>
              <h3 className="font-bold mb-3">Services</h3>
              <ul className="space-y-2.5 text-[#333333]">
                <li className="cursor-pointer hover:text-yellowclr">
                  Strategy
                </li>
                <li className="cursor-pointer hover:text-yellowclr">Sales</li>
                <li className="cursor-pointer hover:text-yellowclr">Data</li>
                <li className="cursor-pointer hover:text-yellowclr">Content</li>
                <li className="cursor-pointer hover:text-yellowclr">
                  Automation
                </li>
                <li className="cursor-pointer hover:text-yellowclr">SEO/Ads</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Solutions</h3>
              <ul className="space-y-2.5 text-[#333333]">
                <li className="cursor-pointer hover:text-yellowclr">
                  Virtual Sales Reps
                </li>
                <li className="cursor-pointer hover:text-yellowclr">
                  Complete Web Solution
                </li>
                <li className="cursor-pointer hover:text-yellowclr">
                  Social Selling
                </li>
                <li className="cursor-pointer hover:text-yellowclr">
                  Lead Generation
                </li>
                <li className="cursor-pointer hover:text-yellowclr">
                  Web Design
                </li>
                <li className="cursor-pointer hover:text-yellowclr">
                  Custom Software Solutions
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Industry</h3>
              <ul className="space-y-2.5 text-[#333333]">
                <li className="cursor-pointer hover:text-yellowclr">
                  Marketing
                </li>
                <li className="cursor-pointer hover:text-yellowclr">
                  Technology
                </li>
                <li className="cursor-pointer hover:text-yellowclr">
                  Consulting
                </li>
                <li className="cursor-pointer hover:text-yellowclr">
                  B2B Agencies
                </li>
                <li className="cursor-pointer hover:text-yellowclr">
                  Real Estate
                </li>
                <li className="cursor-pointer hover:text-yellowclr">
                  Healthcare
                </li>
                <li className="cursor-pointer hover:text-yellowclr">
                  Industrial
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Company</h3>
              <ul className="space-y-2.5 text-[#333333]">
                <li className="cursor-pointer hover:text-yellowclr">
                  About Us
                </li>
                <li
                  className="cursor-pointer hover:text-yellowclr"
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </li>
                <li className="cursor-pointer hover:text-yellowclr">Careers</li>
                <li
                  className="cursor-pointer hover:text-yellowclr"
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
              <ul className="space-y-2.5 text-[#333333]">
                <li className="cursor-pointer hover:text-yellowclr">Blog</li>
                <li className="cursor-pointer hover:text-yellowclr">
                  Webinars
                </li>
                <li className="cursor-pointer hover:text-yellowclr">
                  Whitepapers
                </li>
                <li className="cursor-pointer hover:text-yellowclr">Guides</li>
                <li
                  className="cursor-pointer hover:text-yellowclr"
                  onClick={() => {
                    navigate("/howitworks");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  How It Works
                </li>
                <li
                  className="cursor-pointer hover:text-yellowclr"
                  onClick={() => {
                    navigate("/dictionary");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Dictionary
                </li>
                <li
                  className="cursor-pointer hover:text-yellowclr"
                  onClick={() => {
                    navigate("/webinar");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Webinar
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-[#333333] text-center text-sm">
          &copy; SalesDriver.io. {new Date().getFullYear()}{" "}
          <a href="/privacy" className="cursor-pointer hover:text-yellowclr">
            Privacy
          </a>{" "}
          —{" "}
          <a href="/terms" className="cursor-pointer hover:text-yellowclr">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
