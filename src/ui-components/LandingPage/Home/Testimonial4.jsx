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
    <div className="px-6 py-8 my-4">
      <div className="mb-8">
        <p className="sm:text-[12px] text-[11px] font-medium text-blueclr">
          Our Solutions
        </p>
        <h1 className="sm:text-[32px] text-[28px] font-extrabold text-gray-800 mt-2">
          Comprehensive Solutions
        </h1>
        <p className="sm:text-lg text-base font-semibold text-gray-800 mt-1.5">
          Built for the most common issues.
        </p>
      </div>

      {/* Mobile Tabs */}
      <div className="mb-6 pb-3 md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex justify-center min-w-max">
          {tabs.map(({ name }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`px-6 py-2 sm:text-lg text-base font-medium relative ${
                activeTab === name
                  ? "text-blueclr font-bold border-b-[3px] border-blueclr"
                  : "text-gray-600 border-b-[3px] border-gray-500"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex min-h-screen">
        {/* Desktop Tabs */}
        <div className="w-1/4 p-4 hidden md:block rounded-xl">
          {tabs.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`flex items-center w-full px-4 py-3 rounded-lg mb-2 transition-all text-left ${
                activeTab === name ? "bg-[#999DA0] font-semibold" : ""
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="flex-1">{name}</span>
              <ChevronRight />
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row w-full md:w-3/4 md:mx-6 bg-[#EAEBEB] px-8 py-12 rounded-xl mx-auto">
          <div className="md:w-1/2 pr-6">
            <h1 className="text-sm text-blueclr font-medium mb-1">
              MeetNow.agency
            </h1>
            <h1 className="md:text-3xl text-2xl font-bold">{activeTab}</h1>
            <p className="text-gray-600 mt-3 text-[14px] sm:text-base">
              {activeTabData?.description}
            </p>

            <button className="text-blue-500 mt-3 flex items-center text-[14px] sm:text-base">
              LEARN MORE <ArrowRight className="ml-2" size={18} />
            </button>

            <div className="mt-4">
              <h3 className="font-semibold text-sm flex items-center text-[14px] sm:text-base">
                CASE STUDIES <ChevronDown className="ml-2" size={17} />
              </h3>
              <div className="grid sm:grid-cols-3 grid-cols-2 gap-2 mt-4 text-sm">
                {activeTabData?.buttons.map((button, index) => (
                  <button
                    key={index}
                    className="border border-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-all"
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="rounded-lg flex items-center justify-center">
              <img className="w-full h-auto rounded-lg" src={img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
