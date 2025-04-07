import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import img from "../../../assets/sl3.png";
import img1 from "../../../assets/sl6.webp";
import img2 from "../../../assets/sl7.png";
import { useNavigate } from "react-router-dom";

const tabs = [
  { name: "Blog", category: "blog" },
  { name: "Whitepapers", category: "whitepapers" },
  { name: "Webinars", category: "webinars" },
  { name: "Downloadables", category: "downloadables" },
  // { name: "Guides", category: "Guides" },
];

const categorizePosts = (posts) => {
  const postsPerCategory = Math.ceil(posts.length / tabs.length);
  return tabs.reduce((acc, tab, index) => {
    const start = index * postsPerCategory;
    const end = start + postsPerCategory;
    acc[tab.category] = posts.slice(start, end);
    return acc;
  }, {});
};

export default function ExactUILayout() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://salesdriver.io/wp-json/wp/v2/posts?_embed"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();

        const postsWithMedia = data.map((post) => {
          const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
          const imageSize =
            featuredMedia?.media_details?.sizes?.medium?.source_url ||
            featuredMedia?.media_details?.sizes?.large?.source_url ||
            featuredMedia?.source_url;

          return {
            ...post,
            featuredImage: imageSize || null,
            featuredImageAlt: featuredMedia?.alt_text || post.title.rendered,
          };
        });

        setPosts(categorizePosts(postsWithMedia));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
    setIsAnimationActive(true);
  };

  const handleReadMore = (url) => {
    window.open(url, "_blank");
  };

  const getVisibleCards = () => {
    const categoryPosts = posts[activeTab.category] || [];
    const startIndex = currentIndex * 3;
    const endIndex = startIndex + 3;
    return categoryPosts.slice(startIndex, endIndex);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const decodeHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const truncateContent = (content) => {
    const decodedText = decodeHTML(content.replace(/<[^>]*>/g, ""));
    const lines = decodedText.split("\n").filter((line) => line.trim() !== "");
    return lines.slice(0, 1).join("\n") + "...";
  };

  useEffect(() => {
    if (isAnimationActive) {
      setTimeout(() => {
        setIsAnimationActive(false);
      }, 700);
    }
  }, [currentIndex, isAnimationActive]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#ECF7FD]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="sm:px-8 px-4 py-14 bg-gray-50">
      <div className="text-center mb-10">
        <p className="inline-block bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
          insights and news{" "}
        </p>
        <h1 className="md:text-5xl text-3xl font-bold text-[#005895] mt-2">
          Stay Ahead in Sales
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Get practical insights, proven strategies, and expert guidance to
          sharpen your sales process.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="flex bg-white border scrollbar-hide border-gray-300 rounded-full p-1 shadow-md overflow-auto whitespace-nowrap max-w-full sm:max-w-[90%]">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 ${
                activeTab.name === tab.name
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {getVisibleCards().map((post) => (
          <div
            key={post.id}
            className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
              isAnimationActive ? "animate-slideIn" : ""
            }`}
          >
            <img
              src={post.featuredImage || [img, img1, img2][post.id % 3]}
              alt={post.featuredImageAlt}
              className="w-full h-52 lg:h-56 object-cover"
              onError={(e) => {
                e.target.src = [img, img1, img2][post.id % 3];
              }}
            />
            <div className="p-5">
              <p className="text-gray-500 text-sm">
                Author {post.author} • {formatDate(post.date)}
              </p>
              <h2 className="text-xl font-semibold text-gray-900 mt-2">
                {post.title.rendered}
              </h2>
              <p className="text-gray-700 mt-2 line-clamp-3">
                {truncateContent(post.content.rendered)}
              </p>
              <button
                onClick={() => navigate(`/post/${post.id}`)}
                className="mt-4 text-blueclr flex items-center font-semibold hover:text-blue-700 transition-all duration-300"
              >
                Read More <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => {
            const categoryPosts = posts[activeTab.category] || [];
            const maxIndex = Math.ceil(categoryPosts.length / 3) - 1;
            setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
            setIsAnimationActive(true);
          }}
          className="inline-flex items-center px-6 py-3 bg-blueclr text-white text-lg font-semibold rounded-xl shadow-md transition-all duration-300"
        >
          View More <ArrowRight className="ml-2" size={20} />
        </button>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slideIn {
          animation: slideInFromRight 0.7s forwards;
        }
      `}</style>
    </div>
  );
}
