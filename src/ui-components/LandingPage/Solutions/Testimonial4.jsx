import React from "react";
import {
  Briefcase,
  Globe,
  Users,
  Target,
  Layout,
  Code,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const solutions = [
  {
    title: "Virtual Sales Reps",
    agency: "MeetBox Agency",
    description:
      "Virtual sales reps that handle outreach, book meetings, and close deals, reducing overhead and scaling sales effortlessly.",
    points: [
      "Lower costs compared to hiring in-house sales reps",
      "Consistent pipeline of qualified meetings",
      "Scalable solution to grow without extra overhead",
    ],
    icon: Briefcase,
  },
  {
    title: "Web Solution",
    agency: "WebFront Digital",
    description:
      "High-converting websites built to attract, engage, and convert customers, ensuring businesses stand out online.",
    points: [
      "Custom website design optimized for conversions",
      "Seamless user experience to improve engagement",
      "Scalable web solutions tailored to business growth",
    ],
    icon: Globe,
  },
  {
    title: "Social Selling",
    agency: "SEP Marketing Services",
    description:
      "AI-powered social selling that connects businesses with the right prospects and turns social media into a sales engine.",
    points: [
      "Automated outreach to target ideal customers",
      "AI-driven engagement to increase response rates",
      "More leads generated through LinkedIn and other platforms",
    ],
    icon: Users,
  },
  {
    title: "Lead Generation",
    agency: "B2B Marketing Lab",
    description:
      "Automated B2B lead generation that delivers high-quality, sales-ready prospects straight to your pipeline.",
    points: [
      "Consistent stream of qualified B2B leads",
      "AI-powered automation to reduce manual prospecting",
      "Faster deal closures with pre-vetted opportunities",
    ],
    icon: Target,
  },
  {
    title: "Web Design",
    agency: "CompanyX Marketing",
    description:
      "Conversion-focused web design that enhances user experience and drives measurable business growth.",
    points: [
      "Strategically designed websites for higher conversions",
      "Optimized layouts to enhance user experience",
      "Data-driven approach to maximize online sales",
    ],
    icon: Layout,
  },
  {
    title: "Custom Software",
    agency: "SEP Marketing Services",
    description:
      "Custom software solutions built to streamline operations, improve efficiency, and support business growth.",
    points: [
      "Custom software to fit specific business needs",
      "Automation to eliminate inefficiencies and manual work",
      "Scalable solutions that grow with your company",
    ],
    icon: Code,
  },
];

const SolutionCard = ({ title, agency, description, points, icon: Icon }) => (
  <div className="bg-[#EAEBEB] p-6 rounded-lg shadow-md w-full flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <Icon className="text-gray-700 text-xl" />
      <h3 className="text-xl lg:text-2xl ml-1 font-bold">{title}</h3>
    </div>
    <p className="text-gray-800 font-semibold text-sm text-left">{agency}</p>
    <p className="text-gray-900 font-medium text-left">{description}</p>
    <ul className="list-disc text-left list-inside font-medium text-gray-800 text-sm">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    <button className="text-blue-500 mt-3 flex items-center sm:text-base text-[14px]">
      S BUTTON <ArrowRight className="ml-2" size={18} />
    </button>
    <h2 className="font-semibold flex items-center sm:text-base text-[14px]">
      SERVICE CATEGORY <ChevronDown className="ml-2" size={20} />
    </h2>
    <div className="flex gap-2 flex-wrap mt-2 text-sm">
      <button className="px-3 py-1 text-gray-600">BUTTON</button>
      <button className="px-3 py-1 text-gray-600">BUTTON</button>
      <button className="px-3 py-1 text-gray-600">BUTTON</button>
      <button className="px-3 py-1 text-gray-600">BUTTON</button>
      <button className="px-3 py-1 text-gray-600">BUTTON</button>
      <button className="px-3 py-1 text-gray-600">BUTTON</button>
    </div>
  </div>
);

export default function ComprehensiveSolutions() {
  return (
    <section className="text-center py-10 lg:py-16">
      <p className="text-blue-500 font-bold text-[13px] mb-2">OUR SOLUTIONS</p>
      <h2 className="text-2xl lg:text-[53px] font-bold mb-6 lg:mb-16">
        Comprehensive Solutions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {solutions.map((solution, index) => (
          <SolutionCard key={index} {...solution} />
        ))}
      </div>
    </section>
  );
}
