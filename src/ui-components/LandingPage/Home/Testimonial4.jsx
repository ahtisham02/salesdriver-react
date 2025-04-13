import React from "react";
import { ArrowRight } from "lucide-react";
import img1 from "../../../assets/Rectangle 35.png";
import img2 from "../../../assets/Rectangle 35 (1).png";
import img3 from "../../../assets/Rectangle 35 (2).png";
import img4 from "../../../assets/Rectangle 35 (3).png";
import img5 from "../../../assets/Rectangle 35 (4).png";
import img6 from "../../../assets/Rectangle 35 (5).png";
import vector from "../../../assets/Group.png";
import RightArrow from "../../../assets/Path.png";
import HeadImg from "../../../assets/69c37d04d3feadc39b5681a70e9d7638.png";
import vector23 from "../../../assets/vector23.png";
import { useNavigate } from "react-router-dom";

const solutions = [
  {
    title: "Virtual Sales Reps",
    logo: "MeetNow Agency",
    logoImg: img2,
    path: "https://meetnow.agency/",
    description:
      "Virtual sales reps that handle outreach, book meetings, and close deals, reducing overhead and scaling sales difficulty.",
    points: [
      "Lower costs compared to hiring in-house sales reps",
      "Consistent pipeline of qualified meetings",
      "Scalable solution to grow without extra overhead",
    ],
  },
  {
    title: "Web Solution",
    logo: "Web Point Digital",
    logoImg: img4,
    path: "https://info.sepmarketingservices.com/home",
    description:
      "High-converting websites built to attract, engage, and convert customers, ensuring businesses stand out online",
    points: [
      "Custom website design optimized for conversions",
      "Seamless user experience to improve engagement",
      "Scalable web solutions tailored to business growth",
    ],
  },
  {
    title: "Social Selling",
    logo: "SEP Marketing Services",
    logoImg: img1,
    path: "https://companycmarketing.com/home",
    description:
      "AI-powered social selling that connects businesses with the right prospects and turns social media into a sales engine.",
    points: [
      "Automated outreach to target ideal customers",
      "AI-driven engagement to increase response rates",
      "More leads generated through LinkedIn and other platforms",
    ],
  },
  {
    title: "Lead Generation",
    logo: "B2B Marketing.biz",
    logoImg: img5,
    path: "https://webpointdigital.com/home",
    description:
      "Automated B2B lead generation that delivers high-quality, sales-ready prospects straight to your pipeline.",
    points: [
      "Consistent stream of qualified B2B leads",
      "AI-powered automation to reduce manual prospecting",
      "Faster deal closures with pre-qualified opportunities",
    ],
  },
  {
    title: "Web Design",
    logo: "CompanyC Creative",
    logoImg: img3,
    path: "https://info.b2bmarketing.biz/home",
    description:
      "Conversion focused web design that enhances user experience and drives measurable business growth.",
    points: [
      "Strategically designed websites for higher conversions",
      "Optimized layouts to enhance user experience",
      "Data-driven approach to maximize online sales",
    ],
  },
  {
    title: "Custom Solutions",
    logo: "Icon Devs",
    logoImg: img6,
    path: "https://icondevs.com/home",
    description:
      "Custom software solutions built to streamline operations, improve efficiency, and support business growth.",
    points: [
      "Custom software to fit specific business needs",
      "Automation to eliminate inefficiencies and manual work",
      "Scalable solutions that grow with your company",
    ],
  },
];

export default function SolutionsSection() {
  const navigate = useNavigate();
  return (
    <div className="pt-10 relative pb-20 min-h-screen">
      <div className="px-8 absolute inset-0 w-full h-full">
        <img
          src={HeadImg}
          alt="Header Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-75"></div>
      </div>
      <div className="relative z-10">
        <div className="flex px-8 justify-between items-center mb-8">
          <div>
            <p className="inline-block hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
              OUR PARTNER SOLUTIONS
            </p>
            <h1 className="text-3xl md:text-5xl hover:scale-[1.03] transition-all duration-300 font-extrabold text-blue-900 mt-2">
              Comprehensive Solutions
            </h1>
            <p className="text-lg font-medium text-gray-600 mt-2">
              Built for the most common issues.
            </p>
          </div>
          <button
            onClick={() => navigate("/solutions")}
            className="text-blueclr mt-6 text-base sm:text-lg flex items-center font-medium group relative"
          >
            <span className="relative z-10 group-hover:translate-y-[-2px] transition-all">
              View All{" "}
            </span>
            <ArrowRight
              className="ml-2 relative z-10 group-hover:translate-y-[-2px] transition-all"
              size={20}
            />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blueclr transition-all group-hover:w-full"></span>
          </button>
        </div>
        <img
          src={vector}
          alt="Glow"
          className="absolute lg:block hidden -top-10 right-0 w-96 h-96 opacity-75"
        />
        <img
          src={vector23}
          alt="Glow"
          className="absolute bottom-0 left-0 w-96 h-96 opacity-55"
        />
        <div className="grid grid-cols-1 px-8 md:grid-cols-3 z-10 relative gap-6 md:gap-12">
          {solutions.map((solution, index) => (
            <a
              key={index}
              href={solution.path}
              // target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 md:p-8 shadow-md flex flex-col space-y-4 hover:shadow-lg transition-all duration-300 group hover:bg-[#ECF7FD] h-full"
            >
              <h2 className="text-[23px] md:text-3xl font-extrabold text-[#005895] hover:pb-2 group-hover:border-blue-200">
                {solution.title}
              </h2>
              <div className="group-hover:max-h-[500px] max-h-0 overflow-hidden transition-all duration-500 ease-in-out pt-0 group-hover:pt-4">
                <p className="text-gray-700 mb-3">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 mt-3">
                  <img
                    src={solution.logoImg}
                    alt={solution.logo}
                    className={`${
                      index === 4
                        ? "md:w-60 w-52"
                        : index < 5
                        ? "md:w-48 w-40"
                        : "md:w-40 w-32"
                    } object-contain`}
                  />
                </div>
                <img
                  src={RightArrow}
                  alt="Header Background"
                  className="md:w-6 md:h-6 w-5 h-5 object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
