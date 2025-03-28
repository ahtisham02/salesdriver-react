import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

export default function ContactHeader() {
  return (
    <div className="bg-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-blueclr text-base font-semibold tracking-wide uppercase">
          Get In Touch
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-2">
          Contact Us
        </h1>

        <p className="text-gray-600 text-xl mt-5 max-w-2xl mx-auto">
          We’re here to help! Reach out to us for any questions or inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-blue-50 rounded-full">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-800 text-lg">Phone</span>
              <p className="text-gray-600">+1 877 333 5540</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-blue-50 rounded-full">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-800 text-lg">Address</span>
              <p className="text-gray-600">2117 Lake Ave, Altadena 91001</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-blue-50 rounded-full">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-800 text-lg">Email</span>
              <p className="text-gray-600">info@salesdriver.io</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <span className="text-xl font-semibold text-gray-900">
            Follow Us:
          </span>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="#"
              className="p-3 bg-gray-50 rounded-full hover:bg-blue-50 transition-all"
            >
              <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-700" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-50 rounded-full hover:bg-blue-50 transition-all"
            >
              <Facebook className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-50 rounded-full hover:bg-blue-50 transition-all"
            >
              <Instagram className="w-6 h-6 text-gray-700 hover:text-pink-500" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-50 rounded-full hover:bg-blue-50 transition-all"
            >
              <Youtube className="w-6 h-6 text-gray-700 hover:text-red-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}