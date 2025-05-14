import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import fallbackImg from "../../../assets/sl4.webp";

const PostDetails = () => {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [primaryCategory, setPrimaryCategory] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [otherCategoriesPosts, setOtherCategoriesPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchPostDetails = async () => {
      setLoading(true);
      setError(null);
      setPost(null);
      setRelatedPosts([]);
      setOtherCategoriesPosts([]);

      try {
        const postResponse = await fetch(
          `https://sales-driver-f29297.ingress-earth.ewp.live/wp-json/wp/v2/posts?slug=${slug}&_embed=true`
        );
        if (!postResponse.ok) {
          throw new Error(`Failed to fetch post: ${postResponse.status}`);
        }
        const postDataArray = await postResponse.json();

        if (!postDataArray || postDataArray.length === 0) {
          throw new Error("Post not found with the given slug.");
        }
        const currentPost = postDataArray[0];
        setPost(currentPost);

        const categoriesEmbedded = currentPost._embedded?.["wp:term"]?.[0];
        if (categoriesEmbedded && categoriesEmbedded.length > 0) {
          setPrimaryCategory(categoriesEmbedded[0]);
          const primaryCategoryId = categoriesEmbedded[0].id;

          if (primaryCategoryId) {
            const relatedResponse = await fetch(
              `https://sales-driver-f29297.ingress-earth.ewp.live/wp-json/wp/v2/posts?categories=${primaryCategoryId}&per_page=3&_embed=true&exclude=${currentPost.id}`
            );
            if (relatedResponse.ok) {
              const relatedData = await relatedResponse.json();
              setRelatedPosts(relatedData.filter(item => item.slug));
            } else {
              console.warn("Could not fetch related posts.");
            }
          }
        } else {
            console.warn("Post has no categories assigned or _embedded terms are missing.");
        }

        const otherPostsResponse = await fetch(
          `https://sales-driver-f29297.ingress-earth.ewp.live/wp-json/wp/v2/posts?per_page=3&_embed=true&exclude=${currentPost.id}${primaryCategory ? `&categories_exclude=${primaryCategory.id}` : ''}`
        );
        if (otherPostsResponse.ok) {
          const otherData = await otherPostsResponse.json();
          setOtherCategoriesPosts(otherData.filter(item => item.slug));
        } else {
          console.warn("Could not fetch other category posts.");
        }

        // const allCategoriesResponse = await fetch(
        //   "https://sales-driver-f29297.ingress-earth.ewp.live/wp-json/wp/v2/categories"
        // );
        // if (allCategoriesResponse.ok) {
        //   const categoriesData = await allCategoriesResponse.json();
        //   setAllCategories(categoriesData);
        // }

      } catch (err) {
        console.error("Error fetching post details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPostDetails();
    }
  }, [slug]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
  };

  const getFeaturedImageUrl = (item, defaultImg = fallbackImg) => {
    return item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || defaultImg;
  };

  const decodeHtml = (html) => {
    if (typeof window === 'undefined') return html; // Basic SSR guard
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#ECF7FD]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 text-gray-600 bg-[#ECF7FD] min-h-screen">
        <h2 className="text-2xl font-semibold text-red-500">Error loading post</h2>
        <p>{error}</p>
        <Link to="/blog" className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Back to Blog
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-16 text-gray-500 bg-[#ECF7FD] min-h-screen">
        Post not found or still loading.
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 py-16 pt-24 bg-[#ECF7FD] min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-200">
          {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
            <img
              src={getFeaturedImageUrl(post)}
              alt={decodeHtml(post.title.rendered)}
              className="w-full h-auto max-h-[450px] object-cover rounded-2xl mb-6"
              onError={(e) => e.target.src = fallbackImg}
            />
          )}
          <div className="flex items-center text-gray-600 text-sm mb-4">
            {primaryCategory && (
              <Link 
                to={`/category/${primaryCategory.slug}`}
                className="font-semibold text-blue-600 hover:text-blue-800 uppercase tracking-wider"
              >
                {decodeHtml(primaryCategory.name)}
              </Link>
            )}
            {primaryCategory && <span className="mx-2 text-gray-400">•</span>}
            <span className="font-medium">{formatDate(post.date)}</span>
          </div>
          <h1 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight" 
            dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
          />
          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6" 
            dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
          />
        </article>

        <aside className="lg:col-span-1 space-y-8">
          {relatedPosts.length > 0 && (
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
              <div className="space-y-6">
                {relatedPosts.map((relatedItem) => (
                  <div key={relatedItem.id} className="flex flex-col group">
                    <Link to={`/post/${relatedItem.slug}`} className="block mb-3">
                      <img
                        src={getFeaturedImageUrl(relatedItem)}
                        alt={decodeHtml(relatedItem.title.rendered)}
                        className="w-full h-40 object-cover rounded-xl transition-opacity duration-300 group-hover:opacity-80"
                        onError={(e) => e.target.src = fallbackImg}
                      />
                    </Link>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      <Link to={`/post/${relatedItem.slug}`} dangerouslySetInnerHTML={{ __html: relatedItem.title.rendered }} />
                    </h3>
                    <div 
                      className="text-sm text-gray-600 line-clamp-2 mb-2" 
                      dangerouslySetInnerHTML={{ __html: relatedItem.excerpt.rendered }} 
                    />
                    <Link
                      to={`/post/${relatedItem.slug}`}
                      className="text-sm text-blue-500 hover:text-blue-700 font-semibold self-start"
                    >
                      Read More →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {otherCategoriesPosts.length > 0 && (
             <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">More To Explore</h2>
              <div className="space-y-6">
                {otherCategoriesPosts.map((otherItem) => (
                  <div key={otherItem.id} className="flex flex-col group">
                     <Link to={`/post/${otherItem.slug}`} className="block mb-3">
                      <img
                        src={getFeaturedImageUrl(otherItem)}
                        alt={decodeHtml(otherItem.title.rendered)}
                        className="w-full h-40 object-cover rounded-xl transition-opacity duration-300 group-hover:opacity-80"
                        onError={(e) => e.target.src = fallbackImg}
                      />
                    </Link>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      <Link to={`/post/${otherItem.slug}`} dangerouslySetInnerHTML={{ __html: otherItem.title.rendered }} />
                    </h3>
                    <div 
                        className="text-sm text-gray-600 line-clamp-2 mb-2" 
                        dangerouslySetInnerHTML={{ __html: otherItem.excerpt.rendered }} 
                    />
                    <Link
                      to={`/post/${otherItem.slug}`}
                      className="text-sm text-blue-500 hover:text-blue-700 font-semibold self-start"
                    >
                      Read More →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default PostDetails;