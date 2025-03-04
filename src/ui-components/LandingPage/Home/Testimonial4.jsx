import React, { useState } from "react";
import img from "../../../assets/h1.jpg";
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
} from "lucide-react";

const tabs = [
  {
    name: "Virtual Sales Reps",
    icon: Users,
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
              <ChevronRight className="w-5 h-5 text-slate-500" />
            </button>
          ))}
        </div>

        <div className="w-full md:w-3/4 bg-white px-10 py-14 rounded-xl shadow-xl">
          {/* First Two Sections */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-8">
              <h1 className="text-4xl font-bold text-slate-900">{activeTab}</h1>
              <p className="text-slate-600 mt-5 text-lg leading-relaxed">
                {activeTabData?.description}
              </p>
              <button className="text-blue-600 mt-6 text-lg flex items-center font-medium hover:text-blue-700 transition-all">
                LEARN MORE <ArrowRight className="ml-2" size={20} />
              </button>
            </div>

            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  className="w-full h-auto"
                  src={img}
                  alt="Service Illustration"
                />
              </div>
            </div>
          </div>

          {/* Full Width Section Below */}
          <div className="mt-10 w-full">
            <h2 className="text-xl font-semibold text-slate-800 flex items-center">
              Linked Services <ChevronDown className="ml-2" size={22} />
            </h2>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4 w-full">
              {activeTabData?.buttons?.map((button, index) => (
                <button
                  key={index}
                  className="border border-slate-300 py-3 px-5 rounded-lg text-[16px] font-medium bg-white hover:bg-blue-50 transition-all w-full"
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
