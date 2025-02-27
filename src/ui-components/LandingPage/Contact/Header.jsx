import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, Phone, MapPin, Mail } from "lucide-react";

export default function ContactHeader() {
  return (
    <div className="px-6 py-8 my-7 text-center">
      <h1 className="lg:text-[55px] text-3xl font-extrabold text-gray-900">
        Contact Us Headline
      </h1>

      <p className="text-blueclr text-[14px] md:text-[16px] mt-10">
        Reach out to talk to an expert—we’re ready to help
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6 text-sm mt-5 text-gray-900">
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4 text-gray-900" />
          <span className="font-bold">Phone:</span>
          <span>XXX XXX XXX</span>
        </div>

        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-gray-900" />
          <span className="font-bold">Address:</span>
          <span>XXX XXXXX XXX</span>
        </div>

        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4 text-gray-900" />
          <span className="font-bold">Email:</span>
          <span>XXX@xxxx.com</span>
        </div>
      </div>

      <div className="flex justify-center items-center max-w-md mx-auto mt-6">
        <span className="font-bold text-[18px] text-gray-900 mr-4">Social</span>
        <div className="flex space-x-3">
          <Linkedin className="w-5 h-5 cursor-pointer text-gray-900 hover:text-blue-600" />
          <Facebook className="w-5 h-5 cursor-pointer text-gray-900 hover:text-blue-600" />
          <Instagram className="w-5 h-5 cursor-pointer text-gray-900 hover:text-pink-500" />
          <Youtube className="w-5 h-5 cursor-pointer text-gray-900 hover:text-red-600" />
        </div>
      </div>
    </div>
  );
}
