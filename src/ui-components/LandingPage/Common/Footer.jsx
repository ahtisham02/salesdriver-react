import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react";
import img from "../../../assets/download-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="bg-[#f6f9f6] text-[#111] pt-10 lg:pt-16 pb-6 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col lg:mr-20 items-center lg:items-start text-center lg:text-left lg:self-center">
            <img
              src={img}
              alt="logo"
              className="md:h-[64px] h-[52px] md:-mt-2.5 z-10"
            />
            <div className="flex space-x-4 mt-4">
              <Linkedin className="w-5 h-5 cursor-pointer" />
              <Facebook className="w-5 h-5 cursor-pointer" />
              <Instagram className="w-5 h-5 cursor-pointer" />
              <Youtube className="w-5 h-5 cursor-pointer" />
              <X className="w-5 h-5 cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm mt-6 lg:mt-0">
            <div>
              <h3 className="font-bold mb-3">Services</h3>
              <ul className="space-y-2.5 text-[#333333]">
                <li>Strategy</li>
                <li>Sales</li>
                <li>Data</li>
                <li>Content</li>
                <li>Automation</li>
                <li>SEO/Ads</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Solutions</h3>
              <ul className="space-y-2.5 text-[#333333]">
                <li>Virtual Sales Reps</li>
                <li>Complete Web Solution</li>
                <li>Social Selling</li>
                <li>Lead Generation</li>
                <li>Web Design</li>
                <li>Custom Software Solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Industry</h3>
              <ul className="space-y-2.5 text-[#333333]">
                <li>Marketing</li>
                <li>Technology</li>
                <li>Consulting</li>
                <li>B2B Agencies</li>
                <li>Real Estate</li>
                <li>Healthcare</li>
                <li>Industrial</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Company</h3>
              <ul className="space-y-2.5 text-[#333333]">
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Resources</h3>
              <ul className="space-y-2.5 text-[#333333]">
                <li>Blog</li>
                <li>Webinars</li>
                <li>Whitepapers</li>
                <li>Guides</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-[#333333] text-center text-sm">
          &copy; SalesDriver.io. {new Date().getFullYear()}{" "}
          <a href="/privacy">Privacy</a> — <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
