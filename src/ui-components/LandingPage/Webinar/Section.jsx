import React, { useState, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import imgPlaceholder from "../../../assets/h1.jpg";

const stripHtml = (html) => {
  if (typeof window === "undefined" || !html) return "";
  try {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  } catch (e) {
    console.error("Error stripping HTML:", e);
    return html;
  }
};

export default function SearchSection() {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedTabs, setDisplayedTabs] = useState([{ name: "All" }]);
  const [activeTab, setActiveTab] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState(null);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 9;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://sales-driver-f29297.ingress-earth.ewp.live/wp-json/wp/v2/posts?_embed&per_page=50&exclude=913&categories_exclude=137"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const fetchedPosts = data
          .filter(post => 
            post.slug !== 'helloo-demo-blog' && 
            post.id !== 913 &&
            !post.categories.includes(137)
          )
          .map((post) => {
            const primaryCategoryArray = post._embedded?.["wp:term"]?.[0];
            const primaryCategoryName =
              primaryCategoryArray?.[0]?.name || "General";
            const excerptText = stripHtml(post.excerpt.rendered);

            return {
              id: post.id,
              slug: post.slug,
              title: post.title.rendered,
              author: post._embedded?.author?.[0]?.name || "Unknown Author",
              date: new Date(post.date),
              displayDate: new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }),
              category: primaryCategoryName,
              description:
                excerptText.substring(0, 120) +
                (excerptText.length > 120 ? "..." : ""),
              imageUrl:
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                imgPlaceholder,
            };
          });

        setAllPosts(fetchedPosts);

        const uniqueCategories = [
          "All",
          ...new Set(fetchedPosts.map((p) => p.category).filter(Boolean)),
        ];
        const newTabs = uniqueCategories.map((name) => ({ name }));
        setDisplayedTabs(newTabs);
        if (!uniqueCategories.includes(activeTab)) {
          setActiveTab("All");
        }
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredAndSortedPosts = [...allPosts]
    .filter((post) => {
      const isTabMatch = activeTab === "All" || post.category === activeTab;
      const isSearchMatch =
        !searchTerm.trim() ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase());
      return isTabMatch && isSearchMatch;
    })
    .sort((a, b) => {
      if (!sortOption) return 0;
      switch (sortOption) {
        case "A-Z":
          return a.title.localeCompare(b.title);
        case "Z-A":
          return b.title.localeCompare(a.title);
        case "New-Old":
          return b.date - a.date;
        case "Old-New":
          return a.date - b.date;
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredAndSortedPosts.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    } else if (currentPage < 1 && totalPages > 0) {
      setCurrentPage(1);
    } else if (totalPages === 0 && filteredAndSortedPosts.length === 0) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages, filteredAndSortedPosts.length]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const visibleItems = filteredAndSortedPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleSortDropdown = () => setIsSortOpen(!isSortOpen);

  const handleSortOptionClick = (option) => {
    setSortOption(option);
    setIsSortOpen(false);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setCurrentPage(1);
  };

  const handleCardClick = (postSlug) => {
    navigate(`/post/${postSlug}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] bg-[#f7fcff]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#00A7E2]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#f7fcff] sm:p-8 p-4 text-center">
        <div className="bg-white rounded-[40px] shadow-lg p-10">
          <h2 className="text-red-600 text-2xl font-semibold">
            Oops! Something went wrong.
          </h2>
          <p className="text-gray-600 mt-2">
            Failed to load blog posts. Please try again later.
          </p>
          <p className="text-sm text-gray-500 mt-4">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f7fcff] sm:p-8 p-4">
      <div className="bg-white rounded-[40px] shadow-xl">
        <div className="p-6 max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 pb-4 gap-4 sm:gap-0">
            <div className="flex items-center space-x-3 w-full sm:w-1/2 md:w-2/3">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title..."
                className="outline-none text-gray-700 w-full placeholder-gray-500"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex space-x-6 relative self-end sm:self-center">
              <div className="relative">
                <button
                  onClick={toggleSortDropdown}
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#00A7E2]"
                >
                  <span>
                    Sort by:{" "}
                    {sortOption ? sortOption.replace("-", " to ") : "Default"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isSortOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {isSortOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 border border-gray-200">
                    <div className="py-1">
                      {["New-Old", "Old-New", "A-Z", "Z-A"].map((option) => (
                        <button
                          key={option}
                          onClick={() => handleSortOptionClick(option)}
                          className={`block px-4 py-2 text-sm w-full text-left ${
                            sortOption === option
                              ? "bg-blue-50 text-[#00A7E2]"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {option.replace("-", " to ")}
                        </button>
                      ))}
                      <button
                        onClick={() => handleSortOptionClick(null)}
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          !sortOption
                            ? "bg-blue-50 text-[#00A7E2]"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Default (API Order)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {displayedTabs.length > 1 && (
          <div className="flex justify-center my-6 px-2 sm:px-4">
            <div className="inline-flex bg-slate-100 p-1.5 rounded-full overflow-x-auto scrollbar-hide max-w-full">
              {displayedTabs.map(({ name }) => (
                <button
                  key={name}
                  onClick={() => handleTabClick(name)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === name
                      ? "bg-[#00A7E2] text-white shadow-md"
                      : "text-gray-600 hover:text-[#007099] hover:bg-slate-200"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="text-center py-4">
          <h1 className="text-[23px] px-2.5 md:text-3xl font-bold text-[#005895]">
            The Latest Innovations & Insights
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 mx-auto max-w-7xl">
          {visibleItems.length > 0 ? (
            visibleItems.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1"
                onClick={() => handleCardClick(post.slug)}
              >
                <div className="w-full h-52 lg:h-56 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = imgPlaceholder;
                    }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-[#00A7E2] text-xs uppercase font-semibold tracking-wider mb-1">
                    {post.category}
                  </p>
                  <h2 className="text-lg text-[#00263A] font-semibold mt-1 group-hover:text-[#00A7E2] transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-xs mt-2">
                    By {post.author} • {post.displayDate}
                  </p>
                  <p className="text-gray-600 mt-3 text-sm flex-grow line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-auto pt-3">
                    <span className="text-[#00A7E2] font-semibold text-sm flex items-center">
                      Read More{" "}
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-xl">No posts found.</p>
              <p className="text-gray-400 mt-1">
                Try adjusting your search or filter.
              </p>
            </div>
          )}
        </div>

        {visibleItems.length > 0 && totalPages > 1 && (
          <div className="flex justify-center items-center space-x-1 sm:space-x-2 my-8 pb-8 pt-4">
            <button
              className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {(() => {
              const pageNumbers = [];
              const maxPagesToShow = 5;
              if (totalPages <= maxPagesToShow) {
                for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
              } else {
                pageNumbers.push(1);
                let start = Math.max(2, currentPage - 1);
                let end = Math.min(totalPages - 1, currentPage + 1);

                if (currentPage <= 3) {
                  start = 2;
                  end = Math.min(totalPages - 1, maxPagesToShow - 1);
                } else if (currentPage >= totalPages - 2) {
                  start = Math.max(2, totalPages - (maxPagesToShow - 2));
                  end = totalPages - 1;
                }

                if (start > 2) pageNumbers.push("...");
                for (let i = start; i <= end; i++) pageNumbers.push(i);
                if (end < totalPages - 1) pageNumbers.push("...");
                pageNumbers.push(totalPages);
              }
              return pageNumbers.map((page, index) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-2 py-1 text-gray-500"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    className={`px-3 py-1 rounded-md border text-sm font-medium ${
                      currentPage === page
                        ? "bg-[#00A7E2] text-white border-[#00A7E2]"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                )
              );
            })()}

            <button
              className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
