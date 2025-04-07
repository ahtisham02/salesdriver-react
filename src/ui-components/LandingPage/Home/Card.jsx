import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import fallbackImg from "../../../assets/sl4.webp";
import { useNavigate } from "react-router-dom";

const ExactUILayout = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://salesdriver.io/wp-json/wp/v2/categories"
        );
        const data = await response.json();

        const sortedCategories = data.sort((a, b) =>
          a.name === "Data Management"
            ? -1
            : b.name === "Data Management"
            ? 1
            : 0
        );

        setCategories(sortedCategories);

        const defaultCategory =
          sortedCategories.find((cat) => cat.name === "Data Management") ||
          sortedCategories[0];
        if (defaultCategory) {
          setActiveCategory(defaultCategory.id);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!activeCategory) return;
    setLoadingPosts(true);

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://salesdriver.io/wp-json/wp/v2/posts?categories=${activeCategory}&_embed=true`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoadingPosts(false);
      }
    };

    fetchPosts();
  }, [activeCategory]);

  if (loadingCategories) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#ECF7FD]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="px-6 relative py-16 bg-[#ECF7FD]">
      <div className="text-center mb-12">
        <p className="inline-block bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
          case studies
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#005895] mt-3">
          Outstanding <br /> Experiences
        </h2>
      </div>

      <div className="mb-10 flex justify-center space-x-6 border-b border-gray-300 overflow-x-auto scrollbar-hide">
        {categories.map(({ id, name }) => (
          <button
            key={id}
            onClick={() => setActiveCategory(id)}
            className={`pb-3 text-lg font-medium transition-all duration-300 ${
              activeCategory === id
                ? "text-blueclr font-bold border-b-2 border-blueclr"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {loadingPosts ? (
        <div className="text-center py-16">Loading Posts...</div>
      ) : posts.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          No posts found for this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200"
            >
              <img
                src={
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  fallbackImg
                }
                alt={post.title.rendered}
                className="w-full h-44 object-cover rounded-2xl mb-4"
              />

              <h3
                className="text-xl font-semibold text-gray-900 mb-3"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              <p
                className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2"
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered,
                }}
              />

              <button
                onClick={() => navigate(`/post/${post.id}`)}
                className="mt-3 text-blueclr flex items-center font-semibold hover:text-blue-700 transition-all duration-300"
              >
                Read More <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ExactUILayout;
