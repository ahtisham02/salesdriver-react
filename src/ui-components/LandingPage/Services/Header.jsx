import React, { useState } from "react";
import HeadImg from "../../../assets/Group1000001040.png";
import { useLocation } from "react-router-dom";

const tabs = [
  "Strategy",
  "Sales",
  "Data",
  "Content",
  "Automation",
  "SEO/Ads",
  "Support",
];

const tabData = {
  Strategy: [
    {
      title: "Project Manager",
      description:
        "A dedicated professional to oversee your campaign success and ensure smooth project execution.",
      points: [
        "Keeps your campaigns organized and on track.",
        "Provides expert guidance for smooth execution.",
      ],
    },
    {
      title: "Sales Acquisition Strategy",
      description:
        "A custom strategy to identify and acquire high-value clients.",
      points: [
        "Helps identify high-value prospects.",
        "Creates a custom plan for effective outreach.",
      ],
    },
    {
      title: "Customer Journey",
      description:
        "Mapping out the entire customer experience to enhance engagement and conversion.",
      points: [
        "Improves customer experience with strategic touchpoints.",
        "Identifies gaps in the conversion process.",
      ],
    },
    {
      title: "Mapping/Tracking",
      description:
        "Advanced tracking to measure and optimize each stage of the sales funnel.",
      points: [
        "Provides insights for data-driven decision-making.",
        "Measures marketing and sales success.",
      ],
    },
    {
      title: "Weekly Review Meeting",
      description:
        "Regular check-ins to evaluate performance and refine strategies.",
      points: [
        "Ensures continuous campaign improvement.",
        "Keeps you updated with progress reports.",
      ],
    },
  ],
  Sales: [
    {
      title: "Sales Support",
      description:
        "A dedicated team to assist in prospecting, outreach, and follow-ups.",
      points: [
        "Provides expert guidance to improve conversion rates.",
        "Helps close deals faster with structured follow-ups.",
      ],
    },
    {
      title: "Top of funnel SDR",
      description:
        "Specialized sales representatives to generate and qualify leads at the start of the funnel.",
      points: [
        "Identifies and nurtures new leads effectively.",
        "Ensures high-quality prospects enter your pipeline.",
      ],
    },
    {
      title: "AI Sales Chatbot",
      description:
        "AI-powered chatbots to automate lead interactions and pre-qualify prospects.",
      points: [
        "Engages prospects instantly and collects valuable data.",
        "Saves time by pre-qualifying leads.",
      ],
    },
    {
      title: "Live Reporting Dashboard",
      description:
        "Real-time analytics to track sales performance and conversion rates.",
      points: [
        "Gives real-time insights into sales performance.",
        "Allows for better decision-making based on analytics.",
      ],
    },
    {
      title: "Hot Lead Caller",
      description:
        "Dedicated professionals to connect with engaged prospects and close deals faster.",
      points: [
        "Ensures quick response times to engaged leads.",
        "Increases the likelihood of closing deals.",
      ],
    },
  ],
  Data: [
    {
      title: "60 Warmed Emails",
      description:
        "A network of domains and email accounts for high-volume outreach.",
      points: [
        "Expands email outreach while maintaining deliverability.",
        "Reduces the risk of emails being marked as spam.",
      ],
    },
    {
      title: "Lead Scoring",
      description:
        "Prioritizing leads based on engagement and likelihood to convert.",
      points: [
        "Prioritizes high-value prospects for better conversion.",
        "Saves time by focusing on engaged leads.",
      ],
    },
    {
      title: "4000 Appended Leads",
      description: "High-quality lead data enriched with intent signals.",
      points: [
        "Provides enriched data for targeted outreach.",
        "Improves campaign effectiveness with qualified leads.",
      ],
    },
    {
      title: "CRM",
      description:
        "A robust system to manage contacts, track interactions, and optimize sales workflows.",
      points: [
        "Organizes leads and sales processes efficiently.",
        "Helps track interactions for better relationship management.",
      ],
    },
  ],
  Content: [
    {
      title: "Landing Page Creation",
      description:
        "Conversion-focused landing pages designed to engage and capture leads.",
      points: [
        "Converts visitors into leads with engaging design.",
        "Optimized for mobile and desktop experiences.",
      ],
    },
    {
      title: "Content Marketing",
      description:
        "Strategic content development to position your brand as an industry leader.",
      points: [
        "Increases brand awareness and thought leadership.",
        "Helps attract inbound leads through valuable content.",
      ],
    },
    {
      title: "Social Media Management",
      description:
        "Full-service social media strategies to drive engagement and brand awareness.",
      points: [
        "Strengthens brand presence across social platforms.",
        "Keeps engagement high with consistent updates.",
      ],
    },
    {
      title: "Content Creation",
      description:
        "High-quality written, visual, and video content tailored to your audience.",
      points: [
        "Produces high-quality written and visual content.",
        "Supports brand storytelling and audience engagement.",
      ],
    },
  ],
  Automation: [
    {
      title: "AI-Driven Management",
      description: "Intelligent automation to optimize customer interactions.",
      points: [
        "Automates tasks to improve efficiency.",
        "Reduces manual effort in sales processes.",
      ],
    },
    {
      title: "Email Outreach",
      description:
        "Automated, high-volume email campaigns for consistent engagement.",
      points: [
        "Delivers consistent email follow-ups.",
        "Ensures a higher response rate.",
      ],
    },
    {
      title: "Campaign Automation",
      description:
        "Hands-free lead nurturing and follow-ups through AI-driven workflows.",
      points: [
        "Personalizes lead nurturing sequences.",
        "Saves time and increases conversions.",
      ],
    },
    {
      title: "Social Media Outreach",
      description: "Automated social media engagement to maximize brand reach.",
      points: [
        "Expands reach through automated engagement.",
        "Keeps your brand active and visible.",
      ],
    },
  ],
  "SEO/Ads": [
    {
      title: "On-page SEO",
      description:
        "Optimizing your website content to rank higher in search engines.",
      points: [
        "Optimizes website content to boost search rankings.",
        "Helps increase organic traffic.",
      ],
    },
    {
      title: "IP Tracking",
      description:
        "Identifying and analyzing website visitors for targeted outreach.",
      points: [
        "Identifies visitors for better targeting.",
        "Improves personalization efforts.",
      ],
    },
    {
      title: "Link Tracking",
      description:
        "Monitoring referral sources to optimize marketing channels.",
      points: [
        "Measures the effectiveness of referral sources.",
        "Helps refine marketing campaigns.",
      ],
    },
    {
      title: "Journey Tracking",
      description: "Understanding user behavior to improve conversion rates.",
      points: [
        "Understands user behavior for better conversion rates.",
        "Improves website performance based on analytics.",
      ],
    },
    {
      title: "Heat Map Tracking",
      description: "Visual insights on how users interact with your website.",
      points: [
        "Provides insights on how users interact with your site.",
        "Helps improve user experience and engagement.",
      ],
    },
    {
      title: "PPC Management",
      description:
        "Full-service pay-per-click campaign management for lead generation.",
      points: [
        "Optimizes paid ads for higher ROI.",
        "Ensures ad spend is used effectively.",
      ],
    },
    {
      title: "Backlinks package",
      description:
        "Authority-building link-building strategies to enhance search rankings.",
      points: [
        "Builds authority with high-quality backlinks.",
        "Improves domain credibility and SEO ranking.",
      ],
    },
  ],
  Support: [
    {
      title: "24/7 Live Sales Booking Rep",
      description:
        "Round-the-clock support to schedule meetings with potential clients.",
      points: [
        "Ensures round-the-clock sales engagement.",
        "Helps schedule meetings with interested prospects.",
      ],
    },
    {
      title: "3 Commissioned Sales Reps",
      description:
        "Trained sales professionals dedicated to closing deals for your business.",
      points: [
        "Focused on closing high-value deals.",
        "Increases revenue with skilled negotiations.",
      ],
    },
    {
      title: "Appointment Setter",
      description:
        "Dedicated specialists to qualify leads and set up meetings.",
      points: [
        "Schedules meetings with qualified leads.",
        "Streamlines the sales pipeline for efficiency.",
      ],
    },
  ],
};

