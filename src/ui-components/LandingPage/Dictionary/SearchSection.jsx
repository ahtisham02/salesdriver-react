import { ChevronDown, ChevronUp, Search, X } from "lucide-react";
import { useState } from "react";
import img1 from "../../../assets/icon_sales 1.png";
import img2 from "../../../assets/icon_generation 1.png";
import img3 from "../../../assets/icon_data 1.png";
import img4 from "../../../assets/icon_content_1 1.png";
import img5 from "../../../assets/icon_automation_1 1.png";
import img6 from "../../../assets/icon_seo 1.png";
import img7 from "../../../assets/icon_support 1.png";

const sections = [
  {
    title: "Strategy & Sales Growth",
    img: img1,
    description:
      "Strategy and sales growth involve planning and actions that help a business attract customers, increase sales, and stay competitive. These key terms will help you understand how to achieve those goals.",
    items: [
      {
        term: "Customer Journey Mapping",
      },
      {
        term: "Sales Roadmap",
      },
      {
        term: "Go-to-Market (GTM) Strategy",
      },
      {
        term: "Market Positioning",
      },
      {
        term: "Value Proposition",
      },
      {
        term: "Competitive Analysis",
      },
      {
        term: "Omnichannel Strategy",
      },
      {
        term: "Revenue Forecasting",
      },
    ],
  },
  {
    title: "Sales & Lead Conversion",
    img: img2,
    description:
      "Sales and lead conversion focus on turning potential customers into actual buyers through effective strategies and processes. These key terms will help you understand how to improve sales success.",
    items: [
      {
        term: "Sales Pipeline",
      },
      {
        term: "Top-of-Funnel (TOFU) Leads",
      },
      {
        term: "Bottom-of-Funnel (BOFU) Leads",
      },
      {
        term: "Lead Nurturing",
      },
      {
        term: "Conversion Rate Optimization (CRO)",
      },
      {
        term: "Consultative Selling",
      },
      {
        term: "Objection Handling",
      },
      {
        term: "Sales Velocity",
      },
    ],
  },
  {
    title: "Data & CRM Management",
    img: img3,
    description:
      "Data and CRM management involve organizing customer information and using it to improve relationships, streamline sales, and drive business growth. These key terms will help you understand how to manage and use data effectively.",
    items: [
      {
        term: "CRM (Customer Relationship Management)",
      },
      {
        term: "Lead Scoring ",
      },
      {
        term: "Pipeline Management ",
      },
      {
        term: "Predictive Analytics ",
      },
      {
        term: "Data Appending ",
      },
      {
        term: "Customer Segmentation ",
      },
      {
        term: "Attribution Modeling ",
      },
    ],
  },
  {
    title: "Content & Brand Marketing",
    img: img4,
    description:
      "Content and brand marketing focus on creating valuable content and a strong brand identity to attract and retain customers. These key terms will help you understand how to build brand awareness and drive engagement.",
    items: [
      {
        term: "Storytelling in Sales ",
      },
      {
        term: "Thought Leadership ",
      },
      {
        term: "Brand Voice ",
      },
      {
        term: "Landing Page Optimization ",
      },
      {
        term: "Retargeting Ads ",
      },
      {
        term: "Demand Generation ",
      },
      {
        term: "Evergreen Content ",
      },
      {
        term: "Social Proof ",
      },
    ],
  },
  {
    title: "Automation & AI-Driven Sales",
    img: img5,
    description:
      "Automation and AI-driven sales use technology to streamline processes, enhance customer interactions, and boost sales efficiency. These key terms will help you understand how to leverage automation and AI for growth.",
    items: [
      {
        term: "Sales Automation",
      },
      {
        term: "AI Chatbots",
      },
      {
        term: "Email Sequences",
      },
      {
        term: "AI Personalization ",
      },
      {
        term: "Workflow Automation ",
      },
      {
        term: "Intent Data ",
      },
      {
        term: "Predictive Lead Scoring ",
      },
    ],
  },
  {
    title: "SEO & Digital Advertising",
    img: img6,
    description:
      "SEO and digital advertising help businesses increase online visibility, attract the right audience, and drive conversions. These key terms will help you understand how to optimize search rankings and run effective ads.",
    items: [
      {
        term: "Organic vs. Paid Traffic ",
      },
      {
        term: "Search Engine Optimization (SEO) ",
      },
      {
        term: "Click-Through Rate (CTR) ",
      },
      {
        term: "Pay-Per-Click (PPC) ",
      },
      {
        term: "Conversion Tracking ",
      },
      {
        term: "Retargeting & Remarketing ",
      },
      {
        term: "Ad Relevance Score ",
      },
    ],
  },
  {
    title: "Extra Sales Team Support",
    img: img7,
    description:
      "Extra sales team support provides additional resources, tools, and strategies to help sales teams perform better and close more deals. These key terms will help you understand how to strengthen sales efforts.",
    items: [
      {
        term: "Outsourced Sales Teams ",
      },
      {
        term: "Appointment Setting  ",
      },
      {
        term: "Live Sales Reps  ",
      },
      {
        term: "Commission-Based Sales Reps  ",
      },
      {
        term: "Sales Performance Tracking ",
      },
      {
        term: "Lead Handoff ",
      },
    ],
  },
];

