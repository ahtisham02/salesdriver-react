import {
  Search,
  Layers,
  Users,
  Activity,
  BarChart,
  Settings,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const sections = [
  {
    title: "Strategy & Sales Growth",
    description:
      "Strategy and sales growth involve planning and actions that help a business attract customers, increase sales, and stay competitive.",
    items: [
      {
        term: "Customer Journey Mapping",
        description:
          "Visualizing a prospect’s path from awareness to conversion.",
      },
      {
        term: "Sales Roadmap",
        description:
          "A structured, data-driven plan for predictable sales growth.",
      },
      {
        term: "Go-to-Market (GTM) Strategy",
        description:
          "A plan outlining how a company will sell its product or service to customers.",
      },
      {
        term: "Market Positioning",
        description:
          "Defining how an agency differentiates itself from competitors.",
      },
      {
        term: "Value Proposition",
        description:
          "A clear statement explaining why a client should choose your services.",
      },
      {
        term: "Competitive Analysis",
        description:
          "Researching and analyzing competitors to improve strategy.",
      },
      {
        term: "Omnichannel Strategy",
        description:
          "A unified approach across multiple channels (email, social, web) to ensure seamless engagement.",
      },
      {
        term: "Revenue Forecasting",
        description: "Predicting future sales based on past data and trends.",
      },
    ],
    icon: TrendingUp,
  },
  {
    title: "Sales & Lead Conversion",
    description:
      "Sales and lead conversion focus on turning potential customers into actual buyers through effective strategies and processes.",
    items: [
      {
        term: "Sales Pipeline",
        description:
          "The structured process of converting prospects into paying clients.",
      },
      {
        term: "Top-of-Funnel (TOFU) Leads",
        description: "Prospects at the awareness stage of the buyer’s journey.",
      },
      {
        term: "Bottom-of-Funnel (BOFU) Leads",
        description: "Prospects ready to make a purchase decision.",
      },
      {
        term: "Lead Nurturing",
        description: "Engaging leads over time through targeted communication.",
      },
      {
        term: "Conversion Rate Optimization (CRO)",
        description:
          "Strategies to increase the percentage of leads that convert into sales.",
      },
      {
        term: "Consultative Selling",
        description:
          "A method that focuses on problem-solving rather than direct selling.",
      },
      {
        term: "Objection Handling",
        description: "Overcoming a prospect’s concerns to move a deal forward.",
      },
      {
        term: "Sales Velocity",
        description:
          "The speed at which deals move through the pipeline to closing.",
      },
    ],
    icon: Users,
  },
  // Add other sections similarly...
];

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
    setExpandedItem(null); // Collapse any expanded item when section is toggled
  };

  const toggleItem = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-gray-50 min-h-screen">
      <div className="text-center space-y-4 pt-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
          Sales & Strategy Guide
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Explore key terms and concepts to grow your business, improve sales,
          and streamline operations. Use the search bar to find specific terms.
        </p>
      </div>

      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center space-x-3 flex-1 bg-white p-3 rounded-lg shadow-sm">
          <Search className="h-6 w-6 text-gray-500" />
          <input
            type="text"
            placeholder="Search for categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="outline-none text-gray-700 w-full bg-transparent placeholder-gray-400"
          />
        </div>
      </div>

      {filteredSections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="border border-gray-200 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection(sectionIndex)}
          >
            <div className="flex items-center space-x-4">
              <section.icon className="h-8 w-8 text-gray-600" />
              <h2 className="text-2xl font-bold text-[#00263A]">
                {section.title}
              </h2>
            </div>
            <div className="text-gray-600">
              {expandedSection === sectionIndex ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </div>
          </div>

          {expandedSection === sectionIndex && (
            <div className="space-y-4 mt-4">
              <p className="text-gray-600">{section.description}</p>
              <div className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 cursor-pointer"
                    onClick={() => toggleItem(itemIndex)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-700">
                        {item.term}
                      </h3>
                      <div className="text-gray-600">
                        {expandedItem === itemIndex ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </div>
                    </div>
                    {expandedItem === itemIndex && (
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
