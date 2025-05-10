import React, { useState } from "react";
import img from "../../../assets/styled2.png";
import img1 from "../../../assets/Website_Media/Website_Media/illustrations/saastech-illustration_.png";
import img2 from "../../../assets/Website_Media/Website_Media/illustrations/consulting-illustration_.png";
import img3 from "../../../assets/Website_Media/Website_Media/illustrations/8ecb01d53d7ff291c6f13be8280b4bccb7422a05.png";
import img4 from "../../../assets/Website_Media/Website_Media/illustrations/realestate-illustration  copy.png";
import img5 from "../../../assets/Website_Media/Website_Media/illustrations/healthcare-illustration_.png";
import img6 from "../../../assets/Website_Media/Website_Media/illustrations/industrial-illustration.png";
// import vector from "../../../assets/Vector5.png";
import HeadImg from "../../../assets/69c37d04d3feadc39b5681a70e9d7638.png";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tabs = [
  {
    name: "MARKETING",
    headline: "Scalable Lead Generation, On-Demand",
    img: img,
    description: [
      "Generating a consistent flow of qualified leads is critical for B2B success.",
      "Our team provides scalable outbound prospecting to keep your pipeline full and your sales team closing.",
    ],
    button: "Learn More",
    services: [
      "Scalable Lead Generation",
      "Outbound & Account-Based Marketing",
      "Appointment Setting & Lead Nurturing",
      "CRM & Sales Funnel Optimization",
    ],
  },
  {
    name: "SAAS AND TECH",
    headline: "Automate Growth with Smarter Outreach",
    img: img1,
    description: [
      "Scaling a SaaS business requires consistent lead nurturing.",
      "Our team engages prospects, educates buyers, and converts leads using automated and personalized sales outreach.",
    ],
    button: "Learn More",
    services: [
      "Automated Lead Nurturing",
      "Sales Enablement Strategies",
      "Product Demo & Trial Conversions",
      "CRM & Pipeline Optimization",
    ],
  },
  {
    name: "CONSULTING",
    headline: "Close More High-Value Clients",
    img: img2,
    description: [
      "Consultants and professional service providers thrive on trust-based sales.",
      "Our virtual reps connect you with high-value prospects, positioning your expertise for maximum impact.",
    ],
    button: "Learn More",
    services: [
      "High-Value Client Acquisition",
      "Personalized Lead Outreach",
      "LinkedIn Networking & Engagement",
      "Appointment Setting",
    ],
  },
  {
    name: "B2B AGENCIES",
    headline: "More Clients, Less Prospecting",
    img: img3,
    description: [
      "Agencies need a steady pipeline of qualified leads to fuel growth.",
      "Our virtual sales reps handle lead generation and appointment setting, so your team can focus on strategy and execution.",
    ],
    button: "Learn More",
    services: [
      "B2B Lead Generation",
      "LinkedIn & Email Outreach",
      "CRM & Pipeline Management",
      "Appointment Setting",
    ],
  },
  {
    name: "REAL ESTATE",
    headline: "More Investors & Tenants, Greater Conversions",
    img: img4,
    description: [
      "Securing the right investors and tenants takes targeted, relationship-driven sales.",
      "Our outreach team engages, qualifies, and nurtures leads, delivering warm prospects to your sales pipeline.",
    ],
    button: "Learn More",
    services: [
      "Investor Lead Generation",
      "Tenant & Buyer Prospecting",
      "CRM & Relationship Management",
      "Appointment Scheduling",
    ],
  },
  {
    name: "HEALTHCARE",
    headline: "Build Trust, Grow Patient & Provider Networks",
    img: img5,
    description: [
      "Healthcare sales require credibility and trust.",
      "Our team specializes in outreach strategies that connect providers, patients, and decision-makers with high-value solutions.",
    ],
    button: "Learn More",
    services: [
      "Healthcare Industry Lead Generation",
      "Trust-Based Sales Outreach",
      "Patient & Provider Engagement",
      "Appointment Coordination",
    ],
  },
  {
    name: "INDUSTRIAL",
    headline: "Manage Complex Sales Cycles with Precision",
    img: img6,
    description: [
      "Selling high-value industrial solutions involves multiple decision-makers and long sales cycles.",
      "Our reps streamline outreach, qualify leads, and guide prospects through every stage.",
    ],
    button: "Learn More",
    services: [
      "Complex Sales Cycle Management",
      "B2B Industrial Lead Generation",
      "Relationship-Based Prospecting",
      "CRM & Pipeline Optimization",
    ],
  },
];

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  const activeTabData = tabs.find((tab) => tab.name === activeTab);

  return (
    <div className="relative mx-auto py-16 text-center">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HeadImg}
          alt="Header Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-75"></div>
      </div>
      <div className="relative z-10">
        <p className="inline-block uppercase hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
          15+ Industries Served Worldwide{" "}
        </p>
        <h2 className="text-3xl transition-all duration-300 hover:-translate-y-[2px] md:text-5xl font-extrabold text-[#005895] mt-3 mb-6 lg:mb-8">
          For Industries
        </h2>

        <div className="mb-5">
          <div className="flex flex-wrap justify-center gap-y-2">
            {tabs.map(({ name }) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`px-4 py-2 uppercase text-base font-medium transition-all duration-300 border-b-2 ${
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

        <div className="relative flex flex-col w-full px-4 lg:px-8 overflow-hidden py-6 mx-auto">
          <div className="flex flex-col md:flex-row w-full rounded-xl p-2 md:p-6 z-10">
            <div className="md:w-1/2 px-8 py-10 text-left bg-white rounded-xl border border-gray-100">
              <h2 className="text-lg mb-2.5 font-medium leading-snug text-blueclr">
                {activeTabData.name}
              </h2>
              <h2 className="text-2xl md:text-4xl font-bold leading-snug text-[#005895]">
                {activeTabData.headline}
              </h2>
              {activeTabData.description.map((desc, index) => (
                <p
                  key={index}
                  className="text-gray-600 mt-2 text-base sm:text-lg"
                >
                  {desc}
                </p>
              ))}
              <button
                onClick={() => navigate("/services")}
                className="text-blueclr uppercase mt-6 text-base sm:text-lg flex items-center font-medium group relative"
              >
                <span className="relative z-10 group-hover:translate-y-[-2px] transition-all">
                  {activeTabData.button}{" "}
                </span>
                <ArrowRight
                  className="ml-2 relative z-10 group-hover:translate-y-[-2px] transition-all"
                  size={20}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blueclr transition-all group-hover:w-full"></span>
              </button>
              <div className="mt-10 w-full">
                <h2
                  className="text-xl font-semibold text-slate-800 flex items-center cursor-pointer"
                  onClick={handleToggle}
                >
                  SERVICE CATEGORY
                  {isOpen ? (
                    <ChevronUp className="ml-2" size={22} />
                  ) : (
                    <ChevronDown className="ml-2" size={22} />
                  )}
                </h2>
                <div
                  className={`overflow-hidden transition-all px-4 duration-500 ease-in-out mt-4 ${
                    isOpen ? "max-h-screen py-4" : "max-h-0"
                  }`}
                >
                  {" "}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
                    {activeTabData.services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => navigate("/services")}
                        className="py-3 px-1 text-[16px] text-left font-medium transition-all hover:text-[#00a7e2] w-full hover:scale-105 text-gray-800"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 mt-10 mb-1 md:mb-0 md:mt-0 flex items-center justify-center relative">
              <img
                src={activeTabData?.img}
                alt="Industry"
                className="max-w-full h-auto relative z-0"
              />
              {activeTab === "MARKETING" ? (
                <>
                  <div className="absolute right-20 md:right-52 bottom-[440px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">Expert</span>
                    <span>Insights</span>
                  </div>

                  <div className="absolute left-20 md:-left-14 bottom-[395px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">
                      Optimize
                    </span>{" "}
                    Touchpoints
                  </div>
                  <div className="absolute bottom-40 right-0 md:right-[360px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">
                      Scalable
                    </span>{" "}
                    Roadmap
                  </div>
                </>
              ) : activeTab === "SAAS AND TECH" ? (
                <>
                  <div className="absolute right-20 md:right-1 bottom-[470px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">
                      Personalized
                    </span>
                    <span>Sales</span>
                  </div>

                  <div className="absolute left-20 md:left-44 bottom-[395px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">Team</span>{" "}
                    Engagement
                  </div>
                  <div className="absolute bottom-40 left-0 md:left-[45px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">Lead</span>{" "}
                    Nurturing
                  </div>
                </>
              ) : activeTab === "CONSULTING" ? (
                <>
                  <div className="absolute right-20 md:right-52 bottom-[445px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-2xl px-4 py-3 text-sm md:text-base font-medium text-gray-700 sm:flex hidden flex-col items-center space-y-2">
                    <div className="text-center">
                      <span className="text-blueclr font-bold mr-1">
                        Virtual
                      </span>
                      <span>Sales Reps</span>
                    </div>
                    <button className="rounded-full px-4 py-2 text-base bg-[#00a7e2] text-white">
                      Learn More
                    </button>
                  </div>
                  <div className="absolute right-0 md:right-0 bottom-[360px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-2xl px-4 py-3 text-sm md:text-base font-medium text-gray-700 sm:flex hidden flex-col items-center space-y-2">
                    <div className="text-center">
                      <span className="text-blueclr font-bold mr-1">
                        Social
                      </span>
                      <span>Selling</span>
                    </div>
                    <button className="rounded-full px-4 py-2 text-base bg-[#00a7e2] text-white">
                      Learn More
                    </button>
                  </div>
                  <div className="absolute bottom-32 left-0 md:left-[5px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">
                      Increased
                    </span>{" "}
                    Credibility
                  </div>
                </>
              ) : activeTab === "B2B AGENCIES" ? (
                <>
                  <div className="absolute left-20 md:left-6 bottom-[110px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-2xl px-4 py-3 text-sm md:text-base font-medium text-gray-700 sm:flex hidden flex-col items-center space-y-2">
                    <div className="text-center">
                      <span className="text-blueclr font-bold mr-1">Lead</span>
                      <span>Generation</span>
                    </div>
                    <button className="rounded-full px-4 py-2 text-base bg-[#00a7e2] text-white">
                      Learn More
                    </button>
                  </div>
                  <div className="absolute right-20 md:right-60 top-[55px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-2xl px-4 py-3 text-sm md:text-base font-medium text-gray-700 sm:flex hidden flex-col items-center space-y-2">
                    <div className="text-center">
                      <span className="text-blueclr font-bold mr-1">
                        Virtual
                      </span>
                      <span>Sales Reps</span>
                    </div>
                    <button className="rounded-full px-4 py-2 text-base bg-[#00a7e2] text-white">
                      Learn More
                    </button>
                  </div>
                  <div className="absolute right-0 md:right-0 bottom-[400px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-2xl px-4 py-3 text-sm md:text-base font-medium text-gray-700 sm:flex hidden flex-col items-center space-y-2">
                    <div className="text-center">
                      <span className="text-blueclr font-bold mr-1">
                        Social
                      </span>
                      <span>Selling</span>
                    </div>
                    <button className="rounded-full px-4 py-2 text-base bg-[#00a7e2] text-white">
                      Learn More
                    </button>
                  </div>
                </>
              ) : activeTab === "REAL ESTATE" ? (
                <>
                  <div className="absolute right-20 md:right-52 top-[42px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">
                      Automated
                    </span>
                    <span>Outreach</span>
                  </div>

                  <div className="absolute right-0 md:right-0 top-[120px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-2xl px-4 py-3 text-sm md:text-base font-medium text-gray-700 sm:flex hidden flex-col items-center space-y-2">
                    <div className="text-center">
                      <span className="text-blueclr font-bold mr-1">
                        Social
                      </span>
                      <span>Selling</span>
                    </div>
                    <button className="rounded-full px-4 py-2 text-base bg-[#00a7e2] text-white">
                      Learn More
                    </button>
                  </div>
                  <div className="absolute left-20 md:left-6 top-[180px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-2xl px-4 py-3 text-sm md:text-base font-medium text-gray-700 sm:flex hidden flex-col items-center space-y-2">
                    <div className="text-center">
                      <span className="text-blueclr font-bold mr-1">Lead</span>
                      <span>Generation</span>
                    </div>
                    <button className="rounded-full px-4 py-2 text-base bg-[#00a7e2] text-white">
                      Learn More
                    </button>
                  </div>
                  <div className="absolute bottom-24 right-0 md:right-[410px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">Lead</span>{" "}
                    Management
                  </div>
                </>
              ) : activeTab === "HEALTHCARE" ? (
                <>
                  <div className="absolute right-20 md:-right-6 top-[130px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">
                      Targeted
                    </span>
                    <span>AI Solutions</span>
                  </div>

                  <div className="absolute left-20 md:-left-10 bottom-[355px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">
                      Optimized
                    </span>{" "}
                    CRM
                  </div>
                  <div className="absolute bottom-44 right-0 md:right-[310px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">
                      Personalized
                    </span>{" "}
                    Outreach
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute left-20 md:left-10 top-[210px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">
                      Simplified
                    </span>
                    <span>Sales</span>
                  </div>

                  <div className="absolute right-0 top-[105px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">
                      Targeted
                    </span>{" "}
                    Outreach
                  </div>
                  <div className="absolute bottom-48 right-0 md:right-[470px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1] shadow-lg rounded-full px-4 py-1.5 text-sm md:text-base font-medium text-gray-700 sm:flex hidden items-center">
                    <span className="text-blueclr font-bold mr-1">Lead</span>{" "}
                    Management
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
