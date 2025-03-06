import React, { useState } from "react";
import img from "../../../assets/help.jpg";
import img1 from "../../../assets/websol.jpg";
import img2 from "../../../assets/sell.jpg";
import img3 from "../../../assets/lead.jpg";
import img4 from "../../../assets/webdes.jpg";
import img5 from "../../../assets/css.jpg";
import {
  Users,
  Globe,
  Share2,
  UserPlus,
  Layout,
  Code,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ChevronUp,
} from "lucide-react";

const tabs = [
  {
    name: "Virtual Sales Reps",
    icon: Users,
    img: img,
    description:
      "Cut costs, save time, and eliminate the hassle of training. Get on-demand virtual sales reps to book meetings, nurture leads, and close deals. Our sales professionals integrate seamlessly with your team to drive revenue without the overhead.",
    buttons: [
      "LinkedIn Outreach",
      "Sales",
      "Profile Optimization",
      "Appointment Setting",
      "Scalable Outreach Programs",
      "Targeted Lead Generation",
    ],
    btn: "Learn More",
  },
  {
    name: "Web Solution",
    icon: Globe,
    img: img1,
    description:
      "WebPoint Digital builds high-performing websites that generate leads, increase conversions, and enhance user experience. Every design is optimized for speed, search engines, and customer engagement.",
    buttons: [
      "Website Development & Redesign",
      "Conversion Rate Optimization",
      "E-commerce & Sales Funnels",
      "SEO & Performance Analytics",
    ],
    btn: "Learn More",
  },
  {
    name: "Social Selling",
    icon: Share2,
    img: img2,
    description:
      "SEP Marketing Services transforms social platforms into revenue channels. Our team helps you attract, engage, and convert prospects through LinkedIn outreach, targeted content, and paid social campaigns.",
    buttons: [
      "LinkedIn Lead Generation & Outreach",
      "Facebook & Instagram Selling Strategies",
      "Personal Branding & Authority Building",
      "Paid Social Ad Campaigns",
    ],
    btn: "Start Social Selling",
  },
  {
    name: "Lead Generation",
    icon: UserPlus,
    img: img3,
    description:
      "B2B Marketing.biz delivers targeted leads that fit your ideal customer profile. We build and execute lead-generation strategies that drive engagement and accelerate your sales pipeline.",
    buttons: [
      "B2B Lead Generation & List Building",
      "Email & Outbound Marketing",
      "Lead Nurturing & Scoring",
      "Account-Based Marketing (ABM)",
    ],
    btn: "Generate More Leads",
  },
  {
    name: "Web Design",
    icon: Layout,
    img: img4,
    description:
      "CompanyC Marketing designs visually striking websites that capture attention and drive action. Every page is optimized for user experience, brand impact, and measurable business results.",
    buttons: [
      "Custom Website Design & Development",
      "UX/UI Enhancements & Optimization",
      "Branding & Visual Identity",
      "Mobile-Responsive Design",
    ],
    btn: "Get Started",
  },
  {
    name: "Custom Software Sol.",
    icon: Code,
    img: img5,
    description:
      "IconDevs builds custom software solutions tailored to your business needs. From enterprise automation to SaaS development, our technology helps you streamline processes and unlock new growth opportunities.",
    buttons: [
      "Custom Software Development",
      "API Integrations & Automations",
      "Enterprise Software Solutions",
      "SaaS Product Development",
    ],
    btn: "Explore Custom Software",
  },
];

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const activeTabData = tabs.find((tab) => tab.name === activeTab);

  return (
    <div className="px-8 pt-10 pb-20 bg-slate-50 min-h-screen">
      <div className="mb-12 text-center">
        <p className="sm:text-[13px] text-[11px] font-medium text-blueclr">
          Our Solutions
        </p>
        <h1 className="md:text-5xl text-3xl font-extrabold text-gray-800 mt-2">
          Comprehensive Solutions
        </h1>
        <p className="sm:text-lg text-base font-semibold text-gray-800 mt-1.5">
          Built for the most common issues.
        </p>
      </div>

      <div className="mb-6 pb-3 md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex justify-center min-w-max">
          {tabs.map(({ name }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`px-6 py-2 text-lg font-semibold relative transition-all ${
                activeTab === name
                  ? "text-blueclr font-bold border-b-[3px] border-blueclr"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        <div className="w-full md:w-1/4 hidden md:block">
          {tabs.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`flex items-center w-full px-5 py-4 rounded-xl mb-3 transition-all text-left shadow-md ${
                activeTab === name
                  ? "bg-blue-100 text-blueclr font-semibold"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon className="w-6 h-6 mr-3 text-blueclr" />
              <span className="flex-1 text-lg">{name}</span>
              <ChevronRight
                className={`w-5 h-5  ${
                  activeTab === name ? "text-blueclr" : "text-slate-500"
                }`}
              />{" "}
            </button>
          ))}
        </div>

        <div className="w-full md:w-3/4 bg-white px-10 py-14 rounded-xl shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-8">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                {activeTab}
              </h1>
              <p className="text-slate-600 mt-5 text-base sm:text-lg leading-relaxed">
                {activeTabData?.description}
              </p>
              <button className="text-blueclr mt-6 text-base sm:text-lg flex items-center font-medium group relative">
                <span className="relative z-10 group-hover:translate-y-[-2px] transition-all">
                  Learn More
                </span>
                <ArrowRight
                  className="ml-2 relative z-10 group-hover:translate-y-[-2px] transition-all"
                  size={20}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blueclr transition-all group-hover:w-full"></span>
              </button>
            </div>

            <div className="md:w-1/2 mt-10 mb-5 md:mb-0 md:mt-0">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  className="w-full h-auto"
                  src={activeTabData?.img}
                  alt="Service Illustration"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 w-full">
            <h2
              className="text-xl font-semibold text-slate-800 flex items-center cursor-pointer"
              onClick={handleToggle}
            >
              Linked Services
              {isOpen ? (
                <ChevronUp className="ml-2" size={22} />
              ) : (
                <ChevronDown className="ml-2" size={22} />
              )}
            </h2>

            <div
              className={`overflow-hidden transition-all duration-500 px-4 ease-in-out mt-4 ${
                isOpen ? "max-h-screen py-4" : "max-h-0"
              }`}
            >
              {" "}
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4 w-full">
                {activeTabData?.buttons?.map((button, index) => (
                  <button
                    key={index}
                    className="py-3 px-6 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all w-full hover:scale-105 text-gray-800"
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
