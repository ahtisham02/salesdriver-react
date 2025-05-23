import React, { useState } from "react";
import img from "../../../assets/Website_Media/Website_Media/illustrations/styled-resized-two-colleagues-making-sketches-on-the-flipchart-2024-10-16-23-01-09-utc.png";
import img1 from "../../../assets/Website_Media/Website_Media/illustrations/sales-illustration.png";
import img2 from "../../../assets/Website_Media/Website_Media/illustrations/data-illustration.png";
import img3 from "../../../assets/Website_Media/Website_Media/illustrations/content-illustration.png";
import img4 from "../../../assets/Website_Media/Website_Media/illustrations/automation-illustration_.png";
import img5 from "../../../assets/Website_Media/Website_Media/illustrations/seoads-illustration  copy.png";
import HeadImg from "../../../assets/69c37d04d3feadc39b5681a70e9d7638.png";
import elipse from "../../../assets/Ellipse.png";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Activity,
  TrendingUp,
  Database,
  FileText,
  Zap,
  Search,
  ArrowRight,
  ChevronUp,
} from "lucide-react";

const tabs = [
  {
    name: "Strategy",
    heading: "Strategy",
    icon: Activity,
    img: img,
    description:
      "SalesDriver’s strategy services provide agencies with a structured, data-driven approach to acquiring new clients. Our experts analyze the customer journey, optimize touchpoints, and create a scalable sales roadmap that drives predictable growth.",
    btn1: "Dedicated Account and Project Manager",
    btn2: "Sales Acquisition Strategy",
    btn3: "Customer Journey",
    btn4: "Mapping/Tracking",
    btn5: "Weekly Review Meeting",
  },
  {
    name: "Sales",
    heading: "Sales",
    icon: TrendingUp,
    img: img1,
    description:
      "Our sales services focus on engaging, nurturing, and converting leads into paying clients. We combine AI-driven automation with human expertise to create an efficient, scalable sales funnel.",
    btn1: "Sales Support",
    btn2: "Top of funnel SDR",
    btn3: "AI Sales Chatbot",
    btn4: "Live Reporting Dashboard",
    btn5: "Hot Lead Caller",
  },
  {
    name: "Data",
    heading: "Data & CRM Management",
    icon: Database,
    img: img2,
    btn1: "20 Domains: 60 Warmed Emails",
    btn2: "Lead Scoring",
    btn3: "4000 Appended Leads (Buyer & Hiring Intent Data)",
    btn4: "CRM",
    description:
      "All of your data is compiled into one streamlined system connected to your CRM which provides reporting, tracking, data appending, and data list services.",
  },
  {
    name: "Content",
    heading: "Content & Brand Marketing",
    icon: FileText,
    img: img3,
    btn1: "Landing Page Creation",
    btn2: "Content Marketing",
    btn3: "Social Media Management",
    btn4: "Content Creation",
    description:
      "We provide design support for each of your campaigns including social media/post creation, targeted landing pages, and overall website design.  We help you create focused, targeted, and branded content to be used for social media, ad retargeting press releases, and blog articles.",
  },
  {
    name: "Automation",
    heading: "Automation",
    icon: Zap,
    img: img4,
    btn1: "AI-Driven Management",
    btn2: "Email,and Social Media Outreach: 12-touch setup",
    btn3: "Campaign Automation",
    description:
      "Our many automations and integrations save your team time and money utilizing Sales(Driver's 12 touch process, automations and CRM integrations.",
  },
  {
    name: "SEO/Ads",
    heading: "SEO & Digital Advertising",
    icon: Search,
    img: img5,
    btn1: "On-page SEO",
    btn2: "IP, Link, Journey, and Heat Map Tracking",
    btn3: "PPC Management",
    btn4: "Backlinks package",
    description:
      "Our Google Certified, white hat process helps build your brand awareness and domain authority through link building and SEO content optimization.",
  },
];

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState("Strategy");
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const activeTabData = tabs.find((tab) => tab.name === activeTab);

  return (
    <div className="px-6 relative pt-10 pb-20 bg-slate-50 min-h-screen">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HeadImg}
          alt="Header Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-75"></div>
      </div>
      <img
        src={elipse}
        alt="Glow"
        className="absolute lg:block hidden -top-10 left-0 w-96 h-96"
      />
      <img
        src={elipse}
        alt="Glow"
        className="absolute lg:block rotate-180 hidden bottom-0 right-0 w-96 h-96"
      />
      <div className="relative z-10">
        <div className="mb-12 text-center">
          <p className="inline-block uppercase hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
            OUR Services
          </p>
          <h2 className="text-3xl md:text-5xl hover:scale-[1.03] transition-all duration-300 hover:-translate-y-[2px] font-extrabold text-[#005895] mt-3">
            Expert-built Services,
            <br /> Built for You{" "}
          </h2>
        </div>

        <div className="mb-5">
          <div className="flex flex-wrap justify-center gap-y-2">
            {tabs.map(({ name }) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`px-6 py-2 uppercase text-lg font-medium transition-all duration-300 border-b-2 ${
                  activeTab === name
                    ? "text-blueclr font-bold border-blueclr"
                    : "text-gray-500 border-gray-300 hover:border-gray-500"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col w-full overflow-hidden px-2 mx-auto">
          <div className="flex flex-col w-full p-1 md:p-2 rounded-xl">
            <div className="flex flex-col md:flex-row w-full">
              <div className="md:w-1/2 px-4 pt-6 lg:mr-2 bg-white rounded-2xl border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold leading-snug text-[#005895]">
                  {activeTabData?.heading}
                </h2>
                <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
                  {activeTab === "Sales" || activeTab === "Content" ? (
                    <>
                      {activeTabData.description.split(". ")[0] + "."}
                      <br />
                      <br />
                      {activeTabData.description
                        .split(". ")
                        .slice(1)
                        .join(". ")}
                    </>
                  ) : (
                    activeTabData?.description
                  )}
                </p>

                <button
                  onClick={() =>
                    navigate("/services", {
                      state: { name: activeTabData?.name },
                    })
                  }
                  className="text-blueclr mt-5 text-sm sm:text-base flex items-center font-medium group relative"
                >
                  <span className="relative uppercase z-10 group-hover:translate-y-[-2px] transition-all">
                    Learn More
                  </span>
                  <ArrowRight
                    className="ml-2 relative z-10 group-hover:translate-y-[-2px] transition-all"
                    size={18}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blueclr transition-all group-hover:w-full"></span>
                </button>
                <div className="mt-8 w-full">
                  <h2
                    className="text-lg font-semibold text-slate-800 flex items-center cursor-pointer"
                    onClick={handleToggle}
                  >
                    Linked Services
                    {isOpen ? (
                      <ChevronUp className="ml-2" size={20} />
                    ) : (
                      <ChevronDown className="ml-2" size={20} />
                    )}
                  </h2>

                  <div
                    className={`overflow-hidden transition-all duration-500 px-3 ease-in-out mt-3 ${
                      isOpen ? "max-h-screen py-3" : "max-h-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                      {activeTabData?.btn1 && (
                        <button
                          onClick={() =>
                            navigate("/services", {
                              state: { name: activeTabData?.name },
                            })
                          }
                          className="py-2 px-1 text-[15px] text-left font-medium transition-all hover:text-[#00a7e2] w-full hover:scale-105 text-gray-800"
                        >
                          {activeTabData.btn1}
                        </button>
                      )}
                      {activeTabData?.btn2 && (
                        <button
                          onClick={() =>
                            navigate("/services", {
                              state: { name: activeTabData?.name },
                            })
                          }
                          className="py-2 px-1 text-[15px] text-left font-medium transition-all hover:text-[#00a7e2] w-full hover:scale-105 text-gray-800"
                        >
                          {activeTabData.btn2}
                        </button>
                      )}
                      {activeTabData?.btn3 && (
                        <button
                          onClick={() =>
                            navigate("/services", {
                              state: { name: activeTabData?.name },
                            })
                          }
                          className="py-2 px-1 text-[15px] text-left font-medium transition-all hover:text-[#00a7e2] w-full hover:scale-105 text-gray-800"
                        >
                          {activeTabData.btn3}
                        </button>
                      )}
                      {activeTabData?.btn4 && (
                        <button
                          onClick={() =>
                            navigate("/services", {
                              state: { name: activeTabData?.name },
                            })
                          }
                          className="py-2 px-1 text-[15px] text-left font-medium transition-all hover:text-[#00a7e2] w-full hover:scale-105 text-gray-800"
                        >
                          {activeTabData.btn4}
                        </button>
                      )}
                      {activeTabData?.btn5 && (
                        <button
                          onClick={() =>
                            navigate("/services", {
                              state: { name: activeTabData?.name },
                            })
                          }
                          className="py-2 px-1 text-[15px] text-left font-medium transition-all hover:text-[#00a7e2] w-full hover:scale-105 text-gray-800"
                        >
                          {activeTabData.btn5}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 flex items-center mt-6 mb-4 md:mb-0 md:mt-0 justify-center relative">
                <img
                  className="w-10/12 mx-auto h-auto"
                  src={activeTabData?.img}
                  alt="Service Illustration"
                />
                {activeTab === "Strategy" ? (
                  <>
                    <div className="absolute right-16 md:right-40 bottom-[380px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">
                        Expert
                      </span>
                      <span>Insights</span>
                    </div>
                    <div className="absolute left-16 md:-left-8 bottom-[345px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">
                        Optimize
                      </span>{" "}
                      Touchpoints
                    </div>
                    <div className="absolute bottom-32 right-0 md:right-[300px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">
                        Scalable
                      </span>{" "}
                      Roadmap
                    </div>
                  </>
                ) : activeTab === "Sales" ? (
                  <>
                    <div className="absolute right-16 md:right-[-10px] bottom-[380px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">
                        Expert
                      </span>
                      <span>Support</span>
                    </div>
                    <div className="absolute left-16 md:-left-8 bottom-[315px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">AI</span>{" "}
                      Automation
                    </div>
                    <div className="absolute bottom-28 right-0 md:right-[230px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">Lead</span>{" "}
                      Engagement
                    </div>
                  </>
                ) : activeTab === "Data" ? (
                  <>
                    <div className="absolute right-16 md:right-5 bottom-[390px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">
                      Lead
                      </span>
                      <span>Management</span>
                    </div>
                    <div className="absolute left-16 md:-left-16 bottom-[335px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">
                        Data
                      </span>{" "}
                      Intelligence
                    </div>
                    <div className="absolute bottom-44 right-0 md:right-[235px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">
                        CRM
                      </span>{" "}
                      Solutions
                    </div>
                  </>
                ) : activeTab === "Content" ? (
                  <>
                    <div className="absolute right-16 md:right-[-20px] bottom-[320px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">
                        Expert
                      </span>
                      <span>Website Design</span>
                    </div>
                    <div className="absolute left-16 md:left-2 bottom-[360px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">
Social                      </span>{" "}
                      Content
                    </div>
                    <div className="absolute bottom-[150px] right-0 md:right-[150px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">
                        High-Conversation
                      </span>{" "}
                      Landing Pages
                    </div>
                  </>
                ) : activeTab === "Automation" ? (
                  <>
                    <div className="absolute right-16 md:right-60 bottom-[400px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">
                        AI
                      </span>
                      <span>Technologies</span>
                    </div>
                    <div className="absolute right-16 md:right-[-20px] bottom-[315px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">
                        Compaign
                      </span>{" "}
                      Automations
                    </div>
                    <div className="absolute bottom-52 right-0 md:right-[340px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                      <span className="text-blueclr font-bold mr-1">
                        Proprietary
                      </span>{" "}
                      Solutions
                    </div>
                  </>
                ) : ( // SEO/Ads
                  <>
                  <div className="absolute left-16 md:left-[-20px] top-[60px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">
                      On-Page
                    </span>
                    <span>SEO</span>
                  </div>
                  <div className="absolute right-16 md:right-[-10px] bottom-[395px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">
                      PPC
                    </span>{" "}
                    Management
                  </div>
                  <div className="absolute bottom-40 right-0 md:right-[350px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">
                      Link
                    </span>{" "}
                    Building
                  </div>
                </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}