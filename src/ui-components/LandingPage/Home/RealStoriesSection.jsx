import React from 'react';
import bgImg from '../../../assets/new_assets/gb.png';

const RealStoriesSection = () => {
  const reviews = [
    {
      id: 1,
      stars: 5,
      quote: "SalesDriver cut our deal cycle in half. We finally know what's actually in the pipeline.",
      name: "Sarah Chen",
      role: "VP Sales, TechCorp",
    },
    {
      id: 2,
      stars: 5,
      quote: "The community alone is worth it. Real conversations with people who get what we're doing.",
      name: "Marcus Rodriguez",
      role: "Sales Director, Growth Inc",
    },
    {
      id: 3,
      stars: 5,
      quote: "Eight tools that actually work together. No more switching between platforms.",
      name: "Jennifer Walsh",
      role: "Founder, Sales Ventures",
    },
  ];

  return (
    <section
      className="relative py-20 md:py-32 px-4 md:px-8 lg:px-16"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay to ensure readability and match theme */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      
      {/* Decorative sparkles - positioned approximately as in image */}
      <div className="absolute top-12 left-1/4 text-blue-200 text-4xl opacity-60">✨</div>
      <div className="absolute top-24 right-1/3 text-blue-200 text-2xl opacity-60">✨</div>
      <div className="absolute bottom-10 left-10 text-blue-200 text-6xl opacity-40">✨</div>
      <div className="absolute top-1/2 right-4 text-blue-200 text-5xl opacity-40">✨</div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#005a8c] mb-3">
            Real stories
          </h2>
          <p className="text-gray-600 text-lg">
            From the people using it
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#0a4a5c] text-lg mb-8 leading-relaxed">
                "{review.quote}"
              </p>

              {/* Author Info */}
              <div>
                <h4 className="font-bold text-[#005a8c] text-base mb-1">
                  {review.name}
                </h4>
                <p className="text-[#0a4a5c]/80 text-sm">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealStoriesSection;
