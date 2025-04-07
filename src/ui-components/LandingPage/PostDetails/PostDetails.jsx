import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import fallbackImg from "../../../assets/sl4.webp";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [otherCategoriesPosts, setOtherCategoriesPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://salesdriver.io/wp-json/wp/v2/posts/${id}?_embed=true`
        );
        const data = await response.json();
        setPost(data);
        setCategories(data._embedded["wp:term"][0]);
        const categoryId = data.categories[0];

        const responseRelated = await fetch(
          `https://salesdriver.io/wp-json/wp/v2/posts?categories=${categoryId}&_embed=true`
        );
        const relatedData = await responseRelated.json();
        setRelatedPosts(relatedData.filter((item) => item.id !== data.id));

        const otherCategories = [categoryId + 1, categoryId + 2]; // Adjust categories as per need
        const otherPostsPromises = otherCategories.map((catId) =>
          fetch(`https://salesdriver.io/wp-json/wp/v2/posts?categories=${catId}&_embed=true`)
        );

        const otherPostsResponses = await Promise.all(otherPostsPromises);
        const otherPostsData = await Promise.all(otherPostsResponses.map((res) => res.json()));
        setOtherCategoriesPosts(otherPostsData.flat());

        // Fetch all categories
        const categoriesResponse = await fetch(
          "https://salesdriver.io/wp-json/wp/v2/categories"
        );
        const categoriesData = await categoriesResponse.json();
        setAllCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching post details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#ECF7FD]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (!post) {
    return <div className="text-center py-16 text-gray-500">Post not found.</div>;
  }

  return (
    <div className="px-6 py-16 bg-[#ECF7FD] min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
          <img
            src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || fallbackImg}
            alt={post.title.rendered}
            className="w-full h-64 object-cover rounded-2xl mb-6"
          />
          <div className="flex font-bold text-gray-600 text-sm mb-4">
            <span className="mr-1">{categories.length > 0 && categories[0].name} --</span>
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "2-digit", year: "numeric" })}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div className="text-gray-700 leading-relaxed space-y-6" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Categories</h2>
          <ol className="list-disc pl-9 mb-6 text-gray-700 border-dotted border-2 border-gray-400 p-4 rounded-xl">
            {allCategories.map((cat) => (
              <li key={cat.id} className="mb-2">{cat.name}</li>
            ))}
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Related Posts</h2>
          {relatedPosts.length > 0 ? (
            <div className="space-y-6">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="flex flex-col mb-6">
                  <img
                    src={relatedPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || fallbackImg}
                    alt={relatedPost.title.rendered}
                    className="w-full h-32 object-cover rounded-2xl mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }} />
                  <p className="text-sm text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: relatedPost.excerpt.rendered }} />
                  <Link
                    to={`/post/${relatedPost.id}`}
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No related posts found.</p>
          )}

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">More from Other Categories</h2>
          {otherCategoriesPosts.length > 0 ? (
            <div className="space-y-6">
              {otherCategoriesPosts.map((otherPost) => (
                <div key={otherPost.id} className="flex flex-col mb-6">
                  <img
                    src={otherPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || fallbackImg}
                    alt={otherPost.title.rendered}
                    className="w-full h-32 object-cover rounded-2xl mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: otherPost.title.rendered }} />
                  <p className="text-sm text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: otherPost.excerpt.rendered }} />
                  <Link
                    to={`/post/${otherPost.id}`}
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No posts found from other categories.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