const termDescriptions = {
  "Customer Journey Mapping":
    "Visualizing a prospect's path from awareness to conversion to identify key touchpoints and opportunities for engagement.",
  "Sales Roadmap":
    "A strategic plan outlining the steps and milestones needed to achieve sales goals over a specific timeframe.",
  "Go-to-Market (GTM) Strategy":
    "A comprehensive plan for launching a product or service, including target audience, marketing channels, and sales approaches.",
  "Market Positioning":
    "How a brand differentiates itself from competitors in the minds of customers.",
  "Value Proposition":
    "The unique benefits and value that a product or service offers to customers.",
  "Competitive Analysis":
    "The process of identifying and evaluating competitors' strengths and weaknesses to improve your market position.",
  "Omnichannel Strategy":
    "An approach that provides a seamless customer experience across all channels and touchpoints.",
  "Revenue Forecasting":
    "The process of predicting future revenue based on historical data, market trends, and sales pipelines.",
  "Sales Pipeline":
    "A visual representation of where prospects are in the sales process, from initial contact to closed deal.",
  "Top-of-Funnel (TOFU) Leads":
    "Prospects in the early awareness stage who are just discovering your product or service.",
  "Bottom-of-Funnel (BOFU) Leads":
    "Prospects who are ready to make a purchase decision and need final convincing.",
  "Lead Nurturing":
    "The process of building relationships with potential customers at every stage of the sales funnel.",
  "Conversion Rate Optimization (CRO)":
    "The practice of increasing the percentage of visitors who complete a desired action.",
  "Consultative Selling":
    "A sales approach focused on understanding customer needs and providing tailored solutions.",
  "Objection Handling":
    "The process of addressing and overcoming customer concerns during the sales process.",
  "Sales Velocity":
    "A metric that measures how quickly deals move through the pipeline and generate revenue.",
  "CRM (Customer Relationship Management)":
    "A system for managing interactions with current and potential customers.",
  "Lead Scoring":
    "A methodology for ranking prospects based on their perceived value to the organization.",
  "Pipeline Management":
    "The process of tracking and optimizing sales opportunities as they progress through stages.",
  "Predictive Analytics":
    "Using data, statistical algorithms, and machine learning to identify future outcomes.",
  "Data Appending":
    "The process of adding missing or updating existing data points in a database.",
  "Customer Segmentation":
    "Dividing customers into groups based on common characteristics for targeted marketing.",
  "Attribution Modeling":
    "The process of determining which marketing touchpoints contribute to sales or conversions.",
  "Storytelling in Sales":
    "Using narrative techniques to create emotional connections and communicate value.",
  "Thought Leadership":
    "Establishing expertise and authority in a particular field or industry.",
  "Brand Voice":
    "The distinct personality and style of a brand's communication across all channels.",
  "Landing Page Optimization":
    "Improving web pages to increase conversions from visitors to leads or customers.",
  "Retargeting Ads":
    "Showing ads to users who previously visited your website but didn't convert.",
  "Demand Generation":
    "Marketing efforts to create awareness and interest in a company's products or services.",
  "Evergreen Content":
    "Content that remains relevant and valuable to readers over a long period of time.",
  "Social Proof":
    "Evidence that others have purchased and been satisfied with a product or service.",
  "Sales Automation":
    "Using technology to automate repetitive sales tasks and improve efficiency.",
  "AI Chatbots":
    "Automated messaging systems that use artificial intelligence to simulate human conversation.",
  "Email Sequences":
    "A series of automated emails sent to leads or customers based on specific triggers.",
  "AI Personalization":
    "Using artificial intelligence to deliver tailored experiences to individual users.",
  "Workflow Automation":
    "The design and execution of automated processes to complete tasks without manual intervention.",
  "Intent Data":
    "Information about web users' behavior that indicates their likelihood to purchase.",
  "Predictive Lead Scoring":
    "Using machine learning to predict which leads are most likely to convert.",
  "Organic vs. Paid Traffic":
    "Visitors coming from unpaid search results versus paid advertisements.",
  "Search Engine Optimization (SEO)":
    "The practice of increasing website visibility in organic search results.",
  "Click-Through Rate (CTR)":
    "The percentage of people who click on a link out of the total who view it.",
  "Pay-Per-Click (PPC)":
    "An advertising model where advertisers pay each time a user clicks on their ad.",
  "Conversion Tracking":
    "Measuring the actions users take after interacting with an ad or website.",
  "Retargeting & Remarketing":
    "Showing ads to users who previously interacted with your website or app.",
  "Ad Relevance Score":
    "A metric that rates how relevant an ad is to the target audience.",
  "Outsourced Sales Teams":
    "Third-party organizations hired to handle sales functions for a company.",
  "Appointment Setting":
    "The process of scheduling meetings between sales reps and potential customers.",
  "Live Sales Reps":
    "Real human sales representatives who interact directly with customers.",
  "Commission-Based Sales Reps":
    "Sales professionals compensated primarily through commission on sales.",
  "Sales Performance Tracking":
    "Monitoring and analyzing sales team activities and results.",
  "Lead Handoff":
    "The process of transferring a qualified lead from marketing to sales teams.",
};

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedTerm, setSelectedTerm] = useState(null);

  const toggleSection = (sectionIndex) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleTermClick = (term) => {
    setSelectedTerm(term);
  };

  const closeModal = () => {
    setSelectedTerm(null);
  };

  return (
    <div className="bg-[#f7fcff]">
      <div className="max-w-7xl mx-auto space-y-8 min-h-screen relative">
        {selectedTerm && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeModal}
            ></div>
            <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
              <div className="bg-[#f7fcff] rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                  <h2 className="text-2xl font-bold text-[#005895] mb-4 pr-8">
                    {selectedTerm}
                  </h2>
                  <p className="text-gray-700">
                    {termDescriptions[selectedTerm] ||
                      "Description not available."}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="text-center space-y-4 pt-12 p-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-blueclr">
            Defining Sales{" "}
          </h2>
          <p className="text-gray-600 !mt-7 text-lg">
            Sales can be complicated, but knowing the right terms and strategies
            makes it easier. This page gives you simple explanations of key
            sales concepts, automation tools, and best practices so you can
            improve your approach and close more deals.
          </p>
          <p className="text-gray-600 mt-4 text-lg font-semibold">
            This guide helps you understand the sales process, use the right
            language, and sell with confidence.
          </p>
        </div>
        <div className="bg-[#f7fcff] p-4 sm:p-8">
          <div className="bg-white rounded-[40px] shadow-lg">
            <div className="p-6 max-w-6xl mx-auto space-y-6">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center space-x-3">
                  <Search className="h-6 w-6 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="outline-none text-gray-700 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {filteredSections.length === 0 ? (
              <div className="text-center text-gray-500 py-12 text-xl font-semibold">
                No matches found.
              </div>
            ) : (
              filteredSections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="bg-white py-10 px-8 sm:px-16 rounded-[40px]"
                >
                  <div className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <img
                        src={section.img}
                        className="h-8 w-8 text-gray-600"
                      />
                      <h2 className="text-2xl lg:text-[34px] !ml-5 font-bold text-[#005895]">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-4 mt-4">
                    <p className="text-gray-600 transition-opacity duration-300 ease-out px-4">
                      {section.description}
                    </p>
                    <div className="sm:hidden flex items-center mb-4 px-2">
                      <button
                        onClick={() => toggleSection(sectionIndex)}
                        className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300"
                      >
                        <h3 className="text-lg font-semibold transition-colors duration-300">
                          SERVICE CATEGORY
                        </h3>
                        {expandedSections[sectionIndex] ? (
                          <ChevronUp className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]" />
                        ) : (
                          <ChevronDown className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]" />
                        )}
                      </button>
                    </div>
                    <div
                      className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 md:gap-1 sm:gap-4 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] overflow-hidden ${
                        expandedSections[sectionIndex] === false
                          ? "hidden sm:grid max-h-0 opacity-0 translate-y-[-10px] sm:max-h-none sm:opacity-100 sm:translate-y-0"
                          : "max-h-[2000px] opacity-100 translate-y-0"
                      }`}
                    >
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="p-3 transition-transform duration-500 ease-out hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <div className="flex items-center justify-between">
                            <button
                              className="py-3 px-6 rounded-lg text-[16px] font-medium border border-gray-300 backdrop-blur-lg bg-white/30 hover:bg-[#dbeafe] shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300 ease-in-out w-full hover:scale-105 active:scale-100 text-gray-800"
                              onClick={() => handleTermClick(item.term)}
                            >
                              {item.term}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
