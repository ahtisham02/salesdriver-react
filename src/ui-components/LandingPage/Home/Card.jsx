import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import fallbackImg from "../../../assets/sl4.webp";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExactUILayout = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://sales-driver-f29297.ingress-earth.ewp.live/wp-json/wp/v2/categories"
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
          `https://sales-driver-f29297.ingress-earth.ewp.live//wp-json/wp/v2/posts?categories=${activeCategory}&_embed=true`
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
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="px-6 relative py-16 bg-white">
      <div className="text-center mb-12">
        <p className="inline-block hover:scale-[1.04] transition-all duration-300 hover:-translate-y-[2px] bg-[#ECF7FD] text-blueclr text-xs font-semibold px-4 py-1.5 border border-blueclr rounded-full">
          case studies
        </p>
        <h2 className="text-3xl hover:scale-[1.03] transition-all duration-300 md:text-5xl font-extrabold text-[#005895] mt-3">
          Outstanding <br /> Experiences
        </h2>
      </div>

      <div className="mb-6 pb-3">
        <div className="flex flex-wrap justify-center gap-y-2">
          {" "}
          {categories.map(({ id, name }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`px-4 py-2 text-base font-medium transition-all duration-300 border-b-2 ${
                activeCategory === id
                  ? "text-blueclr font-bold border-b-2 border-blueclr"
                  : "text-gray-500 border-gray-300 hover:border-gray-500"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {loadingPosts ? (
        <div className="text-center py-16">Loading Posts...</div>
      ) : posts.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          No posts found for this category.
        </div>
      ) : (
        <>
          <div className="relative">
            <Slider ref={setSliderRef} {...settings}>
              {posts.map((post) => (
                <div key={post.id} className="px-2 m-3 hover:scale-105 transition-transform duration-200">
                  <div className="bg-white rounded-3xl p-6 border border-gray-200 h-full">
                    <img
                      src={
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        fallbackImg
                      }
                      alt={post.title.rendered}
                      className="w-full h-44 object-cover rounded-2xl mb-4"
                    />

                    <h3
                      className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2"
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
                </div>
              ))}
            </Slider>
          </div>
        </>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        :global(.slick-dots) {
          bottom: -40px;
        }
        :global(.slick-dots li button:before) {
          color: #005895;
          font-size: 10px;
        }
        :global(.slick-dots li.slick-active button:before) {
          color: #005895;
        }
      `}</style>
    </div>
  );
};

export default ExactUILayout;