export default function ExactUILayout() {
  const [expanded, setExpanded] = useState(0); // Default to the first item (index 0)

  const location = useLocation();
  const name = location.state?.name;
  const [activeTab, setActiveTab] = useState(name || tabs[0]);

  const features = tabData[activeTab] || [];

  React.useEffect(() => {
    setExpanded(0);
  }, [activeTab]);

  return (
    <div className="container relative mx-auto px-6 lg:px-14 pt-10 lg:pt-14 my-4">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HeadImg}
          alt="Header Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10">
        <div className="mb-8 text-center">
          <h1 className="lg:text-[58px] my-2 text-3xl font-extrabold text-[#00A7E2] tracking-wide">
            Helping you get more for your business
          </h1>
        </div>

        {/* Tabs */}
        <div className="mb-6 pb-3 overflow-x-auto scrollbar-hide">
          <div className="flex justify-center min-w-max space-x-4">
            {tabs.map((tabName) => (
              <button
                key={tabName}
                onClick={() => {
                  setActiveTab(tabName);
                }}
                className={`px-6 py-2 text-base sm:text-lg font-medium transition whitespace-nowrap ${
                  activeTab === tabName
                    ? "text-blueclr font-bold border-b-2 border-blueclr"
                    : "text-gray-600 border-b-2 border-transparent hover:border-gray-400"
                }`}
              >
                {tabName}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm max-w-3xl mx-auto text-center font-medium text-gray-700 mb-8">
          SalesDriver’s strategy services provide agencies with a structured,
          data-driven approach to acquiring new clients. Our experts analyze the
          customer journey, optimize touchpoints, and create a scalable sales
          roadmap that drives predictable growth.{" "}
        </p>

        <div className="relative flex flex-row items-start sm:space-x-3 w-full">
          <div className="flex-shrink-0 sm:hidden flex flex-col items-center justify-start pt-6 space-y-3 w-16">
            {Array.from({ length: features.length }).map((_, i) => (
              <div
                key={i}
                onClick={() => setExpanded(i === expanded ? null : i)}
                className={`w-[7px] rounded-full transition-all duration-300 cursor-pointer ${
                  expanded === i
                    ? "bg-gradient-to-b h-40 from-[#00AEEF] to-[#005895] shadow-md opacity-80"
                    : "bg-gray-300 h-16 opacity-50 hover:opacity-75"
                }`}
              />
            ))}
          </div>

          <div className="flex-grow flex sm:flex-row scrollbar-hide flex-col space-y-3 sm:space-y-0 sm:space-x-3 w-full overflow-y-auto sm:overflow-x-auto p-2 sm:p-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`pb-6 sm:pb-0 cursor-pointer transition-all duration-300 ease-in-out rounded-3xl w-[95%] sm:w-[130px] sm:h-[390px] flex flex-col flex-shrink-0 relative overflow-hidden ${
                  expanded === index
                    ? "min-h-[395px] sm:min-w-[500px] scale-[1.01] p-4 sm:p-6 shadow-lg items-start bg-[#D9EEFA]" // Expanded: Align items to start
                    : "bg-[#ECF7FD] hover:scale-[1.03] hover:bg-[#D9EEFA] hover:shadow-lg items-center sm:items-stretch" // Unexpanded: Center items on mobile, stretch on desktop
                }`}
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <span
                  className={`text-lg px-6 pt-6 font-bold text-gray-700 ${
                    expanded === index
                      ? "self-start mb-5" // Expanded: Align self to start
                      : "self-center sm:self-auto" // Unexpanded: Center self on mobile, auto (stretch/start) on desktop
                  }`}
                >
                  {`0${index + 1}`}
                </span>
                <h3
                  className={`text-lg px-6 font-bold transition-all duration-500 ease-in-out text-nowrap ${
                    // Base styles + nowrap
                    expanded === index
                      ? "rotate-0 md:text-3xl text-center md:text-left mt-2" // EXPANDED STATE: Horizontal, large text, specific alignment, margin
                      : "sm:rotate-90 text-center sm:mt-[65px] md:text-xl origin-center" // UNEXPANDED STATE: Rotated (on sm+), centered, pushed down, specific size, rotate around center
                  }`}
                >
                  {feature.title}
                </h3>
                {expanded === index && (
                  <div className="flex flex-col flex-grow mt-3 p-6 pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 ml-3 mt-4">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blueclr mr-2 text-lg font-bold">
                            •
                          </span>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://link.salesdriver.io/widget/booking/YLwxGlwqKM9noAp4HNIx"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute bottom-0 right-0 px-5 py-2.5 text-white text-xl font-semibold rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-[#005895] to-[#00A7E2] transition-all duration-300 ease-in-out hover:from-[#fbad18] hover:to-[#fbad18]"
                    >
                      Learn More
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="sm:block absolute hidden right-0 top-0 bottom-0 w-24 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
        </div>

        <div className="sm:flex relative hidden justify-center space-x-2 mt-8">
          {Array.from({ length: features.length }).map((_, i) => (
            <div
              key={i}
              onClick={() => setExpanded(i === expanded ? null : i)} // Allow clicking dots
              className={`h-[7px] rounded-full transition-all duration-300 cursor-pointer ${
                expanded === i
                  ? "w-32 sm:w-40 md:w-52 bg-gradient-to-r from-[#00AEEF] to-[#005895]"
                  : "w-12 sm:w-16 md:w-20 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
