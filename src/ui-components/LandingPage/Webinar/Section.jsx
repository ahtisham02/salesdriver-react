import { Search, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
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
];

const caseStudies = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Case Study ${i + 1}`,
  author: "Jane Smith",
  date: new Date(2022, 2, i + 1).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
  label: i < 4 ? "Case Study" : i < 8 ? "Research Paper" : "White Paper",
  description: "Another example of a case study description.",
}));

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState("Marketing");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState(null);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 9;
  
  const filteredAndSortedCaseStudies = [...caseStudies]
    .filter(study => {
      if (!searchTerm.trim()) return true;
      return study.label.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      if (!sortOption) return 0;
      
      switch(sortOption) {
        case 'A-Z':
          return a.title.localeCompare(b.title);
        case 'Z-A':
          return b.title.localeCompare(a.title);
        case 'New-Old':
          return new Date(b.date) - new Date(a.date);
        case 'Old-New':
          return new Date(a.date) - new Date(b.date);
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredAndSortedCaseStudies.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const visibleItems = filteredAndSortedCaseStudies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleSortDropdown = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleSortOptionClick = (option) => {
    setSortOption(option);
    setIsSortOpen(false);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#f7fcff] sm:p-8 p-4">
      <div className="bg-white rounded-[40px] shadow-lg">
        <div className="p-6 max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center space-x-3">
              <Search className="h-6 w-6 text-gray-500" />
              <input
                type="text"
                placeholder="Search by label"
                className="outline-none text-gray-700 w-full"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex space-x-6 relative">
              <div className="relative">
                <button 
                  onClick={toggleSortDropdown}
                  className="flex items-center space-x-1"
                >
                  <span>Sort</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {isSortOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                    <div className="py-1">
                      <button
                        onClick={() => handleSortOptionClick('A-Z')}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortOption === 'A-Z' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        A-Z
                      </button>
                      <button
                        onClick={() => handleSortOptionClick('Z-A')}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortOption === 'Z-A' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        Z-A
                      </button>
                      <button
                        onClick={() => handleSortOptionClick('New-Old')}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortOption === 'New-Old' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        New-Old
                      </button>
                      <button
                        onClick={() => handleSortOptionClick('Old-New')}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortOption === 'Old-New' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        Old-New
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-6">
          <div className="inline-flex bg-slate-50 p-1.5 rounded-full">
            {tabs.map(({ name }, index) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === name
                    ? "bg-[#00A7E2] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="text-center py-2">
          <h1 className="text-[23px] px-2.5 md:text-3xl font-bold text-[#005895]">
            The latest innovations in sales and marketing.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 mx-2">
          {visibleItems.length > 0 ? (
            visibleItems.map(
              ({ id, title, author, date, label, description }) => (
                <div
                  key={id}
                  className="border rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-52 lg:h-56 object-cover"
                  />
                  <div className="px-4 py-6">
                    <p className="text-gray-500 text-sm">
                      {author} • {date}
                    </p>
                    <h2 className="text-lg text-[#00263A] font-semibold mt-1">{label}</h2>
                    <p className="text-gray-700 mt-1">{description}</p>
                  </div>
                </div>
              )
            )
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No results found for your search.</p>
            </div>
          )}
        </div>
        {visibleItems.length > 0 && (
          <div className="flex justify-center items-center space-x-2 my-6 pb-8 pt-2">
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
        )}
      </div>
    </div>
  );
}