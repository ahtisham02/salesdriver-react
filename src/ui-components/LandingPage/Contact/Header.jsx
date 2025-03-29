import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import HeadImg from "../../../assets/Group1000001040.png";

export default function ContactHeader() {
  return (
    <div className="relative bg-white py-16 text-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={HeadImg}
          alt="Header Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-blueclr">Get In Touch</h1>
        <p className="text-gray-600 text-lg mt-2">
          Reach out to talk to an expert—we’re ready to help
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 mt-6 text-gray-800 text-lg">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-yellowclr" />
            <span className="font-semibold">Phone:</span>
            <span>+1 877 333 5540</span>
          </div>

          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-yellowclr" />
            <span className="font-semibold">Address:</span>
            <span>2117 Lake Ave, Altadena 91001</span>
          </div>

          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-yellowclr" />
            <span className="font-semibold">Email:</span>
            <span>info@salesdriver.io</span>
          </div>
        </div>

        <div className="flex justify-center items-center mt-6 px-8">
          <div className="text-gray-800 font-semibold text-lg mr-3">Social</div>
          <div className="flex space-x-4">
            <a href="#" className="text-yellowclr hover:text-yellow-600">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-yellowclr hover:text-yellow-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-yellowclr hover:text-yellow-600">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-yellowclr hover:text-yellow-600">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
