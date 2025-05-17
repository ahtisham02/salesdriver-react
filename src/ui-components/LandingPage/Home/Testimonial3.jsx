import React, { useEffect, useRef, useState } from "react";

const originalTabsFromUserCode = [
  { name: "MARKETING", headline: "Scalable Lead Generation, On-Demand" },
  { name: "SAAS AND TECH", headline: "Automate Growth with Smarter Outreach" },
  { name: "CONSULTING", headline: "Close More High-Value Clients" },
  { name: "B2B AGENCIES", headline: "More Clients, Less Prospecting" },
  { name: "REAL ESTATE", headline: "More Investors & Tenants, Greater Conversions" },
  { name: "HEALTHCARE", headline: "Build Trust, Grow Patient & Provider Networks" },
  { name: "INDUSTRIAL", headline: "Manage Complex Sales Cycles with Precision" },
];

const industryData = originalTabsFromUserCode.map(tab => {
  let superTitleText = "";
  let titleText = "";

  switch (tab.name) {
    case "MARKETING":
      superTitleText = "MARKETING & ADVERTISING AGENCIES";
      titleText = "Marketing";
      break;
    case "SAAS AND TECH":
      superTitleText = "SAAS & TECHNOLOGY";
      titleText = "SaaS & Technology";
      break;
    case "CONSULTING":
      superTitleText = "BUSINESS CONSULTING & PROFESSIONAL SERVICES";
      titleText = "Consulting";
      break;
    case "B2B AGENCIES":
      superTitleText = "B2B AGENCIES";
      titleText = "B2B Agencies";
      break;
    case "REAL ESTATE":
      superTitleText = "REAL ESTATE DEVELOPMENT & INVESTMENT";
      titleText = "Real Estate";
      break;
    case "HEALTHCARE":
      superTitleText = "HEALTHCARE & LIFE SCIENCES";
      titleText = "Healthcare";
      break;
    case "INDUSTRIAL":
      superTitleText = "INDUSTRIAL & MANUFACTURING";
      titleText = "Industrial";
      break;
    default:
      superTitleText = tab.name.toUpperCase().replace(" AND ", " & ");
      titleText = tab.name
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      break;
  }

  return {
    id: tab.name,
    superTitle: superTitleText,
    title: titleText,
    subTitle: tab.headline,
  };
});

const itemsToRender = [...industryData, ...industryData];

export default function ExactUILayout() {
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  const DRAG_SPEED_MULTIPLIER = 1.2;
  const AUTOSCROLL_SPEED = 1; // Increased from 0.5

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;

    const scrollContent = () => {
      if (container && !isHovering && !isDragging) {
        if (container.scrollWidth > container.clientWidth) {
          container.scrollLeft += AUTOSCROLL_SPEED;
          if (container.scrollWidth > 0 && container.scrollLeft >= (container.scrollWidth / 2)) {
            container.scrollLeft = 0;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scrollContent);
    };

    animationFrameId = requestAnimationFrame(scrollContent);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering, isDragging]);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeftStart(container.scrollLeft);
    e.preventDefault();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const currentX = e.pageX;
    const walk = (currentX - startX) * DRAG_SPEED_MULTIPLIER;
    container.scrollLeft = scrollLeftStart - walk;
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div className="bg-white mx-auto py-12 md:py-16 text-center">
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .select-none {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        `}
      </style>
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="inline-block uppercase bg-[#E0F2FE] text-[#0284C7] text-xs font-semibold px-4 py-1.5 border border-[#A5D8F8] rounded-full mb-4">
          15+ INDUSTRIES SERVED WORLDWIDE
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#005895] mt-2 mb-8 md:mb-12">
          For Industries
        </h2>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-4 space-x-4 md:space-x-6 hide-scrollbar select-none"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {itemsToRender.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[290px] sm:w-[330px] md:w-[370px] bg-[#F0F9FF] p-6 rounded-xl shadow-sm text-left transition-transform duration-300 hover:scale-105"
            >
              <p className="text-[10px] font-semibold text-[#0EA5E9] uppercase tracking-wider mb-1.5">
                {item.superTitle}
              </p>
              <h3 className="text-2xl sm:text-[28px] font-bold text-[#005895] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.subTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}