import {
  Search,
  Layers,
  Users,
  Activity,
  BarChart,
  Settings,
  TrendingUp,
} from "lucide-react";

const sections = [
  {
    title: "Strategy & Sales Growth",
    description:
      "Strategy and sales growth involve planning and actions that help a business attract customers, increase sales, and stay competitive. These key terms will help you understand how to achieve those goals.",
    items: [
      "Customer Journey Mapping",
      "Sales Roadmap",
      "Go-to-Market (GTM) Strategy",
      "Market Positioning",
      "Value Proposition",
      "Competitive Analysis",
      "Omnichannel Strategy",
      "Revenue Forecasting",
    ],
    icon: TrendingUp,
  },
  {
    title: "Sales & Lead Generation",
    description:
      "Category description. Category description. Category description. Category description. Category description. Category description. Category description.",
    items: Array(8).fill("Word Here"),
    icon: Users,
  },
  {
    title: "Data & CRM Management",
    description:
      "Category description. Category description. Category description. Category description. Category description. Category description.",
    items: Array(8).fill("Word Here"),
    icon: BarChart,
  },
  {
    title: "Content & Brand Marketing",
    description:
      "Category description. Category description. Category description. Category description. Category description. Category description. Category description. Category description. Category description.",
    items: Array(8).fill("Word Here"),
    icon: Layers,
  },
  {
    title: "Automation & AI-Driven Sales",
    description:
      "Category description. Category description. Category description. Category description. Category description. Category description. Category description. Category description. Category description.",
    items: Array(8).fill("Word Here"),
    icon: Activity,
  },
  {
    title: "SEO & Digital Advertising",
    description:
      "Category description. Category description. Category description. Category description. Category description. Category description. Category description. Category description. Category description.",
    items: Array(8).fill("Word Here"),
    icon: Search,
  },
  {
    title: "Operations & Workflow Automation",
    description:
      "Category description. Category description. Category description. Category description. Category description. Category description. Category description. Category description. Category description.",
    items: Array(8).fill("Word Here"),
    icon: Settings,
  },
];

export default function SearchSection() {
  return (
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

      {sections.map((section, index) => (
        <div
          key={index}
          className="border-[1.5px] border-blueclr p-8 lg:px-10 lg:pt-14 lg:pb-24 rounded-lg space-y-6"
        >
          <div className="flex items-center space-x-4">
            <section.icon className="h-10 w-10 text-gray-600" />
            <h2 className="text-3xl lg:text-4xl lg:font-black pl-2 font-bold text-[#00263A]">
              {section.title}
            </h2>
          </div>
          <p className="text-gray-600 py-4">{section.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-gray-700">
            {section.items.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
