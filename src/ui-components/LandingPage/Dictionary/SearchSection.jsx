import { Search } from "lucide-react";
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

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8 min-h-screen">
      <div className="text-center space-y-4 pt-12 p-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-blueclr">
          Defining Sales{" "}
        </h2>
        <p className="text-gray-600 !mt-7 text-lg">
          Sales can be complicated, but knowing the right terms and strategies
          makes it easier. This page gives you simple explanations of key sales
          concepts, automation tools, and best practices so you can improve your
          approach and close more deals.
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
                />
              </div>
              <div className="space-x-6">
                <button variant="ghost">Category</button>
                <button variant="ghost">Sort</button>
              </div>
            </div>
          </div>

          {filteredSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white py-10 px-8 sm:px-16 rounded-[40px]">
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-4">
                  <img src={section.img} className="h-8 w-8 text-gray-600" />
                  <h2 className="text-2xl lg:text-[34px] !ml-5 font-bold text-[#005895]">
                    {section.title}
                  </h2>
                </div>
              </div>

              <div className="space-y-4 mt-4">
                <p className="text-gray-600">{section.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-3"
                      onClick={() => toggleItem(itemIndex)}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-700">
                          {item.term}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
