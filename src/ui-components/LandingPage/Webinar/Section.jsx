import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import img from "../../../assets/h1.jpg";

const tabs = [
  { name: "Marketing" },
  { name: "SaaS and Tech" },
  { name: "Consulting" },
  { name: "B2B Agencies" },
  { name: "Real Estate" },
  { name: "HealthCare" },
  { name: "Industrial" },
  { name: "Category" },
];

const caseStudies = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Case Study ${i + 1}`,
  author: "Jane Smith",
  date: "10 Mar 2022",
  label: "Case Study",
  description: "Another example of a case study description.",
}));

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState("Marketing");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const visibleItems = caseStudies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
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
      <div className="my-6 pb-3 overflow-x-auto scrollbar-hide">
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
      <div className="text-center py-2">
        <h1 className="text-3xl font-bold text-[#00263A]">
          The latest innovations in sales and marketing.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 mx-2">
        {visibleItems.map(({ id, title, author, date, label, description }) => (
          <div key={id} className="border rounded-lg shadow-lg overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-52 lg:h-56 object-cover"
            />
            <div className="px-4 py-6">
              <p className="text-gray-500 text-sm">
                {author} • {date}
              </p>
              <h2 className="text-lg font-semibold mt-1">{label}</h2>
              <p className="text-gray-700 mt-1">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2 my-6">
        <button
          className="p-2 rounded border border-gray-300 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`px-3 py-1 rounded border ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "border-gray-300 text-gray-700"
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="p-2 rounded border border-gray-300 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="w-4 h-4 text-gray-700" />
        </button>
      </div>
    </>
  );
}